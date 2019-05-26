// Rover Object Goes Here
// ======================

// ======================

var rover = {
  direction: "N",
  x: 5,
  y: 5, 
  travelLog: []
}

function turnLeft(){
  console.log("turnLeft was called!");
  switch(rover.direction) {
  case "N": 
  rover.direction = "W"
  break;
  case "E": 
  rover.direction = "N"
  break;
  case "S": 
  rover.direction = "E"
  break;
  case "W":
  rover.direction = "S"
  break;
  }
}

function turnRight(){
  console.log("turnRight was called!");
  switch(rover.direction) {
    case "N": 
    rover.direction = "E"
    break;
    case "E": 
    rover.direction = "S"
    break;
    case "S": 
    rover.direction = "W"
    break;
    case "W":
    rover.direction = "N"
    break;  
  }
}

function moveForward(){
  console.log("moveForward was called");
  switch(rover.direction){
    case "N":
      if(rover.y > 0) {
      rover.y -= 1
      }
      break;
    case "S":
      if(rover.y < 9) {
      rover.y += 1
      }
      break;
    case "E":
      if(rover.x > 0){
      rover.x -= 1
      }
      break;
    case "W":
      if(rover.x < 9){
      rover.x += 1
      }
      break;       
  }
}

function moveBackward(){
  console.log("moveBackward was called");
  switch(rover.direction){
    case "N":
      if(rover.y > 0 && rover.y < 9) {
      rover.y += 1
      }
      break;
    case "S":
      if(rover.y < 9) {
      rover.y -= 1
      }
      break;
    case "E":
      if(rover.x > 0){
      rover.x += 1
      }
      break;
    case "W":
      if(rover.x < 9){
      }
      break;       
  }
}

function sequenceCommands(order) {
  console.log("funcao invocada")
  for(var i = 0; i < order.length; i += 1){
    if(order[i] === "F"){
      moveForward(rover);
    } else if(order[i] === "L"){
      turnLeft();
    } else if(order[i] === "R") {
        turnRight();
    }
    rover.travelLog.push([rover.x, rover.y]);
  }
}

var grid = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
]


