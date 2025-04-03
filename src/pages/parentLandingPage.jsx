import { FaUserEdit, FaChalkboardTeacher, FaChartLine, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ParentLandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-[url(./parent-background.jpg)] relative text-center py-64 text-white bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Shadow overlay */}
      <img src="./src/assets/logo-white.png" className="absolute top-4 left-4 h-12" alt="" />
      <Link to="/ParentDashboard" className="absolute top-8 right-5 h-12">Go to Dashboard</Link>
        <h1 className="text-4xl font-bold relative z-10">Welcome to Your Parent Dashboard</h1>
        <p className="mt-4 text-lg relative z-10">Track your child's progress, assign lessons, and ensure a fun and interactive learning experience!</p>
      </section>

      {/* Overview of Features */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold">What You Can Do</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <div className="text-4xl text-blue-800 mb-4"><FaUserEdit /></div>
            <h3 className="text-xl font-semibold">Add Child Profile</h3>
            <p className="mt-2 text-gray-600">Add your child's profile.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <div className="text-4xl text-blue-800 mb-4"><FaChalkboardTeacher /></div>
            <h3 className="text-xl font-semibold">Assign Courses</h3>
            <p className="mt-2 text-gray-600">Assign courses based on their grade level.</p>
          </div>
        </div>
      </section>

=
      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 BrainBounce. All rights reserved.</p>
      </footer>
    </div>
  );
}
