const jwt = require("jsonwebtoken");
const roles = require("../CONFIG/role.config")

function authorize(requiredPermission) {
  return (req, res, next) => {
    const userRole = req.user?.role; 
    console.log(roles[userRole])

    if (!userRole || !roles[userRole]?.includes(requiredPermission)) {
      return res.status(403).json({ message: "Access Denied" });
    }
    next();
  };
}


module.exports= { authorize }