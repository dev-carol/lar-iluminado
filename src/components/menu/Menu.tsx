import LightButton from "../light/Light";
import { MenuContainer, MenuItem } from "./styles";

const Menu = () => {
    return (
      <MenuContainer>
         <LightButton />
        <MenuItem href="#">Sobre</MenuItem>
        <MenuItem href="#">Nossos Pets</MenuItem>
        <MenuItem href="#">Quero Ajudar</MenuItem>
        <MenuItem href="#">Contato</MenuItem>
      </MenuContainer>
    );
  };
  
  export default Menu;