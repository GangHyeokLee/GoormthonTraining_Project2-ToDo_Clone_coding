// 헤더 클릭하면 새로운 리스트 나오게 하기
const newListBtn = document.getElementById("newTodo-button");
const listIds = [];

newListBtn.addEventListener("click", () => {
  const mainList = document.getElementsByClassName("list_container")[0];
  const newList = document.createElement("div");
  newList.setAttribute("ID", listIds.length+"toDoList");
  listIds[listIds.length] = listIds.length;
  newList.setAttribute("Class", "Todo_list")

  //리스트 왼쪽
  let listLeft = document.createElement("div");
  listLeft.setAttribute("class", "list_left");
  //완료 체크박스 만들기
  let cbDone = document.createElement('input');
  cbDone.setAttribute('type', 'checkbox');
  cbDone.setAttribute('class', 'list_done');
  cbDone.setAttribute('id', listIds.at(-1)+'listCheckbox');
  cbDone.setAttribute('onClick', 'BeDone(this)');
  cbDone.disabled=true;
  listLeft.appendChild(cbDone);
  //입력행 만들기
  let listNCon = document.createElement("div");
  listNCon.setAttribute('class', 'list_name_container');
  listNCon.setAttribute('id', listIds.at(-1)+'list_name_container');

  let ipName = document.createElement("input");
  ipName.setAttribute('type', 'text');
  ipName.setAttribute('class', 'list_name_edit');
  ipName.setAttribute('id', listIds.at(-1)+'list_name_edit');
  ipName.setAttribute('placeholder', '작업 추가');
  ipName.setAttribute('onkeyup', 'enterkey(this)');
  listNCon.appendChild(ipName);

  listLeft.appendChild(listNCon);

  newList.appendChild(listLeft);

  //리스트 오른쪽
  let listRight = document.createElement('div');
  listRight.setAttribute('class', 'list_right');
  //편집 버튼 만들기
  let btEdit = document.createElement("button");
  btEdit.setAttribute('class','list_edit');
  btEdit.setAttribute('id', listIds.at(-1)+'list_edit');
  btEdit.setAttribute('onClick', 'ListEdit(this)');
  btEdit.append('✎');
  listRight.appendChild(btEdit);
  //삭제 버튼 만들기
  let btDelete = document.createElement('button');
  btDelete.setAttribute('class', 'list_delete');
  btDelete.setAttribute('id', listIds.at(-1)+'list_delete');
  btDelete.setAttribute('onClick', 'ListDelete(this)');
  btDelete.append('🗑');
  listRight.appendChild(btDelete);

  newList.appendChild(listRight);

  mainList.appendChild(newList);
});

function enterkey(name){
  if (event.keyCode == 13) {
    let input = document.createElement('p');
    input.setAttribute('class', 'list_name');
    input.setAttribute('id', parseInt(name.id)+'list_name');
    input.innerHTML=name.value;

    let closestElement = name.closest('div');
    console.log(closestElement);
    closestElement.appendChild(input);
    name.setAttribute('style', 'display:none');

    let cbDone = document.getElementById(parseInt(name.id) + 'listCheckbox');
    console.log(cbDone);
    cbDone.disabled = false;
    
  }
}

function BeDone(oButton){
  let text = document.getElementById(parseInt(oButton.id) + 'list_name');
  console.log(text);
  if(text!=null){
    if(oButton.checked){
      text.setAttribute('style', 'text-decoration:line-through'); 
    }
    else{
      text.setAttribute('style', 'text-decoration:none'); 
    }
  }
}