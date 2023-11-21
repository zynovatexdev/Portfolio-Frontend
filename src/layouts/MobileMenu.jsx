import { Modal } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  CloseBtn,
  MenuContainer2,
  CloseBtnCon,
  MenuRight,
  ListName,
  MenueListM,
  DropItem,
  Menuewrap,
  StyledLinkM,
  Line,
  DropMenuCon,
  DropMenu,
  DropLine,
  DropIcon,
  LogoImageMob,
  ListMob,
  ConBt,
} from "../styles/layout/header";
import Logo from "../image/logo.png";
import ContactBt from "../../src/components/common/Button";

const MobileMenu = ({ open, handleClose }) => {
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  const handleServicesMenuToggle = () => {
    setServicesMenuOpen(!servicesMenuOpen);
  };
  console.log("open");
  return (
    <Modal open={open} onClose={handleClose}>
      <MenuContainer2>
        <MenuRight>
          <Menuewrap>
            <CloseBtnCon>
              <StyledLinkM to="/">
                <LogoImageMob src={Logo} alt="logo" />
              </StyledLinkM>
              <CloseBtn onClick={handleClose} fontSize="large" />
            </CloseBtnCon>
            <ListMob>
              <MenueListM>
                <StyledLinkM to="/" onClick={handleClose}>
                  Home
                </StyledLinkM>
              </MenueListM>
              <Line />
              <MenueListM>
                <StyledLinkM to="/about" onClick={handleClose}>
                  About ZYNOVATEX
                </StyledLinkM>
              </MenueListM>
              <Line />
              <MenueListM>
                <StyledLinkM to="/projects" onClick={handleClose}>
                  Projects
                </StyledLinkM>
              </MenueListM>
              <Line />

              <DropMenu>
                <MenueListM onClick={handleServicesMenuToggle}>
                  <ListName>Our Services</ListName>
                  <DropIcon>
                    <KeyboardArrowDownIcon />
                  </DropIcon>
                </MenueListM>
                {servicesMenuOpen && (
                  <DropMenuCon>
                    <StyledLinkM to="/services" onClick={handleClose}>
                      <DropItem>Web development </DropItem>
                    </StyledLinkM>
                    <DropLine />
                    <StyledLinkM to="/services" onClick={handleClose}>
                      <DropItem>Software Development</DropItem>
                    </StyledLinkM>
                    <DropLine />
                    <StyledLinkM to="/services" onClick={handleClose}>
                      <DropItem>UI/UX Designing</DropItem>
                    </StyledLinkM>
                    <DropLine />
                    <StyledLinkM to="/services" onClick={handleClose}>
                      <DropItem>UI/UX Designing</DropItem>
                    </StyledLinkM>
                    <DropLine />
                  </DropMenuCon>
                )}
              </DropMenu>
              <Line />
              <MenueListM>
                <StyledLinkM to="/contact" onClick={handleClose}>
                  Contact Us
                </StyledLinkM>
              </MenueListM>
              <Line />
              <MenueListM>
                <StyledLinkM to="/careers" onClick={handleClose}>
                  Careers
                </StyledLinkM>
              </MenueListM>
              <Line />
              <MenueListM>
                <StyledLinkM to="/blog" onClick={handleClose}>
                  Blog
                </StyledLinkM>
              </MenueListM>
              <Line />
            </ListMob>
            <ConBt>
              <StyledLinkM to="/contact" onClick={handleClose}>
                <ContactBt label="Contact Us" />
              </StyledLinkM>
            </ConBt>
          </Menuewrap>
        </MenuRight>
      </MenuContainer2>
    </Modal>
  );
};

export default MobileMenu;
