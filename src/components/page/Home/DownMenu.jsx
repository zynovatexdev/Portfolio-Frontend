
import { DownMenuCon, TopShotLine, AnimatedNumSection, NumOneTopic, AnimatedShortLine } from "../../../styles/pages/Home";
import { SwiperMob, NumOneTopicM, MobDown, AchieveCon2 } from "../../../styles/pages/Home";
import React, { useEffect } from 'react';

import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';




const DownMenu = () => {
    useEffect(() => {
        const handleScroll = () => {
            const animatedSections = document.querySelectorAll('.animated-section');
            animatedSections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (sectionTop < windowHeight) {
                    section.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <DownMenuCon>

                <AnimatedNumSection className="animated-section">
                    <TopShotLine />
                    <AnimatedShortLine>
                        <h2>Research</h2>
                        <p>
                            we offer research services in which you can either do it on your own or get our assistance. Our clients
                            opinion is priority to us. Research by our team will be genuine and credible.
                        </p>
                    </AnimatedShortLine>
                    <NumOneTopic>01</NumOneTopic>
                </AnimatedNumSection>
                <AnimatedNumSection className="animated-section">
                    <TopShotLine />
                    <AnimatedShortLine>
                        <h2>Design</h2>
                        <p>
                            Our design team is equipped with all the technology and skills as well as ideas. But we request for your
                            approval on all our work, before we share it with the world.
                        </p>
                    </AnimatedShortLine>
                    <NumOneTopic>02</NumOneTopic>
                </AnimatedNumSection>
                <AnimatedNumSection className="animated-section">
                    <TopShotLine />
                    <AnimatedShortLine>
                        <h2>Launch</h2>
                        <p>
                            We will only publish customer approved and complete work, guaranteeing you all the web security and help
                            you require.
                        </p>
                    </AnimatedShortLine>
                    <NumOneTopic>03</NumOneTopic>
                </AnimatedNumSection>
            </DownMenuCon>
            <MobDown>
                <SwiperMob
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
                            <AnimatedShortLine>
                                <h2>Research</h2>
                                <p>
                                    we offer research services in which you can either do it on your own or
                                    get our assistance. Our clients opinion is priority to us. Research by our team
                                    will be genuine and credible.
                                </p>
                            </AnimatedShortLine>
                            <NumOneTopicM>01</NumOneTopicM>
                        </SwiperSlide>
                        <SwiperSlide>

                            <AnimatedShortLine>
                                <h2>Design</h2>
                                <p>
                                    Our design team is equipped with all the technology and skills as
                                    well as ideas. But we request for your approval on all our work, before
                                    we share it with the world.
                                </p>
                            </AnimatedShortLine>
                            <NumOneTopicM>02</NumOneTopicM>
                        </SwiperSlide>
                        <SwiperSlide>

                            <AnimatedShortLine>
                                <h2>Launch</h2>
                                <p>
                                    We will only publish customer approved and
                                    complete work, guaranteeing you all the web
                                    security and help you require.
                                </p>
                            </AnimatedShortLine>
                            <NumOneTopicM>02</NumOneTopicM>
                        </SwiperSlide>

                    </AchieveCon2>
                </SwiperMob>

            </MobDown>
        </>

    );
};

export default DownMenu;
