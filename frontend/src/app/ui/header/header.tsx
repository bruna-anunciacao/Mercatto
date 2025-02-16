"use client";
// Components

// Images
import { Search, Person, ShoppingCart, Login, Logout } from "@mui/icons-material";
// Imports
import Image from "next/image";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Button, IconButton } from "@mui/material";
// Styles
import s from "./header.module.scss";

const CssTextField = styled(TextField)({
  '& label': {
    color: '#ff6b00',
  },
  '& label.Mui-focused': {
    color: '#ff6b00',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#ff6b00',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ff6b00',
    },
    '&:hover fieldset': {
      borderColor: '#ff6b00',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ff6b00',
    },
  },
});

export default function Header({ loggedIn }: { loggedIn: boolean }) {
  return (
    <main className={s.wrapperHeader}>
      <a href="/" className={s.logo}>
        <Image
          src="/mercatto-logo.png"
          alt="Mercatto Logo"
          width={150}
          height={150}
        />
      </a>
      <nav className={s.wrapperNavbar}>
        <ul>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Sobre nós</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="#">Ajuda/FAQ</a>
          </li>
        </ul>
      </nav>
      <div className={s.searchBar}>
        <CssTextField
          id="searchBar"
          label="Buscar produtos"
          variant="outlined"
          type="search"
        />
        <button type="button">
          <Search sx={{ color: "#fff" }} />
        </button>
      </div>
      <div className={s.wrapperButtons}>
        {loggedIn ? (
          <>
            <Button startIcon={<Person />} className={s.profileButton}>Perfil</Button>
            <IconButton className={s.cartIcon} size="large"><ShoppingCart fontSize="large"/></IconButton>
            <IconButton className={s.logoutIcon} size="large"><Logout fontSize="large"/></IconButton>
          </>
        ) : (
          <>
            <Button startIcon={<Person />} className={s.registerButton}>Criar Conta</Button>
            <Button startIcon={<Login />} className={s.loginButton}>Login</Button>
          </>
        )}
      </div>
    </main>
  );
}
