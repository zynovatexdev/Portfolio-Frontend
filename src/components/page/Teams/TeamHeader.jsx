import React from "react";
import {
  TeamHeaderr,
  TeamHeaderDescription,
  TeamHeaderTitle,
} from "../../../styles/pages/Teams";

export const TeamHeader = () => {
  return (
    <div>
      <TeamHeaderr>
        <TeamHeaderTitle>Teams</TeamHeaderTitle>

        <TeamHeaderDescription>
          Discover our talented UI/UX team! Experience captivating designs and
          user-centric experiences that elevate businesses and delight users.
          Meet our skilled designers, explore our portfolio, and embark on a
          journey of digital innovation with us. Let's shape the future of user
          experiences together!
        </TeamHeaderDescription>
      </TeamHeaderr>
    </div>
  );
};
