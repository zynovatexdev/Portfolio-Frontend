import Team1 from "../../../image/jhon.jpeg";
import project1 from "../../../image/project.avif";
import project2 from "../../../image/project2.png";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    image: Team1,
    socialMedia: "social media links",
  },
  {
    name: "John Doe",
    position: "CEO",
    image: Team1,
    socialMedia: "social media links",
  },
  {
    name: "John Doe",
    position: "CEO",
    image: Team1,
    socialMedia: "social media links",
  },
  {
    name: "John Doe",
    position: "CEO",
    image: Team1,
    socialMedia: "social media links",
  },
  // Add more team member objects here
];

const projects = [
  {
    title: "Travel Planner Platform",
    image: project2,
  },
  {
    title: "emergency Planner Platform",
    image: project1,
  },
  {
    title: "Travel Planner Platform",
    image: project2,
  },
  {
    title: "Travel Planner Platform",
    image: project2,
  },
  // Add more project objects here
];

const achievements = [
  {
    icon: <MilitaryTechIcon fontSize="large" />,
    title: "Design Excellence Reward",
    description:
      "Recognizing our exceptional design approach that seamlessly blends aesthetics and functionality, earning us the prestigious Design Excellence Reward",
  },
  {
    icon: <MilitaryTechIcon fontSize="large" />,
    title: "speech Excellence Reward",
    description:
      "Recognizing our exceptional design approach that seamlessly blends aesthetics and functionality, earning us the prestigious Design Excellence Reward",
  },
  {
    icon: <MilitaryTechIcon fontSize="large" />,
    title: "code Excellence Reward",
    description:
      "Recognizing our exceptional design approach that seamlessly blends aesthetics and functionality, earning us the prestigious Design Excellence Reward",
  },
  {
    icon: <MilitaryTechIcon fontSize="large" />,
    title: "Design Excellence Reward",
    description:
      "Recognizing our exceptional design approach that seamlessly blends aesthetics and functionality, earning us the prestigious Design Excellence Reward",
  },
];

const testimonials = [
  {
    image: Team1,
    name: "jhon dee",
    role: "CEO",
    rating: 4,
    quote:
      "The team's designs exceeded our expectations and significantly improved user engagement",
    date: "Dec 15, 2022",
  },
  {
    image: Team1,
    name: "jhon dee",
    role: "HR",
    rating: 4,
    quote:
      "The team's designs exceeded our expectations and significantly improved user engagement",
    date: "Dec 15, 2024",
  },
  {
    image: Team1,
    name: "jhon dee",
    role: "HR",
    rating: 4,
    quote:
      "The team's designs exceeded our expectations and significantly improved user engagement",
    date: "Dec 15, 2024",
  },
  // Add more testimonial objects here
];

export { teamMembers, projects, achievements, testimonials };
