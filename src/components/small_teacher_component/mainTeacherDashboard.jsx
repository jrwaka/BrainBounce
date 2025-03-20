// import { Link, Outlet } from "react-router-dom";
// import { FiBook, FiBarChart2, FiUser, FiGrid, FiPower, FiEye, FiBell } from "react-icons/fi";
// import Dashboard from "./small_parent_component/Dashboard";
// import ProfilePage from "./small_parent_component/parentProfilePage";
// const mainTeacherDashboard = () => {
//   return (
//     <div className="border border-blue-500 flex">
//     <div>
//         {/* Sidebar */}
//                       <div className="w-54 bg-black text-white p-6">
//                         <Link to="/parent-dashboard" className="flex items-center hover:text-yellow-400">
//                           <img src="./src/assets/logo-white.png" className="mb-10 h-12" alt="" />
//                         </Link>
//                         <ul>
//                           <li className="mb-4">
//                             <Link to="/parent-dashboard" className="flex items-center hover:text-yellow-400">
//                               <FiGrid className="mr-2" /> Dashboard
//                             </Link>
//                           </li>
//                           <li className="mb-4">
//                             <Link to="components/small_teacher_component/parent-profile" className="flex items-center hover:text-yellow-400">
//                               <FiUser className="mr-2" /> Profile
//                             </Link>
//                           </li>
//                           <li className="mb-4">
//                             <Link to="/parent-dashboard/student-progress" className="flex items-center hover:text-yellow-400">
//                               <FiBarChart2 className="mr-2" /> Child’s Progress
//                             </Link>
//                           </li>
//                           <li className="mb-4">
//                             <Link to="/parent-dashboard/notifications" className="flex items-center hover:text-yellow-400">
//                               <FiBell className="mr-2" /> Notifications
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//     </div>

//     <div className="p-10">
//         <Dashboard/> 
//         <ProfilePage/>
//     </div> 
//     </div>
//   );
// };

// export default mainTeacherDashboard;
