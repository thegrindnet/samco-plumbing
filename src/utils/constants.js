import { assetUrl } from "./assetUrl.js";
import photo0 from "../assets/images/excavation-equipment.webp";
import photo1 from "../assets/images/outdoor-worksite.webp";
import photo2 from "../assets/images/yard-trench.webp";
import photo3 from "../assets/images/residential-trench.webp";
import photo4 from "../assets/images/underground-piping.webp";
import photo5 from "../assets/images/freestanding-tub-shower.webp";
import photo6 from "../assets/images/shower-fixtures.webp";
import photo7 from "../assets/images/bathtub-installation.webp";
import photo8 from "../assets/images/exposed-plumbing.webp";
import photo9 from "../assets/images/service-truck-outdoors.webp";
import photo10 from "../assets/images/bathroom-before.webp";
import photo11 from "../assets/images/bathroom-after.webp";

// Verified facts and editable copy. Source notes: SOURCES.md.
export const business = {
  name: "Samco Plumbing Solutions",
  short: "SAMCO",
  suffix: "PLUMBING SOLUTIONS",
  city: "Fort Worth",
  phone: "(817) 986-7559",
  tel: "+18179867559",
  email: "samcoplumbingsolutions@gmail.com",
  accent: "#1659df",
  eyebrow: "PLUMBING \u2022 FORT WORTH, TX",
  headline: "A better flow.\nA better day.",
  intro:
    "Plumbing repairs and installations for homes and businesses in Fort Worth. Tell Samco what needs attention, from a water leak to a new fixture.",
  serviceTitle: "Let\u2019s get things\nflowing again.",
  aboutTitle: "A local connection.\nA family business.",
  about:
    "Samco Plumbing Solutions is a family-owned plumbing company based in Fort Worth. The company works on residential and commercial repairs and installations, water and gas lines, sewer lines, and plumbing fixtures.",
  aboutEnd:
    "Planning an installation or dealing with an existing problem? Start with the location, the symptoms and the result you need. Ask about availability and the next step.",
  contactTitle: "What needs\nattention?",
  contactText:
    "Share your project address and a short description of the plumbing issue. Samco can discuss the scope and scheduling with you.",
  profile: "https://nextdoor.com/pages/samco-plumbing-solutions-fort-worth-tx/",
  profileLabel: "Samco on Nextdoor",
};
export const navigation = [
  {
    id: "services",
    label: "Services",
  },
  { id: "gallery", label: "Our work" },
  { id: "reviews", label: "Reviews" },
  {
    id: "about",
    label: "About",
  },
  {
    id: "questions",
    label: "FAQs",
  },
  {
    id: "contact",
    label: "Contact",
  },
];
export const services = [
  {
    title: "Water leaks",
    description:
      "Drips, damp spots or a leaking line? Describe where you noticed the problem and ask about a repair.",
  },
  {
    title: "Sewer lines",
    description:
      "Discuss sewer-line repairs or installations and what your property needs.",
  },
  {
    title: "Fixture installations",
    description:
      "Updating a faucet, sink or shower fixture? Talk through the replacement or new installation.",
  },
  {
    title: "Home & business plumbing",
    description:
      "Residential and commercial installations and repairs, with the project scope agreed directly with Samco.",
  },
];
export const faqs = [
  {
    question: "Do you provide residential and commercial plumbing services?",
    answer:
      "Yes! SamCo Plumbing provides plumbing repairs and installations for homes and commercial properties. Contact us to discuss your plumbing needs.",
  },
  {
    question: "How do I request plumbing service?",
    answer:
      "Contact SamCo Plumbing directly by phone or through our Facebook page. Share your location and a brief description of the problem so we can discuss the next steps and appointment availability.",
  },
  {
    question: "What information should I include when requesting service?",
    answer:
      "Tell us which fixture or pipe is affected, when the problem started, and what you have noticed. Photos of the issue can help us better understand your plumbing needs before a visit.",
  },
  {
    question: "How much will my plumbing repair cost?",
    answer:
      "Pricing depends on the problem, the parts needed, and the work involved. Contact SamCo Plumbing to discuss your situation and request an estimate for your repair or installation.",
  },
  {
    question: "How soon can I schedule a plumbing appointment?",
    answer:
      "Contact SamCo Plumbing to check current availability. If your problem needs urgent attention, let us know when you reach out so we can discuss the earliest available appointment.",
  },
];

export const galleryItems = [
  {
    id: "excavation-equipment",
    src: assetUrl(photo0),
    alt: "Excavator beside an open plumbing trench",
    title: "Excavation in progress",
    width: 720,
    height: 960,
    comparison: false,
  },
  {
    id: "outdoor-worksite",
    src: assetUrl(photo1),
    alt: "Outdoor worksite with a service vehicle",
    title: "Outdoor worksite",
    width: 900,
    height: 1200,
    comparison: false,
  },
  {
    id: "yard-trench",
    src: assetUrl(photo2),
    alt: "Long trench through a grassy yard",
    title: "Yard trench",
    width: 900,
    height: 1200,
    comparison: false,
  },
  {
    id: "residential-trench",
    src: assetUrl(photo3),
    alt: "Open trench beside a residential yard",
    title: "Residential trench",
    width: 900,
    height: 1200,
    comparison: false,
  },
  {
    id: "underground-piping",
    src: assetUrl(photo4),
    alt: "Piping visible inside an excavated trench",
    title: "Underground piping",
    width: 900,
    height: 1200,
    comparison: false,
  },
  {
    id: "freestanding-tub-shower",
    src: assetUrl(photo5),
    alt: "Freestanding bathtub beside a walk-in shower",
    title: "Tub & shower",
    width: 720,
    height: 960,
    comparison: false,
  },
  {
    id: "shower-fixtures",
    src: assetUrl(photo6),
    alt: "Shower fixtures set against marble-pattern tile",
    title: "Shower fixtures",
    width: 720,
    height: 960,
    comparison: false,
  },
  {
    id: "bathtub-installation",
    src: assetUrl(photo7),
    alt: "Freestanding bathtub in a room under renovation",
    title: "Bathtub installation",
    width: 720,
    height: 960,
    comparison: false,
  },
  {
    id: "exposed-plumbing",
    src: assetUrl(photo8),
    alt: "Exposed plumbing connections inside an open wall",
    title: "Behind the wall",
    width: 720,
    height: 960,
    comparison: false,
  },
  {
    id: "service-truck-outdoors",
    src: assetUrl(photo9),
    alt: "Samco truck parked near an outdoor worksite",
    title: "On the job",
    width: 540,
    height: 960,
    comparison: false,
  },
  {
    id: "bathroom-before",
    src: assetUrl(photo10),
    alt: "Bathroom before renovation with unfinished walls and exposed plumbing",
    title: "Before",
    width: 960,
    height: 720,
    comparison: true,
  },
  {
    id: "bathroom-after",
    src: assetUrl(photo11),
    alt: "Bathroom after renovation with a freestanding tub and tiled shower",
    title: "After",
    width: 960,
    height: 720,
    comparison: true,
  },
];

// Reviews supplied by David, September 26, 2026. Links identify reviewers, not review permalinks.
export const reviews = [
  {
    name: "Jo Hanen",
    profile: "https://www.facebook.com/jo.hanen.94",
    quote:
      "Called SamCo on 2/19/2021 he was able to have someone come fix my busted pipe that same day!! We were going on 2 days without water in our home. Checked with several other plumbers and they told me it was going to be a week or more. Employees were very professional and made the repair quickly! I will recommend SamCo to everyone needed assistance! Thank you SamCo!",
  },
  {
    name: "Patricia Beiter",
    quote:
      "SamCo Plumbing is a great company. Joe came out today and fixed our shower, in both bathrooms, and a toilet. He is not only great at his work, but is honest and respectful towards his clients. We highly recommend this company. And thank you for servicing us today. How are their prices? They are affordable. Why? They are an honest company.",
  },
  {
    name: "Flor Huerta",
    quote:
      "Sam is very knowledgeable with competitive prices. Will definitely use his services in the future.",
  },
  {
    name: "Adriana Aguirre",
    profile: "https://www.facebook.com/AdrianaA09",
    quote:
      "Very prompt and efficient service. My shower was clogged and after doing everything myself to unclog it with no results I called Sam and he showed up within a couple of hours and quickly fixed my shower. 10/10 would recommend for all your plumbing needs.",
  },
  {
    name: "Ruby Galvan",
    profile: "https://www.facebook.com/ruby.galvan.12177",
    quote:
      "Amazing service! Sam was very professional and honest, he made us feel very comfortable through the process. We definitely recommend him and we’re satisfied with his work.",
  },
];
