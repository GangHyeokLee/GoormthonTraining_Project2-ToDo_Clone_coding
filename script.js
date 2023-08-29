// 헤더 클릭하면 새로운 리스트 나오게 하기
const newListBtn = document.getElementById("newTodo-button");
const listIds = [];

document.onload = setStoredLists(localStorage.getItem('lists'));
function setStoredLists(stored){
  if(stored == null){
    return;
  }

  let lists =  JSON.parse(stored);

  for(let tmp of lists){
    console.log(tmp);
    console.log('loading...')
    if(tmp!=null){
      makeLists(tmp, true);
    }
  }
}

function makeLists(list, loadCheck){
  let id = list.listID;
  let value = list.value;

  console.log(list);

  //상위 컨테이너 호출
  const mainList = document.getElementsByClassName("list_container")[0];

  //새 리스트 만들기
  const newList = document.createElement("div");
  newList.setAttribute("ID", id+"Todo_list");
  newList.setAttribute("Class", "Todo_list");

  //리스트 왼쪽
  let listLeft = document.createElement("div");
  listLeft.setAttribute("class", "list_left");
  //완료 체크박스 만들기
  let cbDone = document.createElement('input');
  cbDone.setAttribute('type', 'checkbox');
  cbDone.setAttribute('class', 'list_done');
  cbDone.setAttribute('id', id+'list_done');
  cbDone.setAttribute('onClick', 'BeDone(this)');
  cbDone.disabled=!loadCheck;
  listLeft.appendChild(cbDone);

  //입력행 만들기
  let listNCon = document.createElement("div");
  listNCon.setAttribute('class', 'list_name_container');

  let input = document.createElement('p');
  input.setAttribute('class', 'list_name');
  input.setAttribute('id', id+'list_name');
  input.innerHTML = value;

  let ipName = document.createElement("input");
  ipName.setAttribute('type', 'text');
  ipName.setAttribute('class', 'list_name_edit');
  ipName.setAttribute('id', id+'list_name_edit');
  ipName.setAttribute('placeholder', '작업 추가');
  ipName.setAttribute('onkeyup', 'enterkey(this)');
  ipName.setAttribute('value', value);
  listNCon.appendChild(ipName);
  listNCon.appendChild(input);

  listLeft.appendChild(listNCon);

  newList.appendChild(listLeft);

  if(loadCheck){
    input.setAttribute('style', 'display: block');
    ipName.setAttribute('style', 'display: none');
  }
  else {
    ipName.setAttribute('style', 'display: block');
    input.setAttribute('style', 'display: none');
  }
  
  
  //리스트 오른쪽
  let listRight = document.createElement('div');
  listRight.setAttribute('class', 'list_right');
  //편집 버튼 만들기
  let btEdit = document.createElement("button");
  btEdit.setAttribute('class','list_edit');
  btEdit.setAttribute('id', id+'list_edit');
  btEdit.setAttribute('onClick', 'ListEdit(this)');
  btEdit.setAttribute('title', '수정');
  loadCheck?btEdit.setAttribute('style', 'display:block'):btEdit.setAttribute('style', 'display:none');
  btEdit.append('✎');
  listRight.appendChild(btEdit);
  //삭제 버튼 만들기
  let btDelete = document.createElement('button');
  btDelete.setAttribute('class', 'list_delete');
  btDelete.setAttribute('id', id+'list_delete');
  btDelete.setAttribute('onClick', 'ListDelete(this)');
  btDelete.setAttribute('title', '삭제');
  btDelete.append('🗑');
  listRight.appendChild(btDelete);

  newList.appendChild(listRight);

  mainList.appendChild(newList);


  listIds[id] = list;

  console.log(listIds);
  //local storage에 저장
  localStorage.setItem('lists', JSON.stringify(listIds));
}

newListBtn.addEventListener("click", () => {
  const tmp = {
    'listID': listIds.length,
    'value':'',
  };
  
  makeLists(tmp, false);
});

//엔터키 누르면 입력상태 바꾸는 함수. 
function enterkey(name){
  if (event.keyCode == 13) {

    let input = document.getElementById(parseInt(name.id) + 'list_name');
    
    input.setAttribute('style', 'display:block');    
    input.innerHTML=name.value;

    name.setAttribute('style', 'display:none');

    document.getElementById(parseInt(name.id) + 'list_done').disabled = false;

    document.getElementById(parseInt(name.id) + 'list_edit').setAttribute('style', 'display:block');
    listIds[parseInt(name.id)]['value']=name.value;

    //Local Storage에 저장
    localStorage.setItem('lists', JSON.stringify(listIds));
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
    document.getElementById(parseInt(oButton.id) + 'list_done').disabled=true;
    document.getElementById(parseInt(oButton.id) + 'list_done').checked=false;
  }
}

function ListDelete(oButton){
  document.getElementById(parseInt(oButton.id) + 'Todo_list').remove();
  
  //배열에서 삭제하기
  delete listIds[parseInt(oButton.id)];

  //변경된 내용 local storage에 저장
  localStorage.setItem('lists', JSON.stringify(listIds));
}