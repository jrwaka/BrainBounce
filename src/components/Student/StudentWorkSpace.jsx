import React, { useState, useEffect } from "react";
import { FiArrowRight, FiBook, FiEye, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import CourseNavBar from "../small_component/courseNavBar";
import axios from "axios";

const StudentWorkSpace = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = JSON.parse(sessionStorage.getItem("user"));
  console.log("token", token)
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Extract the grade directly from the query string
        // For URL format: /studentDashboard/StudentWorkSpace?Primary%203
        const gradeParam = window.location.search.substring(1); // Removes the '?' character
        const grade = decodeURIComponent(gradeParam); // Handles URL encoding like %20
        
        if (!grade) {
          setError('No grade parameter found in URL');
          setLoading(false);
          return;
        }
        
        const response = await axios.post(`https://brainbounce.onrender.com/api/getCoursesByGrade/${grade}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        console.log("response.data", response.data);
        setCourses(response.data);
      } catch (err) {
        setError('Failed to fetch courses: ' + (err.response?.data?.message || err.message));
      } finally {
        setLoading(false);
      }
    };
    
    fetchCourses();
  }, [token]);
  
  return (
    <div className="student-courses">
      <h2>Your Courses</h2>
      
      {loading && <p>Loading courses...</p>}
      {error && <p className="error">{error}</p>}
      
      {!loading && !error && (
        <>
          {courses.length === 0 ? (
            <p>No courses found.</p>
          ) : (
            <ul className="course-list">
              {courses.map(course => (
                <li key={course._id} className="course-item">
                  <h3>{course.title}</h3>
                  {course.description && <p>{course.description}</p>}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default StudentWorkSpace;