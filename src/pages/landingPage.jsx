import { FaBookOpen, FaChalkboardTeacher, FaWifi } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/small_component/button";
import LandSmallcomp from "../components/small_component/landSmallcomp";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-[url(./src/assets/background.jpg)] relative text-center py-64 bg-blue-600 text-white bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Shadow overlay */}
        <img
          src="./src/assets/logo-white.png"
          className="absolute top-4 left-4 h-12"
          alt=""
        />
        <h1 className="text-4xl font-bold relative z-10">
          Unlock Learning Anytime, Anywhere!
        </h1>
        <p className="mt-4 text-lg relative z-10">
          An educational platform designed to help students aged 6-12 years
          learn interactively at home.
        </p>
        <div className="mt-6 flex justify-center gap-4 relative z-10">
          <Link to="/SignUp">
            <Button
              buttonInformData={{
                value: "Sign Up",
                bgColor: "bg-white",
                textColor: "text-blue-950",
                bgHovering: "bg-blue-950",
                txHovering: "text-white",
                duration: "duration-300",
              }}
            />
          </Link>
          <Link to="/ParentLogin">
            <Button
              buttonInformData={{
                value: "Log In",
                bgColor: "bg-blue-950",
                textColor: "text-white",
                bgHovering: "bg-white",
                txHovering: "text-blue-950",
                duration: "duration-300",
              }}
            />
          </Link>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 lg:px-24 px-6 text-center">
        <h2 className="text-2xl font-semibold">Why Choose BrainBounce?</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <LandSmallcomp
            dataObjects={{
              icon: <FaBookOpen />,
              title: "Interactive Learning",
              subTitle: "Fun and engaging lessons.",
            }}
            compStyle={{
              compWidth: "",
            }}
          />
          <LandSmallcomp
            dataObjects={{
              icon: <FaWifi />,
              title: " Download Learning Contents For Offline Use",
              subTitle: "Access lessons anytime, no internet required.",
            }}
            compStyle={{
              compWidth: "",
            }}
          />
          <LandSmallcomp
            dataObjects={{
              icon: <FaChalkboardTeacher />,
              title: " Teacher & Parent Portal",
              subTitle: "Monitor progress and assign lessons.",
            }}
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-200 py-16 lg:px-24 px-6 text-center">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-800">1</div>
            <p className="mt-2 text-gray-600">Sign up</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-800">2</div>
            <p className="mt-2 text-gray-600">Add child profile</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-800">3</div>
            <p className="mt-2 text-gray-600">Access lessons</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-800">4</div>
            <p className="mt-2 text-gray-600">Track progress</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <h2 className="text-2xl font-semibold">
          Start Your Learning Journey Today!
        </h2>
        <Link to="/SignUp">
          <button className="mt-6 bg-blue-800 text-white px-4 py-2 rounded">
            Sign Up Now
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 BrainBounce. All rights reserved.</p>
      </footer>
    </div>
  );
}
