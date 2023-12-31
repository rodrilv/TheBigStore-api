const alpha = ["A", "B", "C", "D", "E", "F", "G"];

function randomNumber() {
  return Math.floor(Math.random() * 6);
}

export const genId = () => {
  return `${randomNumber()}${alpha[randomNumber()]}${randomNumber()}${
    alpha[randomNumber()]
  }${randomNumber()}${alpha[randomNumber()]}${randomNumber()}${
    alpha[randomNumber()]
  }${randomNumber()}${alpha[randomNumber()]}${randomNumber()}${
    alpha[randomNumber()]
  }`;
};
