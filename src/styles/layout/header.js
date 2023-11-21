import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

/*
############################################

        Header.jsx styled-components

############################################
*/

export const HaderMainCon = styled.header`
  height: 70px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 768px) {
    height: 70px;
  }
`;

export const LogoImage = styled.img`
  width: 220px;
  height: 64px;
  margin-left: 20%;
  align-items: center;

  @media (max-width: 768px) {
    width: 180px;
    height: 60px;
    margin-left: 10%;
  }
`;
export const LogoImageMob = styled.img`
  width: 220px;
  height: 64px;

  align-items: center;

  @media (max-width: 768px) {
    width: 250px;
    height: 70px;
  }
`;
export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 19px;
  font-weight: 400;
  font-family: PT serif;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const MenueList = styled.li`
  margin: 0 12px;
  cursor: pointer;
  list-style: none;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(20, 23, 69, 1);
`;
export const StyledLinkM = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
export const DropIcon = styled(KeyboardArrowDownIcon)`
  font-size: 40px !important;
  color: #fff;
`;
export const ListName = styled.div`
  padding-bottom: 10px;
`;

export const DropMenu = styled.div``;
export const DropMenuCon = styled.div`
  background-color: #d9d9d9;
  margin-left: 6%;
  margin-right: 6%;
  width: 80%;
  border-radius: 30px;
  padding-left: 50px;
`;
export const DropItem = styled.div`
  color: #000000;
  font-size: 20px;
  font-family: PT serif;
`;
export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-right: 30px;

  @media (max-width: 768px) {
    display: block;
    margin-top: 10px;
  }
`;
/* 
=========================================

    MobileMenu.jsx Styled-componant

=========================================
*/
export const MenuContainer2 = styled.div`
  display: flex;
  align-items: center;
  font-size: 19px;
  font-weight: 400;
  font-family: PT serif;
  height: auto;
  line-height: 50px;
  margin-left: 40px;
  padding-left: 0px;
`;
export const ListMob = styled.div`
  padding-left: 20px;
`;

export const MenuRight = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  border-radius: 40px 0 0 0;
  background-image: linear-gradient(
    to top,
    rgba(16, 16, 53, 1),
    rgba(38, 54, 136, 1)
  );
`;

export const CloseBtn = styled(CloseIcon)`
  color: black;
`;

export const Menuewrap = styled.div`
  width: 100%;
  height: auto;
  border-radius: 40px;
`;

export const MenueListM = styled(Link)`
  margin-top: 17px;
  font-size: 26px;
  font-weight: 700;
  display: flex;
  color: white;
  text-decoration: none;
  font-family: PT serif;
  justify-content: space-between;
`;

export const CloseBtnCon = styled.div`
  width: 100%;
  margin-left: 0px;
  height: 100px;
  padding-left: 0px;
  padding-right: 10px;
  margin-bottom: 40px;
  background-color: rgba(217, 217, 217, 1);
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  align-items: center;
  border-radius: 40px 0px 0px 0;
`;

export const Line = styled.div`
  border: none;
  height: 2px;
  background: linear-gradient(
    to right,
    rgba(64, 64, 64, 1),
    rgba(158, 174, 255, 1)
  );
  width: 100%;
`;
export const DropLine = styled.div`
  border: none;
  height: 2px;
  background: #b2b2b2;
  width: 100%;
`;
export const ConBt = styled.div`
  margin-left: 30%;
  margin-bottom: 20px;
`;
