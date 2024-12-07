import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: { rejectUnauthorized: false }, // Ensures SSL is used as required by DigitalOcean
});

// Test the connection
async function testConnection() {
    try {
        const conn = await connection.getConnection();
        console.log("Connected to the database successfully!");
        conn.release(); // Release the connection back to the pool
    } catch (error) {
        console.error("Failed to connect to the database:", error.message);
        console.error("Stack Trace:", error.stack);
    }
}

// Call the function to test the connection
testConnection();

export default connection;







// import mysql from 'mysql2/promise';

// const connection = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT,
//     ssl: { rejectUnauthorized: false }, // Ensures SSL is used as required by DigitalOcean
// });

// // Test the connection
// async function testConnection() {
//     try {
//         const conn = await connection.getConnection();
//         console.log("Connected to the database successfully!");
//         conn.release(); // Release the connection back to the pool
//     } catch (error) {
//         console.error("Failed to connect to the database:", error.message);
//         console.error("Stack Trace:", error.stack);
//     }
// }

// // Call the function to test the connection
// testConnection();

// export default connection;
