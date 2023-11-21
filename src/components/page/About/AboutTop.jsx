import React from "react";
import { PageTop, Info, PageTitle, PageDtl } from "../../../styles/pages/about";

const AboutTop = () => {
  return (
    <PageTop>
      <Info>
        <PageTitle>About ZYNOVATEX</PageTitle>
        <PageDtl>
          Founded in 2005, ZYNOVATEX was initially an open source middleware
          company. Our business strategy has progressed beyond just building
          great open source software. Today, we offer a suite of application
          development and IAM technologies, available as open source or SaaS,
          enabling enterprises to create digital experiences quickly, easily,
          and securely. Our technology enables thousands of enterprises,
          including hundreds of the world’s largest corporations, top
          universities, and governments, to drive their digital transformation
          evolution rapidly, efficiently, and more cost effectively.
        </PageDtl>
      </Info>
    </PageTop>
  );
};

export default AboutTop;
