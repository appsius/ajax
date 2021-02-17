'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// ********************************* 1 *********************************
//const getData = function (data, className = '') {
//  const html = `<article class="country ${className}">
//          <img class="country__img" src="${data.flag}" />
//          <div class="country__data">
//            <h3 class="country__name">${data.name}</h3>
//            <h4 class="country__region">${data.region}</h4>
//            <p class="country__row"><span>${+(
//              data.population / 1000000
//            ).toFixed(0)} million</span>POP people</p>
//            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//            <p class="country__row"><span>💰</span>${
//              data.currencies[0].name
//            }</p>
//          </div>
//        </article>`;

//  countriesContainer.insertAdjacentHTML('beforeend', html);
//  countriesContainer.style.opacity = 1;
//};

//const renderError = function (msg) {
//  countriesContainer.insertAdjacentText('beforeend', msg);
//  countriesContainer.style.opacity = 1;
//};

//const getJSON = function (url, errorMsg = 'Something went wrong!') {
//  return fetch(url).then(res => {
//    if (!res.ok) throw new Error(`${errorMsg} ${res.status}`);
//    return res.json();
//  });
//};

//const getPosition = function () {
//  return new Promise((resolve, reject) => {
//    navigator.geolocation.getCurrentPosition(resolve, reject);
//  });
//};

//const getCountryAndNeighbour = async function () {
//  try {
//    const pos = await getPosition();
//    const { latitude: lat, longitude: lng } = pos.coords;

//    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//    const dataGeo = await resGeo.json();
//    if (!resGeo.ok) throw new Error('Problem with geolocation!');

//    const { country } = dataGeo;
//    const resCountry = await fetch(
//      `https://restcountries.eu/rest/v2/name/${country}`
//    );
//    if (!resCountry.ok) throw new Error('Problem with country!');
//    const dataCountry = await resCountry.json();
//    getData(dataCountry[0]);

//    const neighbour = dataCountry[0].borders[0];
//    if (!neighbour) throw new Error('No neighbour found');
//    const resNeigh = await fetch(
//      `https://restcountries.eu/rest/v2/alpha/${neighbour}`
//    );
//    if (!resNeigh.ok) throw new Error('Problem with neighbour!');
//    const dataNeigh = await resNeigh.json();
//    getData(dataNeigh, 'neighbour');

//    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//  } catch (err) {
//    renderError(err);
//    throw err;
//  }
//};

//console.log('1: Gettion locations');

//(async function () {
//  try {
//    const whereYouAre = await getCountryAndNeighbour();
//    console.log(`2: ${whereYouAre}`);
//  } catch (err) {
//    console.error(err);
//  }
//    console.log('3: Operation finished');
//})();

//btn.addEventListener('click', function () {});

// NOTE ********************************* 2 *********************************
//const getCountry = function (data, className = '') {
//  const html = `<article class="country ${className}">
//		<img class="country__img" src="${data.flag}" />
//		<div class="country__data">
//		<h3 class="country__name">${data.name}</h3>
//		<h4 class="country__region">${data.region}</h4>
//		<p class="country__row"><span>👫</span>${+(data.population / 1000000).toFixed(
//      0
//    )} million</p>
//            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//            <p class="country__row"><span>💰</span>${
//              data.currencies[0].name
//            }</p>
//			</div>
//			</article>`;

//  countriesContainer.insertAdjacentHTML('beforeend', html);
//  countriesContainer.style.opacity = 1;
//};

//const renderError = function (msg) {
//  countriesContainer.insertAdjacentText('beforeend', msg);
//  countriesContainer.style.opacity = 1;
//};

//const getJSON = function (url, errorMsg = 'Something went wrong!') {
//  return fetch(url).then(res => {
//    if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);
//    return res.json();
//  });
//};

//const getPosition = function () {
//  return new Promise((resolve, reject) => {
//    navigator.geolocation.getCurrentPosition(resolve, reject);
//  });
//};

//const getCountryAndNeighbour = async function () {
//  try {
//    const pos = await getPosition();
//    const { latitude: lat, longitude: lng } = pos.coords;

//    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//    const dataGeo = await resGeo.json();
//    if (dataGeo.error) throw new Error('Problem with geolocation!');

//    const { country } = dataGeo;
//    const resCountry = await fetch(
//      `https://restcountries.eu/rest/v2/name/${country}`
//    );
//    const dataCountry = await resCountry.json();
//    if (!resCountry.ok) throw new Error('Problem with country data!');
//    getCountry(dataCountry[0]);

//    const neighbour = dataCountry[0].borders[0];
//    const resNeigh = await fetch(
//      `https://restcountries.eu/rest/v2/alpha/${neighbour}`
//    );
//    const dataNeigh = await resNeigh.json();
//    if (!resNeigh.ok) throw new Error('Problem with neighbour data!');
//    getCountry(dataNeigh, 'neighbour');

//    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//  } catch (err) {
//    renderError(err);
//    throw err;
//  }
//};

//console.log('1: Getting data');

//(async function () {
//  try {
//    const cityData = await getCountryAndNeighbour();
//    console.log(`2: ${cityData}`);
//    console.log('3: Operation finished');
//  } catch (err) {
//    console.error(err);
//  }
//})();

//btn.addEventListener('click', function () {
//  getCountryAndNeighbour();
//});

//const getCountryAndNeighbour = function (country) {
//  const request = new XMLHttpRequest();
//  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//  request.send();

//  request.addEventListener('load', function () {
//    const [data] = JSON.parse(this.responseText);
//    console.log(data);

//    //get country data
//    getCountry(data);

//    const [neighbour] = data.borders;
//    if (!neighbour) return;

//    const request2 = new XMLHttpRequest();
//    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//    request2.send();

//    request2.addEventListener('load', function () {
//      const data2 = JSON.parse(this.responseText);
//      console.log(data2);
//      getCountry(data2, 'neighbour');
//    });
//  });
//};

// NOTE ********************************* 3 *********************************
//const getCountry = function (data, className = '') {
//  const html = `<article class="country ${className}">
//          <img class="country__img" src="${data.flag}" />
//          <div class="country__data">
//            <h3 class="country__name">${data.name}</h3>
//            <h4 class="country__region">${data.region}</h4>
//            <p class="country__row"><span>👫</span>${(
//              +data.population / 1000000
//            ).toFixed(0)} million</p>
//            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//            <p class="country__row"><span>💰</span>${
//              data.currencies[0].name
//            }</p>
//          </div>
//        </article>`;
//  countriesContainer.insertAdjacentHTML('beforeend', html);
//  countriesContainer.style.opacity = 1;
//};

//const renderError = function (msg) {
//  countriesContainer.insertAdjacentText('beforeend', msg);
//  countriesContainer.style.opacity = 1;
//};

//const getJSON = function (url, errorMsg = 'Something went wrong!') {
//  return fetch(url).then(res => {
//    if (!res.ok) throw new Error(`${errorMsg} ${res.status}`);
//    return res.json();
//  });
//};

//const getPosition = function () {
//  return new Promise((resolve, reject) => {
//    navigator.geolocation.getCurrentPosition(resolve, reject);
//  });
//};

//const getData = async function () {
//  try {
//    const pos = await getPosition();
//    const { latitude: lat, longitude: lng } = pos.coords;

//    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//    const dataGeo = await resGeo.json();
//    if (dataGeo.error) throw new Error('Problem with location data!');

//    const { country } = dataGeo;

//    const resCountry = await fetch(
//      `https://restcountries.eu/rest/v2/name/${country}`
//    );
//    const dataCountry = await resCountry.json();
//    if (!resCountry.ok) throw new Error('Problem with  country!');

//    getCountry(dataCountry[0]);
//    const neighbour = dataCountry[0].borders[0];

//    const resNeigh = await fetch(
//      `https://restcountries.eu/rest/v2/alpha/${neighbour}`
//    );
//    const dataNeigh = await resNeigh.json();
//    if (!resNeigh.ok) throw new Error('Problem with neighbour ❣!');

//    getCountry(dataNeigh, 'neighbour');

//    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//  } catch (err) {
//    renderError(`💥 ${err}`);
//    throw err;
//  }
//};

//(async function () {
//  try {
//    console.log('1: Getting location');

//    const dataCity = await getData();
//    console.log(`2: ${dataCity}`);

//    console.log('3: Finished operations');
//  } catch (err) {
//    console.error(err);
//  }
//})();

//const getData = function (country) {
//  const request = new XMLHttpRequest();
//  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//  request.send();

//  request.addEventListener('load', function () {
//    const [data] = JSON.parse(this.responseText);
//    console.log(data);

//    getCountry(data);

//    const [neighbour] = data.borders;
//    if (!neighbour) return;

//    const request2 = new XMLHttpRequest();
//    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//    request2.send();

//    request2.addEventListener('load', function () {
//      const data2 = JSON.parse(this.responseText);
//      console.log(data2);
//      getCountry(data2, 'neighbour');
//    });
//  });
//};

//******************************************************************
//*** Coding Challenge #1
//******************************* 1 ********************************
//const whereIAm = function (lat, lng) {
//  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//    .then(res => {
//      if (!res.ok)
//        throw new Error(
//          `Only 3 requests are alllowed per second! (${res.status})`
//        );
//      return res.json();
//    })
//    .then(data => {
//      if (data.error) throw new Error('Coordinates are not true!');
//      console.log(`You are in ${data.city}, ${data.country}`);
//    })
//    .catch(err => {
//      console.log(`${err.message}`);
//    });
//};

//whereIAm(37.91898, 40.1966645);

//************ microtask queue & callback queue 1 ********************
//console.log('Execution started!');
//setTimeout(() => {
//  console.log('Timer 0');
//}, 0);
//Promise.resolve('Promise 1').then(res => console.log(res));
//Promise.resolve('Promise 2').then(res => {
//  for (let i = 0; i < 1000000000; i++) {}
//  console.log(res);
//});
//console.log('Execution end!');

//************ microtask queue & callback queue 2 ********************
//console.log('Execution started!');
//setTimeout(() => {
//  console.log('Timer 0');
//}, 0);
//Promise.resolve('Promise 1').then(res => console.log(res));
//Promise.resolve('Promise 2').then(res => {
//  for (let i = 0; i < 1000000000; i++) {}
//  console.log(res);
//});
//console.log('Execution end!');

//************ microtask queue & callback queue 3 ********************
//console.log('Execution started!');
//setTimeout(() => {
//  console.log('Timer 0!');
//}, 0);
//Promise.resolve('Promise 1').then(res => console.log(res));
//Promise.resolve('Promise 2').then(res => {
//  for (let i = 0; i < 1000000000; i++) {}
//  console.log(res);
//});
//console.log('Execution end!');

// GENERATING PROMISE 1
//const lotteryPromise = new Promise(function (resolve, reject) {
//  setTimeout(() => {
//    if (Math.random() >= 0.5) {
//      resolve('You win the 🚝🚝🚝');
//    } else {
//      reject(new Error('You lost the money 😥😥😥'));
//    }
//  }, 1000);
//});

//lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//const wait = function (seconds) {
//  return new Promise(function (resolve) {
//    setTimeout(resolve, seconds * 1000);
//  });
//};

//wait(1)
//  .then(() => {
//    console.log('Log 1');
//    return wait(1);
//  })
//  .then(() => {
//    console.log('Log 2');
//    return wait(2);
//  })
//  .then(() => {
//    console.log('Log 3');
//    return wait(3);
//  })
//  .then(() => {
//    console.log('Log 4');
//    return wait(4);
//  })
//  .catch(() => console.error('No timeout'));

//******************************* 2 ********************************
//const whereIAm = function (lat, lng) {
//  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//    .then(res => {
//      if (!res.ok) throw new Error('Only 3 requests are allowed per seconds!');
//      return res.json();
//    })
//    .then(data => {
//      if (data.error) throw new Error('No coordinates found!');
//      console.log(`You are in ${data.city}, ${data.country}`);
//    })
//    .catch(err => {
//      console.error(err.message);
//    });
//};

////whereIAm(29929292992929, 43.1640004);
//whereIAm(36.3566484, 43.1640004);

//GENERATE PROMISE 2
//const lotteryPromise = new Promise(function (resolve, reject) {
//  setTimeout(() => {
//    if (Math.random() >= 0.5) {
//      resolve('You win the 🤑🤑');
//    } else {
//      reject(new Error('You lost the money 😥😥'));
//    }
//  }, 1000);
//});

//lotteryPromise
//  .then(res => {
//    console.log(res);
//  })
//  .catch(err => console.error(err));

//const wait = function (seconds) {
//  return new Promise(function (resolve) {
//    setTimeout(resolve, seconds * 1000);
//  });
//};

//wait(1)
//  .then(() => {
//    console.log('Promisifying TIMER');
//    return wait(1);
//  })
//  .then(() => {
//    console.log('Log 1');
//    return wait(2);
//  })
//  .then(() => {
//    console.log('Log 2');
//    return wait(2);
//  })
//  .then(() => {
//    console.log('Log 3');
//    return wait(3);
//  })
//  .then(() => {
//    console.log('Log 4');
//    return wait(4);
//  });

//******************************* 3 ********************************
//const whereIAm = function (lat, lng) {
//  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//    .then(res => {
//      return res.json();
//    })
//    .then(data => {
//      if (data.error) throw new Error('No coordinates found!');
//      console.log(data);
//    })
//    .catch(err => {
//      console.log(err.message);
//    });
//};

//whereIAm(9.0585977, 38.7241055);

//GENERATE PROMISE 3
//const lotteryPromise = new Promise(function (resolve, reject) {
//  setTimeout(() => {
//    if (Math.random() >= 0.5) {
//      resolve('You win the money 🥰');
//    } else {
//      reject(new Error('You lost the money 🩸'));
//    }
//  }, 0);
//});

//lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//const wait = function (seconds = 0) {
//  return new Promise(function (resolve) {
//    setTimeout(resolve, seconds * 1000);
//  });
//};

//wait()
//  .then(() => {
//    console.log('Promisifying starting...');
//    return wait(1);
//  })
//  .then(() => {
//    console.log('Log 1');
//    return wait(2);
//  })
//  .then(() => {
//    console.log('Log 2');
//    return wait(3);
//  })
//  .then(() => {
//    console.log('Log 3');
//    return wait(4);
//  })
//  .then(() => {
//    console.log('Log 4');
//  });

//************************ Challange #2 - 1 ************************
//const wait = function (seconds = 0) {
//  return new Promise(function (resolve) {
//    setTimeout(resolve, seconds * 1000);
//  });
//};

//const createImage = function (imagePath) {
//  return new Promise(resolve => {
//    const img = document.createElement('img');
//    img.src = `./img/${imagePath}`;
//    img.addEventListener('load', function () {
//      document.querySelector('.images').append(img);
//      resolve(img);
//    });
//  });
//};

//wait(2)
//  .then(() => {
//    createImage('img-1.jpg').then(img => {
//      wait(2).then(() => {
//        img.style.display = 'none';
//      });
//    });
//  })
//  .then(() => {
//    return wait(2).then(() => createImage('img-2.jpg'));
//  })
//  .then(img => {
//    wait(2).then(() => {
//      img.style.display = 'none';
//    });
//  })
//  .catch(err => console.error(err));

//************************ Challange #2 - 2 ************************
//const wait = function (seconds = 0) {
//  return new Promise(resolve => {
//    setTimeout(resolve, seconds * 1000);
//  });
//};

//const imageContainer = document.querySelector('.images');
//let currentImage;

//const createImage = function (imagePath) {
//  return new Promise((resolve, reject) => {
//    const img = document.createElement('img');
//    img.src = `/img/${imagePath}`;

//    img.addEventListener('load', function () {
//      imageContainer.append(img);
//      resolve(img);
//    });

//    img.addEventListener('error', function () {
//      reject(new Error('Image not found!'));
//    });
//  });
//};

//createImage('img-1.jpg')
//  .then(img => {
//    console.log('Image 1 loaded!');
//    currentImage = img;
//    return wait(2);
//  })
//  .then(() => {
//    currentImage.style.display = 'none';
//    return wait(2);
//  })
//  .then(() => {
//    console.log('Image 2 loaded!');
//    return createImage('img-2.jpg');
//  })
//  .then(img => {
//    currentImage = img;
//    return wait(2);
//  })
//  .then(() => {
//    currentImage.style.display = 'none';
//  })
//  .catch(err => {
//    console.error(err);
//  });

//************************ Challange #2 - 3 ************************
//const wait = function (seconds = 0) {
//  return new Promise(resolve => {
//    setTimeout(resolve, seconds * 1000);
//  });
//};

//const imageContainer = document.querySelector('.images');

//const createImg = function (imgPath) {
//  return new Promise((resolve, reject) => {
//    const img = document.createElement('img');
//    img.src = `/img/${imgPath}`;

//    img.addEventListener('load', () => {
//      imageContainer.append(img);
//      resolve(img);
//    });

//    img.addEventListener('error', () => {
//      reject(new Error('Image path not found!'));
//    });
//  });
//};

//let currentImage;

//wait(2)
//  .then(() => {
//    return createImg('img-1.jpg');
//  })
//  .then(img => {
//    console.log('Image 1 loaded!');
//    currentImage = img;
//    return wait(2);
//  })
//  .then(() => {
//    currentImage.style.display = 'none';
//    return wait(2);
//  })
//  .then(() => {
//    console.log('Image 2 loaded!');
//    return createImg('img-2.jpg');
//  })
//  .then(img => {
//    currentImage = img;
//    return wait(2);
//  })
//  .then(() => {
//    currentImage.style.display = 'none';
//  })
//  .catch(err => {
//    console.error(err);
//  });

//*********************** Promise In Parallel *******************
//*********************** 1 *************************************
//const getJson = async function (url, errMessage = 'Something went wrong!') {
//  try {
//    const res = await fetch(url);
//    if (!res.ok) throw new Error(`${errMessage}`);

//    return res.json();
//  } catch (error) {
//    console.log(error);
//  }
//};

//(async function () {
//  try {
//    const winner = await Promise.race([
//      getJson(`https://restcountries.eu/rest/v2/name/iran`),
//      getJson(`https://restcountries.eu/rest/v2/name/turkey`),
//      getJson(`https://restcountries.eu/rest/v2/name/usa`),
//    ]);
//    console.log(winner[0]);
//  } catch (error) {
//    console.log(error);
//  }
//})();

//const timeout = function (s) {
//  return new Promise((_, reject) => {
//    setTimeout(() => {
//      reject(new Error('Request rejected'));
//    }, s * 1000);
//  });
//};

//Promise.race([
//  getJson(`https://restcountries.eu/rest/v2/name/turkey`),
//  timeout(2.5),
//])
//  .then(res => console.log(res))
//  .catch(err => console.log(err));

//Promise.allSettled([
//  Promise.resolve('Success'),
//  Promise.reject('Error'),
//  Promise.resolve('Finished'),
//])
//  .then(res => console.log(res))
//  .catch(err => console.log(err));

//Promise.any([
//  Promise.resolve('Success Any 1'),
//  Promise.reject('Error Any 1'),
//  Promise.reject('Error Any 2'),
//  Promise.resolve('Success Any 2'),
//])
//  .then(res => console.log(res))
//  .catch(err => console.log(err));

//const getCapitol = async function (c1, c2, c3) {
//  try {
//    const data = await Promise.all([
//      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
//    ]);
//    const capitols = data.map(d => d[0].capital);
//    console.log(capitols);
//  } catch (error) {
//    console.log(error);
//  }
//};

//getCapitol('turkey', 'iran', 'egypt');

//*********************** 2 *************************************

//const getJSON = function (url, errorMsg = 'Something went wrong') {
//  return fetch(url).then(response => {
//    if (!response.ok) throw new Error(`${errorMsg.message}`);
//    return response.json();
//  });
//};

//const getCapitols = async function (c1, c2, c3) {
//  try {
//    const data = await Promise.all([
//      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
//    ]);
//    const capitols = data.map(d => d[0].capital);
//    console.log(capitols);
//  } catch (error) {
//    console.error(error);
//  }
//};

//getCapitols('saudi arabia', 'iraq', 'syria');

//const getJson = async function (url, errorMsg = 'Something went wrong!') {
//  try {
//    const res = await fetch(url);
//    if (!res.ok) throw new Error(`${errorMsg}`);
//    return res.json();
//  } catch (error) {
//    console.log(`${error} 💥💥`);
//  }
//};

//const timer = secs => {
//  return new Promise((_, reject) => {
//    setTimeout(() => {
//      reject(new Error('Promise gets too long!'));
//    }, secs * 1000);
//  });
//};

//(async function () {
//  try {
//    const data = await Promise.race([
//      getJson(`https://restcountries.eu/rest/v2/name/turkey`),
//      timer(0.3),
//    ]);
//    console.log(data[0]);
//  } catch (error) {
//    console.log(error);
//  }
//})();

//(async function () {
//  try {
//    const data = await Promise.allSettled([
//      Promise.resolve('Allsettled Success 1'),
//      Promise.reject('Allsettled Error 1'),
//      Promise.resolve('Allsettled Success 2'),
//      Promise.reject('Allsettled Error 2'),
//    ]);
//    const dataArr = data.map(d => d.status);
//    console.log(dataArr);
//  } catch (error) {
//    console.log(error);
//  }
//})();

//(async function () {
//  try {
//    const data = await Promise.any([
//      Promise.resolve('Allsettled Success 1'),
//      Promise.reject('Allsettled Error 1'),
//      Promise.resolve('Allsettled Success 2'),
//      Promise.reject('Allsettled Error 2'),
//    ]);
//    console.log(data);
//  } catch (error) {
//    console.log(error);
//  }
//})();

//*********************** 3 *************************************

//const getJSON = async (url, errMsg = 'Something went wrong') => {
//  try {
//    const res = await fetch(url);
//    if (!res.ok) throw new Error(`${errMsg}`);
//    return res.json();
//  } catch (error) {
//    console.log(error);
//  }
//};

//const getCapitols = async (c1, c2, c3) => {
//  try {
//    const data = await Promise.all([
//      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
//    ]);
//    const capitols = data.map(d => d[0].capital);
//    console.log(capitols);
//  } catch (error) {
//    console.log(error);
//  }
//};

//getCapitols('turkey', 'georgia', 'armenia');

// ************* other promise combinators --> race, allSettled, any (ES21) ************
//const getJson = async (url, errorMsg) => {
//  try {
//    const res = await fetch(url);
//    if (!res.ok) throw new Error(`${errorMsg} 💥💥💥`);
//    return res.json();
//  } catch (error) {
//    console.log(error);
//  }
//};

//const timer = secs => {
//  return new Promise((_, reject) => {
//    setTimeout(() => {
//      reject(new Error('Request took too long!'));
//    }, secs * 1000);
//  });
//};

//(async () => {
//  try {
//    const data = await Promise.race([
//      getJson(`https://restcountries.eu/rest/v2/name/iran`),
//      timer(0.3),
//    ]);
//    console.log(data[0].name);
//  } catch (error) {
//    console.log(error);
//  }
//})();

//(async () => {
//  try {
//    const data = await Promise.allSettled([
//      Promise.resolve('Success 1'),
//      Promise.reject('Fail 1'),
//      Promise.reject('Fail 1'),
//    ]);
//    const dataStatus = data.map(d => d.status);
//    console.log(dataStatus.join(', '));
//  } catch (error) {
//    console.log(error);
//  }
//})();

//(async () => {
//  try {
//    const data = await Promise.any([
//      Promise.resolve('Success 11'),
//      Promise.resolve('Success 22'),
//      Promise.reject('Error 11'),
//    ]);
//    console.log(data);
//  } catch (error) {
//    console.log(error);
//  }
//})();
