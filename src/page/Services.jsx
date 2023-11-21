import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderService,
  HeaderText,
  HeaderDescription,
  ServiceContainer,
  ServiceCard,
  ServiceCardImage,
  ServiceCardImageContainer,
  ServiceCardHeader,
  ServiceCardDescription,
  ServiceCardButton,
} from "../styles/pages/Services";


const Services = () => {
  const navigate = useNavigate();

  const servicesData = [
    {
      header: "Web Development",
      description:
        "We provide web development services for your business needs. We provide a wide range of web development services, from simple websites to complex web applications. We also provide web maintenance services for your existing website.",
    },
    {
      header: "Software  Development",
      description:
        "We provide web development services for your business needs. We provide a wide range of web development services, from simple websites to complex web applications. We also provide web maintenance services for your existing website.",
    },
    {
      header: "UI/UX Designing",
      description:
        "We provide web development services for your business needs. We provide a wide range of web development services, from simple websites to complex web applications. We also provide web maintenance services for your existing website.",
    },
    {
      header: "Project Management",
      description:
        "We provide web development services for your business needs. We provide a wide range of web development services, from simple websites to complex web applications. We also provide web maintenance services for your existing website.",
    },
    {
      header: "HR Management",
      description:
        "We provide web development services for your business needs. We provide a wide range of web development services, from simple websites to complex web applications. We also provide web maintenance services for your existing website.",
    },
    {
      header: "E-Commerce Solution",
      description:
        "We provide web development services for your business needs. We provide a wide range of web development services, from simple websites to complex web applications. We also provide web maintenance services for your existing website.",
    },

    // Add more services here
  ];

  const [activeIndices, setActiveIndices] = useState([]);

  const handleCardClick = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(
        activeIndices.filter((activeIndex) => activeIndex !== index)
      );
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  const handleCombinedClick = (index) => {
    navigate(`/services/${servicesData[index].header}`);
    handleCardClick(index);
  };

  return (
    <div>
      <HeaderService>
        <HeaderText>Services</HeaderText>
        <HeaderDescription>
          Zynovatex has been in service for 6 years since 2012, and we have
          served many happy and satisfied customers throughout the years. In
          Zynovatex we provide several services{" "}
        </HeaderDescription>
      </HeaderService>

      <ServiceContainer>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            isActive={activeIndices.includes(index)}
            onClick={() => handleCardClick(index)}
          >
            <ServiceCardImage
             isActive={activeIndices.includes(index)}
            >
              <ServiceCardImageContainer />
            </ServiceCardImage>

            <ServiceCardHeader
              isActive={activeIndices.includes(index)}
            >
              {service.header}
            </ServiceCardHeader>
            <ServiceCardDescription
              isActive={activeIndices.includes(index)}
            >
              {service.description}
            </ServiceCardDescription>
            <ServiceCardButton
              onClick={() => handleCombinedClick(index)}
              isActive={activeIndices.includes(index)}
            >
              <p >
              READ MORE ---&gt;
              </p>
            </ServiceCardButton>
          </ServiceCard>
        ))}
      </ServiceContainer>
    </div>
  );
};

export default Services;
