import { FaUsers, FaChalkboardTeacher, FaCheckCircle, FaChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function TeacherLandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-[url(./src/assets/teacher-background.jpg)] relative text-center py-64 text-white bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Shadow overlay */}
        <img src="./src/assets/logo-white.png" className="absolute top-4 left-4 h-12" alt="" />
        <Link to="/DashboardTeacher" className="absolute top-8 right-5 h-12">Go to Dashboard</Link>
        <h1 className="text-4xl font-bold relative z-10">Welcome to Your Teacher Dashboard</h1>
        <p className="mt-4 text-lg relative z-10">Monitor your students' progress, assign lessons, and enhance the learning experience!</p>
      </section>

      {/* Overview of Features */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold">What You Can Do</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <div className="text-4xl text-green-600 mb-4"><FaUsers /></div>
            <h3 className="text-xl font-semibold">Manage Students</h3>
            <p className="mt-2 text-gray-600">Add and manage student profiles with ease.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <div className="text-4xl text-green-600 mb-4"><FaChalkboardTeacher /></div>
            <h3 className="text-xl font-semibold">Assign Lessons</h3>
            <p className="mt-2 text-gray-600">Assign tailored lessons based on each student's needs.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <div className="text-4xl text-green-600 mb-4"><FaCheckCircle /></div>
            <h3 className="text-xl font-semibold">Track Assignments</h3>
            <p className="mt-2 text-gray-600">Monitor completion of assignments and provide feedback.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <div className="text-4xl text-green-600 mb-4"><FaChartBar /></div>
            <h3 className="text-xl font-semibold">View Analytics</h3>
            <p className="mt-2 text-gray-600">Analyze student progress through performance charts.</p>
          </div>
        </div>
      </section>

      {/* Quick Access Buttons */}
      <section className="py-16 px-6 text-center bg-gray-200">
        <h2 className="text-3xl font-semibold">Quick Actions</h2>
        <div className="mt-8 flex lg:flex-row flex-col justify-center gap-6">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg">Assign New Lesson</button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">View Student Progress</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 BrainBounce. All rights reserved.</p>
      </footer>
    </div>
  );
}
