const apiKey = '4M1CjdouzbzCNLSDIwQtA2hwReofphx5';

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

/*peticion
  .then((resp) => {
    resp.json().then(({ data }) => {
      console.log(data);
    });
  })
  .catch(console.warn);*/

// forma simplificada encadenando los .then
//esto es para obtener la url de la imagen
/*peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    console.log(data.images.original.url);
  })
  .catch(console.warn);*/

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
