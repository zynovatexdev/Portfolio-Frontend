import { useState } from "react";
import Logo from "../image/logo.png";
import Menue from "./Menue";
import DehazeIcon from "@mui/icons-material/Dehaze";
import {
  HaderMainCon,
  LogoImage,
  MenuContainer,
  MobileMenuButton,
  StyledLinkM,
} from "../styles/layout/header";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <HaderMainCon>
      <StyledLinkM to="/">
        <LogoImage src={Logo} alt="logo" />
      </StyledLinkM>
      <MobileMenuButton onClick={handleOpen}>
        <DehazeIcon fontSize='large' />
      </MobileMenuButton>
      <MobileMenu open={open} handleClose={handleClose} />
      <MenuContainer>
        <Menue />
      </MenuContainer>
    </HaderMainCon>
  );
};

export default Header;
