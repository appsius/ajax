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

//const getCountryAndNeighbour = function (country) {
//  const request = new XMLHttpRequest();
//  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//  request.send();

//  request.addEventListener('load', function () {
//    const [data] = JSON.parse(this.responseText);
//    console.log(data);

//    //get country name
//    getData(data);

//    const [neighbour] = data.borders;
//    if (!neighbour) return;

//    //get neighbour
//    const request2 = new XMLHttpRequest();
//    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//    request2.send();

//    request2.addEventListener('load', function () {
//      const data2 = JSON.parse(this.responseText);
//      console.log(data2);
//      getData(data2, 'neighbour');
//    });
//  });
//};

//const getCountryAndNeighbour = function (country) {
//  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//    .then(res => res.json())
//    .then(data => getData(data[0]));
//};

//getCountryAndNeighbour('turkey');

// ********************************* 2 *********************************
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

//const getCountryAndNeighbour = function (country) {
//  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//    .then(res => res.json())
//    .then(data => getCountry(data[0]));
//};

//getCountryAndNeighbour('oman');

// ********************************* 3 *********************************
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

//const getData = function (country) {
//  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//    .then(res => res.json())
//    .then(data => getCountry(data[0]));
//};

//getData('azerbaijan');
