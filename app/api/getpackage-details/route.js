
import db from "../../configs/db"

export async function POST(req, resolve) {
  try {
    const body = await req.json();
    console.log("body     ", body)
    try {
      const {
        country
      } = body;
      console.log("id", country);
      const query = `
        SELECT * FROM package_details_master WHERE country=?;

          `;
      console.log("query ==> ", query);
      const [results] = await db.query(query, country);
      console.log("Insert ID:", results);

      // Return success response
      return new Response(
        JSON.stringify({
          results: results,  
          message: "Package data received"
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" }
        }
      );
    } catch (error) {
      console.error("Database or internal error:", error);
      return new Response(JSON.stringify({ message: "Database or internal error" }), {
        status: 500,
      });
    }
  } catch (error) {
    console.error("Error initializing POST request:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error: " + error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}