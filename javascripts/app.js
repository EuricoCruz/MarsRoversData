
// Rover Object Goes Here
// ======================

// ======================

let apolo = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [],
};

let jupiter = {
  direction: 'W',
  x: 0,
  y: 1,
  travelLog: [],
};

let venus = {
  direction: 'N',
  x: 9,
  y: 0,
  travelLog: [],
};
let count = 0;
let rover = apolo;

const obstacle = [{ name: 'hole', x: 5, y: 4 }, { name: 'alien', x: 6, y: 7 }, { name: 'lava', x: 3, y: 9 }];

function checkRoverTurn() {
  if(count === 1) { 
    rover = jupiter;
  } else if(count === 2) {
    rover = venus
  } else if(count === 3) {
    count = 0;
    rover = apolo;
  }
}

function checkObstacle() {
  let problem = false;
  obstacle.forEach((elemento) => {
    if (rover.x === elemento.x && rover.y === elemento.y) {
      console.log('You found ' + elemento.name + '. You shall not pass.' );
      problem = true;
    }
  });
  if (count === 0 && rover.x === venus.x && rover.y == venus.y) {
    console.log('you will crash your rovers')
    problem = true;
  }
  if (count === 0 && rover.x === jupiter.x && rover.y == jupiter.y) {
    console.log('you will crash your rovers')
    problem = true;
  }
  if (count === 1 && rover.x === venus.x && rover.y == venus.y) {
    console.log('you will crash your rovers')
    problem = true;
  }
  if (count === 1 && rover.x === apolo.x && rover.y == apolo.y) {
    console.log('you will crash your rovers')
    problem = true;
  }
  if (count === 2 && rover.x === apolo.x && rover.y == apolo.y) {
    console.log('you will crash your rovers')
    problem = true;
  }
  if (count === 2 && rover.x === jupiter.x && jupiter.y == venus.y) {
    console.log('you will crash your rovers')
    problem = true;
  }
  return problem; 
}

function turnLeft() {
  console.log('turnLeft was called!');
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  }
}

function turnRight() {
  console.log('turnRight was called!');
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
}

function moveForward() {
  let oldX = rover.x;
  let oldY = rover.y; 
  switch (rover.direction) {
    case 'N':
      if (rover.y > 0) {
        rover.y -= 1; 
} else {
        console.log('You will die if you continue');
      }
      break;
    case 'S':
      if (rover.y <= 9) {
        rover.y += 1; 
} else {
        console.log('You will die if you continue');
      }
      break;
    case 'E':
      if (rover.x < 9) {
        rover.x += 1; 
} else {
        console.log('You will die if you continue');
      }
      break;
    case 'W':
      if (rover.x > 0) {
        rover.x -= 1; 
} else {
        console.log('You will die if you continue');
      }
      break;
  }
  if(checkObstacle(rover)) {
    rover.x = oldX;
     rover.y = oldY;
  };
  checkRoverTurn();
  count += 1;
};

function moveBackward() {
  let oldX = rover.x;
  let oldY = rover.y; 
  switch (rover.direction) {
    case 'N':
      if (rover.y < 9 && rover.y >= 0) {
        rover.y += 1;
      } else {
        console.log('You will die if you continue');
      }
      break;
    case 'S':
      if (rover.y > 0 && rover.y < 9) {
        rover.y -= 1;
      } else {
        console.log('You will die if you continue');
      }
      break;
    case 'E':
      if (rover.x > 0) {
        rover.x -= 1;
      } else {
        console.log('You will die if you continue');
      }
      break;
    case 'W':
      if (rover.x < 9) {
        rover.x += 1; 
} else {
        console.log('You will die if you continue');
      }
      break;
  }
  if(checkObstacle()) {
    rover.x = oldX;
    rover.y = oldY;
    count -= 1
  };
  count += 1;
  checkRoverTurn();
};

function sequenceCommands(order) {
  console.log('funcao invocada');
  for (let i = 0; i < order.length; i += 1) {
    if (order[i] === 'F') {
      moveForward();
    } else if (order[i] === 'L') {
      turnLeft();
    } else if (order[i] === 'R') {
      turnRight();
    } else if (order[i] === 'M') {
      moveBackward();
    }
    rover.travelLog.push([rover.x, rover.y]);
  }
}

let grid = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
];
