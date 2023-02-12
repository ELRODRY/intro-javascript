/*const getImagenPromesa = () =>
  new Promise((resolve) => resolve('https://ñjkhñdjhdsfkljdhfks.com'));

getImagenPromesa().then(console.log);*/

// A continuacion transforma la funcion comun a una promesa

const getImagen = async () => {
  try {
    const apiKey = '4M1CjdouzbzCNLSDIwQtA2hwReofphx5';
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    console.log(data.images.original.url);

    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (error) {
    //manejo del errr
    console.error(error);
  }
};

getImagen();
