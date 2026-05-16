// Đợi cho DOM load xong
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            // 1. Ngăn chặn trình duyệt tự động load lại trang
            event.preventDefault();

            // 2. Thu thập dữ liệu từ các ô input
            const formData = new FormData(loginForm);
            const data = Object.fromEntries(formData.entries());

            console.log("Dữ liệu chuẩn bị gửi:", data);

            try {
                // 3. Gọi hàm fetch để gửi dữ liệu lên server
                const response = await fetch(loginForm.action, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data) // Chuyển object thành chuỗi JSON
                });

                // 4. Xử lý phản hồi từ server (giả định server trả về JSON)
                if (response.ok) {
                    const result = await response.json();
                    alert("Đăng nhập thành công!");
                } else {
                    alert("Có lỗi xảy ra: " + response.status);
                }
            } catch (error) {
                console.error("Lỗi kết nối:", error);
                alert("Không thể kết nối đến server (Backend chưa chạy)");
            }
        });
    }
});