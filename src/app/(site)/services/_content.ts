// app/(site)/services/_content.ts
import { ServiceDetailProps } from "@/app/components/ServiceDetail";

export const SERVICE_CONTENT: Record<string, ServiceDetailProps[]> = {
  "web-development": [
    {
      heading: "Web Development",
      image: "/service/Web-Development.png",
      banner: "/webdb.jpg",
      blocks: [
        {
          lead: "Web Development Services Tailored for Your Success",
          body:
            "At Nij Web Solutions, we don’t just build websites; we craft powerful, scalable, and user-centric web solutions designed to grow your business. From startups to enterprises, our web development services are tailored to meet your unique goals, ensuring performance, seamless user experience, and measurable results.\n\n" +
            "Whether it’s a custom eCommerce platform, a dynamic business application, or a responsive website, we bring together cutting-edge technology and innovative designs to turn your vision into reality.",
        },
        {
          title: "What We Deliver",
          body:
            "Custom Business Applications: Streamline your operations with apps designed to enhance productivity and collaboration.\n\n" +
            "Data-Centric Solutions: Centralized customer data management with secure backup systems.\n\n" +
            "Real-Time Monitoring: Tools for managing client portfolios and monitoring activity in real time.\n\n" +
            "eCommerce Websites: Scalable and feature-rich platforms tailored for online success.",
        },
      ],
    },
  ],

  "mobile-app-development": [
    {
      heading: "Mobile Application Development",
      image: "/service/App-Development.png",
      banner: "/mappd.png",
      blocks: [
        {
          lead: "Custom Mobile App Development Services",
          body:
            "At Nij Web Solutions, we turn your app ideas into reality with innovative and user-focused mobile app solutions. Whether you need an Android app, an iOS app, or a cross-platform solution, our team of expert developers delivers tailored applications designed to meet your unique business goals.\n\n" +
            "We specialize in creating apps that offer seamless functionality, intuitive interfaces, and exceptional user experiences. From startups to enterprises, our mobile app development services are crafted to help businesses grow, engage customers, and stay ahead in a competitive market.",
        },
        {
          title: "Get Your Custom Mobile App Today",
          body: "Ready to bring your app idea to life? Nij Web Solutions is here to help. With our expertise in mobile app development, we create solutions that drive results and deliver value.",
        },
      ],
      cta: {
        text: "Contact us now to discuss your project and get a free consultation!",
      },
    },
  ],

  "ui-ux-design": [
    {
      heading: "UI/UX Design",
      image: "/service/UX-Design.png",
      blocks: [
        {
          lead: "Crafting Exceptional UI/UX Designs That Deliver Results",
          body:
            "At Nij Web Solutions, we understand that exceptional design goes beyond aesthetics—it’s about creating intuitive and delightful experiences that connect with your audience. Our UI/UX design services place users at the heart of every solution, ensuring that every interaction feels seamless and impactful.\n\n" +
            "Whether you’re a startup or an established brand, our team of experts will help you design interfaces that are visually appealing, functional, and optimized to meet your business goals. With nearly a decade of experience, we’ve partnered with businesses across industries to deliver designs that enhance engagement, increase conversions, and build brand loyalty.",
        },
        {
          title: "Why UI/UX Design Matters",
          body:
            "User-Centric Approach: We design with your audience in mind, ensuring an intuitive and seamless digital experience.\n\n" +
            "Boost Engagement: Attractive and functional interfaces keep users coming back.\n\n" +
            "Drive Conversions: A well-thought-out design turns visitors into customers.\n\n" +
            "Elevate Brand Identity: Our designs reflect your brand’s values and personality.",
        },
      ],
    },
  ],

  "erp-solution": [
    {
      heading: "ERP Solution",
      image: "/service/ERP-Solution.png",
      blocks: [
        {
          lead: "Streamline Your Business with Our ERP Solutions",
          body:
            "At Nij Web Solutions, we specialize in delivering reliable, efficient, and scalable ERP solutions tailored to meet the unique needs of your business. Our expertise lies in automating business processes, integrating data across departments, and enhancing overall productivity. With years of experience, we empower businesses to operate systematically, saving time and resources while ensuring seamless operations.\n\n" +
            "Our team of skilled developers is dedicated to crafting ERP systems with intuitive features, a user-friendly interface, and robust functionality. Whether you're looking to connect remote locations, optimize workflows, or improve customer satisfaction, our ERP solutions are designed to help your business thrive.",
        },
        {
          title: "Unlock Your Business’s True Potential",
          body: "With Nij Web Solutions ERP solutions, you gain the tools to operate smarter, faster, and more efficiently. From improving internal workflows to enhancing customer experience, our solutions are built to help you stay ahead in the competitive market.",
        },
      ],
      cta: {
        text: "Contact us today to discuss your ERP needs and take the first step toward transforming your business!",
      },
    },
  ],

  "marketing-services": [
    {
      heading: "Digital Marketing",
      image: "/service/Digital-Marketing.png",
      blocks: [
        {
          lead: "Supercharge Your Business Growth with Our Expert Digital Marketing Solutions",
          body:
            "At Nij Web Solutions, we understand the power of online presence. Our comprehensive digital marketing services are designed to fuel your business growth, build a strong online reputation, and maximize customer reach. Whether you need to drive traffic, boost conversions, or optimize your marketing strategies, we have the expertise to deliver impactful solutions that help your business succeed in the digital world.\n\n" +
            "With a results-driven approach, we integrate the best practices of SEO, PPC, content marketing, and social media to create campaigns that resonate with your target audience. We aim for sustained business growth, increased engagement, and higher conversion rates with every campaign.",
        },
        {
          title: "Let’s Grow Your Business Together",
          body: "Ready to accelerate your business growth? Contact us today to discuss how our digital marketing strategies can drive more traffic, increase conversions, and boost your online presence. Let’s work together to bring your business to the forefront of the digital world.",
        },
      ],
    },
  ],
};
