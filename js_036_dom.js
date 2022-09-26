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
