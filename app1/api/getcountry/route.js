import db from "../../configs/db";

export async function GET(req) {
  try {
    const query = `SELECT country FROM country_master`;
    const [results] = await db.query(query);
    return new Response(
      JSON.stringify({ results, message: "Countries fetched successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Database error:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
