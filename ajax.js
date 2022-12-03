// // XMLHttpRequest() Method and JSON
// const btn = document.querySelector('.btn');
// const url = './api/people.json';
// btn.addEventListener('click', () => getData(url));

// function getData(url) {
//   const xhr = new XMLHttpRequest();
//   // console.log(xhr);

//   xhr.open('GET', url);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const data = JSON.parse(xhr.responseText);
//       const displayData = data
//         .map((item) => {
//           return `<p>${item.name}</p>`;
//         })
//         .join('');
//       const element = document.createElement('div');
//       element.innerHTML = displayData;
//       document.body.appendChild(element);
//     } else {
//       console.log({ status: xhr.status, text: xhr.statusText });
//     }
//   };
//   xhr.send();
// }

// Fetch Method - Promise Based
const url = './api/people.json';

// fetch(url)
//   .then((resp) => {
//     // convert response object into JSON data
//     // returns promise, need to chin on another .then()
//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // fetch with function
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//   fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => {
//       displayItems(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// const displayItems = (items) => {
//   const displayData = items
//     .map((item) => {
//       const { name } = item;
//       return `<p>${name}</p>`;
//     })
//     .join('');
//   const el = document.createElement('div');
//   el.innerHTML = displayData;
//   document.body.appendChild(el);
// };

// fetch with async await
const btn = document.querySelector('.btn');
btn.addEventListener('click', async () => {
  // try/catch for error handling
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayItems(data);
  } catch (error) {
    console.log(error);
  }
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join('');
  const el = document.createElement('div');
  el.innerHTML = displayData;
  document.body.appendChild(el);
};
