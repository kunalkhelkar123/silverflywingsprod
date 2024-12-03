
import db from "../../configs/db"

export async function POST(req, resolve) {
  try {
    const body = await req.json();
    console.log("body     ", body)
    try {
      const {
        id
      } = body;
      console.log("id", id);
      const SqlGetPackage = `
        SELECT * FROM package_details_master WHERE package_id=?;
          `;

          const SqlGetIouritlernary = `
        SELECT * FROM tour_itlernary_master WHERE package_id=?;
          `;
          const SqlGetHotel = `
          SELECT * FROM hotel_details_master WHERE package_id=?;
            `;

            const SqlGetPricing = `
          SELECT * FROM package_prices_master WHERE package_id=?;
            `;

            const result=[];
            const [GetPackage] = await db.query(SqlGetPackage, id);
            // console.log("GetPackage ",GetPackage )
            result.push(GetPackage)
            const [GetIouritlernary] = await db.query(SqlGetIouritlernary, id);
            result.push(GetIouritlernary)
            // console.log(" GetIouritlernary", GetIouritlernary)
            const [GetHotel] = await db.query(SqlGetHotel, id);
            result.push(GetHotel)
            // console.log(" GetHotel",GetHotel )
            const [GetPricing] = await db.query(SqlGetPricing, id);
            result.push(GetPricing)
            // console.log(" GetPricing", GetPricing)
            console.log("result ==> ", result)

      // Return success response
      return new Response(
        JSON.stringify({
          results: result,  
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