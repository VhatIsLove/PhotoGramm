const getRandomInt = (min, max) => {
  if (min >= max || min < 0 || max < 0) {
    throw new Error("Некорректный диапазон: min не может быть больше max");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const random = getRandomInt(8, 100);
console.log(random);
