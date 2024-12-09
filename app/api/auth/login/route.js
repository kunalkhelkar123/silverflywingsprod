import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import db from "../../../configs/db";

// Secret key for JWT (store securely in environment variables)
const JWT_SECRET = process.env.JWT_SECRET;

export const POST = async (request) => {
  let connection;

  try {
    console.log("Inside login");
    const body = await request.json();
    const { email, password } = body;
    console.log("Data from UI:", body);

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

    console.log("Password confirmed from DB:", password);
    console.log("Login successful for user:", email);

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: user.sr_no, // Assuming 'sr_no' is the unique identifier
        email: user.email,
      },
      JWT_SECRET,
      { expiresIn: "2h" } // Token expiration time
    );


    console.log("jwt from login js ==> ", token)
    // Return basic user information and the token
    return NextResponse.json({
      message: "Login successful",
      token, // Include the JWT token
      user: {
        id: user.sr_no,
        email: user.email,
        name: user.name || "Unknown", // Default name if not present
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error during login process:", error);
    return NextResponse.json({ message: "Something went wrong." }, { status: 500 });
  }
 // finally {
  //   if (connection) {
  //     try {
  //       await connection.end();
  //       console.log("Database connection closed.");
  //     } catch (error) {
  //       console.error("Error closing the database connection:", error);
  //     }
  //   }
  // }
};


export async function GET() {
  try {
    console.log("server stoped")
    process.exit(0);
  } catch (error) {
    console.error("Database error:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
