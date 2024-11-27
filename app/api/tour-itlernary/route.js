import db from "../../configs/db"

export async function POST(req, resolve) {
  try {
    const body = await req.json();
    // Log the parsed body data
    console.log("Received body data:", body.property_name);
    try {
      const {
        package_id,
        day,
        day_title,
        day_description,
        day_note
      } = body;

      console.log("datatatatata",
        package_id,
        day,
        day_title,
        day_description,
        day_note);


      const query = `
        INSERT INTO tour_itlernary_master (package_id, day, day_title, day_description, day_note)
        VALUES (?, ?, ?, ?, ?)
      `;


      const values = [
        package_id,
        day,
        day_title,
        day_description,
        day_note
      ];

      console.log("query ==> ", query);
      console.log("valuessss==> ", values)
      // Execute the query
      await db.query(query, values).then((resolve) => {

        console.log("success-==>", resolve)
      })

      // Return success response
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




