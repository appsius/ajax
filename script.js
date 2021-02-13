'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// ********************************* 1 *********************************
//const getCountryAndNeighbour = function (country) {
//  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//    .then(res => res.json())
//    .then(data => {
//      getData(data[0]);

//      const neighbour = data[0].borders[0];
//      if (!neighbour) return;

//      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//    })
//    .then(res => res.json())
//    .then(data2 => getData(data2, 'neighbour'))
//    .catch(err => {
//      console.log(`Error: ${err.message}`);
//      renderError(
//        `Something went wrong, ${err.message} ⛔⛔⛔ Please try again later!`
//      );
//    })
//    .finally(() => (countriesContainer.style.opacity = 1));
//};

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

//const getCountryAndNeighbour = function (country) {
//  getJSON(
//    `https://restcountries.eu/rest/v2/name/${country}`,
//    'Country not found!'
//  )
//    .then(data => {
//      getData(data[0]);

//      const neighbour = data[0].borders[0];
//      if (!neighbour) throw new Error('No neighbour found');

//      return getJSON(
//        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//        'No country found!'
//      );
//    })
//    .then(data2 => {
//      getData(data2, 'neighbour');
//    })
//    .catch(err => {
//      console.error(err);
//      renderError(`Error: ${err.message} 💥💥💥`);
//    })
//    .finally(() => {
//      countriesContainer.style.opacity = 1;
//    });
//};

//btn.addEventListener('click', function () {
//  getCountryAndNeighbour('tunisia');
});

getCountryAndNeighbour('australia');

// ********************************* 2 *********************************
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

//const getCountryAndNeighbour = function (country) {
//  getJSON(
//    `https://restcountries.eu/rest/v2/name/${country}`,
//    'No country found!'
//  )
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
//  getCountryAndNeighbour('australia');
//});

// ********************************* 3 *********************************
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

//const getData = function (country) {
//  getJSON(
//    `https://restcountries.eu/rest/v2/name/${country}`,
//    'Country not found'
//  )
//    .then(data => {
//      console.log(getCountry(data[0]));

//      const neighbour = data[0].borders[0];
//      if (!neighbour) throw new Error('No neighbour found!');

//      return getJSON(
//        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//        'Country not found'
//      );
//    })
//    .then(data2 => getCountry(data2, 'neighbour'))
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
//  getData('turkey');
//});

//getData('australia');
