import React from "react";
import { FiArrowRight, FiBook, FiEye, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import CourseNavBar from "../small_component/courseNavBar";
const StudentWorkSpace = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const currentPath = window.location.pathname + window.location.search;
        const gradeParam = window.location.search.substring(1);
        const grade = decodeURIComponent(gradeParam);
        const response = await axios.get("https://brainbounce.onrender.com/api/getCoursesByGrade", {
          params: { grade },
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        setCourses(response.data);
      } catch (err) {
        setError('Failed to fetch courses: ' + (err.response?.data?.message || err.message));
      } finally {
        setLoading(false);
      }
    };
    
    fetchCourses();
  }, []);
  
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
