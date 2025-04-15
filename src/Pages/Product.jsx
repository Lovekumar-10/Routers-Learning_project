import React from 'react';
import { Link } from 'react-router-dom'; //linking is used to creater dynamic route

const Product = () => {
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

  return (
    <>
      <h2>Available Courses</h2>
      <ul>
        {courses.map((course) => (
        <div key={course.courseId}> 
            <li>
                <Link to={`/Product/${course.courseId}`}>{course.name}</Link>
            </li>
         </div>
        ))}
      </ul>
    </>
  );
};

export default Product;
