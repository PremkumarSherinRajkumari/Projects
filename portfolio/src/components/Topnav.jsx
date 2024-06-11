import React from 'react';


const Topnav = ({ handleSectionChange }) => {
  const handleNavClick = (section) => {
    handleSectionChange(section);

   
  };

  

  return (
    
    
      
      <div className="container_topnav">
        <div className="an" onClick={() => handleNavClick('main')}>
          Home
        </div>
        <div className="an" onClick={() => handleNavClick('work')}>
          Work
        </div>
        <div className="an" onClick={() => handleNavClick('projects')}>
          Projects
        </div>
        
      </div>
      
     
    
    
  );
};

export default Topnav;
