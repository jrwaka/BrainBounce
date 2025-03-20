import { FaUserEdit, FaChalkboardTeacher, FaChartLine, FaCogs } from "react-icons/fa";

export default function ParentLandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-[url(./src/assets/parent-background.jpg)] relative text-center py-64 text-white bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Shadow overlay */}
      <img src="./src/assets/logo-white.png" className="absolute top-4 left-4 h-12" alt="" />
        <h1 className="text-4xl font-bold relative z-10">Welcome to Your Parent Dashboard</h1>
        <p className="mt-4 text-lg relative z-10">Track your child's progress, assign lessons, and ensure a fun and interactive learning experience!</p>
      </section>

      {/* Overview of Features */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold">What You Can Do</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <div className="text-4xl text-blue-800 mb-4"><FaUserEdit /></div>
            <h3 className="text-xl font-semibold">Manage Profile</h3>
            <p className="mt-2 text-gray-600">Update your child's profile and preferences easily.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <div className="text-4xl text-blue-800 mb-4"><FaChalkboardTeacher /></div>
            <h3 className="text-xl font-semibold">Assign Lessons</h3>
            <p className="mt-2 text-gray-600">Assign daily lessons and track their progress.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <div className="text-4xl text-blue-800 mb-4"><FaChartLine /></div>
            <h3 className="text-xl font-semibold">Track Progress</h3>
            <p className="mt-2 text-gray-600">Monitor your child's learning and achievements over time.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <div className="text-4xl text-blue-800 mb-4"><FaCogs /></div>
            <h3 className="text-xl font-semibold">Set Learning Goals</h3>
            <p className="mt-2 text-gray-600">Set goals to motivate your child's learning journey.</p>
          </div>
        </div>
      </section>

      {/* Quick Access Buttons */}
      <section className="py-16 px-6 text-center bg-gray-200">
        <h2 className="text-3xl font-semibold">Quick Actions</h2>
        <div className="mt-8 flex justify-center gap-6">
          <button className="bg-blue-600 hover:bg-blue-800 duration-150 text-white px-6 py-3 rounded-lg">Assign New Lesson</button>
          <button className="bg-green-600 hover:bg-green-700 duration-150 text-white px-6 py-3 rounded-lg">View Progress</button>
          <button className="bg-yellow-600 hover:bg-yellow-500 text-white px-6 py-3 rounded-lg">Set Learning Goals</button>
        </div>
      </section>

      {/* Child Profile Summary */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold">Child Profile</h2>
        <div className="mt-8 bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold">Name: [Child’s Name]</h3>
          <p className="mt-2 text-gray-600">Current Level: Grade [X]</p>
          <p className="mt-2 text-gray-600">Lessons Completed: [X] / [Total Lessons]</p>
          <p className="mt-2 text-gray-600">Last Lesson: [Lesson Name]</p>
          <p className="mt-4 text-gray-600">Progress: [Percentage]%</p>
        </div>
      </section>

      {/* Progress & Activity Feed */}
      <section className="py-16 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold">Activity Feed</h2>
        <div className="mt-8 bg-white shadow-md rounded-xl p-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold">March 19, 2025</h3>
            <p className="mt-2 text-gray-600">Completed Lesson: [Lesson Name]</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">March 18, 2025</h3>
            <p className="mt-2 text-gray-600">Achieved Goal: [Goal Name]</p>
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-semibold">Ready to Get Started?</h2>
        <button className="mt-6 bg-blue-600 hover:bg-blue-800 duration-150 text-white px-6 py-3 rounded-lg">Assign New Lesson</button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 BrainBounce. All rights reserved.</p>
      </footer>
    </div>
  );
}
