function Mino() {
    alert('-')
}

function Plus() {
    alert('+');
}

function Del() {
    alert('delete');
}

function Eat() {
    alert('먹고가요');
}

function Packaging() {
    alert('포장해요');
}
function Home(){
    alert('시작화면으로');
}
function Guide() {
    alert('사용가이드');
}
function FoodInfo() {
    alert('식품정보');
}
function Lang() {
    alert('언어선택');
}
function Suggest() {
    alert('추천메뉴');
}
function SetMenu() {
    alert('세트메뉴');
}
function Buger() {
    alert('단품');
}
function Side() {
    alert('사이드메뉴');
}
function Beverage() {
    alert('음료');
}




someElement.addEventListener(
    "touchmove",
    (e) => {
      // Iterate through the list of touch points that changed
      // since the last event and print each touch point's identifier.
      for (let i = 0; i < e.changedTouches.length; i++) {
        console.log(
          `changedTouches[${i}].identifier = ${e.changedTouches[i].identifier}`,
        );
      }
    },
    false,
  );


