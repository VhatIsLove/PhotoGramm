let comment = "Тут находится комментарий";

// случайное число в заданном диапозоне
function getRandomInt(min, max) {
  if (min >= max || min < 0 || max < 0) {
    throw new Error("Минимальное число не может превышать максимальное");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// проверка на длинну комментария
const getCommentLength = (comm, maxLength) => {
  const res = comm.length <= maxLength ? true : false;
  return res;
};

//создание массива объектов
const createObjDescription = () => {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomDescription(),
      likes: getRandomInt(0, 25),
      comments: getRandomComments(),
    };
    photos.push(photo);
  }
  return photos;
};

// описания к фото
function getRandomDescription() {
  const descriptions = [
    "Фотография с моря",
    "Веселая компания",
    "Красивый пейзаж",
    "Моя любимая собака",
    "Выходные в горах",
    "Фотография из поездки",
    "Моя любимая еда",
    "Веселый момент",
    "Красивый город",
    "Моя любимая машина",
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
}

// составление массива комментариев
function getRandomComments() {
  const comments = [];
  const count = getRandomInt(2, 10);
  for (let i = 0; i < count; i++) {
    comments.push({
      text: getRandomCommentText(),
      username: getRandomUsername(),
    });
  }
  return comments;
}

function getRandomCommentText() {
  const texts = [
    "Красивая фотография!",
    "Очень понравилось!",
    "Великолепно!",
    "Мне это напоминает...",
    "Класс!",
    "Супер!",
    "Очень красиво!",
    "Мне это понравилось!",
    "Веселая фотография!",
  ];
  return texts[Math.floor(Math.random() * texts.length)];
}

function getRandomUsername() {
  const usernames = [
    "user123",
    "photoman",
    "traveler",
    "foodie",
    "carlover",
    "mountainman",
    "sealover",
    "citygirl",
    "doglover",
    "adventurer",
  ];
  return usernames[Math.floor(Math.random() * usernames.length)];
}

const photos = createObjDescription();
console.log(photos);
