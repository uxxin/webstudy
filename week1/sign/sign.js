const signup = document.querySelector("signup");
const modalContainer = document.getElementById("modalContainer");
const modalCloseButton = document.getElementById("modalCloseButton");

signup.addEventListener("submit", function(event) {
    // 모달 표시
    modalContainer.style.display = "flex";
});

modalCloseButton.addEventListener("click", function() {
    modalContainer.style.display = "none"; // 모달 닫기
});