import {
  ReadMoreBelowDescription,
  ReadMoreBelowText,
  ReadMoreBelowDescriptionCard,
  ReadMoreText,
  ReadMoreDescription,
  ReadMoreService,
  ReadmoreBelowDescriptionCardDescription,
  ReadmoreBelowDescriptionCardHeader,
  BackgroundImageWithOpacity,
} from "../styles/pages/Services";
import { ReadMoreTechnology } from "../components/page/Services/ReadMoreTechnology";

const ServicesReadMore = () => {
  const cardsData = [
    {
      header: "01",
      descriptionTitle: "Custom Software Development: ",
      description:
        "We design and develop bespoke software applications that are tailored to your business processes and requirements.",
    },
    {
      header: "02",
      descriptionTitle: "Custom Software Development: ",
      description:
        "Our team follows an agile development methodology to ensure flexibility, collaboration, and quick iterations, enabling us to adapt to changing needs.",
    },
    {
      header: "01",
      descriptionTitle: "Custom Software Development: ",
      description:
        "Our team follows an agile development methodology to ensure flexibility, collaboration, and quick iterations, enabling us to adapt to changing needs.",
    },
    {
      header: "02",
      descriptionTitle: "Custom Software Development: ",
      description:
        "Our team follows an agile development methodology to ensure flexibility, collaboration, and quick iterations, enabling us to adapt to changing needs.",
    },
    {
      header: "01",
      descriptionTitle: "Custom Software Development: ",
      description:
        "Our team follows an agile development methodology to ensure flexibility, collaboration, and quick iterations, enabling us to adapt to changing needs.",
    },
    {
      header: "02",
      descriptionTitle: "Custom Software Development: ",
      description:
        "Our team follows an agile development methodology to ensure flexibility, collaboration, and quick iterations, enabling us to adapt to changing needs.",
    },
    // Add more card data here
  ];

  return (
    <div>
      <ReadMoreService>
        <ReadMoreText>Software Development Services</ReadMoreText>
        <ReadMoreDescription>
          Our software development service is tailored to meet the unique needs
          of businesses seeking innovative and robust solutions. We specialize
          in creating high-quality, custom software applications that align with
          your specific goals and objectives. Whether you need a web-based
          application, a mobile app, or a desktop software, our skilled
          development team can bring your ideas to life and deliver exceptional
          results.
        </ReadMoreDescription>
      </ReadMoreService>

      <ReadMoreBelowText>
        Empowering Your Business with Custom Software Solutions
      </ReadMoreBelowText>

      <ReadMoreBelowDescription>
        {cardsData.map((card, index) => (
          <ReadMoreBelowDescriptionCard
            key={index}
            style={{ animationDelay: `${0.1 * index}s` }} // Adjust the delay as needed
          >
            <ReadmoreBelowDescriptionCardHeader>
              {card.header}
            </ReadmoreBelowDescriptionCardHeader>

            <ReadmoreBelowDescriptionCardDescription>
              <b> {card.descriptionTitle}</b>
              {card.description}
            </ReadmoreBelowDescriptionCardDescription>
          </ReadMoreBelowDescriptionCard>
        ))}
      </ReadMoreBelowDescription>

      <ReadMoreTechnology />
    </div>
  );
};

export default ServicesReadMore;
