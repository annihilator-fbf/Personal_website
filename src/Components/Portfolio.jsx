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
import image from "../images/study.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title:
      "Micromechanics in additively manufactured metals using electron beam-based powder bed fusion",
    description:
      "Research project on the micromechanics of additively manufactured metals. Use of nanoindentation technique and programming in Python.",
    url: "https://upcommons.upc.edu/handle/2117/393130",
  },
  {
    title:
      "Assessing the viability of high-frequency spot melting for super duplex stainless steel 2507 via electron beam powder bed fusion",
    description:
      "Contribution to a research by providing a detailed analysis of the mechanical properties of the material using the nanoindentation technique.",
    url: "https://www.sciencedirect.com/science/article/pii/S2238785423028016",
  },
  {
    title:
      "Optomechanical, computer simulation and nanoindentation studies on tuneable click hydrogels: Microscopic Insights.",
    description:
      "Contribution to a research by performing nanoindentation tests on hydrogels to determine their mechanical properties.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
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
