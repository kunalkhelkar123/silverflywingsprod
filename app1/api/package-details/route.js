import db from "../../configs/db"

export async function POST(req, resolve) {
  try {
    const body = await req.json();
    // Log the parsed body data
    console.log("body     ", body)

    try {
      const {
        package_name, package_duration, country, cities, packageprice
      } = body; 

      console.log("datatatatata", package_name, package_duration, country, cities,packageprice);


      const query = `
           INSERT INTO package_details_master (package_name, package_duration, country, cities,packageprice )
VALUES (?, ?, ?, ?,?);

          `;

      const values = [
        package_name, package_duration, country, cities,packageprice
      ];


      console.log("query ==> ", query);
      console.log("valuessss==> ", values)
      // Execute the query
      const [results] = await db.query(query, values);

      console.log("Insert ID:", results.insertId);
      // resolve.json({ insertId: results.insertId , message: "Package data received"  });

      // Return success response
      return new Response(
        JSON.stringify({
          insertId: results.insertId,  // Assuming 'results' contains the inserted row data
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






