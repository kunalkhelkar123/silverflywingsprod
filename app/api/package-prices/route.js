import db from "../../configs/db"

export async function POST(req, resolve) {
  try {
    const body = await req.json();
    // Log the parsed body data
    console.log("Received body data:", body);
    try {
      const {
        package_id, delux, super_delux, luxury
      } = body;

      console.log("datatatatata",
        package_id, delux, super_delux, luxury);


      const query = `
            INSERT INTO package_prices_master (package_id, delux, super_delux, luxury)
VALUES (?, ?, ?, ?);

          `;

      const values = [
        package_id, delux, super_delux, luxury
      ];


      console.log("query ==> ", query);
      console.log("valuessss==> ", values)
      // Execute the query
      await db.query(query, values).then((resolve) => {

        console.log("sucesss-==>", resolve)
      })

      // Return success response
      return new Response(JSON.stringify({ message: "Package data received" }), {
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




