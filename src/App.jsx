import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import ParentLogin from "./components/parentLogin";
// import SignUp from "./components/parentSignUp";
// import AddChildProfile from "./components/addChildProfile";
// import StudentDashboard from "./components/studentDashboard";
// import ProfileSection from "./components/studentProfileSection";
// import LessonsSection from "./components/studentLessonsSection";
// import ProgressSection from "./components/progressSection";
import ParentDashboard from "./components/parentDashboard"; // Parent Dashboard Component
import ProfilePage from "./components/small_parent_component/parentProfilePage";          // Profile Page
import StudentProgressPage from "./components/studentProgressPage"; // Children’s Progress Page
import NotificationsPage from "./components/notificationsPage"; // Notifications Page
import SignOutPage from "./components/signOutPage"; // Sign Out Page
import Dashboard from "./components/small_parent_component/Dashboard";
import LandingPage from "./components/landingPage";
import ParentLandingPage from "./components/parentLandingPage";
import TeacherLandingPage from "./components/teacherLandingPage";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<ParentLogin />} /> Login page */}
        {/* <Route path="/signup" element={<SignUp />} /> SignUp page */}
        {/* <Route path="/add-child" element={<AddChildProfile />} /> Add Child Profile page */}
        {/* <Route path="/" element={<Navigate to="/student-dashboard" />} />
        <Route path="/student-dashboard" element={<StudentDashboard />}>
          <Route path="profile" element={<ProfileSection />} />
          <Route path="lessons" element={<LessonsSection />} />
          <Route path="progress" element={<ProgressSection />} />
        </Route> */}
        <Route path="/" element={<Navigate to="/landing-page" />} /> <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/parent-landing-page" element={<ParentLandingPage />} />
        <Route path="/teacher-landing-page" element={<TeacherLandingPage />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />}>
        <Route index element={<Navigate to="components/small_parent_component/Dashboard" />} /> <Route path="components/small_parent_component/Dashboard" element={<Dashboard />}></Route>
          <Route element={<Navigate to="components/small_parent_component/parent-profile" />} /> <Route path="components/small_parent_component/parent-profile" element={<ProfilePage />} />
          <Route path="student-progress" element={<StudentProgressPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="signout" element={<SignOutPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
