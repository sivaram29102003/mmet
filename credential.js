const swipeGate = document.getElementById('swipeGate');
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const statusMsg = document.getElementById('statusMsg');
    const swipeText = document.getElementById('swipeText');

    // Listens for the user sliding the block
    swipeGate.addEventListener('input', function() {
        // Fade text out as you swipe closer to the edge
        swipeText.style.opacity = (100 - this.value) / 100;
    });
   

    // Triggered when the user releases the slide handle
    swipeGate.addEventListener('change', function() {
        if (parseInt(this.value) === 100) {
            // Check credentials: Box 1 must equal "S", Box 2 must equal "1"
            if (box1.value === 'S' && box2.value === '1') {
                statusMsg.className = "status-message success-state";
                statusMsg.textContent = "Access Granted. Welcome, Siva.";
                // You can add code here to redirect or open your dashboard app
            } else {
                // If wrong, throw user's exact alert message
                statusMsg.className = "status-message error-state";
                statusMsg.textContent = "Siva is only Alowed";
                
                // Instantly snap the slider back to start
                setTimeout(() => {
                    swipeGate.value = 0;
                    swipeText.style.opacity = 1;
                }, 300);
            }
        } else {
            // If released halfway, snap back smoothly
            this.value = 0;
            swipeText.style.opacity = 1;
        }
    });