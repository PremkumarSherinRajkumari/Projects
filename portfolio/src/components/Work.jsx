//Work.jsx
import React from 'react';
import WorkItem from './WorkItem'
const data = [
    {
        year: 2018,
        title: 'Freshman and Sophmore',
        duration: '12 years',
        details: 'Studied in Bharathiyar Matriculation Higher Sceondary School in Chennai,India and received the school second award in board exams.',
    },
    {
        year: 2020,
        title: 'High Scool',
        duration: '12 years',
        details: 'Studied in mahindra World School in Chennai,India and received the first award in Computer Applications Subject.',
    },
    {

        year: 2023,
        title: 'Undergrad',
        duration: '12 years',
        details: 'Studied in Womans Christian College in Chennai,India and received the Best Outgoing Student award.',
    },
    {
        year: 2025,
        title: 'Grad',
        duration: '12 years',
        details: 'Studying Master of Science in Information systems at Northeastern University in Seattle, USA.', 
        
    },
    
]
const Work = () => {
return(
    <div id='work' className="education">
        <h1 className="dodo">Education</h1>
        {data.map((item,idx) => (
            <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
        ))}
    </div> 
)
}
export default Work;