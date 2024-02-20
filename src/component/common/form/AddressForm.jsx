import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import { FullFlex } from "../FullFlex";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "components/utils/calculateTotal";
import theme from "components/styles/theme";
import VoucherProductItem from "../VoucherProductItem";
import { Close } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { emptyCart } from "components/redux/appStore";

const AddressForm = ({ handleClose }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cartProduct } = useSelector((state) => state.app);
  const total = calculateTotal(cartProduct);
  const handleProceed = () => {
    router.push("/");
    dispatch(emptyCart());
    handleClose();
  };
  return (
    <Box sx={{ maxHeight: "80vh" }}>
      <FullFlex mb={2}>
        <Typography
          variant="h5"
          fontWeight={500}
          sx={{ color: theme.palette.primary.main }}
        >
          Confirm To Checkout
        </Typography>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </FullFlex>
      {cartProduct.map((data, index) => (
        <VoucherProductItem key={index} data={data} />
      ))}

      <Divider />
      <FullFlex mt={1}>
        <Typography variant="body1" sx={{ color: "gray" }}>
          SubTotal
        </Typography>
        <Typography variant="body1" fontWeight={400}>
          {total}
        </Typography>
      </FullFlex>
      <FullFlex mt={1}>
        <Typography variant="body1" sx={{ color: "gray" }}>
          Delivery fee
        </Typography>
        <Typography variant="body1" fontWeight={400}>
          1000
        </Typography>
      </FullFlex>
      <FullFlex mt={1}>
        <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
          Total
        </Typography>
        <Typography variant="h6">{total + 1000}</Typography>
      </FullFlex>
      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{ my: 1.5 }}
        onClick={handleProceed}
      >
        Proceed
      </Button>
    </Box>
  );
};

export default AddressForm;
