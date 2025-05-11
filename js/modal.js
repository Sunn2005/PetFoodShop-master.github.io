// Hiển thị modal khi trang tải
window.onload = function () {
    const loginModal = document.getElementById('loginModal');
    const firstPage = document.getElementById('first_page');

    // Hiển thị modal và ẩn nội dung trang web
    loginModal.style.display = 'flex';
    // firstPage.style.display = 'none';
};

// Xử lý đăng nhập
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Lấy thông tin từ form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Lấy thông tin người dùng từ Local Storage
    const user = JSON.parse(localStorage.getItem('user'));

    // Kiểm tra thông tin đăng nhập
    if (user && username === user.username && password === user.password) {
        alert("Đăng nhập thành công!");
        document.getElementById('loginModal').style.display = 'none'; // Ẩn modal
        document.getElementById('first_page').style.display = 'block'; // Hiển thị nội dung trang web
    } else {
        const confirmRegister = confirm("Tên đăng nhập hoặc mật khẩu không đúng. Bạn có muốn đăng ký không?");
        if (confirmRegister) {
            window.location.href = "Register/register.html"; // Chuyển đến trang đăng ký
        }
    }
});