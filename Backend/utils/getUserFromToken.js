const { verifyToken } = require("@clerk/backend");
/* =====================================================
   Clerk Token Resolver
===================================================== */
async function getUserFromToken(req) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const decoded = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
    });

    const userId = decoded.sub;

    if (!userId) return null;

    return { userId };
  } catch (err) {
    console.error("Clerk token verification failed:", err.message);
    return null;
  }
}

module.exports = getUserFromToken;