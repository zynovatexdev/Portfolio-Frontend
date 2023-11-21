import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Brain from "../../../image/Brain.png";
import Hands from "../../../image/Hands.png";
import Hart from "../../../image/Hart.png";
import {
  SwTopic,
  StyledSwiper,
  Description,
  StyledImage,
  Content,
  SwDtl,
} from "../../../styles/pages/Home";

const Sweper = () => {
    return (
        <div>
            <StyledSwiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, Pagination]}
            >
                <SwiperSlide>
                    <Content>
                        <StyledImage src={Brain} alt="Brain" />
                        <SwDtl>
                            <SwTopic>Education</SwTopic>
                            <Description>
                                Through our education IT services, schools can leverage integrated platforms,
                                personalized learning tools, and secure information systems, enabling seamless
                                collaboration, data-driven decision-making, and improved educational outcomes for
                                students
                            </Description>
                        </SwDtl>
                    </Content>
                </SwiperSlide>
                <SwiperSlide>
                    <Content>
                        <StyledImage src={Hands} alt="Hands" />
                        <SwDtl>
                            <SwTopic>Business</SwTopic>
                            <Description>
                                Through our education IT services, schools can leverage integrated platforms,
                                personalized learning tools, and secure information systems, enabling seamless
                                collaboration,data-driven decision-making, and improved educational outcomes for
                                students
                            </Description>
                        </SwDtl>
                    </Content>
                </SwiperSlide>
                <SwiperSlide>
                    <Content>
                        <StyledImage src={Hart} alt="Hart" />
                        <SwDtl>
                            <SwTopic>Health Care</SwTopic>
                            <Description>
                                Our healthcare IT services offer seamless integration of digital solutions
                                into medical facilities, ensuring efficient management of patient records,
                                secure data ransmission, and enhanced communication between healthcare professionals.
                            </Description>
                        </SwDtl>
                    </Content>
                </SwiperSlide>
            </StyledSwiper>
        </div>
    );
};

export default Sweper;
