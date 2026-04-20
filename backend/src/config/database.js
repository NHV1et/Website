import mysql from "mysql2/promise"; // Dùng bản promise để xài được await
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        // Tạo connection instance
        const connectionInstance = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT || 3306
        });

        console.log(`\n MySQL connected !!!`);
        console.log(` Host: ${connectionInstance.config.host}`);
        
        return connectionInstance;
    } catch (error) {
        console.log("MySQL connection failed", error);
        process.exit(1);
    }
};

export default connectDB;