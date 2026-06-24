const swipeGate = document.getElementById('swipeGate');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const statusMsg = document.getElementById('statusMsg');
const swipeText = document.getElementById('swipeText');

// Fade swipe label as slider moves right
swipeGate.addEventListener('input', function () {
    swipeText.style.opacity = (100 - this.value) / 100;
});

// Triggered on release
swipeGate.addEventListener('change', function () {
    if (parseInt(this.value) === 100) {
        if (box1.value === 'S' && box2.value === '1') {
            statusMsg.className = 'status-message success-state';
            statusMsg.textContent = 'Access Granted. Welcome, Siva.';
            setTimeout(() => {
                window.location.href = 'front.html';
            }, 700);
        } else {
            statusMsg.className = 'status-message error-state';
            statusMsg.textContent = 'Siva is only Allowed';
            setTimeout(() => {
                swipeGate.value = 0;
                swipeText.style.opacity = 1;
            }, 300);
        }
    } else {
        this.value = 0;
        swipeText.style.opacity = 1;
    }
});
