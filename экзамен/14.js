const imageUrl = "https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg";

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error('Ошибка'));
    };
  });
}

loadImage(imageUrl)
  .then((image) => {
    console.log(image);
  })
  .catch((error) => {
    console.log(error);
  });