import React from 'react';
import './Cources.css';
import ai from '../../../assets/img/ai.png';
import sd from '../../../assets/img/sd.png';
import dg from '../../../assets/img/dg.png';
import hacker from '../../../assets/img/hacking.png';

function Cources() {

    const courseData =[
        {
        title : "AI Development",
        desc : "Master AI Development",
        img:ai,
    },
        {
        title : "Digital Marketing",
        desc : "Master Digital Marketing",
        img:dg,
    },
    {
        title : "Software development",
        desc : "Master Software development",
        img:sd,
    },
        {
        title : "Cyber Security",
        desc : "Master Cyber Security",
        img:hacker,
    },
   
]

  return (
    <div className='container course-container'>
        <div className='course-top'>
            <h2 className='section-title'> Our Free Courses</h2>
            <p>Top Trending free courses with free certificates</p>
            <div className='course-wrapper'>
                {
                    courseData.map ((course,index)=>(
                        <div className='course-item'>
                        <span className='course-icons'>
                            <img src={course.img} alt=''/>
                        </span>
                        <div className='cource-content'>
                            <h4>{course.title}</h4>
                            <p>{course.desc}</p>
                        </div>
                        </div>
                    ))
                }
              
               

            </div>

        </div>

    </div>
  )
}

export default Cources