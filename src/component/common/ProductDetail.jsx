import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { FullFlex } from "./FullFlex";
import { AddCircle, Circle, Close, RemoveCircle } from "@mui/icons-material";
import Image from "next/image";
import { ProductData } from "components/utils/productData";
import { useDispatch, useSelector } from "react-redux";
import { addToCartProduct } from "components/redux/appStore";
import { uuid } from "uuidv4";
import IModal from "./IModal";
import LoginCheckForm from "./form/LoginCheckForm";

const ProductDetail = ({ onClose, id }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.app);
  const [modal, setModal] = useState(false);
  const productDetail = ProductData?.find((data) => data?.id == id);
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(productDetail?.color[0]);
  const [storage, setStorage] = useState(productDetail?.storage[0]);

  const handleAddToCart = () => {
    if (isLoggedIn) {
      const data = {
        ...productDetail,
        qty: qty,
        color: color.name,
        storage: storage,
        cartId: uuid,
      };
      dispatch(addToCartProduct(data));
      onClose();
    } else {
      setModal(true);
    }
  };
  return (
    <Box
      sx={{
        py: 1,
        px: 4,
        width: 428,
      }}
    >
      <FullFlex>
        <Typography variant="h4">Product Detail</Typography>
        <IconButton onClick={() => onClose(false)}>
          <Close />
        </IconButton>
      </FullFlex>
      <Divider sx={{ my: 2 }} />
      <FullFlex justifyContent={"center"}>
        <Image
          src={productDetail?.image}
          alt="iphone"
          width={400}
          height={100}
          objectFit="cover"
        />
      </FullFlex>
      <FullFlex sx={{ my: 2 }} justifyContent={"center"}>
        <Typography variant="h5">{productDetail?.name}</Typography>
      </FullFlex>

      <Typography variant="h6" fontWeight={600} sx={{ flex: 1 }}>
        Price
      </Typography>
      <Typography sx={{ flex: 1 }}>{productDetail?.price}</Typography>

      <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
        Description
      </Typography>
      <Typography sx={{ flex: 1 }}>{productDetail?.description}</Typography>
      <FullFlex>
        <Box>
          <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
            Color
          </Typography>
          <FullFlex justifyContent={"flex-start"} gap={1} flex={1}>
            {productDetail?.color?.map((data, index) => (
              <IconButton key={index} onClick={() => setColor(data)}>
                <Box
                  key={index}
                  sx={{
                    border: color == data && "1.5px solid blue",
                    borderRadius: "50px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor:
                        data.name === "Natural"
                          ? "#BAB9B3"
                          : data.name == "White"
                          ? "wheat"
                          : data.name,
                      borderRadius: "50px",
                      height: 15,
                      width: 15,
                      m: 0.3,
                    }}
                  ></Box>
                </Box>
              </IconButton>
            ))}
          </FullFlex>
        </Box>
        {productDetail?.category == "computer" && (
          <Box>
            <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
              Ram
            </Typography>
            <FullFlex justifyContent={"flex-start"} gap={1} flex={1}>
              <Button variant="outlined">64 GB</Button>
              <Button variant="outlined">128 GB</Button>
            </FullFlex>
          </Box>
        )}
      </FullFlex>
      <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
        Storage
      </Typography>
      <FullFlex justifyContent={"flex-start"} gap={1} flex={1} mb={2}>
        {productDetail?.storage.map((data, index) => (
          <Button
            variant={storage == data ? "contained" : "outlined"}
            key={index}
            onClick={() => setStorage(data)}
          >
            {data}
          </Button>
        ))}
      </FullFlex>

      <FullFlex>
        <Box>
          <FullFlex justifyContent={"flex-start"}>
            <IconButton onClick={() => qty > 1 && setQty((prev) => prev - 1)}>
              <RemoveCircle />
            </IconButton>
            <Typography>{qty}</Typography>
            <IconButton onClick={() => setQty((prev) => prev + 1)}>
              <AddCircle />
            </IconButton>
          </FullFlex>
        </Box>
        <Button variant="contained" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </FullFlex>
      <IModal open={modal} handleClose={() => setModal(false)}>
        <LoginCheckForm handleClose={() => setModal(false)} />
      </IModal>
    </Box>
  );
};

export default ProductDetail;
