
import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Test the connection
async function testConnection() {
    try {
        await connection.getConnection();
        console.log("Connected to the database");
    } catch (error) {
        console.error("Failed to connect to the database ==>", error);
    }
}

// Call the function to test the connection
testConnection();

export default connection;
