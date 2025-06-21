import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const homeData = {
  // To use your own photo, just place it in /public/assets and write the link as I did: eg: /assets/my_image.jpg
  // Of course it's best to convert your image file type to webp for better performance on the web!
  // The links are optional
  myImage: "/assets/my_image.webp",
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "fenixcr.123@gmail.com",
      Link: "/contact", // This refers to the Contact page in the website, you can change it to whatever you like
    },
    {
      Icon: FaLocationDot,
      Label: "CDMX, Mexico",
      Link: "https://www.google.com/maps/place/Ciudad+de+México,+CDMX/@19.3904366,-99.4732714,10z/data=!3m1!4b1!4m6!3m5!1s0x85ce0026db097507:0x54061076265ee841!8m2!3d19.4326077!4d-99.133208!16zL20vMDRzcWo?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D", // This is just a simple location of my city
    },
    {
      Icon: FaPhoneAlt,
      Label: "+52 55 4183 2110",
      Link: "tel:+525541832116",
    },
  ],
  education: [
    {
      Icon: FaUniversity,
      Label: "Benemerita Universidad Autonoma de Puebla",
      Link: "https://www.buap.mx",
    },
    {
      Icon: FaGraduationCap,
      Label: "Bachelor's Degree in Mechatronic Engineer",
      Link: "https://serviciosdes.buap.mx/oferta-educativa/programa/LIM-2025",
    },
  ],
  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/Fenix-LAB",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/christian-rodríguez-hernández-448451247/",
    },
    {
      Icon: FaFacebook,
      Label: "Facebook",
      Link: "https://www.facebook.com/",
    },
    {
      Icon: FaInstagram,
      Label: "Instagram",
      Link: "https://www.instagram.com/",
    },
  ],
};
