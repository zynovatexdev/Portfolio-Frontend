import React from "react";
import {
  ReadMoreBelowText,
  ReadMoreTechnologyCard,
  ReadMoreTechnologyCardHeader,
  ReadMoreTechnologyCardImage,

} from "../../../styles/pages/Services";
import HtmlLogo from "../../../image/html.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export const ReadMoreTechnology = () => {
  return (
    <div>
      <ReadMoreBelowText>Technology we use</ReadMoreBelowText>
      <ReadMoreBelowText>
        <div>
          We provide custom software development services to businesses,
          creating tailored solutions to address specific needs. This includes
          developing web applications, mobile apps, enterprise software, or
          specialized software products using programming languages and
          frameworks.
        </div>
      </ReadMoreBelowText>

      <ReadMoreTechnologyCard>
      <Swiper
           speed={1000}
           slidesPerView={1}
           spaceBetween={100}
           autoplay={{
             delay: 4000, // Set the delay in milliseconds between slides
             disableOnInteraction: true, // Continue autoplay even when user interacts with the slider
           }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination,Autoplay]}

            className="mySwiper"
          >
        <SwiperSlide>
        <ReadMoreTechnologyCardHeader>Front End</ReadMoreTechnologyCardHeader>
        <ReadMoreTechnologyCardImage>
          <div>
          <img src = {HtmlLogo} />
          <p>HTML</p>
          </div>

          <div>
          <img src = {HtmlLogo} />
          <p>HTML</p>
          </div>

          <div>
          <img src = {HtmlLogo} />
          <p>HTML</p>
          </div>

          <div>
          <img src = {HtmlLogo} />
          <p>HTML</p>
          </div>

          <div>
          <img src = {HtmlLogo} />
          <p>HTML</p>
          </div>
          
        </ReadMoreTechnologyCardImage>
        </SwiperSlide>


        <SwiperSlide>
        <ReadMoreTechnologyCardHeader>Back End</ReadMoreTechnologyCardHeader>
        <ReadMoreTechnologyCardImage>
          <div>
          <img src = {HtmlLogo} />
          <p>HTML</p>
          </div>

          <div>
          <img src = {HtmlLogo} />
          <p>HTML</p>
          </div>

          <div>
          <img src = {HtmlLogo} />
          <p>HTML</p>
          </div>

          <div>
          <img src = {HtmlLogo} />
          <p>HTML</p>
          </div>

          <div>
          <img src = {HtmlLogo} />
          <p>HTML</p>
          </div>
          
        </ReadMoreTechnologyCardImage>
        </SwiperSlide>

        <SwiperSlide>
        <ReadMoreTechnologyCardHeader>DataBase</ReadMoreTechnologyCardHeader>
        <ReadMoreTechnologyCardImage>
          <div>
          <img src = {HtmlLogo} />
          <p>HTML</p>
          </div>

          <div>
          <img src = {HtmlLogo} />
          <p>HTML</p>
          </div>

          <div>
          <img src = {HtmlLogo} />
          <p>HTML</p>
          </div>

          <div>
          <img src = {HtmlLogo} />
          <p>HTML</p>
          </div>

          <div>
          <img src = {HtmlLogo} />
          <p>HTML</p>
          </div>
          
        </ReadMoreTechnologyCardImage>
        </SwiperSlide>
        </Swiper>
        
      </ReadMoreTechnologyCard>
    </div>
  );
};
