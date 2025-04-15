import React from 'react'
import { useParams, Link, useLocation} from 'react-router-dom'

const Course_details = () => {

    const courses = [
        { courseId: 'CS101', name: 'Computer_Science_Basics', duration: '3 months', fees: '₹10,000', time: 'Morning' },
        { courseId: 'WD202', name: 'Web_Development', duration: '6 months', fees: '₹15,000', time: 'Evening' },
        { courseId: 'DS303', name: 'Data_Structures', duration: '4 months', fees: '₹12,000', time: 'Afternoon' },
        { courseId: 'PY404', name: 'Python_Programming', duration: '3 months', fees: '₹9,000', time: 'Morning' },
        { courseId: 'JV505', name: 'Java_Programming', duration: '4 months', fees: '₹11,000', time: 'Evening' },
        { courseId: 'ML606', name: 'Machine_Learning', duration: '6 months', fees: '₹20,000', time: 'Weekend' },
        { courseId: 'RJ707', name: 'ReactJS', duration: '2 months', fees: '₹8,000', time: 'Morning' },
        { courseId: 'DB808', name: 'Database_Management', duration: '3 months', fees: '₹10,000', time: 'Afternoon' },
        { courseId: 'CS909', name: 'Cybersecurity_Basics', duration: '5 months', fees: '₹13,000', time: 'Evening' },
        { courseId: 'APP010', name: 'Mobile_Dev', duration: '4 months', fees: '₹14,000', time: 'Weekend' },
    ];

    const location  = useLocation();
    const { courseId } = useParams()

    const Course_Details = courses.filter((data)=>data.courseId == courseId)
    
  return (
    <>
    <div>
    <h1>Course_Details</h1>
    <h2>Course Name: {Course_Details[0].name}</h2>

    
    {location.pathname != "/Product/PY404" && ( // this is used for not show such details in given conditions
        <>
         <h2>Course Duration : {Course_Details[0].duration}</h2>
         <h2>Course Fees : {Course_Details[0].fees}</h2>
         <h2>Batch Timing : {Course_Details[0].time}</h2>
         
        </>
     )}
   
    </div>

    <button> <Link to={`/product`}>All courses</Link></button>
   
  
    </>
  )
}

export default Course_details