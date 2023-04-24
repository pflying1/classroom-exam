const free = {
  width : "100px",
  height : "100px",
  fontWeight : "bold",
  background : "rosybrown"
}

function freeStyle (parent,object){
  const parentStyle = parent.style;

  if (typeof object === "object") {
    for (let i in object) {
      parentStyle[i] = object[i];
    }
  }
}
freeStyle(root,free)