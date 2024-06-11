import { useState } from 'react'
import Sidenav from './components/Sidenav'
import './Sidenav.css'; 
import Topnav from './components/Topnav';
import Main from './components/Main';
import './Main.css'; 
import Work from './components/Work';
import './Education.css'; 
import Projects from './components/Projects';
import './Projects.css';
import Contact from './components/Contact';
import './Contact.css';
import SkipLink from './components/SkipLink';

function App() {
  const [currentSection, setCurrentSection] = useState('main');

  const handleSectionChange = (section) => {
    setCurrentSection(section);
    
  };

  return (
    <div>
        
      <Sidenav handleSectionChange={handleSectionChange} />
      <Topnav handleSectionChange={handleSectionChange} />
      <SkipLink handleSectionChange={handleSectionChange} />
      {currentSection === 'main' && <Main />}
      {currentSection === 'work' && <Work />}
      {currentSection === 'projects' && <Projects />}
      {currentSection === 'contact' && <Contact />}
    </div>
  );
}

export default App;
