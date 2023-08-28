// 헤더 클릭하면 새로운 리스트 나오게 하기
const newListBtn = document.getElementsByClassName("header_newTodo-button");
const listIds = [];

newListBtn.addEventListener("click", () => {
  const mainList = document.getElementsByClassName("main-container");
  const newList = document.createElement("div");
  newList.setAttribute("ID", "toDoList" + listIds.length);

});

// 리스트 체크박스 클릭하면 작업 끝난 표시하기
function makeListDone(){
  
}