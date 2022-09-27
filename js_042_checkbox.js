//약관 동의
document.frm.onsubmit = () => {
  let admin = document.frm.admin;
  if (!admin.checked) {
    alert(`약관에 동의해야합니다.`);
    return false;
  }
};

//전체선택
document.frm.allCheck.onclick = function () {
  //   console.log(this.checked); //현재 이벤트가 발생된 객체를 부를 때 this

  //   document.frm.subject1.checked = this.checked;
  //   document.frm.subject2.checked = this.checked;
  //   document.frm.subject3.checked = this.checked;

  let checkgroup = document.querySelectorAll(".checkgroup");
  console.log(checkgroup.length);

  /*
  //Arrow function: this는 상위객체인 document.frm.allCheck를 의미함
  checkgroup.forEach((element) => {
    //<input type="checkbox" name="allCheck" id="allCheck" /> =this
    //    console.log(this);
    element.checked = this.checked;
  });
  */
  ///////////////////////////////////////////////////////////
  let myThis = this; //this를 별도의 함수로 할당 ->document.frm.allCheck를 의미

  //Anonymous function: this는 window 객체를 의미함
  /*
  checkgroup.forEach(function (element) {
    // console.log(this);
    element.checked = myThis.checked;
  });
*/
  ///////////////////////////////////////////////////////////
  //Array.from() :NodeList을 Array로 변경
  /*
  console.log(`${checkgroup}`);

  let myArray = Array.from(checkgroup);
  console.log(`${myArray}`);
  myArray.map(function (element) {
    //console.log(this);
    //this는 window를 가리킴 그래서 함수밖에서 this를 별도의 함수로 할당해서 씀
    element.checked = myThis.checked;
  }); */

  ///////////////////////////////////////////////////////////
  //ES6 Spread Operator: NodeList를 Array로 변경
  let iArray = [...checkgroup];
  iArray.map(function (element) {
    //console.log(this);
    element.checked = myThis.checked;
  });
};
