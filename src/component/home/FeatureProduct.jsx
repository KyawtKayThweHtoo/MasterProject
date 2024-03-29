import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import React, { useState } from "react";
import CustomTabPanel from "../common/CustomTabPanel";
import { FullFlex } from "../common/FullFlex";
import { ProductCard } from "../common/ProductCard";
import { ProductData } from "components/utils/productData";

const FeatureProduct = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      //   "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <Box>
      <Typography variant="h5" textAlign={"center"} fontWeight={600} mb={3}>
        Feature Products
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        // aria-label="basic tabs example"
        centered
      >
        <Tab label={"Mobile"} {...a11yProps(0)} />
        <Tab label={"Laptop"} {...a11yProps(2)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Grid container>
          {ProductData.filter((iphone) => iphone.category == "phone").map(
            (data, index) => (
              <Grid item xs={4} key={index}>
                <ProductCard data={data} />
              </Grid>
            )
          )}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grid container>
          {ProductData.filter((iphone) => iphone.category == "computer").map(
            (data, index) => (
              <Grid item xs={4} key={index}>
                <ProductCard data={data} />
              </Grid>
            )
          )}
        </Grid>
      </CustomTabPanel>
    </Box>
  );
};

export default FeatureProduct;
