import React from 'react';
import Migrate from './../../../images/Migrate.png';
import Manage from './../../../images/Manage.png';
import Deploy from './../../../images/Deploy.png';
import Print from './../../../images/Print.png';
import One from './../../../images/One.png';
import Two from './../../../images/Two.png';
import Three from './../../../images/Three.png';
import Four from './../../../images/Four.png';


const FourOptionData = [
  {
    id: 1,
    number: One,
    title: "Migrate",
    image: Migrate,
    contentHead: "Simplify your transition.",
    contentParagraph:
      "Automatically import your existing printer objects and eliminate all print servers. Easily add all printers and devices regardless of manufacturer or model.",
  },
  {
    id: 2,
    number: Two,
    title: "Manage",
    image: Manage,
    contentHead: "StreamLine your management.",
    contentParagraph:
      "Centrally manage printer objects, drivers, profiles, and settings from our Admin Console. Get visibility into all users, devices, and more from one centralized screen.",
  },
  {
    id: 3,
    number: Three,
    title: "Deploy",
    image: Deploy,
    contentHead: "Minimize IT needs.",
    contentParagraph:
      "Push new printers, updates, and changes to end users, without scripting or GPOs, on your team’s schedule. Keep your environment secure with automatic updates.",
  },
  {
    id: 4,
    number: Four,
    title: "Print",
    image: Print,
    contentHead: "Maximize security.",
    contentParagraph:
      "Secure your data by keeping print jobs local. Utilize robust features like Off-Network Printing and Secure Release Printing to protect confidential information.",
  },
]

export default FourOptionData;