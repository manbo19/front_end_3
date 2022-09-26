let myNode = document.getElementById("p2");

//parentNode
let ptNode = myNode.parentNode;
//<div id="wrap"> </div>
console.log(ptNode);

//parentNode: [object HTMLDivElement]
console.log(`parentNode: ${ptNode}`);
ptNode.style.color = "blue";
