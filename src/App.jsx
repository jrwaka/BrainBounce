import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

// Parent Components
import Dashboard from "./components/Parent/Dashboard";
import NotificationsPage from "./components/Parent/notificationsPage";
import ProfilePage from "./components/Parent/parentProfilePage";
import SignOutPage from "./components/Parent/signOutPage";
import StudentProgressPage from "./components/Parent/studentProgressPage";
// Teacher Components

// Landing Pages
import ParentDashboard from "./components/Parent/parentDashboard";
import TeacherDashboard from "./components/Teacher/DashboardTeacher";
import TeacherNotificationPage from "./components/Teacher/teacherNotificationsPage";
import TeacherProfilePage from "./components/Teacher/teacherProfilePage";
import TeacherStudentProgress from "./components/Teacher/TeacherStudentProgressPage";
import TrainerDashboard from "./components/Teacher/TrainerDashboard";
import LandingPage from "./pages/landingPage";
import ParentLandingPage from "./pages/parentLandingPage";
import TeacherLandingPage from "./pages/teacherLandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect "/" to landing page */}
        <Route path="/" element={<Navigate to="/landing-page" />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/parent-landing-page" element={<ParentLandingPage />} />
        <Route path="/teacher-landing-page" element={<TeacherLandingPage />} />

        {/* Parent Dashboard Routes */}
        <Route path="/parent-dashboard" element={<ParentDashboard />}>
          <Route index element={<Navigate to="Dashboard" />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="parent-profile" element={<ProfilePage />} />
          <Route path="student-progress" element={<StudentProgressPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="signout" element={<SignOutPage />} />
        </Route>

        {/* Teacher Dashboard Routes */}
        <Route path="/DashboardTeacher" element={<TeacherDashboard />}>
          <Route index element={<Navigate to="TrainerDashboard" />} />
          <Route path="TrainerDashboard" element={<TrainerDashboard />}></Route>
          <Route
            path="teacherProfilePage"
            element={<TeacherProfilePage />}
          ></Route>
          <Route path="TeacherSignOutPage" element={<SignOutPage />}></Route>
          <Route
            path="TeacherStudentProgressPages"
            element={<TeacherStudentProgress />}
          ></Route>
          <Route
            path="TeacherNotificationsPage"
            element={<TeacherNotificationPage />}
          ></Route>
        </Route>

        {/* Catch-all Route for 404 */}
        <Route
          path="*"
          element={
            <h1 className="text-center text-2xl">404 - Page Not Found</h1>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
