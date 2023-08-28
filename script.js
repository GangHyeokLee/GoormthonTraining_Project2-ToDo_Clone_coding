// 헤더 클릭하면 새로운 리스트 나오게 하기
const newListBtn = document.getElementById("newTodo-button");
const listIds = [];

newListBtn.addEventListener("click", () => {
  const mainList = document.getElementsByClassName("list_container")[0];
  const newList = document.createElement("div");
  newList.setAttribute("ID", "toDoList" + listIds.length);
  listIds[listIds.length] = listIds.length;
  newList.setAttribute("Class", "Todo_list")

  //리스트 왼쪽
  let listLeft = document.createElement("div");
  listLeft.setAttribute("class", "list_left");
  //완료 체크박스 만들기
  let cbDone = document.createElement('input');
  cbDone.setAttribute('type', 'checkbox');
  cbDone.setAttribute('class', 'list_done');
  cbDone.setAttribute('id', 'listCheckbox'+listIds.at(-1));
  listLeft.appendChild(cbDone);
  //입력행 만들기
  let listNCon = document.createElement("div");
  listNCon.setAttribute('class', 'list_name_container');
  listNCon.setAttribute('id', 'list_name_container'+listIds.at(-1));

  let ipName = document.createElement("input");
  ipName.setAttribute('type', 'text');
  ipName.setAttribute('class', 'list_name_edit');
  ipName.setAttribute('id', 'list_name_edit'+listIds.at(-1));
  ipName.setAttribute('placeholder', '작업 추가');
  ipName.setAttribute('onkeyup', 'enterkey()');
  listNCon.appendChild(ipName);

  listLeft.appendChild(listNCon);

  newList.appendChild(listLeft);

  //리스트 오른쪽
  let listRight = document.createElement('div');
  listRight.setAttribute('class', 'list_right');
  //편집 버튼 만들기
  let btEdit = document.createElement("button");
  btEdit.setAttribute('class','list_edit');
  btEdit.setAttribute('id', 'list_edit'+listIds.at(-1));
  btEdit.setAttribute('onClick', 'ListEdit()');
  btEdit.append('✎');
  listRight.appendChild(btEdit);
  //삭제 버튼 만들기
  let btDelete = document.createElement('button');
  btDelete.setAttribute('class', 'list_delete');
  btDelete.setAttribute('id', 'list_delete' + listIds.at(-1));
  btDelete.setAttribute('onClick', 'ListDelete()');
  btDelete.append('🗑');
  listRight.appendChild(btDelete);

  newList.appendChild(listRight);

  mainList.appendChild(newList);
});