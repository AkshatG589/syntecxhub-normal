const { Clerk } = require("@clerk/clerk-sdk-node");

const clerk = new Clerk({
  secretKey: process.env.CLERK_SECRET_KEY,
});

/**
 * Extracts Clerk user & privateMetadata from request
 */
async function getUserFromRequest(req) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    // Verify token
    const decoded = await clerk.verifyToken(token);
    const userId = decoded.sub;

    if (!userId) return null;

    // Fetch user
    const user = await clerk.users.getUser(userId);

    return {
      userId,
      user,
      role: user.privateMetadata?.role,
      permissions: user.privateMetadata?.permissions,
      sections: user.privateMetadata?.sections,
      isAdmin: user.privateMetadata?.isAdmin === true,
    };
  } catch (err) {
    console.error("Clerk token verification failed:", err.message);
    return null;
  }
}

module.exports = { getUserFromRequest };
