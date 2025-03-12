
document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.getElementById("custom-cursor");

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        cursor.style.display = "block";
    });

    document.addEventListener("mouseleave", () => {
        cursor.style.display = "none";
    });
});

function myfunction() {
    alert("Hello! This is Sohyun's home"); // Alert 표시

    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");
    const body = document.body;
    const cursor = document.getElementById("custom-cursor");

    // 🔥 1초 후 페이드아웃 및 화면 전환
    introScreen.style.opacity = "0";
    setTimeout(() => {
        introScreen.style.display = "none";
        mainContent.style.display = "block";

        // ✅ Alert 이후 새로운 커서로 변경
        body.classList.add("after-alert-cursor"); // 새로운 커서 클래스 추가
    }, 1000);
}