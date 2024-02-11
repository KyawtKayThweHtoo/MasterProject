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
import React, { useState } from "react";

const ProfileHeading = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openConfirm, setOpenConfirm] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Avatar>J</Avatar>
      <Box>
        <Typography variant="h6" color="black">
          Hi, Jo March
        </Typography>
      </Box>

      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {/* Dashboard */}
          <IconButton>
            <KeyboardArrowDown />
          </IconButton>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem sx={{ fontSize: "15px" }} onClick={handleClose}>
            Jo March
          </MenuItem>
          <MenuItem onClick={handleClose}>jomarch@gmail.com</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Sign Out
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default ProfileHeading;
