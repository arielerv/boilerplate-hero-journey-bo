const getAxlesDice = diceNumber => {
  switch (diceNumber) {
    case 1:
      return { x: 540, y: 630 };
    case 2:
      return { x: 720, y: 180 };
    case 3:
      return { x: 630, y: 540 };
    case 4:
      return { x: 720, y: 360 };
    case 5:
      return { x: 450, y: 540 };
    case 6:
      return { x: 720, y: 630 };
    default:
      return { x: 0, y: 0 };
  }
};

export default getAxlesDice;
