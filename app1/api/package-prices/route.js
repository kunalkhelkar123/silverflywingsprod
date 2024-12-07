// import db from "../../configs/db"

// export async function POST(req, resolve) {
//   try {
//     const body = await req.json();
//     // Log the parsed body data
//     console.log("Received body data:", body);
//     try {
//       const {
//         package_id, delux, super_delux, luxury
//       } = body;

//       console.log("datatatatata",
//         package_id, delux, super_delux, luxury);


//       const query = `
//             INSERT INTO package_prices_master (package_id, delux, super_delux, luxury)
// VALUES (?, ?, ?, ?);

//           `;

//       const values = [
//         package_id, delux, super_delux, luxury
//       ];


//       console.log("query ==> ", query);
//       console.log("valuessss==> ", values)
//       // Execute the query
//       await db.query(query, values).then((resolve) => {

//         console.log("sucesss-==>", resolve)
//       })

//       // Return success response
//       return new Response(JSON.stringify({ message: "Package data received" }), {
//         status: 200,
//       });
//     } catch (error) {
//       console.error("Database or internal error:", error);
//       return new Response(JSON.stringify({ message: "Database or internal error" }), {
//         status: 500,
//       });
//     }
//   } catch (error) {
//     console.error("Error initializing POST request:", error);
//     return new Response(
//       JSON.stringify({ error: "Internal server error: " + error.message }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// }





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
      INSERT INTO package_prices_master (package_id, paxDetails, delux, super_delux, luxury)
VALUES (?, ?, ?, ?,?);

    `;

      // Iterate over the array
      for (const item of body) {
        const {
          package_id, paxDetails, pricedelux, pricesuperdelux, priceluxury
        } = item;

        // Validate each item
        if (!paxDetails || !pricedelux || !pricesuperdelux) {
          console.error("Invalid data:", item);
          // results.push({ day, status: "failed", message: "Missing required fields" });

          return new Response(JSON.stringify({ message: "Missing required fields" }), {
            status: 200,
          });
        }

        try {
          // Execute the insert query

          console.log("query ==> ", query)
          console.log("values ==> ", package_id, paxDetails, pricedelux, pricesuperdelux, priceluxury)
          const [results] = await db.query(query, [package_id, paxDetails, pricedelux, pricesuperdelux, priceluxury]);
          console.log("Insert ID:", results.insertId);
          // Return success response

        }

        catch (error) {
          console.error(`Error inserting record for day `, error.message);
          return new Response(JSON.stringify({ message: "Error inserting record for day" }), {
            status: 500,
          });
          // results.push({ day, status: "failed", message: error.message });
        }
      }


      return new Response(JSON.stringify({ message: "package pricing  details  data Saved" }), {
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




