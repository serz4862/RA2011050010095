const fetch = require('node-fetch');

const data = {
  numbers: [42, 8, 16, 23, 4]
};

fetch('http://localhost:8008/sort', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
  console.log('Result from server:', result);
})
.catch(error => {
  console.error('Error:', error);
});
