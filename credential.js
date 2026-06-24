(function () {
    var swipeGate = document.getElementById("swipeGate");
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var statusMsg = document.getElementById("statusMsg");
    var swipeText = document.getElementById("swipeText");
    var loginForm = document.getElementById("loginForm");

    if (!swipeGate || !box1 || !box2 || !statusMsg || !swipeText || !loginForm) {
        return;
    }

    function setStatus(message, type) {
        statusMsg.className = "status-message" + (type ? " " + type + "-state" : "");
        statusMsg.textContent = message;
    }

    function resetSlider(delay) {
        window.setTimeout(function () {
            swipeGate.value = 0;
            swipeText.style.opacity = "1";
        }, delay || 0);
    }

    function canEnter() {
        return box1.value.trim().toUpperCase() === "S" && box2.value === "1";
    }

    function tryLogin() {
        if (canEnter()) {
            setStatus("Access granted. Opening dashboard...", "success");
            localStorage.setItem("mmet_last_login", new Date().toISOString());
            window.setTimeout(function () {
                window.location.href = "front.html";
            }, 500);
            return true;
        }

        setStatus("Only Siva is allowed.", "error");
        resetSlider(220);
        return false;
    }

    swipeGate.addEventListener("input", function () {
        var value = Number(this.value) || 0;
        swipeText.style.opacity = String(Math.max(0, (100 - value) / 100));
    });

    swipeGate.addEventListener("change", function () {
        if (Number(this.value) >= 96) {
            tryLogin();
        } else {
            resetSlider(0);
        }
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        tryLogin();
    });

    [box1, box2].forEach(function (input) {
        input.addEventListener("input", function () {
            if (statusMsg.textContent) {
                setStatus("", "");
            }
        });
    });
})();
