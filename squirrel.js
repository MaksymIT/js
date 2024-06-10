// squirrel.js
document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('no-button');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    
    noButton.addEventListener('mouseenter', () => {
        moveButton(noButton);
    });

    function moveButton(button) {
        const buttonRect = button.getBoundingClientRect();

        const maxLeft = containerRect.width - buttonRect.width;
        const maxTop = containerRect.height - buttonRect.height;

        // Устанавливаем максимальное расстояние от центра
        const maxDistance = 140;

        // Генерируем случайные координаты в пределах ограниченной области
        const randomLeft = Math.min(Math.max(0, Math.random() * maxLeft), maxDistance);
        const randomTop = Math.min(Math.max(0, Math.random() * maxTop), maxDistance);

        button.style.transform = `translate(${randomLeft}px, ${randomTop}px)`;
    }
});
