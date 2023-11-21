import React from "react";
import {
  OfficeContainer,
  HorizontalLine,
  OfficeText,
  OfficeDescription,
  BlueDiv,
  MapIframe,
  ContentWrapper,
} from "../../../styles/pages/Contact";

const ContactTop = () => {
  return (
    <>
      <OfficeContainer>
        <OfficeText>Our Office</OfficeText>
        <OfficeDescription>We are here</OfficeDescription>
      </OfficeContainer>
      <BlueDiv>
        <MapIframe
          title="Moratuwa Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11737.889138083436!2d79.8862902880493!3d6.789179330366131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2450af2b3b63d%3A0x4bd5b87e09abb3c7!2sMoratuwa!5e0!3m2!1sen!2slk!4v1691243457967!5m2!1sen!2slk"
          allowFullScreen
          loading="lazy"
        />
        <ContentWrapper>
          <p>Address : Sri Lanka</p>
          <p>Address Sri Lanka Sri Lanka Sri Lanka</p>
          <p>Address Sri Lanka Sri Lanka</p>
        </ContentWrapper>
      </BlueDiv>
    </>
  );
};

export default ContactTop;
