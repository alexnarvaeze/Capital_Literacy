// cardData.js

import card1Image from "../../assets/card1.webp";
import card2Image from "../../assets/card2.jpg";
import card3Image from "../../assets/card3.webp";
import card4Image from "../../assets/card4.jpg";
import card5Image from "../../assets/card5.webp";
import card6Image from "../../assets/card6.jpg";
import card7Image from "../../assets/card7.jpg";
import card8Image from "../../assets/card8.jpg";
import { useTranslation } from "react-i18next";

const cardData = [
  {
    id: 1,
    title: "Understanding Budgeting",
    image: card1Image,
    description: "Learn how to create and maintain a budget that fits your financial needs and goals. This guide will help you understand how to allocate your income effectively to balance expenses and savings.",
    link: "https://www.nerdwallet.com/article/finance/how-to-budget#:~:text=Start%20by%20determining%20your%20take,toward%20savings%20and%20debt%20repayment.",
  },
  {
    id: 2,
    title: "Banking & Savings",
    image: card2Image,
    description: "Discover the best strategies for managing your bank accounts and building your savings. Learn how to make your money work harder for you while minimizing unnecessary fees.",
    link: "https://www.bankrate.com/banking/savings/how-to-save-money/#review-spending",
  },
  {
    id: 3,
    title: "Credit Management",
    image: card3Image,
    description: "Gain essential insights into maintaining a healthy credit score and using credit wisely. This guide covers the basics of credit cards, loans, and responsible credit usage.",
    link: "https://www.investor.gov/additional-resources/information/youth/teachers-classroom-resources/credit-management",
  },
  {
    id: 4,
    title: "Debt Management",
    image: card4Image,
    description: "Tips and tricks to manage your debt efficiently...",
    link: "https://consumer.ftc.gov/articles/how-get-out-debt",
  },
  {
    id: 5,
    title: "Financial Assistance",
    image: card5Image,
    description: "Information on how to get financial assistance...",
    link: "https://www.usa.gov/financial-hardship",
  },
  {
    id: 6,
    title: "Small Business",
    image: card6Image,
    description: "Resources for managing small business finances...",
    link: "https://www.forbes.com/advisor/business/how-to-start-a-business/",
  },
  {
    id: 7,
    title: "Financial Rights & Advocacy",
    image: card7Image,
    description: "Learn about your financial rights and advocacy...",
    link: "https://www.dosh.org/what-is-financial-advocacy/",
  },
  {
    id: 8,
    title: "Community",
    image: card8Image,
    description: "Connecting with the financial community...",
    link: "https://unitedwaymiami.org/what-we-do/center-for-financial-stability/",
  },
];

export default cardData;
