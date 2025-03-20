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
import ParentDashboard from "./components/Parent/parentDashboard"; // Parent Dashboard Component
import ProfilePage from "./components/Parent/parentProfilePage";          // Profile Page
import StudentProgressPage from "./components/Parent/studentProgressPage"; // Children’s Progress Page
import NotificationsPage from "./components/Parent/notificationsPage"; // Notifications Page
import SignOutPage from "./components/Parent/signOutPage"; // Sign Out Page
import Dashboard from "./components/Parent/Dashboard";
import LandingPage from "./pages/landingPage";
import ParentLandingPage from "./pages/parentLandingPage";
import TeacherLandingPage from "./pages/teacherLandingPage";
import TeacherDashboard from "./components/Teacher/DashboardTeacher";
import TeacherProfilePage from "./components/Teacher/teacherProfilePage";
import TeacherStudentProgress from "./components/Teacher/TeacherStudentProgressPage";
import TeacherNotificationPage from "./components/Teacher/teacherNotificationsPage";
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
        <Route index element={<Navigate to="components/small_parent_component/Dashboard" />} /> 
        <Route path="components/small_parent_component/Dashboard" element={<Dashboard />}></Route>
          <Route element={<Navigate to="components/small_parent_component/parent-profile" />} /> 
          <Route path="components/small_parent_component/parent-profile" element={<ProfilePage />} />
          <Route path="student-progress" element={<StudentProgressPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="signout" element={<SignOutPage />} />
        </Route>

        <Route path="/teacher-dashboard" element={<TeacherDashboard />}>
        <Route index element={<Navigate to="components/Teacher/Dashboard" />} /> 
        <Route path="components/Teacher/Dashboard" element={<Dashboard />}></Route>
          <Route element={<Navigate to="components/Teacher/teacher-profile" />} /> 
          <Route path="components/Teacher/teacher-profile" element={<TeacherProfilePage />} />
          <Route path="teacher-student-progress" element={<TeacherStudentProgress />} />
          <Route path="components/Teacher/teacher-notifications" element={<TeacherNotificationPage />} />
          <Route path="signout" element={<SignOutPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
