import {
  FaChalkboardTeacher,
  FaChartBar,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import LandSmallcomp from "../components/small_component/landSmallcomp";

export default function TeacherLandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-[url(/teacher-background.jpg)] relative text-center py-64 text-white bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Shadow overlay */}
        <img
          src="/src/assets/logo-white.png"
          className="absolute top-4 left-4 h-12"
          alt=""
        />
        <Link
          to="/DashboardTeacher"
          className="absolute top-8 right-5  flex items-center justify-center gap-1 md:hover:text-blue-700"
        >
          <span>
            <MdDashboard className="md:size-7 size-6" />
          </span>
          <span className="hidden md:block">Dashboard</span>
        </Link>
        <h1 className="text-4xl font-bold relative z-10">
          Welcome to Your Teacher Dashboard
        </h1>
        <p className="mt-4 text-lg relative z-10">
          Add and assign lessons to your grade level! 
        </p>
      </section>

      {/* Overview of Features */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold">What You Can Do</h2>
        <div className="mt-8 items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <LandSmallcomp
            dataObjects={{
              icon: <FaUsers />,
              title: "Add Courses",
              subTitle: "Add and manage courses with ease.",
            }}
            compStyle={{
              compWidth: "",
            }}
          />
          <LandSmallcomp
            dataObjects={{
              icon: <FaChalkboardTeacher />,
              title: "Assign Courses",
              subTitle:
                "Assign courses based on grade level.",
            }}
            compStyle={{
              compWidth: "",
            }}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 BrainBounce. All rights reserved.</p>
      </footer>
    </div>
  );
}
