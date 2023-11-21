import React from 'react'
import { ExperienceCon, MobSw, SwiperM, Achive2, AchiveDtl2, EpxTopic, AchieveCon2, EpxDtl, AchieveMainCon, AchieveCon, Achive, AchiveTopic, AchiveDtl, VerticalLine, HorizontalLine, Achive1 } from "../../../styles/pages/Home";
import Sweper from './Sweper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';


const Experience = () => {
    return (
        <ExperienceCon>
            <EpxTopic>
                We are in business from last 6 years.
            </EpxTopic>
            <EpxDtl>
                Zynovatex, established in 2012, has been delivering
                exceptional services for 6 years. With our commitment to excellence,
                we have successfully served a wide range of customers, including
                individuals, businesses, and organizations.
            </EpxDtl>

            <EpxTopic>
                What We Achieve
            </EpxTopic>
            <AchieveMainCon>
                <AchieveCon>
                    <Achive1>
                        <AchiveTopic>
                            75K+
                        </AchiveTopic>
                        <AchiveDtl>
                            Project<br></br>Accomplished
                        </AchiveDtl>
                    </Achive1>
                    <VerticalLine />
                    <Achive>

                        <div>
                            <AchiveTopic>
                                2500K+
                            </AchiveTopic>
                            <AchiveDtl>
                                Professional<br></br>Members
                            </AchiveDtl>
                        </div>

                    </Achive>
                    <VerticalLine />
                    <Achive>

                        <div>
                            <AchiveTopic>
                                2500K+
                            </AchiveTopic>
                            <AchiveDtl>
                                Client that<br></br>trusted Us
                            </AchiveDtl>
                        </div>
                    </Achive>
                </AchieveCon>
                <HorizontalLine />
            </AchieveMainCon>
            <MobSw>
                <SwiperM
                    spaceBetween={50}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[Autoplay, Pagination]}

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
                                    <h1>2500+</h1>
                                    Professional<br></br>Members
                                </AchiveDtl2>
                            </Achive2>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Achive2>
                                <AchiveDtl2>
                                    <h1>2500+</h1>
                                    Client that<br></br>trusted Us
                                </AchiveDtl2>
                            </Achive2>
                        </SwiperSlide>
                    </AchieveCon2>
                </SwiperM>
            </MobSw>


            <EpxTopic>
                We have highly-tailored IT Solution
            </EpxTopic>
            <Sweper />

        </ExperienceCon>
    )
}

export default Experience