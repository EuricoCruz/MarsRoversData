
// Rover Object Goes Here
// ======================

// ======================

const rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [],
};

const obstacle = [{ name: 'hole', x: 5, y: 4 }, { name: 'alien', x: 6, y: 7 }, { name: 'lava', x: 3, y: 9 }];

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
  console.log('moveForward was called');
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
  if(checkObstacle()) {
    console.log("entrou no if");
    rover.x = oldX;
    rover.y = oldY;
  };
}

function moveBackward() {
  console.log('moveBackward was called');
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
  };
}

function sequenceCommands(order) {
  console.log('funcao invocada');
  for (let i = 0; i < order.length; i += 1) {
    if (order[i] === 'F') {
      moveForward(rover);
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

function checkObstacle() {
  let problem = false;
  obstacle.forEach((elemento) => {
    if (rover.x === elemento.x && rover.y === elemento.y) {
      console.log('You found ' + elemento.name + '. You shall not pass.' );
      problem = true;
    }
  });
  return problem; 
};


