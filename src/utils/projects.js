import Subscription from "../assets/images/subscription.png"
import LuckyWheel from "../assets/images/lucky-wheel.png"
import MyJourney from "../assets/images/lucky-wheel.png";
import BePaylater from "../assets/images/lucky-wheel.png";

const data = [
  {
    name: "Lucky Wheel",
    type: "Mobile App",
    url: "https://marble-haircut-483.notion.site/Lucky-Wheel-19dbe9e35dae814ea9b0f32124a60e06?pvs=4",
    image: LuckyWheel,
    slug: "lucky-wheel",
    description: "Lucky Wheel is a Be game campaign where users can spin and win exciting rewards from Be and its partners.",
    tech: ["UI/UX Design", "Graphic Design", "Illustration"],
  },
  {
    name: "bePaylater",
    type: "Mobile App",
    url: "https://marble-haircut-483.notion.site/bePaylater-19dbe9e35dae8120ac24e0029e68f1df",
    image: BePaylater,
    slug: "be-paylater",
    description: "This is an Insurance website made using Astro, Reactjs and Tailwind css. ",
    tech: ["UI/UX Design", "Illustration"],
  },
  {
    name: "Subscription Plan",
    type: "Mobile App",
    url: "https://marble-haircut-483.notion.site/Subscription-Plan-1a4be9e35dae807a9ca6d69bd1fe65b2",
    image: Subscription,
    slug: "subscription-plan",
    description: "The Subscription Plan offers various packages with diverse promotions to suit users' needs",
    tech: ["UI/UX Design"],
  },
  {
    name: "My Journey at be",
    type: "Mobile App",
    url: "https://www.notion.so/My-Journey-at-be-19dbe9e35dae813197e7f48876aa18ff",
    image: MyJourney,
    slug: "my-journey-at-be",
    description: "My Journey at Be  showcases my experiences and milestones with Be through personalized insights and outcomes.",
    tech: ["Product Design"],
  },
];

export function getData(){
    return data;
}