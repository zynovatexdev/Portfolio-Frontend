import React from "react";
import {
  ExperienceCon,
  MobSw,
  Achive2,
  AchiveDtl2,
  EpxTopic,
  AchieveCon2,
  AchieveMainCon,
  AchieveCon,
  Achive,
  AchiveTopic,
  AchiveDtl,
  VerticalLine,
  HorizontalLine,
  Achive1,
} from "../../../styles/pages/Home";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Achieve = () => {
  return (
    <ExperienceCon>
      <EpxTopic>What We Achieve</EpxTopic>
      <AchieveMainCon>
        <AchieveCon>
          <Achive1>
            <AchiveTopic>75K+</AchiveTopic>
            <AchiveDtl>
              Project<br></br>Accomplished
            </AchiveDtl>
          </Achive1>
          <VerticalLine />
          <Achive>
            <div>
              <AchiveTopic>2500K+</AchiveTopic>
              <AchiveDtl>
                Professional<br></br>Members
              </AchiveDtl>
            </div>
          </Achive>
          <VerticalLine />
          <Achive>
            <div>
              <AchiveTopic>2500K+</AchiveTopic>
              <AchiveDtl>
                Client that<br></br>trusted Us
              </AchiveDtl>
            </div>
          </Achive>
        </AchieveCon>
        <HorizontalLine />
      </AchieveMainCon>
      <MobSw>
        <Swiper
          spaceBetween={50}
          navigation={true}
          pagination={true}
          mousewheel={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
          <AchieveCon2>
            <SwiperSlide>
              <Achive2>
                <AchiveDtl2>
                  <h1>75K+</h1>
                  Project<br></br>Accomplished
                </AchiveDtl2>
              </Achive2>
            </SwiperSlide>
            <SwiperSlide>
              <Achive2>
                <AchiveDtl2>
                  <h1>75K+</h1>
                  Project<br></br>Accomplished
                </AchiveDtl2>
              </Achive2>
            </SwiperSlide>
            <SwiperSlide>
              <Achive2>
                <AchiveDtl2>
                  <h1>75K+</h1>
                  Project<br></br>Accomplished
                </AchiveDtl2>
              </Achive2>
            </SwiperSlide>
          </AchieveCon2>
        </Swiper>
      </MobSw>
    </ExperienceCon>
  );
};

export default Achieve;
