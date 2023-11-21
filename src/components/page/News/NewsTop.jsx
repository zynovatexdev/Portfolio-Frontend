import React from "react";
import { PageTop, Info, PageTitle, PageDtl } from "../../../styles/pages/news";

const NewsTop = () => {
  return (
    <div>
      <PageTop>
        <Info>
          <PageTitle>News</PageTitle>
          <PageDtl>
            Explore our latest press releases and media coverage to stay updated
            with our company's achievements, innovations, and contribution
          </PageDtl>
        </Info>
      </PageTop>
    </div>
  );
};

export default NewsTop;
