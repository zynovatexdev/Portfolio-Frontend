import React from "react";
import {
  BelowHeader,
  ClientTestimonialContainer,
  ClientTestimonialCard,
  ClientTestimonialCardContainer,
  SwiperStyle,
} from "../../../styles/pages/Teams";
import { Rating } from "@mui/material";
import TeamSwiper from "./TeamSwiper";
import { testimonials } from "./TeamSampleData";

export const ClientTestimonials = () => {
  return (
    <div>
      <ClientTestimonialContainer>
        <BelowHeader color="light">Client Testimonials</BelowHeader>
        <ClientTestimonialCardContainer>
          <SwiperStyle dotColor="white">
            <TeamSwiper
              normalView={2}
              slides={testimonials.map((testimonial, index) => (
                <ClientTestimonialCard key={index}>
                  <div>
                    <img src={testimonial.image} alt={`Team member ${index}`} />
                    <div>
                      <h3>{testimonial.name}</h3>
                      <h4>{testimonial.role}</h4>
                    </div>
                    <Rating
                      name="read-only"
                      value={testimonial.rating}
                      readOnly
                    />
                  </div>
                  <h4>{testimonial.quote}</h4>
                  <h6>{testimonial.date}</h6>
                </ClientTestimonialCard>
              ))}
            />
          </SwiperStyle>
        </ClientTestimonialCardContainer>
      </ClientTestimonialContainer>
    </div>
  );
};
