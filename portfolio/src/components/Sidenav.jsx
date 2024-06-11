// Sidenav.jsx
import React, { useState } from 'react';

const Sidenav = ({ handleSectionChange }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSectionClick = (section) => {
    handleSectionChange(section);
    handleNav();
  };

  return (
    <div>
      <div className="sidenav" onClick={handleNav}>
        &#9776;
      </div>

      {nav && (
        <div className="container">
          <div className="anch" onClick={() => handleSectionClick('main')}>
            Home
          </div>
          <div className="anch" onClick={() => handleSectionClick('work')}>
            Work
          </div>
          <div className="anch" onClick={() => handleSectionClick('projects')}>
            Projects
          </div>
         
        </div>
      )}
    </div>
  );
};

export default Sidenav;