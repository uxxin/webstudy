//요소 불러오기
const modal = document.getElementById("modalContainer");
 //모달창 여는 버튼 openM에 저장
const openM = document.getElementById("modalopenButton");
 //모달창 닫는 버튼 closeM에 저장
const closeM = document.getElementById("modalcloseButton");

//모달열기 버튼 클릭 시 이벤트
openM.addEventListener("click", () => {
  modal.style.display = "flex"; 
  //모달열기 버튼을 누르면 모달창이 표시되도록 하기 위해 display 속성을 flex로 변경
});

//모달 닫기 버튼 클릭 시 이벤트
closeM.addEventListener("click", () => {
  modal.style.display = "none"; 
  //모달 닫기 버튼을 누르면 모달창이 보이지 않도록 하기 위해 display 속성을 none으로 변경
});
