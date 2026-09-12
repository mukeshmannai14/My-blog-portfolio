const adminAuth = require("../config/firebaseAdmin");

const uid = "vJqznrASWWhlnkD5XxVmPTRa46f1";

const setAdmin = async () => {
  try {
    const user = await adminAuth.getUser(uid);

    await adminAuth.setCustomUserClaims(uid, {
      ...(user.customClaims || {}),
      admin: true,
    });

    console.log("Admin role assigned successfully!");
    console.log("Email:", user.email);

    process.exit(0);
  } catch (error) {
    console.error("Failed to assign admin role:", error.message);
    process.exit(1);
  }
};

setAdmin();