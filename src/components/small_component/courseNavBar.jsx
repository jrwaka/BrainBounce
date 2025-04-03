import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaBell, FaUserCircle } from "react-icons/fa";

function CourseNavBar() {
  const scrollRef = useRef(null);
  const scrollAmount = 200;

  const lessons = [
    "Math", "English", "French", "Kinyarwanda", "Science", "History", "Geography",
    "Physics", "Chemistry", "Biology", "Computer Science", "Economics", "Civics",
    "Art", "Music", "Physical Education", "Literature"
  ];

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    
    const newScrollPosition =
      direction === "left"
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;

    scrollRef.current.scrollTo({ left: newScrollPosition, behavior: "smooth" });
  };

  return (
    <nav className="bg-gray-500 relative flex items-center py-2 px-4 justify-between">
      <div className="flex items-center space-x-2">
        {/* Left Scroll Button */}
        <button
          className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
          onClick={() => handleScroll("left")}
        >
          <FaChevronLeft className="h-6 w-6" />
        </button>
      </div>
      
      {/* Scrollable Lessons */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide space-x-4 px-4 mx-2"
        style={{ scrollBehavior: "smooth", scrollbarWidth: "none", whiteSpace: "nowrap" }}
      >
        {lessons.map((lesson, index) => (
          <a
            key={index}
            href="#"
            className="whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 transition-colors duration-200 ease-in-out hover:bg-blue-500 hover:text-white"
          >
            {lesson}
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        {/* Right Scroll Button */}
        <button
          className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
          onClick={() => handleScroll("right")}
        >
          <FaChevronRight className="h-6 w-6" />
        </button>

        {/* Notifications Icon */}
        <button className="p-2 text-white hover:text-gray-300">
          <FaBell className="h-6 w-6" />
        </button>

        {/* Profile Icon */}
        <button className="p-2 text-white hover:text-gray-300">
          <FaUserCircle className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}

export default CourseNavBar;
