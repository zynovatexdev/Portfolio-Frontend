import React from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { WhyUsInfo, FeedTopMob, FeedTop, FeedStyledSwiperMob, FeedDate, FeedDtl, FeedCusDtl, FeedCusName, CusInfo, WhyUsTopic, WhyUsDtl, CenteredContent, FeedContent, FeedBackCon, FeedBackInfo, FeedStyledSwiper } from "../../../styles/pages/Home";
import CustomerProfile from '../../../image/CustomerProfile.png';


const customer = [
  {
    key: 1,
    profile: { CustomerProfile },
    cusName: 'Name ksksdssd',
    cusDtl: 'who who mnbg',
    cusFeedBack: 'Working with [Your Company Name] was an exceptional experience! Their team of skilled developers and designers brought our vision to life with precision and creativity... ',
    date: 'Dec 15, 2022',
  },
  {
    key: 2,
    profile: { CustomerProfile },
    cusName: 'Name ksksdssd',
    cusDtl: 'who who mnbg',
    cusFeedBack: 'Working with [Your Company Name] was an exceptional experience! Their team of skilled developers and designers brought our vision to life with precision and creativity... ',
    date: 'Dec 15, 2022',
  },
  {
    key: 3,
    profile: { CustomerProfile },
    cusName: 'Name ksksdssd',
    cusDtl: 'who who mnbg',
    cusFeedBack: 'Working with [Your Company Name] was an exceptional experience! Their team of skilled developers and designers brought our vision to life with precision and creativity... ',
    date: 'Dec 15, 2022',
  },
  {
    key: 4,
    profile: { CustomerProfile },
    cusName: 'Name ksksdssd',
    cusDtl: 'who who mnbg',
    cusFeedBack: 'Working with [Your Company Name] was an exceptional experience! Their team of skilled developers and designers brought our vision to life with precision and creativity... ',
    date: 'Dec 15, 2022',
  },
];


const FeedBack = () => {
  return (
    <FeedBackCon>
      <FeedBackInfo>
        <WhyUsInfo>

          <WhyUsTopic>What our clients say</WhyUsTopic>
          <WhyUsDtl>
            We guarantee 100% customer satisfaction because we work
            smartly with our clients.We believe in collective exchange
            of ideas, in which you can request and decide with us,
            exactly what
            you want your website or app to look like and offer.
          </WhyUsDtl>
        </WhyUsInfo>
        <FeedTopMob>Client Testimonials</FeedTopMob>
      </FeedBackInfo>

      <FeedStyledSwiper
        slidesPerView={2}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {customer.map((customer) => (
          <SwiperSlide key={customer.key}>
            <CenteredContent>
              <FeedContent>
                <FeedTop>
                  <img src={customer.profile.CustomerProfile} alt="CustomerProfile" />
                  <CusInfo>
                    <FeedCusName>{customer.cusName}</FeedCusName>
                    <FeedCusDtl>{customer.cusDtl}</FeedCusDtl>
                  </CusInfo>
                </FeedTop>
                <FeedDtl>
                  {customer.cusFeedBack}<button>Seen More</button>
                </FeedDtl>
                <FeedDate>
                  {customer.date}
                </FeedDate>
              </FeedContent>
            </CenteredContent>
          </SwiperSlide>
        ))}
      </FeedStyledSwiper>
      <FeedStyledSwiperMob
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {customer.map((customer) => (
          <SwiperSlide key={customer.key}>
            <CenteredContent>
              <FeedContent>
                <FeedTop>
                  <img src={customer.profile.CustomerProfile} alt="CustomerProfile" />
                  <CusInfo>
                    <FeedCusName>{customer.cusName}</FeedCusName>
                    <FeedCusDtl>{customer.cusDtl}</FeedCusDtl>
                  </CusInfo>
                </FeedTop>
                <FeedDtl>
                  {customer.cusFeedBack}<button>Seen More</button>
                </FeedDtl>
                <FeedDate>
                  {customer.date}
                </FeedDate>
              </FeedContent>
            </CenteredContent>
          </SwiperSlide>
        ))}
      </FeedStyledSwiperMob>
    </FeedBackCon>
  )
}

export default FeedBack