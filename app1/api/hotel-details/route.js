


import db from "../../configs/db"

export async function POST(req, resolve) {
  try {
    const body = await req.json();
    // Log the parsed body data
    console.log("body hotel details    ", body)


    if (!Array.isArray(body) || body.length === 0) {
      return new Response(
        JSON.stringify({ message: "Invalid or empty data" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    try {
      const query = `
      INSERT INTO hotel_details_master (package_id, hotelCountry, delux, super_delux, luxury)
VALUES (?, ?, ?, ?, ?);

     `;

      // Iterate over the array
      for (const item of body) {
        const {
          package_id, hotelCountry, deluxe, superDeluxe, luxury
        } = item;

        // Validate each item
        if (!hotelCountry || !deluxe || !superDeluxe) {
          console.error("Invalid data:", item);
          // results.push({ day, status: "failed", message: "Missing required fields" });

          return new Response(JSON.stringify({ message: "Missing required fields" }), {
            status: 200,
          });
        }

        try {
          // Execute the insert query
          const [results] = await db.query(query, [package_id, hotelCountry, deluxe, superDeluxe, luxury || ""]);
          console.log("Insert ID:", results.insertId);
          // Return success response

        }

        catch (error) {
          console.error(`Error inserting record for day :`, error.message);
          return new Response(JSON.stringify({ message: "Error inserting record for day" }), {
            status: 500,
          });
          // results.push({ day, status: "failed", message: error.message });
        }
      }


      return new Response(JSON.stringify({ message: "hotel details  data Saved" }), {
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




