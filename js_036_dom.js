let myNode = document.getElementById("p2");

//parentNode
let ptNode = myNode.parentNode;
//<div id="wrap"> </div>
console.log(ptNode);

//parentNode: [object HTMLDivElement]
console.log(`parentNode: ${ptNode}`);
ptNode.style.color = "blue";

//////////////////////////////////////////////////
//previousSiblig
let prevNode = myNode.previousSibling;
//prevNode: [object Text] ->공백을 하나의 텍스트노드로 인식
console.log(`prevNode: ${prevNode}`);

prevNode = prevNode.previousSibling;
//prevNode: [object HTMLParagraphElement]
console.log(`prevNode: ${prevNode}`);

//////////////////////////////////////////////////
//nextSiblig
let nextNode = myNode.nextSibling;
//nextNode: [object Text]
console.log(`nextNode: ${nextNode}`);

nextNode = nextNode.nextSibling;
//nextNode: [object HTMLParagraphElement], content3
console.log(`nextNode: ${nextNode}, ${nextNode.innerText}`);

//////////////////////////////////////////////////
//previousElementSibling
let preEleNode = myNode.previousElementSibling;
//preEleNode: [object HTMLParagraphElement], content1
console.log(`preEleNode: ${preEleNode}, ${preEleNode.innerText}`);

//////////////////////////////////////////////////
//nextElementSibling
let nextEleNode = myNode.nextElementSibling;
//nextEleNode: [object HTMLParagraphElement], content3
console.log(`nextEleNode: ${nextEleNode}, ${nextEleNode.innerText}`);

//////////////////////////////////////////////////
//childNodes
let divNode = document.getElementById("wrap");
//divNode: [object HTMLDivElement]
console.log(`divNode: ${divNode}`);

let divChildNodes = divNode.childNodes;
//divChildNodes: [object NodeList]
console.log(`divChildNodes: ${divChildNodes}`);
//NodeList(7) [text, p#p1, text, p#p2, text, p#p3, text]
console.log(divChildNodes);

//////////////////////////////////////////////////
//children
let divChildren = divNode.children;
//divChildren: [object HTMLCollection]
console.log(`divChildren: ${divChildren}`);
//HTMLCollection(3) [p#p1, p#p2, p#p3, p1: p#p1, p2: p#p2, p3: p#p3]
console.log(divChildren);
console.log(divChildren[0]); //<p id="p1">content1</p>
console.log(divChildren.item(0)); //<p id="p1">content1</p>
console.log(divChildren.namedItem("p1")); //<p id="p1">content1</p>

//////////////////////////////////////////////////
//firstChild, firstElementChild
let pNode = document.getElementById("p4");
let aNode = pNode.firstChild;
//#text
console.log(aNode);

aNode = pNode.firstElementChild;
//<img src="images/gosu.jpg" alt="영화배우 고수">
console.log(aNode);

//////////////////////////////////////////////////
// 객체.getAttribute("속성명"), 객체.setAttribute("속성명","값")
let aAttrNode = aNode.getAttribute("src");
//images/gosu.jpg
console.log(aAttrNode);

aAttrNode = aNode.src;
//http://127.0.0.1:5500/images/gosu.jpg
console.log(aAttrNode);

aNode.setAttribute("title", "스타배우");
console.log(aNode.getAttribute("title"));

aNode.id = "imgGosu";
console.log(aNode.id);
