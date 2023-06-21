console.log('ajax practice has loaded');

$.ajax({
  url: 'http://localhost:8000/food-items',
  method: 'GET',
  success: (response) => {
    console.log(response);
  }
});
