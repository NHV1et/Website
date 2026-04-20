import dotenv from "dotenv";
import connectDB from "./config/database.js"; // File này bạn đã sửa sang MySQL ở bước trước
import app from "./app.js";

// Đảm bảo đường dẫn .env chính xác
dotenv.config({
    path: './.env'
});

const startServer = async () => {
    try {
        
        console.log("Đang kết nối tới MySQL tại:", process.env.DB_HOST);
        await connectDB();

        
        app.on("error", (error) => {
            console.log("EXPRESS ERROR:", error);
            throw error;
        });

        
        const port = process.env.PORT || 8000;
        app.listen(port, () => {
            console.log(`🚀 Server is running at port: ${port}`);
            console.log(`🔗 Truy cập: http://localhost:${port}`);
        });

    } catch (err) {
        
        console.log("MySQL connection failed !!! ", err);
    }
};

startServer();