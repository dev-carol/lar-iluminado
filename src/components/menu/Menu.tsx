import { useState } from "react";
import { MenuButton, MenuContainer, MenuItem } from "./styles";
import {
  IconMenuDeep
} from "@tabler/icons-react";
const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <MenuButton onClick={toggleMenu}><IconMenuDeep  size={30}/></MenuButton>
      <MenuContainer open={open}>
        <MenuItem href="#about-section" onClick={toggleMenu}>
          Sobre
        </MenuItem>
        <MenuItem href="#pets-section" onClick={toggleMenu}>
          Nossos Pets
        </MenuItem>
        <MenuItem href="#help-section" onClick={toggleMenu}>
          Quero Ajudar
        </MenuItem>
        <MenuItem href="#contact-section" onClick={toggleMenu}>
          Contato
        </MenuItem>
      </MenuContainer>
    </>
  );
};

export default Menu;