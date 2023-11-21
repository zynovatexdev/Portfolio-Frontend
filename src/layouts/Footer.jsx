import {
  MainCon,
  Dtl,
  MainConMob,
  ArrowRightAltIconButton,
  FandS,
  FristList,
  Facebook,
  StyledLink,
  SportsBasketball,
  Twitter,
  Instagram,
  LinkedIn,
  SocondList,
  MailText,
  ThardList,
  FourthList,
  Item,
  Mail,
  StyInput,
  Socia,
  SocialIcon,
  Question,
  Icon,
  Bot,
} from "../styles/layout/footer";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import Help from "../../src/image/Help.png";

const Footer = () => {
  return (
    <>
      <MainCon>
        <Dtl>
          <FandS>
            <FristList>
              <h2>Company</h2>
              <Item>
                <StyledLink to="/faqs">FAQs</StyledLink>
              </Item>
              <Item>
                <StyledLink to="/terms-conditions">
                  Term & Conditions
                </StyledLink>
              </Item>
              <Item>
                <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
              </Item>
              <Item>Help</Item>
            </FristList>
            <SocondList>
              <h2>Updates</h2>
              <Item>
                <StyledLink to="/careers">Careers</StyledLink>
              </Item>
              <Item>
                <StyledLink to="/news">News</StyledLink>
              </Item>
              <Item>
                <StyledLink to="/blog">Blog</StyledLink>
              </Item>
            </SocondList>
          </FandS>
          <ThardList>
            <h2>Contact Us</h2>
            <Item>
              <MailOutlineIcon fontSize="large" />
              <span>zynovatex@gmail.com</span>
            </Item>
            <Item>
              <LocalPhoneRoundedIcon fontSize="large" />
              <span>0760581244</span>
            </Item>
          </ThardList>
          <FourthList>
            <h2>Subscribe</h2>
            <Item>
              Sign Up for our newsletter to know more about latest vacancies and
              blog updates
            </Item>
            <Item>
              <Mail>Email</Mail>
            </Item>
            <MailText>
              <StyInput type="email" name="email" />
              <ArrowRightAltIconButton />
            </MailText>
            <Item>
              <StyledLink to="/customer-feedback">
                Customer Feedback{" "}
              </StyledLink>
            </Item>
          </FourthList>
        </Dtl>

        <Socia>
          <h2>Connect</h2>
          <Icon>
            <SocialIcon>
              <Facebook fontSize="large" />
              <Instagram fontSize="large" />
              <LinkedIn fontSize="large" />
              <Twitter fontSize="large" />
              <SportsBasketball fontSize="large" />
            </SocialIcon>
          </Icon>
        </Socia>
      </MainCon>
      <MainConMob>
        <Dtl>
          <FandS>
            <FristList>
              <h2>Company</h2>
              <Item>
                <StyledLink to="/faqs">FAQs</StyledLink>
              </Item>
              <Item>
                <StyledLink to="/terms-conditions">
                  Term & Conditions
                </StyledLink>
              </Item>
              <Item>
                <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
              </Item>
              <Item>Help</Item>
            </FristList>
            <SocondList>
              <h2>Updates</h2>
              <Item>
                <StyledLink to="/careers">Careers</StyledLink>
              </Item>
              <Item>
                <StyledLink to="/news">News</StyledLink>
              </Item>
              <Item>
                <StyledLink to="/blog">Blog</StyledLink>
              </Item>
            </SocondList>
          </FandS>
          <FourthList>
            <h2>Subscribe</h2>
            <Item>
              Sign Up for our newsletter to know more about latest vacancies and
              blog updates
            </Item>
            <Item>
              <Mail>Email</Mail>
            </Item>
            <MailText>
              <StyInput type="email" name="email" />
              <ArrowRightAltIconButton fontSize="large" />
            </MailText>
            <Item>
              <StyledLink to="/customer-feedback">
                Customer Feedback{" "}
              </StyledLink>
            </Item>
          </FourthList>
          <ThardList>
            <h2>Contact Us</h2>
            <Item>
              <MailOutlineIcon fontSize="large" />
              <span>zynovatex@gmail.com</span>
            </Item>
            <Item>
              <LocalPhoneRoundedIcon fontSize="large" />
              <span>0760581244</span>
            </Item>
          </ThardList>
        </Dtl>

        <Socia>
          <h2>Connect</h2>
          <Icon>
            <SocialIcon>
              <Facebook fontSize="large" />
              <Instagram fontSize="large" />
              <LinkedIn fontSize="large" />
              <Twitter fontSize="large" />
              <SportsBasketball fontSize="large" />
            </SocialIcon>
          </Icon>
        </Socia>
      </MainConMob>
    </>
  );
};

export default Footer;
