// $(document).ready(() => {});
$(() => {

  console.log('food-item.js has loaded');

  const createFoodElement = (foodItem) => {
    const $foodItemElement = $(`
      <article class="food-item">
        <header class="food-item-header">
          <h2>Name: ${foodItem.name}</h2>
          <h3>Id: ${foodItem.id}</h3>
        </header>
        <h3 class="description">${foodItem.tagline}</h3>
        <hr/>
        <footer class="food-item-footer">
          <p>Price: $${foodItem.price}</p>
          <p>Calories: ${foodItem.calories}</p>
        </footer>
      </article>
    `);

    return $foodItemElement;
  };

  const renderFoodItems = (foodItemArr) => {
    // grab the section from the DOM
    const $foodItemContainer = $('.food-item-container');

    // empty the food container in the DOM before we fill it up again
    $foodItemContainer.empty();

    for (const foodItem of foodItemArr) {
      const $foodItemElement = createFoodElement(foodItem);
      $foodItemContainer.prepend($foodItemElement);
    }
  };

  const fetchFoodItems = () => {
    $.ajax({
      url: 'http://localhost:8000/food-items',
      method: 'GET',
      success: (foodItems) => {
        renderFoodItems(foodItems);
      }
    });
  };

  fetchFoodItems();

  // grab the form from the DOM
  const $foodItemForm = $('#new-food-item-form');

  // attach a callback to run when the form submits
  $foodItemForm.on('submit', (event) => {
    // stop the browser from auto submitting the form
    event.preventDefault();

    // get the information from the form as urlencoded data
    const data = $foodItemForm.serialize();

    // POST the data to the server
    $.ajax({
      method: 'POST',
      url: 'http://localhost:8000/food-items',
      data: data,
      success: () => {
        // make a followup GET request
        fetchFoodItems();
      }
    });
  });

});
