const jwt = require("jsonwebtoken")



function protect(req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1]; // Extract Bearer token
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded; // Attach user payload to request
    
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
}


module.exports = { protect } 
