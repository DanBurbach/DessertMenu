//business logic
function Name(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

function Dessert(size, icecream, topping, sauce) {
  this.size = size;
  this.icecream = icecream;
  this.topping = topping;
  this.sauce = sauce;
  this.price;
};

Name.prototype.fullName = function() {
  return "Thank you for your order " + this.firstName + " " + this.lastName + " ";
};

Dessert.prototype.calculatePrice = function() {
  //size price
  if (this.size === 'small size') {
    this.price += 3.00;
  } else if (this.size === 'medium size') {
    this.price += 3.75;
  } else if (this.size === 'large size') {
    this.price += 4.25;
  }
  // ice cream price
  if (this.icecream === 'Vanilla') {
    this.price += 0.40;
  } else if (this.icecream === 'Chocolate') {
    this.price += 0.40;
  } else if (this.icecream === 'PeanutbutterFudge') {
    this.price += 0.75;
  } else if (this.icecream === 'Coffee') {
    this.price += 0.75;
  } else if (this.icecream === 'Strawberry') {
    this.price += 0.80;
  }
  // topping price
  if (this.topping === 'Nuts') {
    this.price += 0.25;
  } else if (this.topping === 'Sprinkles') {
    this.price += 0.15;
  } else if (this.topping === 'Bananas') {
    this.price += 0.50;
  } else if (this.topping === 'CookieCrumble') {
    this.price += 0.45;
  } else if (this.topping === 'PeanutbutterCups') {
    this.price += 0.45;
  } else if (this.topping === 'GummyBears') {
    this.price += 0.35;
  }
  // sauce price
  if (this.sauce === 'ChocolateSauce') {
    this.price += 0.50;
  } else if (this.sauce === 'PeanutbutterSauce') {
    this.price += 0.50;
  } else if (this.sauce === 'CherrySauce') {
    this.price += 0.40;
  } else if (this.sauce === 'Marshmallow') {
    this.price += 0.55;
  } else if (this.sauce === 'Caramel') {
    this.price += 0.45;
  } else if (this.sauce === 'HotFudge') {
    this.price += 0.75;
  }
}
Dessert.prototype.shortDescription = function() {
  return "a " + this.size + " dessert cup with " + this.icecream + ", " + this.topping + ", and " + this.sauce + " that costs $" + this.price;
}

var displayDessertDetails = function() {
  $('#dessert-list').show();
  $('#dessert-list h2').text(newDessert.shortDescription());
}

// user interface logic
$(document).ready(function() {
  $('#order-form').submit(function(event) {
    event.preventDefault();
    var firstName = $('#input.firstName').val();
    var lastName = $('#input.lastName').val();
    var size = $('input:radio[name=size]:checked').val();
    var icecream = $('input:checkbox[id=icecream]:checked').map(function() {
      return this.value;
    }).get();
    var topping = $('input:checkbox[id=topping]:checked').map(function() {
      return this.value
    }).get();
    var sauce = $('input:checkbox[id=sauce]:checked').map(function() {
      return this.value
    }).get();
    var newDessert = new Dessert(size, icecream, topping, sauce);
    var newName = new Name(firstName, lastName);

    newDessert.calculatePrice();
    newDessert.shortDescription();
    newName.fullName();

    $('#dessert-list').append('<li><span class="dessert">' + newName.fullName() + newDessert.shortDescription() + '</span></li>');

    document.getElementById("order-form").reset();

    $(".dessert").last().click(function() {
      $('#dessert-list').show();
      $('#dessert-list h2').text(newDessert.shortDescription());
    });
  });
});
