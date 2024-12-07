import db from "../../configs/db"

export async function POST(req, resolve) {
  try {
    const body = await req.json();
    // Log the parsed body data
    console.log("body tour-itlernary    ", body)


    if (!Array.isArray(body) || body.length === 0) {
      return new Response(
        JSON.stringify({ message: "Invalid or empty data" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    try {
      const query = `
        INSERT INTO tour_itlernary_master (package_id, day, day_title, day_description, day_note)
        VALUES (?, ?, ?, ?, ?)
      `;

      // Iterate over the array
      for (const item of body) {
        const {package_id, day, head, description, notes } = item;

        // Validate each item
        if (!day || !head || !description) {
          console.error("Invalid data:", item);
          // results.push({ day, status: "failed", message: "Missing required fields" });

          return new Response(JSON.stringify({ message: "Missing required fields" }), {
            status: 200,
          });
        }

        try {
          // Execute the insert query
          const [results] = await db.query(query, [package_id, day, head, description, notes || ""]);
          console.log("Insert ID:", results.insertId);
          // Return success response
          
        }

        catch (error) {
          console.error(`Error inserting record for day:`, error.message);
          return new Response(JSON.stringify({ message: "Error inserting record for day" }), {
            status: 500,
          });
          // results.push({ day, status: "failed", message: error.message });
        }
      }


      return new Response(JSON.stringify({ message: "tour_itlernary data Saved" }), {
        status: 200,
      });
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




