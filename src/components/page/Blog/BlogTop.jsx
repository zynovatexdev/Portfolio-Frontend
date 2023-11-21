import React from "react";
import {
  PageTop,
  TopText,
  TopTitle,
  PageDtl,
} from "../../../styles/pages/Blog";

const BlogTop = () => {
  return (
    <div>
      <PageTop>
        <TopText>
          <TopTitle>Innovative Solutions for Tomorrow's Challenges</TopTitle>
          <PageDtl>
            Explore cutting-edge software solutions and industry insights from
            our expert team. Stay ahead of the curve with our tech-centric blog,
            where we decode the latest trends, share expert tips, and showcase
            our innovative projects
          </PageDtl>
        </TopText>
      </PageTop>
    </div>
  );
};

export default BlogTop;
