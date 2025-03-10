import ras from "../assets/images/ras.webp";
import joke from "../assets/images/joke.webp";
import lofi from "../assets/images/lofi.webp";
import blog from "../assets/images/blog.webp";
import docAid from "../assets/images/docAid.webp";
import LifeInsureEase from "../assets/images/lifeinsureease.webp";
import Portfolio from "../assets/images/portfolio.webp"
import CartManagementSystem from "../assets/images/cart-management-system.webp"
const data = [
    {
        name: "Lucky Wheel",
        type: "Mobile App",
        url: "https://cart-system-sveltekit.vercel.app/",
        github: "https://github.com/DevRohit06/cart-system-sveltekit",
        image: CartManagementSystem,
        slug: "cart-management-system",
        description: "This is a Cart Management System made using SvelteKit and Tailwind css with the help of FakeStoreAPI. it has two versions one with sveltekit and another with NextJS.",
        tech: ['HTML', 'Javascript', 'Css', 'Tailwind css', 'SvelteKit', 'NextJS']
        
    },
    {
        name: "bePaylater",
        type: "Mobile App",
        url: "https://lifeinsureease.in/",
        github: "https://github.com/DevRohit06/insurance-website",
        image: LifeInsureEase,
        slug: "lifeinsureease",
        description: "This is an Insurance website made using Astro, Reactjs and Tailwind css. ",
        tech: ['HTML', 'Javascript', 'Css', 'Tailwind css', 'Astro', 'Reactjs']

    },
    {
        name: "Subscription Plan",
        type: "Mobile App",
        url: "https://rohitk06.site/",
        github: "https://github.com/DevRohit06/Portfolio-website",
        image: Portfolio,
        slug: "portfolio",
        description: "This is my Portfolio website made using Astro, Reactjs and Tailwind css. ",
        tech: ['HTML', 'Javascript', 'Css', 'Tailwind css', 'Astro', 'Reactjs']
    },
    {
        name: "DocAid",
        type: "Website",
        url: "https://doc-aid.vercel.app/",
        github: 'https://github.com/DevRohit06/DocAid',
        image: docAid,
        slug: "docaid",
        description: "Website template for Health related businesses",
        tech: ['HTML', 'Javascript', 'CSS', 'Tailwind css', 'ReactJS']
    },
]

export function getData(){
    return data;
}