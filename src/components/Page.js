import React from "react";
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';
import Resume from './Resume';


function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage) {
      case "aboutme":
        return <AboutMe />
      case "portfolio":
        return <Portfolio />

      case "contact":
        return <ContactMe />

      case "resume":
        return <Resume />

      default:
        return <h2>Something is wrong. Please refresh the page and try again.</h2>;

    }
  };

  return <div className="mt-3">{renderPage()}</div>;
}

export default Page;
