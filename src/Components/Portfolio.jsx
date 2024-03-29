/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk-1284085_1280.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
 
  {
    title: "Grid Portfolio Design",
    description:
      "Designed a Grid Portfolio template using HTML and CSS. It has features like colour gradient for appealing visuals and hover feature for smooth user interface.",
    url: "https://reshamvishwakarma.github.io/Grid-Portfolio-Design/",
  },

  {
    title: "TECHATHON'24",
    description:
      "Participated in Techathon organized by GDSC in my college HBTU Kanpur. I was the member of team EDITH, we worked on problem statement to help job seekers to find perfect job opportunity.",
    url: "https://reshamvishwakarma.github.io/techathon24/",
  },

  {
    title: "Resham’s Recipe Website",
    description:"Created a dynamic website showcasing delightful recipes with detailed ingredients and instructions. Responsive layout ensuring seamless navigation on all devices that enhance user engagement, ",
    url: "https://reshamvishwakarma.github.io/Resham-s-Recipe-Delights-Website/",
  },
  {
    title: "Order Card Web Design",
    description:
      "Designed a visually appealing and user-friendly order summary card for online purchases. It has a responsively designed layout for various devices.",
    url: "https://reshamvishwakarma.github.io/Order-Card-Web-Design/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
