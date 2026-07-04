function login() {
    const pwd = document.getElementById("password").value;

    fetch("/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pwd })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            localStorage.setItem("admin_session", data.session);
            window.location.href = "admin.html";
        } else {
            document.getElementById("error").innerText = "Invalid password";
        }
    });
}
