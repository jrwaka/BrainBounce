import React, { useState, useEffect } from "react";
import { FiArrowRight, FiBook, FiEye, FiStar } from "react-icons/fi";
import { Link, useSearchParams } from "react-router-dom";
import CourseNavBar from "../small_component/courseNavBar";
import axios from "axios";

const StudentWorkSpace = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState("link"); // "link" or "embed"
  const token = JSON.parse(sessionStorage.getItem("user"));
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const gradeParam = searchParams.get('grade');
        const grade = gradeParam ? decodeURIComponent(gradeParam) : '';
        console.log("grade", grade)
        if (!grade) {
          setError('No grade parameter found in URL');
          setLoading(false);
          return;
        }
        const encodedGrade = encodeURIComponent(grade);
        const response = await axios.get(
          `https://brainbounce.onrender.com/api/getCoursesByGrade/${gradeParam}`, 
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        setCourses(response.data);
      } catch (err) {
        setError('Failed to fetch courses: ' + (err.response?.data?.message || err.message));
      } finally {
        setLoading(false);
      }
    };
    
    fetchCourses();
  }, [token, searchParams]);
  
  const getViewableUrl = (url) => {
    if (!url) return '#';
    let modifiedUrl = url.replace('?download=true', '');
    return modifiedUrl;
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === "link" ? "embed" : "link");
  };
  
  console.log("course Link", courses);
  
  return (
    <div className="student-courses">
      <h2>Your Courses</h2>
      
      <div className="view-options">
        <button onClick={toggleViewMode} className="view-mode-toggle">
          {viewMode === "link" ? "Switch to Embedded View" : "Switch to Link View"}
        </button>
      </div>
      
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
                  <h3>{course.courseName}</h3>
                  {course.description && <p>{course.description}</p>}
                  
                  {viewMode === "link" ? (
                    // Link mode - opens in new tab
                    <a 
                      href={getViewableUrl(course.courseLink)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="pdf-link"
                    >
                      <span className="view-text">View Material</span>
                      <FiEye className="view-icon" />
                    </a>
                  ) : (
                    // Embed mode - shows PDF inline
                    <div className="pdf-embed-container">
                      <object 
                        data={getViewableUrl(course.courseLink)}
                        type="application/pdf"
                        width="100%"
                        height="500px"
                        className="pdf-object"
                      >
                        <p>
                          Unable to display PDF.
                          <a href={course.courseLink} download>
                            Download
                          </a> instead.
                        </p>
                      </object>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
      
      {/* Add some basic styles */}
      <style jsx>{`
        .student-courses {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .course-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 20px;
        }
        
        .course-item {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 20px;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          transition: transform 0.2s;
        }
        
        .course-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .pdf-link {
          display: inline-flex;
          align-items: center;
          padding: 8px 16px;
          background-color: #4a90e2;
          color: white;
          border-radius: 4px;
          text-decoration: none;
          margin-top: 10px;
        }
        
        .view-icon {
          margin-left: 8px;
        }
        
        .pdf-embed-container {
          margin-top: 15px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .view-mode-toggle {
          background-color: #f5f5f5;
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 8px 16px;
          margin-bottom: 20px;
          cursor: pointer;
        }
        
        .view-mode-toggle:hover {
          background-color: #e9e9e9;
        }
      `}</style>
    </div>
  );
};

export default StudentWorkSpace;