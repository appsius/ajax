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
//};

//const renderError = function (msg) {
//  countriesContainer.insertAdjacentText('beforeend', msg);
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

//const getCountryAndNeighbour = function (lat, lng) {
//  getPosition()
//    .then(pos => {
//      const { latitude: lat, longitude: lng } = pos.coords;

//      return getJSON(
//        `https://geocode.xyz/${lat},${lng}?geoit=json`,
//        'Only 3 requests are allowed per second!'
//      );
//    })
//    .then(data => {
//      if (!data.city || !data.country) throw new Error('No coordinates found!');
//      const { country } = data;

//      return getJSON(
//        `https://restcountries.eu/rest/v2/name/${country}`,
//        'Country not found!'
//      );
//    })
//    .then(data1 => {
//      getData(data1[0]);

//      const neighbour = data1[0].borders[0];
//      if (!neighbour) throw new Error('No neighbour found');

//      return getJSON(
//        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//        'No country found!'
//      );
//    })
//    .then(data2 => getData(data2, 'neighbour'))
//    .catch(err => {
//      console.error(err);
//      renderError(`Error: ${err.message} 💥💥💥`);
//    })
//    .finally(() => {
//      countriesContainer.style.opacity = 1;
//    });
//};

//btn.addEventListener('click', function () {
//  getCountryAndNeighbour();
//});

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
//};

//const renderError = function (msg) {
//  countriesContainer.insertAdjacentText('beforeend', msg);
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

//const getCountryAndNeighbour = function () {
//  getPosition()
//    .then(pos => {
//      const { latitude: lat, longitude: lng } = pos.coords;

//      return getJSON(
//        `https://geocode.xyz/${lat},${lng}?geoit=json`,
//        'Only 3 requests are allowed per seconds!'
//      );
//    })
//    .then(data => {
//      if (data.error) throw new Error('No coordinates found!');
//      console.log(`You are in ${data.city}, ${data.country}`);

//      const { country } = data;

//      return getJSON(
//        `https://restcountries.eu/rest/v2/name/${country}`,
//        'No country found!'
//      );
//    })
//    .then(data => {
//      getCountry(data[0]);

//      const neighbour = data[0].borders[0];
//      if (!neighbour) throw new Error('No neighbour found!');

//      return getJSON(
//        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//        'No country found!'
//      );
//    })
//    .then(data2 => getCountry(data2, 'neighbour'))
//    .catch(err => {
//      renderError(`Error: ${err.message} 💥💥💥 Please try again later!`);
//    })
//    .finally(() => (countriesContainer.style.opacity = 1));
//};

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
//};

//const renderError = function (msg) {
//  countriesContainer.insertAdjacentText('beforeend', msg);
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

//const getData = function () {
//  getPosition()
//    .then(pos => {
//      const { latitude: lat, longitude: lng } = pos.coords;

//      return getJSON(
//        `https://geocode.xyz/${lat},${lng}?geoit=json`,
//        'Only 3 requests are alllowed per second!'
//      );
//    })
//    .then(data => {
//      if (data.error) throw new Error('Coordinates are not true!');
//      console.log(`You are in ${data.city}, ${data.country}`);
//      const { country } = data;

//      return getJSON(
//        `https://restcountries.eu/rest/v2/name/${country}`,
//        'Country not found'
//      );
//    })
//    .then(res => {
//      getCountry(res[0]);
//      const neighbour = res[0].borders[0];
//      if (!neighbour) throw new Error('No neighbour found!');

//      return getJSON(
//        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//        'Country not found'
//      );
//    })
//    .then(data2 => {
//      getCountry(data2, 'neighbour');
//    })
//    .catch(err => {
//      console.log(`Something went wrong, ${err}`);
//      renderError(
//        ` Error: something went wrong 💥💥💥 ${err.message}, please try again later!`
//      );
//    })
//    .finally(() => {
//      countriesContainer.style.opacity = 1;
//    });
//};

//btn.addEventListener('click', function () {
//  getData();
//});

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
