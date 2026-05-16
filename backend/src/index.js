/*
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
*/

import app from './app.js';
import user_router from './routes/user_route.js';

// Thiết lập route để mở trang web


app.use('/users', user_router);

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './frontend' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

/*

connection.connect(function(error){
    if (error) {
        console.error('Lỗi kết nối đến MySQL:', error);
        return;
    }
    console.log('Kết nối đến MySQL thành công!');

    // Đoạn này là test truy vấn
    connection.query('select * from users', function(error, results, fields) {
        if (error) {
            console.error('Lỗi truy vấn:', error);
            return;
        }
        console.log('Kết quả truy vấn:', results);
    });
});

*/