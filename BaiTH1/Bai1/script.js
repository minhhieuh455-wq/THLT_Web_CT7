const track = document.getElementById('productTrack');
const cards = document.querySelectorAll('.product-card');

let currentIndex = 0;
const displayCount = 4; // Số lượng sản phẩm muốn hiển thị cùng lúc trên màn hình
const maxIndex = cards.length - displayCount; 

function slideProducts() {
    if (currentIndex < maxIndex) {
        currentIndex++;
    } else {
        currentIndex = 0; // Quay lại sản phẩm đầu tiên khi chạy hết danh sách
    }
    
    // Tính toán khoảng cách dịch chuyển dựa trên độ rộng của card và gap
    const cardWidth = cards[0].offsetWidth;
    const gap = 20; // Phải bằng giá trị gap trong CSS
    const moveDistance = currentIndex * (cardWidth + gap);
    
    track.style.transform = `translateX(-${moveDistance}px)`;
}

// Tự động chuyển sản phẩm sau mỗi 3000ms (3 giây)
let autoSlide = setInterval(slideProducts, 3000);

// Bổ sung trải nghiệm UX: Dừng lại khi rê chuột vào, chạy tiếp khi bỏ chuột ra
const container = document.querySelector('.carousel-container');

container.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

container.addEventListener('mouseleave', () => {
    autoSlide = setInterval(slideProducts, 3000);
});