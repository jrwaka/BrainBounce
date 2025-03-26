

const getAdminDashboard = (req, res) => {
   res.status(201).json("Wellcome to ADMIN DASHBOARD") 
    
}
const getTeacherDashboard = (req, res) => {
  res.status(201).json("Wellcome to TEACHER DASHBOARD");
};
 const getParentDashboard = (req, res) => {
   res.status(201).json("Wellcome to PARENT DASHBOARD");
 };

 module.exports= {
    getAdminDashboard,
    getParentDashboard,
    getTeacherDashboard
 }