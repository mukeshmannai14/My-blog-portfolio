const isAdmin = (req, res, next) => {
  if (!req.user || req.user.admin !== true) {
    return res.status(403).json({
      message: "Admin access required",
    });
  }

  next();
};

module.exports = isAdmin;