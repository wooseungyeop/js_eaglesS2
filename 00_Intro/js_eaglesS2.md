<div>

 <p id="목차"><p>  
 <H2> 목차 </H2>

 </div>
    <a href="#part1"> part 1. 승엽님 파트</a></br>
    <a href="#part2"> part 2. 은석님 파트</a></br>
    <a href="#part3"> part 3. 주순태 파트</a></br>
    <a href="#part4"> part 4. 서현님 파트</a></br>
    <a href="#part5"> part 5. 정한님 파트</a>

---

<p id="part1"><p>
# javascript

1. 자바 스크립트 : 동적인 기능을 구현하기 위한 프로그래밍 언어 이벤트 기반으로 동작하며, 외부이벤트에 반응하여 동작함.
    1. 동적인 기능 : 사용자와 상호작용 가능 
    2. 비동기적인 기능 :  하나의 작업을 시작한 후에도 다른 작업을 동시 수행 가능(콜백 함수 Promise)
    3. 비동기 통신 : 한 작업이 완료 될 때 까지 다른 작업을 기다리지 않고 계속 실행 
    
    AJAX(Asynchronous JavaScript and XML) : 동적으로 데이터 로드나 통신 할 때 사용하는 기술 
    4. 이벤트 기반으로 동작 됨 사용자의 상호작용이나 외부 이벤트에 반응 - > 이벤트 핸들러 실행 → 해당 버튼에 대한 동작 수행
        1. 이벤트 핸들러 : 특정 이벤트가 발생했을 때 실행되는 함수 (콜백 함수, Promise)
        2. 외부 이벤트는 사용자의 입력(마우스 클릭, 키보드 입력)
        
    5. node.js : 자바 스크립트의 런타임 환경
    자바 스크립트와의 연결점 :
        - 언어 : 노드는 자바스크립트를 사용하여 서버 측 애플리케이션을 개발하는데 사용
        - 런타임 환경 : 노드는 자바스크립트 코드를 실행하는 런타임 환경
        
        비동기 이벤트 기반 아키텍처를 기반으로 하며, 대규모 데이터를 처리
        단일 언어 사용, 빠른 개발, 확장성
        
        1. 비동기 이벤트 : 이벤트는 특정 조건이나 사용자의 동작에 의해 발생 작업이 완료 될 때 까지 다른 작업을 기다리지 않음
            1. 이벤트 리스너(함수) : 이벤트가 발생하면 등록된 이벤트 리스너가 호출되어 해당 이벤트에 대한 작업을 수행 
            
            ex) 사용자의 동작(마우스 클릭, 키보드 입력)이벤트가 발생하면 해당 이벤트 리스너가 호출되어 처리해줌
            2. 콜백 함수 : 다른 함수의 인자로 전달되어 특정 작업이 완료되었을 때 실행되는 함수
            비동기적인 작업에 사용 됨 ex) http 요청, 파일 읽기, 이벤트 처리
            ex) setTimeout 함수를 사용할 때
            
            ```jsx
            setTimeout(function(){
            	console.log('일정 시간이 지난 후에 실행될 콜백 함수');
            }), 3000); 3초 후 실행 됨
            ```
            
        2. 아키텍처 : 시스템, 소프트웨어 구조, 구성 요서 간의 상호 작용
        3. I/O 바운드 작업 : 입출력 관련된 작업을 수행할 때 발생하는 작업
        4. 단일 스레드/멀티 스레드 : 단일 스레드는 한 번의 하나의 작업만 처리 가능
        주로 자바스크립트 엔진에서 발생 동기적인 발생
        
        비동기적인 처리 방식에선 (콜백 함수, Promise 등등 )
        Promise : true or false에 따라 처리할 수 있는 객체, 콜백 지옥 방지 
        
        멀티 스레드 : 컴퓨터 프로세스 내에서 동시에 여러 개의 스레드가 실행되는 것
        동기화 문제같은 복잡성이 발생할 수 있다. (뮤텍스, 세마포어) 
        5. npm (node Package Manager) : node 패키지를 관리하고 배포하는 도구
        npm을 통해 협업과 관리 cmd npm install 라이브러리 설치 가능
        
        ===========================================================
        
        1. 프로퍼티 값
            1. 객체의 속성에 할당된 값(데이터)
            2. 객체 : 속성 - 값의 집합이며 각 속성은 이름 과 값으로 구성
            3. 다양한 데이터의 타입을 가질 수 있다.
                1. ex) number, string, 객체, 배열, 함수 등등
            
            ```jsx
            const product = {  // product 라는 객체에 id, price 라는 속성을 2개 갖음
            	id:id,           // id 속성의 값은 id
            	price, price     // price 속성의 값은 price
            }
            console.log(product);
            ```

<a href="#목차"> 목차로</a>

---

<p id="part2"><p>
이은석 정리 내용

**JavaScript란?**

JavaScript는 웹 페이지를 동적으로 만들고, 특정 상황(event)에 따라 작동하도록 할 수 있는 프로그래밍 언어입니다. 원래 LiveScript라고 불렸지만, Java의 인기를 활용하기 위해 이름이 변경되었습니다. 브라우저에는 '자바스크립트 가상 머신'이라 불리는 엔진이 내장되어 있으며, JavaScript는 브라우저뿐만 아니라 서버와 다양한 디바이스에서도 실행할 수 있습니다.

**JavaScript의 기능**
JavaScript는 다음과 같은 기능을 제공합니다:
- 모바일 앱 개발
- 업무 자동화
- 데이터 시각화

**자바스크립트 엔진의 동작 원리**
자바스크립트 엔진의 기본 동작 원리는 다음과 같습니다:
1. 엔진이 스크립트를 읽습니다 (파싱).
2. 읽어 들인 스크립트를 기계어로 전환합니다 (컴파일).
3. 기계어로 전환된 코드가 실행됩니다.

**자바스크립트의 제약 사항**
JavaScript는 보안을 위해 다음과 같은 제약을 갖습니다:
- 웹페이지 내 스크립트는 임의의 파일을 읽거나 쓸 수 없습니다.
- 특정 상황에서만 파일 접근이 가능합니다 (예: 사용자가 파일을 선택할 때).
- 카메라나 마이크 접근은 사용자의 명시적인 허가가 필요합니다.
- 동일 출처 정책(Same Origin Policy)에 의해 다른 도메인의 페이지에 접근할 수 없습니다.

**JavaScript의 장점과 단점**
JavaScript는 다음과 같은 장점과 단점을 가집니다:
- 장점:
  - HTML/CSS와 완전히 통합 가능
  - 간단한 작업을 쉽게 처리
  - 모든 주요 브라우저에서 지원
  - 클라이언트와 서버 측 모두에서 사용 가능
- 단점:
  - 연산량이 많은 작업에서는 속도가 느릴 수 있음
  - 클라이언트 브라우저에 대한 액세스로 인해 보안 문제 발생 가능

**JavaScript 사용 예시**
JavaScript는 웹사이트에 동적 기능과 상호작용을 추가하는 데 사용됩니다. 예시로는 Google 애널리틱스 코드, 드롭다운 메뉴, 대화형 캘린더 등이 있습니다.

**Java와 JavaScript의 차이**
Java와 JavaScript는 다른 용도와 목적을 가진 별개의 언어입니다. JavaScript 엔진은 JavaScript 코드를 실행하는 프로그램으로, 현대적 엔진은 JIT 컴파일을 사용하여 성능을 향상시킵니다.

**자바스크립트의 특징**
- 동적 언어: JavaScript는 동적으로 형식을 검사하고 변수를 선언할 수 있는 인터프리터 언어입니다.
- 이벤트 기반: JavaScript는 이벤트를 처리하여 사용자와 상호작용할 수 있습니다.
- 크로스 플랫폼: JavaScript는 대부분의 웹 브라우저에서 동작하며, Node.js와 같은 런타임 환경을 통해 서버에서도 실행할 수 있습니다.
- 객체 지향: JavaScript는 프로토타입 기반의 객체 지향 언어로, 객체와 클래스를 사용하여 코드를 구조화할 수 있습니다.
- 비동기 처리: JavaScript는 콜백 함수, 프로미스, async/await를 통해 비동기 작업을 처리할 수 있습니다.

**자바스크립트의 용도**
JavaScript는 웹 개발, 서버 개발, 모바일 앱 개발, 데스크탑 앱 개발, 게임 개발 등 다양한 용도로 사용됩니다.

**자바스크립트의 동작 원리**
- 파싱: 자바스크립트 엔진이 코드를 읽고 구문 트리(Syntax Tree)로 변환합니다.
- 컴파일: 구문 트리를 바이트코드나 기계어로 컴파일합니다.
- 실행: 컴파일된 코드를 실행합니다.
- 최적화: 실행 중에 코드의 성능을 최적화합니다. JIT(Just-In-Time) 컴파일러를 사용하여 실행 중인 코드를 동적으로 최적화할 수 있습니다.

**주요 개념**
변수, 함수, 객체, 배열, 조건문, 반복문, 이벤트, 비동기 처리 등이 자바스크립트에서 중요한 개념입니다.

변수
 ``` jsx
var x = 5;
var y = 10;
var sum = x + y;
console.log(sum); // 결과: 15
 ```

함수 
``` jsx
function greet(name) {
  console.log("안녕하세요, " + name + "님!");
}

greet("철수"); // 결과: 안녕하세요, 철수님!
``` 

객체
``` jsx
var person = {
  name: "영희",
  age: 25,
  gender: "여성"
};

console.log(person.name); // 결과: 영희
console.log(person.age); // 결과: 25
console.log(person.gender); // 결과: 여성
``` 

배열
``` jsx
var fruits = ["사과", "바나나", "딸기"];
console.log(fruits[0]); // 결과: 사과
console.log(fruits.length); // 결과: 3

``` 
조건문
``` jsx
var hour = new Date().getHours();
var greeting;

if (hour < 12) {
  greeting = "좋은 아침입니다!";
} else if (hour < 18) {
  greeting = "좋은 오후입니다!";
} else {
  greeting = "좋은 저녁입니다!";
}

console.log(greeting);

``` 
반복문
``` jsx
for (var i = 0; i < 5; i++) {
  console.log("숫자: " + i);
}
``` 

이벤트
``` jsx
document.getElementById("myButton").addEventListener("click", function() {
  console.log("버튼이 클릭되었습니다!");
});
``` 

비동기 처리
``` jsx
setTimeout(function() {
  console.log("이 코드는 2초 후에 실행됩니다.");
}, 2000);
``` 
<a href="#목차"> 목차로</a>

---

<p id="part3"><p>
주순태 정리 내용

# 시작
> 자바스크립트를 처음 시작하면서 기본적인 것들을 정리하며 배워보고 간단한 프로그램을 작성할 수 있도록
공부를 시작해 보겠다.

## 1. 자바스크립트를 배워야 하는 이유

> 자바스크립트를 배워야 하는 이유는 여러가지 이고, 그중 몇가지를 알아보겠다.

1. 웹 개발을 위해 필수적 : 자바스크립트는 웹 개발에서 필수적인 언어이다. 대부분의 현대적인 웹 사이트와 웹 애플리케이션은 자바스크립트를 사용하여 구축되며, 이를 통해 웹 페이지를 동적으로 만들고 사용자 상호 작용을 처리할 수 있다.

2. 다양한 플랫폼에서 사용 가능: 자바스크립트는 웹 브라우저뿐만 아니라 서버 사이드에서도 사용할 수 있는 언어이다. Node.js와 같은 플랫폼을 통해 서버 측 애플리케이션을 작성할 수 있으며, 모바일 앱 개발에서도 React Native나 Ionic과 같은 프레임워크를 사용하여 자바스크립트로 애플리케이션을 개발할 수 있다.

> 그외에는 언어가 인기와 수요가 많고, 동적인 웹페이지를 만들수 있으며, 라이브러리와 프레임워크 생태계가 다양하다는 점이 있다.
> 자바스크립트는 현대 웹 개발에서 필수적인 언어이며, 다향한 산업 분야에서도 사용되고 있다. 이러한 이유로  자바스크립트를 배우는 것은 개발자로서의 경쟁력을 향상시키고 다양한 프로젝트에 참여할 수 있는 기회를 제공할 것이다.

---
## 2. 자바스크립트 공부 순서

>자바스크립트는 웹 개발뿐만 아니라 다양한 플랫폼에서 사용되는 매우 강력한 프로그래밍 언어이다.

+ 기초 개념 이해하기 : 변수, 함수, 조건문, 반복문 등 자바스크립트의 기본 개념을 이해하기.

+ 문서 객체 모델(DOM) 이해하기 : DOM은 HTML 문서의 구조화된 표현을 제공하고, 자바스크립트와 HTML/CSS를 연결시켜주는 핵심 개념이다. 이를 통해 웹 페이지의 동적 조작과 변경이 가능하다.

+ 이벤트 처리: 사용자 상호 작용을 다루는 방법을 이해. 클릭, 마우스 오버, 키보드 입력 등 다양한 이벤트에 대응하는 자바스크립트 코드를 작성하는 법을 익혀보자.

+ 라이브러리와 프레임워크: 자바스크립트에는 jQuery, React, Vue.js와 같은 라이브러리와 프레임워크가 있다. 이러한 도구들은 개발을 더욱 효율적으로 만들어줄 수 있다.

---
## 3. 자바스크립트 기초개념
> 이번엔 자바스크립트의 기초적인 개념을 알아보자

### 3.1. 변수(Variables)
변수는 값을 저장하고 참조하기 위한 이름이며, var, let, const를 사	  용하여 선언할 수 있다.
  <br>
   + **var**
   var로 선언된 변수는 함수 스코프를 가지며, 해당 변수가 선언된 함수 내에서만 접근할수 있다. 
   var변수는 동일한 이름의 변수를 여러 번 선언할수 있다. 
   과거에 주로 사용되었으나 ES6 도입 이후 부터 let과 const를 사용한다. 
   일반적으로 최신 자바스크립트에서는 let과 const를 사용하여 변수를 선언하는것이 권장된다. 
   이는 코드의 가독성을 높이고 예기치 않은 오류를 방지할 수 있다. 
   <br>
   + **const**
   const로 선언된 변수는 한 번 값을 할당하면 재할당할 수 없는 상수이다.
   const는 블록 스코프를 가지며, 호이스팅이 발생하지 않는다.
   const로 선언된 객체나 배열의 경우, 해당 객체나 배열의 내용은 변경할 수 있다.
   즉, 객체나 배열의 내부 속성을 변경하는 것은 가능하지만, 새로운 객체나 배열을 할당하는 것은 불가능히다.
   <br>
   + **let**
   let으로 선언된 변수는 재할당 가능한 변수를 의미한다.
   let으로 선언된 변수는 블록 스코프를 가지며, 호이스팅(hoisting)이 발생한다.
   초기화는 호이스팅되지 않는다. 따라서 변수가 선언되기 전에 변수에 접근하면 참조 오류가 발생한다.
   >이것은 변수를 선언할 때 값을 할당하지 않더라도, 선언 이전에 변수에 접근하면 "undefined"를 반환한다는 것을 의미한다. 
   >```javascript
   >	console.log(x); // undefined
   >	var x = 10;
   >```
   > 위 코드에서는 변수 "x"를 선언하고 값을 할당하는데, 변수 "x"를 선언하기 전에도 사용하고 있다. 이때 자바스크립트는 코드를 실행하기 전에 변수 "x"의 선언을 코드 맨 위로 끌어올려서 아래와 같이 해석한다.
   > ```javascript
   >	var x;
   >	console.log(x); // undefined
   >	x = 10;
   >```
   >따라서 위 코드를 실행하면 "undefined"가 출력됩니다.
   >
   >호이스팅은 뒤에서 한번더 다뤄보도록 하겠다.
  
   let은 블록 내에서만 유효하며, 전역 스코프를 가진 변수로 사용할 수도 있다. 
   let은 변수를 선언할 때 값의 변경이 필요한 경우에 사용되며, 가능한한 변수의 스코프를 최대한 제한하는것이 좋다.
   
   + **함수 스코프와 블록 스코프에 대하여**
   > 1. **var** 는 전역 변수로 존재 하거나, 함수 내부에서만 선언할 수 있다. 
   > 따라서 스코프 내부에서 선언된 변수는 함수 내 에서만 접근가능하고, 함수 외부에서는 접근할수 없다는 것이다.
   > (전역 변수로 선언하지 않은 경우)
   >
   > ```javascript
   > var x = 10;
   >
   >function myFunction() {
   > var y = 20;
   >	 console.log(x); // 함수 내에서 전역 변수 x에 접근 가능
   >	 console.log(y); // 함수 내에서 변수 y에 접근 가능
   >}
   >
   >myFunction();
   >
   >console.log(x); // 전역에서 변수 x에 접근 가능
   >console.log(y); // 에러! 함수 외부에서 변수 y에 접근 불가능
   > ```
   >
   > 2. **const, let** 는 전역 변수로 존재 하거나, 모든 스코프 내부에서 선언할 수 있다.
   > 따라서 스코프 내부에서 선언된 변수는 스코프 내 에서만 접근가능하고, 스코프 외부에서는 접근할수 없다는 것이다.
   > (전역 변수로 선언하지 않은 경우)
   > 
   > ```javascript
   > if (true) {
   > 	let x = 10;
   > 	const y = 20;
   > 	console.log(x); // 블록 내에서 변수 x에 접근 가능
   > 	console.log(y); // 블록 내에서 변수 y에 접근 가능
   > }
   >
   > console.log(x); // 에러! 블록 외부에서 변수 x에 접근 불가능
   > console.log(y); // 에러! 블록 외부에서 변수 y에 접근 불가능
   > ```
   
---
### 3.2. 데이터 타입(Data Types)

#### 3.2.1. 자바스크립트의 기본 데이터 타입에는 숫자(number), 문자열(string), 불리언(boolean), null, undefined가 있다.
> 기본 데이터 타입들은 자바스크립트에서 변수에 값을 저장할 때 사용된다. 또한, 자바스크립트는 **동적 타이핑(dynamic typing)**을 지원하기 때문에 변수는 언제든지 다른 타입의 값으로 변경될 수 있다.

  + **숫자(Number)**
  숫자 데이터 타입은 정수(integer)와 부동 소수점 숫자(float)를 포함합니다. 예를 들어, 10, 3.14와 같은 숫자들이 여기에 해당한다.
  <br>
  + **문자열(String) **
  문자열 데이터 타입은 텍스트를 나타냅니다. 작은따옴표(''), 큰따옴표(""), 백틱(``)으로 문자열을 감싸서 표현한다.
  <br>
  + **논리형(Boolean) **
  불리언 데이터 타입은 참(true) 또는 거짓(false)을 나타낸다. 주로 조건문과 논리 연산에 사용된다. 예를 들어, true, false가 여기에 해당한다.
  <br>
  + **null** 
  null은 값이 존재하지 않음을 나타내는 데이터 타입이다. 변수가 선언되었지만 아직 값을 갖지 않는 상태를 나타낸다.
  <br>
  + **undefined **
  undefined는 값이 할당되지 않았음을 나타내는 데이터 타입이다. 변수가 선언되었지만 초기화되지 않았거나, 객체의 속성에 값이 할당되지 않은 경우에 사용된다.
  > **'null'과 'undefined'의 차이**
  자바스크립트에서 값이 없음을 나타내는 두 가지 다른 개념입니다.
  > + **undefined**는 변수가 선언되었지만 값을 할당하지 않은 경우나, 객체의 속성이나 배열의 요소에 값이 할당되지 않은 경우에 나타난다.
  >
  >```javascript
  >	let x;
  >	console.log(x); // undefined
  >```
  > + 객체의 속성이나 배열의 요소에 값이 할당되지 않으면 해당 속성 또는 요소의 값은 undefined가 된다.
  ><br>
  > + **null**은 명시적으로 값이 없음을 나타내는 특별한 값이다. 변수에 명시적으로 null을 할당하여 해당 변수가 값이 없음을 나타낼 수 있다.
  >
  > ```javascript
  >	let y = null;
  >	console.log(y); // nul
  >```
  > + 프로그램이나 개발자에게 명시적으로 값이 없음을 나타내기 위해 사용된다.
  <br>즉, undefined는 값이 아예 할당되지 않은 상태를 나타내는 반면, null은 명시적으로 값이 없음을 나타내는 것이다.
  
#### 3.2.2. 객체(object)는 여러 데이터를 담을 수 있는 컨테이너이며, 배열(array)은 순서가 있는 데이터의 집합이다.

+ **객체(Object)**
  + 객체는 여러 데이터를 담을 수 있는 컨테이너 이다.
  일반적으로 '키'와 '값'을 가지는 쌍으로 이루어져 있다.
  객체는 중괄호 '{}' 로 정의되며, 각 '키'와 같은 콜론 ':' 으로 구분된다.
  >```javascript
  >let person = {
  >	name: 'John',
  >	age: 30,
  >	city: 'New York'
  >};
  >```
  + 위의 예시에서 'person' 이라는 객체는 'name', 'age', 'city' 라는 속성을 가지고 있다.
  <br>
+ **배열(Array)**
  + 배열은 순서가 있는 데이터의 집합이다. 각 항목은 인덱스(index)로 접근할 수 있다. 배열은 대괄호 '[]' 로 정의되며, 각 항목은 쉼표 ',' 로 구분된다.
  
    > ```javascript
    > let fruits = { 'apple', 'banana', 'orange'}
    > ```

   + 위의 예시에서 'fruits' 배열은 과일 이름을 포함하고 있으며, 각 과일은 배열의 순서에 따라 인덱스로 접근할 수 있다.

---
### 3.3. 연산자(Operators)
>연산자 부분은 간단한 예시화 함께 공부해 보겠다.

#### 3.3.1 산술 연산자 (Arithmetic Operators)

 + **덧셈 : '+'**
 > ```javascript
 > let a = 5 + 3; // 8
 >```
 + **뺄셈 : '-'**
 > ```javascript
 > let a = 5 - 3; // 2
 > ```
 + **곱셈 : '*'**
 >```javascript
 > let a = 5 * 3; // 15
 > ```
 + **나눗셈 : '/'**
 > ```javascript
 > let a = 5 / 3; // 1.6667
 > ```
 + **나머지 : '%'**
 > ```javascript
 > let a = 5 % 3; // 2
 > ```
 + **증가 : '++'**
 > ```javascript
 > let a = 5;
 >  a++; // a는 이제 6
 > ```
 + **감소 : '--'**
 > ```javascript
 > let a = 5;
 >  a--; // a는 이제 4
 > ```
 
#### 3.3.2 할당 연산자 (Assignment Operators)

 + **할당 : '='**
 > ```javascript
 > let a = 5;
 > ```
 + **더해서 할당 : '+='**
 > ```javascript
 > let a = 5;
 >  a += 3; // a는 이제 8
 > ```
 + **빼서 할당 : '-='**
 > ```javascript
 > let a = 5;
 >  a -= 3; // a는 이제 2
 > ```
 + **곱해서 할당 : '*='**
 > ```javascript
 > let a = 5;
 >  a *= 3; // a는 이제 15
 > ```
 + **나눠서 할당 : '/='**
 > ```javascript
 > let a = 5;
 >  a /= 3; // a는 이제 1.6667
 > ```
 + **나머지를 구해서 할당 : '%='**
 > ```javascript
 > let a = 5;
 >  a %= 3; // a는 이제 2
 > ```
 
#### 3.3.3 비교 연산자 (Comparison Operators)

 + **같음 : '=='**
 > ```javascript
 > 5 == "5"; // true (값만 비교)
 > ```
 + **엄격하게 같음 : '==='**
 > ```javascript
 > 5 === "5"; // false (값과 타입 모두 비교)
 > ```
 + **다름 : '!='**
 > ```javascript
 > 5 != "5"; // false (값만 비교)
 > ```
 + **엄격하게 다름 : '!=='**
 > ```javascript
 > 5 !== "5"; // true (값과 타입 모두 비교)
 > ```
 + **작음 : '<'**
 > ```javascript
 > 5 < 3; // false
 > ```
 + **작거나 같음 : '<='**
 > ```javascript
 > 5 <= 5; // true
 > ```
 + **큼 : '>'**
 > ```javascript
 > 5 > 3; // true
 > ```
 + **크거나 같음 : '>='**
 > ```javascript
 > 5 >= 5; // true
 > ```
 
#### 3.3.4 논리 연산자 (Logical Operators)

 + **논리 AND : '&&'**
 > ```javascript
 > true && false; // false
 > ```
 + **논리 OR : '||'**
 > ```javascript
 > true || false; // true
 > ```
 + **논리 NOT : '!'**
 > ```javascript
 > !true; // false
 > ```
 
#### 3.3.5 문자열 연산자 (String Operators)

 + **문자열 연결 : '+'**
 > ```javascript
 > let greeting = "Hello, " + "world!"; // "Hello, world!"
 > ```
#### 3.3.6 삼항 연산자 (Ternary Operator)

 + **조건 ? 참일 때 값 : 거짓일 때 값**
 > ```javascript
 > let age = 18;
 >  let canVote = (age >= 18) ? "Yes" : "No"; // "Yes"
 > ```
 
#### 3.3.7 타입 연산자 (Type Operators)

 + **typeof: 변수의 타입을 반환**
 > ```javascript
 > typeof 5; // "number"
 >  typeof "hello"; // "string"
 > ```
 + **instanceof : 객체가 특정 클래스의 인스턴스인지 확인**
 > ```javascript
 > let date = new Date();
 >  date instanceof Date; // true
 > ```
#### 3.3.8 비트 연산자 (Bitwise Operators)

 + **AND : '&'**
 > ```javascript
 > 5 & 1; // 1
 > ```

 + **OR : '|'**
 > ```javascript
 > 5 | 1; // 5
 > ```
 + **XOR : '^'**
 > ```javascript
 > 5 ^ 1; // 4
 > ```
 + **NOT : '~'**
 > ```javascript
 > ~5; // -6
 > ```
 + **왼쪽 시프트 : '<<'**
 > ```javascript
 > 5 << 1; // 10
 > ```
 + **오른쪽 시프트 : '>>'**
 > ```javascript
 > 5 << 1; // 10
 > ```
 + **부호 없는 오른쪽 시프트 : '>>>'**
 > ```javascript
 > 5 >>> 1; // 2
 > ```
 
### 3.4. 조건문(Conditional Statements)
> 자바스크립트의 조건문은 프로그램의 흐름을 제어하는 데 사용되며, 특정조건에 따라 다른 코드 블록을 실행할 수 있도록 한다.

#### 3.4.1. if 문 (if Statement)
if 문은 주어진 조건이 참(true)일 때 코드 블록을 실행한다.
>```javascript
>if (condition) {
>    // condition이 참일 때 실행되는 코드
>}
>```
+ if 문 예제
>```javascript
>let age = 18;
>
>if (age >= 18) {
>    console.log("You are an adult."); // 출력 : "You are an adult."
>}
>```

#### 3.4.2. else 문 (else Statement)
else 문은 if 문의 조건이 거짓(false)일 때 실행되는 코드 블록을 정의한다.
>```javascript
>if (condition) {
>    // condition이 참일 때 실행되는 코드
>} else {
>    // condition이 거짓일 때 실행되는 코드
>}
>```
+ else 문 예제
>```javascript
>let age = 16;
>
>if (age >= 18) {
>    console.log("You are an adult.");
>} else {
>    console.log("You are a minor."); // 출력 : "You are a minor."
>}
>```

#### 3.4.3. else if 문 (else if Statement)
else if 문은 여러 조건을 확인할 때 사용합니다. 첫 번째 조건이 거짓일 때, 다음 조건을 확인한다.
> ```javascript
> if (condition1) {
>    // condition1이 참일 때 실행되는 코드
>} else if (condition2) {
>    // condition1이 거짓이고, condition2가 참일 때 실행되는 코드
>} else {
>    // 위의 모든 조건이 거짓일 때 실행되는 코드
>}
> ```
+ else if 문 예제
> ```javascript
> let score = 85;
>
>if (score >= 90) {
>    console.log("Grade: A");
>} else if (score >= 80) {
>    console.log("Grade: B"); // "Grade: B"
>} else if (score >= 70) {
>    console.log("Grade: C");
>} else {
>    console.log("Grade: F");
>}
> ```

#### 3.4.4. switch 문 (switch Statement)
switch 문은 하나의 변수나 표현식의 값에 따라 여러 코드 블록 중 하나를 실행한다.
> ```javascript
> switch (expression) {
>    case value1:
>        // expression이 value1과 일치할 때 실행되는 코드
>        break;
>    case value2:
>        // expression이 value2와 일치할 때 실행되는 코드
>        break;
>    // 추가적인 case 문들
>    default:
>        // 모든 case가 일치하지 않을 때 실행되는 코드
>}
> ```
+ switch 문 예제
> ```javascript
> let fruit = "apple";
>
>switch (fruit) {
>    case "banana":
>        console.log("This is a banana.");
>        break;
>    case "apple":
>        console.log("This is an apple."); // 출력 :"This is an apple."
>        break;
>    case "orange":
>        console.log("This is an orange.");
>        break;
>    default:
>        console.log("Unknown fruit.");
>}
> ```

#### 3.4.5. 추가적인 조건문 사용

+ 중첩 조건문: 
조건문 안에 또 다른 조건문을 작성하여 복잡한 조건을 처리할 수 있다.

+ 중첩 조건문 예제
> ```javascript
> let age = 20;
>  let isStudent = true;
>
> if (age >= 18) {
>     if (isStudent) {
>         console.log("You are an adult student."); // 출력 :"You are an adult  student."
>     } else {
>         console.log("You are an adult.");
>     }
> } else {
>     console.log("You are a minor.");
> }
> ```

+ 삼항 연산자 : 
간단한 조건문은 삼항 연산자(condition ? expr1 : expr2)로 대체할 수 있다.

+ 삼항 연산자 예제
> ```javascript
> let age = 20;
> let message = (age >= 18) ? "You are an adult." : "You are a minor.";
> console.log(message); // "You are an adult."
> ```

---
### 3.5. 반복문(Loops)
> 자바스크립트의 반복문은 특정 조건이 만족될 때까지 반복해서 코드 블록을 실행할 수 있게 한다.

#### 3.5.1. for 문 (for Statement)
for 문은 반복 횟수가 명확할 때 사용한다.

> ```javascript
> for (initialization; condition; increment) {
>    // 반복 실행할 코드
>}
> ```
+ for 문 예제
> ```javascript
> for (let i = 0; i < 5; i++) {
>    console.log(i); // 0, 1, 2, 3, 4
>}
> ```

#### 3.5.2. while 문 (while Statement)
while 문은 조건이 참(true)인 동안 반복해서 코드 블록을 실행한다.

> ```javascript
> while (condition) {
>    // 조건이 참일 때 반복 실행할 코드
>}
> ```
+ while 문 예제
> ```javascript
> let i = 0;
>
>while (i < 5) {
>    console.log(i); // 0, 1, 2, 3, 4
>    i++;
>}
> ```

#### 3.5.3. do...while 문 (do...while Statement)
do...while 문은 코드 블록을 먼저 실행한 후, 조건이 참인지 확인하여 반복 여부를 결정한다. 따라서 최소 한 번은 실행된다.

> ```javascript
> do {
>    // 최소 한 번 실행할 코드
>} while (condition);
> ```
+ do...while 문 예제
> ```javascript
> let i = 0;
>
>do {
>    console.log(i); // 0, 1, 2, 3, 4
>    i++;
>} while (i < 5);
> ```

#### 3.5.4. for...in 문 (for...in Statement)
for...in 문은 객체의 속성을 반복할 때 사용한다. 객체의 모든 열거 가능한 속성을 순회한다.

> ```javascript
> for (variable in object) {
>    // 객체의 각 속성에 대해 반복 실행할 코드
>}
> ```
+ for...in 문 예제
> ```javascript
> const person = { name: "John", age: 30, city: "New York" };
>
>for (let key in person) {
>    console.log(key + ": " + person[key]);
>    // name: John
>    // age: 30
>    // city: New York
>}
> ```

#### 3.5.5. for...of 문 (for...of Statement)
for...of 문은 배열 또는 이터러블 객체(예: 문자열, 배열, Map, Set)의 요소를 반복할 때 사용한다.

> ```javascript
> for (variable of iterable) {
>    // 각 반복에 대해 실행할 코드
>}
> ```
+ for...of 문 예제
> ```javascript
> const array = [1, 2, 3, 4, 5];
>
>for (let value of array) {
>    console.log(value); // 1, 2, 3, 4, 5
>}
> ```

#### 3.5.6. 반복문의 제어
+ break : 반복문을 완전히 종료한다.

+ continue : 현재 반복을 종료하고, 다음 반복을 계속한다.

---
### 3.6. 함수(Functions)
> 자바스크립트의 함수는 특정 작업을 수행하는 코드 블록이다. 
함수는 코드를 재사용하고 구조화하는 데 중요한 역할을 한다. 
함수는 정의, 호출, 매개변수 전달, 반환값 처리 등 다양한 측면을 가지고 있다. 

#### 3.6.1. 함수 정의

1. 함수 선언 (Function Declaration)
함수 선언을 사용하면 함수 선언 전에 호출할 수 있다. 이는 자바스크립트의 호이스팅 때문이다.

  > ```javascript
  > function 함수이름(매개변수1, 매개변수2) {
  >    // 함수 본문
  >    return 반환값;
  >}
  > ```
  예제
  > ```javascript
  > function add(a, b) {
  >    return a + b;
  >}
  >
  >console.log(add(2, 3)); // 5
  > ```

2. 함수 표현식 (Function Expression)
함수 표현식은 변수에 할당된 함수이다. 함수 표현식은 변수에 할당된 이후에만 호출할 수 있다.

  > ```javascript
  > const 함수이름 = function(매개변수1, 매개변수2) {
  >    // 함수 본문
  >    return 반환값;
  >};
  > ```
  예제
  > ```javascript
  > const multiply = function(a, b) {
  >    return a * b;
  >};
  >
  >console.log(multiply(2, 3)); // 6
  > ```

3. 화살표 함수 (Arrow Function)
화살표 함수는 더 간결한 문법을 제공한다. 일반적으로 익명 함수로 사용된다.
> ```javascript
>const 함수이름 = (매개변수1, 매개변수2) => {
>    // 함수 본문
>    return 반환값;
>};
> ```
예제
> ```javascript
>const subtract = (a, b) => {
>    return a - b;
>};
>
>console.log(subtract(5, 3)); // 2
> ```

#### 3.6.2. 매개변수와 인수
매개변수 (Parameters)
함수 정의 시 사용되는 변수로, 함수 내부에서 값을 받아 처리할 수 있다.

인수 (Arguments)
함수 호출 시 전달되는 값이다.

#### 3.6.3. 기본 매개변수 (Default Parameters)
매개변수에 기본값을 설정하여 함수 호출 시 인수가 전달되지 않았을 때 사용할 값을 지정할 수 있다.

> ```javascript
> function greet(name = "Guest") { // Guest를 기본값으로 지정
>    console.log("Hello, " + name + "!");
>}
>
>greet(); // "Hello, Guest!"
>greet("Alice"); // "Hello, Alice!"
> ```

#### 3.6.4. 반환값 (Return Value)
함수는 return 문을 사용하여 값을 반환할 수 있다. return 문이 없으면 undefined를 반환한다.

#### 3.6.5. 함수의 다양한 형태
1. 익명 함수 (Anonymous Function)
이름이 없는 함수로, 주로 함수 표현식이나 콜백으로 사용된다.
> ```javascript
> const anon = function() {
>    console.log("This is an anonymous function.");
>  };
>
>  anon(); // "This is an anonymous function."
> ```

2. 즉시 실행 함수 (Immediately Invoked Function Expression, IIFE)
정의되자마자 즉시 실행되는 함수이다.
> ```javascript
>(function() {
>    console.log("IIFE runs immediately.");
>  })(); // "IIFE runs immediately."
> ```

#### 3.6.6. 콜백 함수 (Callback Function)
다른 함수의 인수로 전달되어 실행되는 함수이다. 비동기 작업(예: 이벤트 처리, 타이머, AJAX 요청)에서 자주 사용된다.

> ```javascript
>function fetchData(callback) {
>    // 데이터 가져오는 작업
>    let data = "some data";
>    callback(data);
>}
>
>fetchData(function(data) {
>    console.log("Received data: " + data);
>}); // "Received data: some data"
> ```

#### 3.6.7. 고차 함수 (Higher-Order Function)
다른 함수를 인수로 받거나 반환하는 함수이다.

> ```javascript
>function createMultiplier(factor) {
>    return function(x) {
>        return x * factor;
>    };
>}
>
>const doubler = createMultiplier(2);
>console.log(doubler(5)); // 10
> ```

#### 3.6.8. 재귀 함수 (Recursive Function)
함수 내부에서 자기 자신을 호출하는 함수이다. 주로 반복적인 작업이나 트리 구조를 순회할 때 사용된다.

> ```javascript
>function factorial(n) {
>    if (n <= 1) {
>        return 1;
>    }
>    return n * factorial(n - 1);
>}
>
>console.log(factorial(5)); // 120
> ```

> + 풀이법 :  
factorial(5) : 5 > 1이므로, return 5 * factorial(4) 호출
factorial(4) : 4 > 1이므로, return 4 * factorial(3) 호출
factorial(3) : 3 > 1이므로, return 3 * factorial(2) 호출
factorial(2) : 2 > 1이므로, return 2 * factorial(1) 호출
factorial(1) : 1 <= 1이므로, return 1
> + 리턴값 계산 : 
> factorial(2)는 2 X 1 = 2를 반환
factorial(3)는 3 X 2 = 6를 반환
factorial(4)는 4 X 6 = 24를 반환
factorial(5)는 5 X 24 = 120를 반환

---
### 3.7. 스코프(Scope)
> 자바스크립트에서 스코프(scope)는 변수, 함수, 객체 등이 유효한 범위를 의미한다. 즉, 특정 변수나 함수가 어디서 접근 가능한지를 결정한다. 

#### 3.7.1 전역 스코프 (Global Scope)
전역 스코프는 코드의 어느 곳에서든 접근 가능한 범위이다. 전역 스코프에 선언된 변수는 전역 객체의 속성이 된다. 웹 브라우저 환경에서는 window 객체가 전역 객체이다.

#### 3.7.2 함수 스코프 (Function Scope)
함수 스코프는 함수 내에서 선언된 변수들이 함수 내부에서만 유효한 범위를 의미한다. 함수 밖에서는 해당 변수를 접근할 수 없다. var 키워드를 사용하여 선언된 변수는 함수 스코프를 가진다.

#### 3.7.3 블록 스코프 (Block Scope)
블록 스코프는 {} 블록 내부에서만 유효한 범위이다. let과 const 키워드를 사용하여 선언된 변수는 블록 스코프를 가진다. 이 블록은 함수, 조건문, 반복문 등에서 사용된다.

#### 3.7.4 변수 선언 타입별 비교
+ 스코프의 차이: var, let, const
+ var: 함수 스코프를 가지며, 블록 내에서 선언되더라도 함수 내 어디에서나 접근 가능하다.
+ let: 블록 스코프를 가지며, 선언된 블록 내에서만 유효하다.
+ const: 블록 스코프를 가지며, 선언된 블록 내에서만 유효하다. const로 선언된 변수는 재할당할 수 없다.

> 스코프를 잘 이해하면 변수의 유효 범위를 적절히 관리하고, 코드의 가독성과 유지보수성을 높일 수 있다.

---
### 3.8. DOM(Document Object Model)
> 자바스크립트에서 DOM(Document Object Model)은 HTML 문서를 구조화하고 조작하기 위한 API(Application Programming Interface)이다. DOM은 HTML 문서를 트리 구조로 표현하며, 각 요소를 객체로 취급한다. 자바스크립트를 통해 DOM을 조작하면 웹 페이지의 내용을 동적으로 변경할 수 있다.
>
> ❗ DOM 은 같은 페이지로 표시하기에 내용이 방대하므로 추후에 링크를 첨부하겠다.

---

# 마치며

> 자바스크립트를 처음 접하면서 공부한 내용을 정리해보았다.
추후에 각내용 및 추가되는 내용을 추가해보겠다.

<a href="#목차"> 목차로</a>

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<p id="part4"><p>
서현
자바스크립트는 브라우저에서 직접 실행되는 유일한 프로그래밍 언어.
클라이언트 측 스크립트로서 웹 페이지에 동적인 기능을 추가

* 자바스크립트와의 비교
html은 웹 구조와 콘텐츠를 정의하는데 사용된다. 근데 페이지의 동적인 변경이나 상호작용의 구현은 불가능함.
css는 웹 페이지의 스타일, 레이아웃 및 디자인을 정의하는데 사용됨. 그러나 페이지의 동적인 변경은 구현 불가능. 시각적인 표현을 다루는데 사용됨.

* 동적인 기능
- 이벤트 처리 : 사용자의 클릭, 마우스 오버, 키보드 입력 등 ex) 버튼 클릭 시 폼 제출, 이미지에 마우스 올리면 확대 등\
- 동적 콘텐츠 로딩 : 실시간 업데이트 정보나 사용자 맞춤 콘텐츠
- AJAX 요청 : 페이지를 리로드하지 않고도 비동기적으로 데이터를 교환하고 페이지 일부분 업데이트 ex) 채팅앱에서 실시간 메세지 교환, 검색 결과 동적 로드
- 애니메이션 : CSS나 JS를 사용하여 요소들에 애니메이션 효과 추가
- 상태 관리 : 사용자의 상호작용에 따라 페이지의 상태 유지 및 관리 ex) 폼을 작성하고 제출하면 입력된 데이터를 유지하고 처리결과를 표시


클라이언트 측 스크립트란?
자바는 객체 기반 프로그래밍 언어
객체는 속성과 메소드로 구성되는데 속성은 프로퍼티를 나타낸다. 
즉 프로퍼티는 객체의 내부 데이터를 의미하며 키와 값의 쌍으로 구성됨.
프로퍼티 값이 함수면 method?
메서드와 함수의 차이는 함수는 독립적으로 존재함. 메서드는 특정 객체 안에서 그 객체의 동작을 나타냄


비동기처리?

자바스크립트의 장점은 즉시 실행가능하며, 반응형 웹 페이지를 만들 수 있고
호환성이 좋다.

단점은 비동기처리를 위해 콜백을 사용 시 콜백지옥이 발생할 수 있음. 가독성 떨어지고 유지보수 힘듦
변수의 타입이 언제든지 변경가능해서 유연하지만 버그발생가능성도 있다.
클라이언트측에서 실행되므로 코드가 브라우저에 쉽게 노출된다. 그래서 보안문제 신경써야함



자바스크립트의 특징과 주요 개념
-인터프리터 언어가 뭐야?

* 인터프리터 언어
코드가 작성된 후 한 줄씩 바로 실행할 수 있어서 개발과 디버깅이 빠르다.
실행중에 오류가 발생하면 즉시 에러 메세지를 받을 수 있다.
코드의 실행 중에 변수를 정의하거나 수정할 수 있다.
코드를 한 줄씩 해석하고 실행하므로 컴파일 언어에 비해 실행 속도가 느릴 수 있다.
소스 코드가 그대로 배포되어 코드가 쉽게 노출될 수 있음

* 컴파일러 언어
소스 코드를 기계어로 변환하여 실행하므로 실행 속도가 빠름
컴파일러가 코드를 최적화하여 성능 향상
실행 파일 형태로 배포되어 소스 코드가 노출되지 않음
컴파일 시점에 타입을 체크하므로 런타임 에러 줄일 수 있음
컴파일 단계가 필요하여 개발 주기 길어짐
디버깅 복잡
코드를 실행중에 동적으로 수정이 어려움


-동적타입언어:변수의 타입을 변경 가능
-객체 기반 언어: 거의 모든 것이 객체
-클래스 기반 상속이 아닌 프로토타입을 통해 상속을 구현




* 변수와 상수 let이랑 var차이 -> var는 호이스팅
- let은 블록 스코프를 가진다. 그래서 블록 내부에서 선언된 변수는 해당 블록 내에서만 접근할 수 있음. 선언은 호이스팅되지만 초기화는 실제 코드 위치에서 이루어짐. 그래서 변수 선언 이전에 해당 변수에 접근X
그리고 같은 스코프 내에서 변수의 재선언이 불가능하다.

- var는 함수 스코프를 가진다. 함수 내에서 선언된 변수는 함수 전체는 물론 해당 블록 외부에서도 접근 가능. 선언 단계와 초기화 단계가 동시에 이루어지며, 호이스팅이 일어남. 그러나 초기화는 실제 코드 위치에서 이루어진다.
- const는 let과 비슷하지만 한 번 할당된 값을 변경할 수 없다는 점이 다름

-데이터 타입 Number, String, Boolean, undefined, null, Object, Array, Symbol
-연산자
-조건문
-반복문
-함수
-객체 리터럴 키:값 쌍의 집합
-배열
-ES6+ 기능 (템플릿 리터럴, 디스트럭처링, 스프레드 연산자)
-비동기 처리 (콜백, 프로미스, async/await)
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ서현

<a href="#목차"> 목차로</a>

---

<p id="part5"><p>
    
황정한

자바스크립트란?

웹 페이지를 동적으로 만들기 위해 사용하는 프로그래밍 언어?

* 사용자의 상호작용에 따라 웹 페이지의 내용이나 구조가 변화하도록 하는 것을 의미
* 자바스크립트는 이러한 동적 웹 페이지를 구현하는 데 핵심적인 역할
* 예를 들어, 특정 요소의 텍스트를 변경하거나, 새로운 요소를 추가하거나, 기존 요소를 삭제할 수 있다 




자바스크립트는 그 페이지에 상호작용을 추가?
* 상호작용이란 사용자가 웹 페이지와 어떻게 소통하는지를 의미
이벤트(Event): 사용자 행동(클릭, 입력, 마우스 이동 등)을 감지하고 이에 반응하는 방식입니다. 자바스크립트에서는 addEventListener 메서드를 사용하여 이벤트 리스너를 등록할 수 있습니다.
DOM 조작: 자바스크립트를 사용하여 웹 페이지의 HTML 요소를 동적으로 변경할 수 있습니다. 예를 들어, 요소의 텍스트를 변경하거나, 스타일을 수정하거나, 새로운 요소를 추가할 수 있습니다.
비동기 처리: AJAX나 fetch API를 사용하여 서버와 비동기적으로 데이터를 주고받을 수 있습니다. 이를 통해 페이지를 새로 고침하지 않고도 동적으로 콘텐츠를 업데이트할 수 있습니다.





폼 제출?

* 웹 페이지에서 사용자가 입력한 데이터를 서버로 전송하는 과정
*  폼(form)은 텍스트 입력, 체크박스, 라디오 버튼, 드롭다운 리스트 등의 입력 요소를 포함
* 이들 요소에 데이터를 입력한 후 "Submit" 버튼을 클릭하면 폼에 입력된 데이터가 지정된 서버로 전송된다

주요 속성
action: 데이터를 전송할 서버의 URL을 지정합니다.
method: 데이터를 전송하는 방식(GET 또는 POST)을 지정합니다.

* 사용자 경험을 향상시키고, 페이지를 새로 고침하지 않고도 데이터를 서버로 전송할 수 있다
* 기본 폼 제출 막기 및 데이터 처리를 하고 새로고침하지않고 사용자가 입력한 이름을 표시한다
  ajax를 사용하여 비동기적으로 서버에 전송하고 방법을 익히면 더욱 동적이고 응답성좋은 웹페이지를 만들 수있다




AJAX?
 
 * 웹 페이지를 새로 고침하지 않고 서버와 데이터를 주고받을 수 있는 기술
 . 이를 통해 웹 애플리케이션은 더 빠르고 인터랙티브한 사용자 경험을 제공할 수 있다
 
 만약 네이버 로그인을할떄 웹페이지 이탈률을 막고 페이지안에서 로그인상태로 바꿀수 있는 이유 .

 AJAX의 주요 개념
비동기 요청: 서버에 요청을 보내면서 페이지가 새로 고침되지 않고, 응답이 도착하는 동안 다른 작업을 계속할 수 있습니다.
XMLHttpRequest 객체: 전통적인 AJAX 요청을 만들 때 사용되는 객체로, open, send, onreadystatechange 등의 메서드와 속성을 사용합니다.
Fetch API: 더 간편하고 현대적인 비동기 요청 방법으로, 프로미스(Promise)를 기반으로 합니다.



드롭다운 메뉴?
* 드롭다운 메뉴는 사용자가 여러 옵션 중 하나를 선택할 수 있도록 하는 인터페이스 요소입니다. 보통은 선택 항목이 숨겨져 있다가, 사용자가 드롭다운 버튼을 클릭하면 목록이 나타나고 그 중에서 선택할 수 있게 됩니다. 웹 페이지에서는 주로 <select>와 <option> 태그를 사용하여 구현

<select> 태그: 드롭다운 메뉴의 컨테이너 역할을 합니다.
<option> 태그: 드롭다운 메뉴의 각 항목을 나타냅니다.

* 자바스크립트를 사용하여 드롭다운 메뉴를 동적으로 조작할 수 있다. 이를 통해 더 인터랙티브하고 사용자 친화적인 웹 페이지를 만들 수 있다



인터프리터 언어: 자바스크립트는 컴파일이 필요 없이 브라우저에서 바로 실행됩니다.

동적 타이핑: 변수의 타입이 정적으로 정의되지 않고, 실행 도중에 결정됩니다.

객체 지향: 객체 기반의 프로그래밍을 지원합니다.

이벤트 기반: 이벤트 핸들링을 통해 사용자와의 상호작용을 처리할 수 있습니다.




클라이언트 사이드 스크립팅?
* 웹 페이지에서 사용자의 브라우저에서 실행되는 스크립트를 작성하는 것
*  웹 서버가 아닌 사용자의 컴퓨터에서 실행되며, 주로 웹 페이지의 동작과 상호작용을 향상시키기 위해 사용

클라이언트 사이드 스크립팅은 웹 페이지의 인터랙티브성과 동적 기능을 강화하는 중요한 기술입니다. 자바스크립트를 사용하여 사용자의 브라우저에서 실행되는 코드를 작성함으로써 다양한 상호작용을 구현할 수 있습니다. 이를 통해 사용자 경험을 크게 향상시킬 수 있지만, 보안과 호환성 문제를 고려해야 합니다





서버 개발: Node.js를 이용하여 서버 사이드 애플리케이션을 작성할 수 있습니다.

node.js?
* Node.js는 자바스크립트 런타임 환경으로, 서버 사이드 애플리케이션을 작성할 수 있게 해줍니다. 구체적으로, Node.js는 Chrome V8 자바스크립트 엔진을 사용하여 브라우저 외부에서 자바스크립트를 실행할 수 있도록 합니다. 이를 통해 자바스크립트를 클라이언트 사이드뿐만 아니라 서버 사이드에서도 사용할 수 있게 되었습니다.

* Node.js는 자바스크립트를 사용하여 서버 사이드 애플리케이션을 개발할 수 있게 해주는 강력한 런타임 환경입니다. 비동기 I/O 모델과 단일 스레드 이벤트 루프를 통해 높은 성능과 확장성을 제공하며, npm을 통해 다양한 모듈과 패키지를 활용할 수 있습니다. 웹 서버, API 서버, 실시간 애플리케이션 등 다양한 용도로 Node.js를 활용할 수 있습니다. 더 궁금한 점이 있으면 언제든지 질문해 주세요!

비동기 i/o , apl?

* 데이터의 입출력 처리가 프로그램의 실행을 차단하지 않는 방식 다른작업을 동시에 진행 가능
* api 다수의 클라이언트 요청을 빠르고 효율적으로 처리할 수 있는구조  



React Native, Ionic 등의 프레임워크?

* React Native: 모바일 앱을 빠르고 효율적으로 개발하고자 하는 경우, 특히 React 및 JavaScript에 익숙한 경우에 적합합니다.
Ionic: 모바일 앱을 빠르게 개발하고자 하며, 웹 기술에 더 익숙한 경우에 적합합니다. 특히 하이브리드 앱을 개발하고자 하는 경우에 유용합니다.



// var는 ES5 이전 방식
var name = "John";

// let과 const는 ES6 이후 추가된 방식
let age = 25;
const pi = 3.14;

es5 ? es6?



* ES5와 ES6는 JavaScript 언어의 버전을 가리키는 용어입니다.

ES5 (ECMAScript 5)
ES5는 2009년에 발표된 JavaScript의 5번째 버전입니다. 이전 버전에 비해 몇 가지 새로운 기능이 도입되었으며, 이전에 브라우저에서 널리 지원되는 JavaScript의 주요 버전 중 하나입니다. ES5의 주요 특징은 다음과 같습니다:

Strict Mode: 엄격 모드(Strict Mode)가 도입되어 JavaScript의 작동 방식을 엄격하게 제어합니다.
새로운 메서드 및 기능: Array 및 String과 같은 내장 객체에 새로운 메서드 및 기능이 추가되었습니다.
JSON 지원: JSON 객체를 사용하여 JSON 데이터를 쉽게 처리할 수 있습니다.
Function.prototype.bind(): bind() 메서드를 사용하여 함수의 this 값을 고정시킬 수 있습니다.
Object.create(): 프로토타입 기반 객체 지향 프로그래밍을 위해 Object.create() 메서드가 도입되었습니다.
ES6 (ECMAScript 2015)
ES6는 2015년에 발표된 JavaScript의 6번째 버전입니다. ES6는 ES5에 비해 많은 새로운 기능과 문법적 개선을 제공하며, JavaScript 개발을 더욱 효율적이고 편리하게 만들어줍니다. ES6는 대규모 프로젝트에서 코드의 가독성과 유지보수성을 향상시키는데 중점을 두었습니다. ES6의 주요 특징은 다음과 같습니다:

화살표 함수 (Arrow Functions): () => {} 형태의 간결한 함수 표현을 제공합니다.
const 및 let: 블록 스코프 변수를 도입하여 변수의 범위를 제어할 수 있습니다.
클래스 (Classes): 프로토타입 기반의 객체 지향 프로그래밍을 보완하는 클래스 문법을 제공합니다.
템플릿 리터럴 (Template Literals): `` 백틱을 사용하여 멀티라인 문자열과 표현식 보간을 제공합니다.
디스트럭처링 (Destructuring): 배열이나 객체의 속성을 추출하여 변수에 할당할 수 있습니다.
화살표 함수 (Arrow Functions): 함수 내에서 this를 바인딩하는 방식이 명확하고 간편해졌습니다.
Promise: 비동기 코드를 보다 깔끔하게 작성할 수 있는 Promise를 도입했습니다.
모듈 (Modules): import/export 문법을 통해 모듈 시스템을 지원합니다.
결론
ES6는 JavaScript 개발을 현대적이고 효율적으로 만들어주는 많은 새로운 기능을 제공하며, ES5보다 더 많은 개발자들이 사용하고 있습니다. 하지만 여전히 일부 브라우저에서 모든 ES6 기능을 지원하지 않을 수 있으므로, ES5와 ES6 모두를 이해하고 사용하는 것이 중요합니다. ES6는 Babel과 같은 도구를 사용하여 이전 버전의 JavaScript으로 변환할 수 있기 때문에, ES6를 사용하여 개발하고 이를 ES5로 변환하여 브라우저에서 실행할 수 있습니다.

```
// 전통적인 함수 정의
function greet(name) {
  return "Hello, " + name;
}

// 화살표 함수 (ES6 이후)
const greet = (name) => {
  return "Hello, " + name;
}; 
```

화살표 함수?

동기 비동기 ?
* 동기적 작업은 순차적으로 실행되며, 한 작업이 완료될 때까지 다음 작업을 실행하지 않습니다. 반면에 비동기적 작업은 작업의 완료를 기다리지 않고 다음 코드를 실행하며, 나중에 결과가 준비되면 콜백 함수나 프라미스를 통해 처리합니다. JavaScript에서 비동기적 작업은 일반적으로 네트워크 요청, 파일 읽기, 타이머 등의 작업에서 사용됩니다.


JavaScript에서 스코프(Scope)는 변수나 함수가 접근할 수 있는 유효 범위를 의미합니다. 스코프에는 함수 스코프(Function Scope)와 블록 스코프(Block Scope)가 있습니다.

함수 스코프 (Function Scope)
함수 스코프는 변수가 함수 내부에서 선언될 때, 해당 함수 내에서만 유효한 범위를 가집니다. 즉, 함수 내부에서 선언된 변수는 함수 외부에서 접근할 수 없습니다. JavaScript에서 var 키워드로 선언된 변수는 함수 스코프를 가집니다.

예시:
javascript
코드 복사
function myFunction() {
    var x = 10; // 함수 스코프
    console.log(x); // 10
}

myFunction();
console.log(x); // ReferenceError: x is not defined
위 예시에서 x 변수는 myFunction 함수 내부에서 선언되었기 때문에 함수 외부에서는 접근할 수 없습니다.

블록 스코프 (Block Scope)
블록 스코프는 변수가 블록(중괄호 {}) 내부에서 선언될 때, 해당 블록 내부에서만 유효한 범위를 가집니다. 블록은 함수, 조건문, 반복문 등에서 사용되는 중괄호를 의미합니다. JavaScript에서 let과 const 키워드로 선언된 변수는 블록 스코프를 가집니다.

예시:
javascript
코드 복사
{
    let y = 20; // 블록 스코프
    const z = 30; // 블록 스코프
    console.log(y); // 20
    console.log(z); // 30
}

console.log(y); // ReferenceError: y is not defined
console.log(z); // ReferenceError: z is not defined
위 예시에서 y와 z 변수는 블록 내부에서 선언되었기 때문에 블록 외부에서는 접근할 수 없습니다.

차이점 요약
함수 스코프(Function Scope): var 키워드로 선언된 변수는 함수 내부에서만 유효합니다.
블록 스코프(Block Scope): let과 const 키워드로 선언된 변수는 블록 내부에서만 유효합니다.
블록 스코프는 ES6(ECMAScript 2015)에서 도입되었으며, 이를 통해 더 안전하고 예측 가능한 변수를 사용할 수 있게 되었습니다. 블록 스코프를 사용하면 변수의 범위를 더 좁게 제한할 수 있어 코드의 오류를 줄이고 가독성을 높일 수 있습니다.


기본 문법과 데이터 타입

변수 선언: var, let, const
데이터 타입: 숫자, 문자열, 불리언, 객체, 배열, 함수, null, undefined
연산자: 산술 연산자, 비교 연산자, 논리 연산자, 할당 연산자

기본 구조

조건문: if, else if, else, switch
반복문: for, while, do while, for...in, for...of
함수: 함수 선언, 함수 표현식, 화살표 함수

객체와 배열

객체: 객체 리터럴, 객체 생성, 프로퍼티 접근, 메서드
배열: 배열 리터럴, 배열 메서드(push, pop, shift, unshift, map, filter, reduce 등)

스코프와 클로저

스코프: 전역 스코프, 함수 스코프, 블록 스코프
클로저: 클로저의 개념과 활용

ES6+ 문법

템플릿 리터럴: 백틱(``` ``)을 사용한 문자열
디스트럭처링 할당: 배열 및 객체 디스트럭처링
기본 매개변수: 함수의 기본 매개변수 설정
나머지 매개변수와 스프레드 문법: ... 사용
객체 리터럴 개선: 축약된 프로퍼티 이름, 메서드 정의
클래스: 클래스 선언, 생성자, 상속

비동기 프로그래밍

콜백 함수: 기본적인 콜백 패턴
Promise: Promise 객체, then, catch
async/await: 비동기 함수, await 키워드

모듈

ES6 모듈: import, export
CommonJS 모듈: require, module.exports


에러 처리

try/catch: 예외 처리
throw: 예외 발생


고급 객체 지향 프로그래밍

프로토타입: 프로토타입 기반 상속
심볼: Symbol 타입
이터레이터와 제너레이터: Iterator, Generator 함수


브라우저 환경

DOM 조작: getElementById, querySelector, createElement, appendChild 등
이벤트 처리: addEventListener, 이벤트 객체
AJAX: XMLHttpRequest, fetch API


기타 유용한 기능

Map, Set: ES6의 새로운 컬렉션 타입
Proxy와 Reflect: 객체의 동작을 가로채고 제어
정규 표현식: 정규 표현식을 사용한 문자열 검색과 대체

<a href="#목차"> 목차로</a>
