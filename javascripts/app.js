// Rover Object Goes Here
// ======================

// ======================

var rover = {
  direction: "N",
  x: 0,
  y: 0
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction) {
  case "N": 
  rover.direction = "w"
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

function turnRight(rover){
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

function moveForward(rover){
  console.log("moveForward was called");
  switch(rover.direction){
    case "N":
      rover.y -= 1
      break;
    case "S":
      rover.y += 1
      break;
    case "E":
      rover.x -= 1
      break;
    case "W":
      rover.x += 1
      break;       
  }
  console.log(rover.x, rover.y);
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


