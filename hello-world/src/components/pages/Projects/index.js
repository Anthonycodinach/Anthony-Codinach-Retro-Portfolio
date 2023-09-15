import React from 'react';
import image1 from '../../../deployed-application.jpeg'
import image2 from '../../../community-builders.png'
import "./style.css"

export default function Projects() {
  return (
    <div>
      <div id="projects-page-title-wrapper">
    <h1 className="project-welcome"> Projects. </h1>
  </div>
    <div className="projects-cointainer">
    <div className="project-cointainer">
        <a href="https://cassieellaelaine.github.io/Netflix-and-Chill-Generator"><img className="project-img" src={image1} alt="Website preview for tv show finder"></img></a>
          <h2 className="project1-title"> TV Show Finder </h2>
          <div className="project1-description"> <p className="project-text"> The website is a personalized TV show recommendation platform designed to enhance users' entertainment experiences. Users can simply visit the website, and with a few clicks, they are presented with highly rated handpicked TV show suggestions. The watchlist serves as a curated library where users can keep track of TV shows they intend to watch in the future.  </p> </div>
          </div>
          <div className="project-cointainer">
            <a href="https://pacific-wildwood-17680-8e953e055e35.herokuapp.com/Links to an external site."><img className="project-img" src={image2} alt="Website preview for tv show finder"></img></a>
              <h2 className="project2-title"> Community Builders </h2>
              <div className="project2-description"> <p className="project-text"> This application provides organizations with a seamless solution to post and promote their volunteering opportunities, reaching a vast network of dedicated individuals ready to lend a helping hand. Community Builders enables volunteers to discover and register for events that align with their interests and schedule. </p> </div>
              </div>
              <div className="project-cointainer">
                <a><img className="project-img" src={image1} alt="Website preview for tv show finder"></img> </a>
                  <h2 className="project3-title"> Community Builders </h2>
                  <div className="project3-description"> <p className="project-text"> Our platform provides organizations with a seamless solution to post and promote their volunteering opportunities, reaching a vast network of dedicated individuals ready to lend a helping hand. Community Builders enables volunteers to discover and register for events that align with their interests and schedule. </p> </div>
                  </div>          
          </div>
        
    </div>
  );
}
