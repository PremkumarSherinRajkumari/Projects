import React from "react";

const SkipLink = ({ handleSectionChange }) => {
    const handleNavClick = (section) => {
      handleSectionChange(section);
  
      // Update the scroll position to the target section
      const targetElement = document.getElementById(section);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    const handleSkipLinkClick = (event, section) => {
      event.preventDefault();
      handleNavClick(section);
    };
    return(
<div>  <a href="#!" className="skip-link" onClick={(event) => handleSkipLinkClick(event, 'contact')}>
        Skip to Contact
      </a> </div>
    );
};
    export default SkipLink;