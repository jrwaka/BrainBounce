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
import StudentProgressPage from "./components/Parent/studentProgressPage";
// Teacher Components

// Landing Pages
import ParentDashboard from "./components/Parent/parentDashboard";
import ProgressSection from "./components/Student/progressSection";
import StudentDashboard from "./components/Student/studentDashboard";
import LessonsSection from "./components/Student/studentLessonsSection";
import ProfileSection from "./components/Student/studentProfileSection";
import StudentWorkSpace from "./components/Student/StudentWorkSpace";
import TeacherDashboard from "./components/Teacher/DashboardTeacher";
import TeacherLessonsSection from "./components/Teacher/teacherLessonsSection";
import TeacherNotificationPage from "./components/Teacher/teacherNotificationsPage";
import TeacherProfilePage from "./components/Teacher/teacherProfilePage";
import TeacherStudentProgress from "./components/Teacher/TeacherStudentProgressPage";
import TrainerDashboard from "./components/Teacher/TrainerDashboard";
<<<<<<< HEAD
import AddChildProfile from "./pages/addChildProfile";
=======
>>>>>>> 5fdf2871bf42a3d1abd803701538d35e41099782
import LandingPage from "./pages/landingPage";
import ParentLogin from "./pages/Login";
import ParentLandingPage from "./pages/parentLandingPage";
import SignUp from "./pages/SignUp";
import TeacherLandingPage from "./pages/teacherLandingPage";
// Admin Components
import { Toaster } from "react-hot-toast";
import AdminDashboard from "./components/Admin/adminDashboard";
import AdminLessonsSection from "./components/Admin/adminLessonsSection";
import AdminProfileSection from "./components/Admin/adminProfileSection";
import AdminProgress from "./components/Admin/adminProgress";
import AdminWorkSpace from "./components/Admin/AdminWorkSpace";
<<<<<<< HEAD

=======
>>>>>>> 5fdf2871bf42a3d1abd803701538d35e41099782
const App = () => {
  return (
    <Router>
      <Toaster position="top-right" removeDelay={1000} />
      <Routes>
        {/* Redirect "/" to landing page */}
        <Route path="/" element={<Navigate to="/landing-page" />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/ParentLogin" element={<ParentLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/parent-landing-page" element={<ParentLandingPage />} />
        <Route path="/teacher-landing-page" element={<TeacherLandingPage />} />

        {/* Parent Dashboard Routes */}
        <Route path="/parentDashboard" element={<ParentDashboard />}>
          <Route index element={<Navigate to="Dashboard" />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="parent-profile" element={<ProfilePage />} />
          <Route path="student-progress" element={<StudentProgressPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
        </Route>

        {/* Teacher Dashboard Routes */}
        <Route path="/DashboardTeacher" element={<TeacherDashboard />}>
          <Route index element={<Navigate to="TrainerDashboard" />} />
          <Route path="TrainerDashboard" element={<TrainerDashboard />}></Route>
          <Route
            path="teacherProfilePage"
            element={<TeacherProfilePage />}
          ></Route>

          <Route
            path="TeacherStudentProgressPages"
            element={<TeacherStudentProgress />}
          ></Route>
          <Route
            path="TeacherLessonsSection"
            element={<TeacherLessonsSection />}
          ></Route>
          <Route
            path="TeacherNotificationsPage"
            element={<TeacherNotificationPage />}
          ></Route>
        </Route>
        <Route path="/studentDashboard" element={<StudentDashboard />}>
          <Route index element={<Navigate to="StudentWorkSpace" />} />
          <Route path="StudentWorkSpace" element={<StudentWorkSpace />}></Route>
          <Route path="progressSection" element={<ProgressSection />}></Route>
          <Route
            path="studentLessonsSection"
            element={<LessonsSection />}
          ></Route>
          <Route
            path="studentProfileSection"
            element={<ProfileSection />}
          ></Route>
        </Route>

        {/* Admin Dashboard Routes */}
        <Route path="/adminDashboard" element={<AdminDashboard />}>
          <Route index element={<Navigate to="AdminWorkSpace" />} />
          <Route path="AdminWorkSpace" element={<AdminWorkSpace />}></Route>
          <Route
            path="adminLessonsSection"
            element={<AdminLessonsSection />}
          ></Route>
          <Route path="adminProgress" element={<AdminProgress />}></Route>
          <Route
            path="adminProfileSection"
            element={<AdminProfileSection />}
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
