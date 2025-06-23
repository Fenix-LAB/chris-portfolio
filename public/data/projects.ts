export const projects = [
  {
    // To use your own project photo, just place it in /public/assets and write the link as I did: eg: /assets/my_image.jpg
    // Of course it's best to convert your image file type to webp for better performance on the web!
    // Or just use a cloud image hosting platform like cloudinary and use the image url from there.
    ImageURL: "/assets/qr_mobile_app.webp", //
    Title: "Mobile App Access Control",
    Description:
      "A full-stack mobile app for managing access control in buildings.",
    Technologies: [
      "ionic",
      "vue",
      "capacitor",
      "typescript",
      "cordova",
      "fastapi",
      "python",
      "postgresql",
      "docker",
      "graphql",
      "hasura",
    ],
    Source: "https://github.com/Fenix-LAB/qr_mobile_app", // Optional!
    //Demo: "https://eshtrely.netlify.app/", // Optional!
  },
  {
    ImageURL: "/assets/failure_detector.webp",
    Title: "Failure Detector",
    Description:
      "A full-stack web application for detecting failures in systems using machine learning.",
    Technologies: [
      "angular",
      "fastapi",
      "python",
      "pytorch",
      "postgresql",
      "docker",
      "aws-iot",
    ],
    Source: "",
    Demo: "",
  },
  {
    ImageURL: "/assets/rusty_detector.webp",
    Title: "Rusty Detector",
    Description: "App for detecting rust on metal surfaces.",
    Technologies: [
      "python",
      "pytorch",
      "ultralytics",
      "opencv",
    ],
    Source: "https://github.com/Fenix-LAB/rusty-detector",
    Demo: "",
  },
  {
    ImageURL: "/assets/phone_locator.webp",
    Title: "Phone Locator",
    Description:
      "A mobile app for locating lost phones using GPS.",
    Technologies: [
      "vue.js",
      "javascript",
      "kotlin",
      "android",
      "flask",
      "python",
      "sqlite",
      "docker",
    ],
    Source: "https://github.com/Fenix-LAB/sentinel-app",
    Demo: "",
  },
  {
    ImageURL: "/assets/project-audiophile.webp",
    Title: "Audiophile Ecommerce Web Application",
    Description:
      "A full-stack ecommerce web application for electornic audio devices.",
    Technologies: [
      "node",
      "express",
      "react",
      "mongodb",
      "typescript",
      "chakra-ui",
      "html",
      "css",
      "responsive",
    ],
    Source: "https://github.com/KareemEhab/audiophile-ecommerce-webapp",
    Demo: "https://audiophile-ecommerce-webapp.vercel.app/",
  },
  {
    ImageURL: "/assets/project-recipepage.webp",
    Title: "Recipe Page",
    Description: "A simple recipe page for making an omelette.",
    Technologies: ["html", "css", "responsive"],
    Source: "https://github.com/KareemEhab/recipe-page-main",
    Demo: "https://recipe-page-main-phi.vercel.app/",
  },
];
