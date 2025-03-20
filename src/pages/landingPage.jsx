import { FaBookOpen, FaWifi, FaChalkboardTeacher, FaGamepad } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
        <section className="bg-[url(./src/assets/background.jpg)] relative text-center py-64 bg-blue-600 text-white bg-cover bg-center">
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Shadow overlay */}
                <img src="./src/assets/logo-white.png" className="absolute top-4 left-4 h-12" alt="" />
                <h1 className="text-4xl font-bold relative z-10">Unlock Learning Anytime, Anywhere!</h1>
                <p className="mt-4 text-lg relative z-10">An educational platform designed to help students aged 6-12 years learn interactively at home.</p>
            <div className="mt-6 flex justify-center gap-4 relative z-10">
                <button className="bg-white text-blue-950 px-6 py-3 rounded-lg hover:bg-blue-950 hover:text-white transition duration-150 ease-in-out">Sign Up</button>
                <button className="text-white hover:bg-black hover:text-white transition duration-150 border px-6 py-3 rounded-lg">Log In</button>
            </div>
        </section>

      {/* Key Features Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold">Why Choose BrainBounce?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <div className="text-4xl text-blue-800 mb-4"><FaBookOpen /></div>
            <h3 className="text-xl font-semibold">Interactive Learning</h3>
            <p className="mt-2 text-gray-600">Fun and engaging lessons.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <div className="text-4xl text-blue-800 mb-4"><FaWifi /></div>
            <h3 className="text-xl font-semibold">Download Learning Contents For Offline Use</h3>
            <p className="mt-2 text-gray-600">Access lessons anytime, no internet required.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <div className="text-4xl text-blue-800 mb-4"><FaChalkboardTeacher /></div>
            <h3 className="text-xl font-semibold">Teacher & Parent Portal</h3>
            <p className="mt-2 text-gray-600">Monitor progress and assign lessons.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <div className="text-4xl text-blue-800 mb-4"><FaGamepad /></div>
            <h3 className="text-xl font-semibold">Learn Through Play</h3>
            <p className="mt-2 text-gray-600">Exciting games and challenges make learning fun!</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-200 py-16 px-6 text-center">
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
        <h2 className="text-2xl font-semibold">Start Your Learning Journey Today!</h2>
        <button className="mt-6 bg-blue-800 text-white px-4 py-2 rounded">Sign Up Now</button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 BrainBounce. All rights reserved.</p>
      </footer>
    </div>
  );
}
