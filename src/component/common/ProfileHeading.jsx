import { KeyboardArrowDown, Logout, Settings } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  emptyCart,
  setIsLoggedIn,
  setLoggedInUserData,
} from "components/redux/appStore";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfileHeading = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const { loggedInUserData } = useSelector((state) => state.app);
  const [openConfirm, setOpenConfirm] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    dispatch(setIsLoggedIn(false));
    dispatch(setLoggedInUserData(null));
    dispatch(emptyCart());
  };

  return (
    <>
      <Avatar>{loggedInUserData?.username?.[0]}</Avatar>
      <Box>
        <Typography variant="h6" color="black">
          Hi, {loggedInUserData?.username}
        </Typography>
      </Box>

      <>
        <Box
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {/* Dashboard */}
          <IconButton>
            <KeyboardArrowDown />
          </IconButton>
        </Box>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem sx={{ fontSize: "15px" }} onClick={handleClose}>
            {loggedInUserData?.username}
          </MenuItem>
          <MenuItem onClick={handleClose}>{loggedInUserData?.email}</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Sign Out
          </MenuItem>
        </Menu>
      </>
    </>
  );
};

export default ProfileHeading;
