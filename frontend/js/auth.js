
const signinForm = document.getElementById("signinForm");
const signupForm = document.getElementById("signupForm");

// SIGN IN
if (signinForm) {

    signinForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("signinEmail").value.trim();
        const password = document.getElementById("signinPassword").value;

        const message = document.getElementById("signinMessage");

        message.className = "auth-message";

        if (!email || !password) {
            message.textContent = "Please fill in all fields.";
            message.classList.add("error");
            return;
        }

        message.textContent =
            "Sign in form is ready. Connect your authentication backend.";

        message.classList.add("success");

    });

}


// SIGN UP
if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("signupName").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value;

        const message = document.getElementById("signupMessage");

        message.className = "auth-message";

        if (!name || !email || !password) {
            message.textContent = "Please fill in all fields.";
            message.classList.add("error");
            return;
        }

        if (password.length < 8) {
            message.textContent =
                "Password must contain at least 8 characters.";

            message.classList.add("error");
            return;
        }

        message.textContent =
            "Your registration form is ready. Connect your authentication backend.";

        message.classList.add("success");

    });

}
