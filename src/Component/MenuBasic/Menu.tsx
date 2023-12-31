import * as React from "react";
import { Box, Menu, MenuItem, MenuProps } from "@mui/material";
import MyButton from "../MyButtons/MyButtons";

type MenuSupport = {
  title: string;
  icon: React.ReactNode;
  className: string;
};

type PropsMenu = {
  menuList: MenuSupport[];
} & Omit<MenuProps, "open">;

export default function MyBasicMenu(props: PropsMenu) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { menuList, children } = props;
  return (
    <>
      <MyButton
        sx={{
          color: "black",
          "&:hover": { background: "none" },
          display: "flex",
          flexDirection:"row",
          gap: "10px",
          fontSize: "13px",
          alignItems:"center",
          lineHeight:"29.5px",
          justifyContent:"center"
        }}
        id="basic-button"
        onClick={handleClick}
      >
        {children}
      </MyButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuList.map((menu) => {
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                padding: "0 16px",
                "&:hover": { backgroundColor: "#e5e5e5" },
              }}
            >
              <div className={menu.className}>{menu.icon}</div>
              <MenuItem
                sx={{ color: "black", "&:hover": { background: "none" } }}
                onClick={handleClose}
              >
                {menu.title}
              </MenuItem>
            </Box>
          );
        })}
      </Menu>
    </>
  );
}
