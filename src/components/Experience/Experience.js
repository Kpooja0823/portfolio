import { School, Work } from '@mui/icons-material';
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
function Experience() {
  return (
    <div>
     <br></br>
      <br></br>
      <VerticalTimeline lineColor='#3e497a'>
      <br></br>
      <br></br>
      <br></br>
      <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2014-2016'
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}>
          <p className='vertical-timeline-element-title'>
            Narayana Junior College
          </p>
          <p>Intermediate [M.P.C] </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2016-2020'
          iconStyle={{ background: "#2F3C7E", color: "#fff" }}
          icon={<School />}>
          <p className='vertical-timeline-element-title'>
            Jawaharlal Nehru Technological University, Hyderabad, India.
          </p>
          <p>Bachelor of Technology in Computer Science and Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
          date='May 2019 - Sep 2019'
          iconStyle={{ background: "#90519e", color: "#fff" }}
          icon={<Work />}>
          <p className='vertical-timeline-element-title'>
          Web Development Intern - Ridhan Technologies Private Ltd., Hyderabad,India.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
          date='Jan 2020 - Aug 2020'
          iconStyle={{ background: "#90519e", color: "#fff" }}
          icon={<Work />}>
          <p className='vertical-timeline-element-title'>
          Software Developer - People Tech Group Inc. Hyderabad, India</p>
        </VerticalTimelineElement>
      <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2020-2022'
          iconStyle={{ background: "#90519e", color: "#fff" }}
          icon={<Work />}>
          <p className='vertical-timeline-element-title'>
          Associate Software Engineer - CDK GLOBAL,Hyderabad,India.
          </p>
          <p>Contributed with team in 3 different projects.</p>
        </VerticalTimelineElement>
      <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2022-2024'
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}>
          <p className='vertical-timeline-element-title'>
            The University of Memphis, USA </p>
          <p>Master of Science in Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2024-Present'
          iconStyle={{ background: "#90519e", color: "#fff" }}
          icon={<Work />}>
          <p className='vertical-timeline-element-title'>
          Technical Analyst -Methodist Healthcare Memphis,USA </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}; 


export default Experience;