import { FC, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
// import { IClient } from "../interfaces/User";

const Header: FC<{ name: string}> = (client) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Para gerar a letra aleatória do Avatar
  const randomLetter = () => {
    const possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return possibleLetters.charAt(
      Math.floor(Math.random() * possibleLetters.length)
    );
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <img src="/ultracar_header.png" alt="Logo da Empresa" height={40} />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, ml: 2 }}
        >
          Olá, {client.name}!
        </Typography>
        <div>
          <IconButton
            size="large"
            edge="end"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            sx={{ mr: 1 }}
          >
            <Avatar sx={{ bgcolor: deepPurple[500] }}>
              {randomLetter()}
            </Avatar>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={handleClose}>Sair</MenuItem>
          </Menu>
        </div>
        {/* <IconButton
          size="large"
          edge="end"
          aria-label="menu"
          sx={{ mr: 1 }}
        >
          <Icon path={mdiMenu} size={1} />
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
