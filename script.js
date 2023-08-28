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
  btEdit.setAttribute('title', '수정');
  btEdit.setAttribute('style', 'display:none');
  btEdit.append('✎');
  listRight.appendChild(btEdit);
  //삭제 버튼 만들기
  let btDelete = document.createElement('button');
  btDelete.setAttribute('class', 'list_delete');
  btDelete.setAttribute('id', listIds.at(-1)+'list_delete');
  btDelete.setAttribute('onClick', 'ListDelete(this)');
  btDelete.setAttribute('title', '삭제');
  btDelete.append('🗑');
  listRight.appendChild(btDelete);

  newList.appendChild(listRight);

  mainList.appendChild(newList);
});

//엔터키 누르면 입력상태 바꾸는 함수. 
function enterkey(name){
  if (event.keyCode == 13) {

    let input = document.getElementById(parseInt(name.id) + 'list_name');
    if(input == null){
      input = document.createElement('p');
      input.setAttribute('class', 'list_name');

      //상위 요소 찾아서 추가시키기
      name.closest('div').appendChild(input);
    }
    else{
      input.setAttribute('style', 'display:block');
    }
    
    input.setAttribute('id', parseInt(name.id)+'list_name');
    input.innerHTML=name.value;

    name.setAttribute('style', 'display:none');

    document.getElementById(parseInt(name.id) + 'listCheckbox').disabled = false;

    document.getElementById(parseInt(name.id) + 'list_edit').setAttribute('style', 'display:block');    
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

function ListEdit(oButton){
  let text = document.getElementById(parseInt(oButton.id) + 'list_name');
  if(text!=null){
    oButton.setAttribute('style', 'display:none');
    text.setAttribute('style', 'display: none');
    document.getElementById(parseInt(oButton.id) + 'list_name_edit').setAttribute('style', 'display: block');
    document.getElementById(parseInt(oButton.id) + 'listCheckbox').disabled=true;
    document.getElementById(parseInt(oButton.id) + 'listCheckbox').checked=false;
  }
}

function ListDelete(oButton){
  document.getElementById(parseInt(oButton.id) + 'toDoList').remove();
}