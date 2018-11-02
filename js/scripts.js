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
  this.price
};

Name.prototype.fullName = function() {
  return "Thank you for your order " + this.firstName + " " + this.lastName + " ";
};

Dessert.prototype.calculatePrice = function() {
  this.price = 3.75;
  //size price
  if (this.size === 'small size') {
    this.price -= 0.75;
  } else if (this.size === 'large size') {
    this.price += 0.50;
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

    var inputtedfirstName = $("input#firstName").val();
    var inputtedlastName = $("input#lastName").val();
    var size = $('input:radio[name=size]:checked').val();
    var icecream = $('input:radio[name=icecream]:checked').val();
    var topping = $('input:radio[name=topping]:checked').val();
    var sauce = $('input:radio[name=sauce]:checked').val();
    var newDessert = new Dessert(size, icecream, topping, sauce);
    var newName = new Name(inputtedfirstName, inputtedlastName);

    newDessert.calculatePrice();
    newDessert.shortDescription();
    newName.fullName();
    $("input#firstName").val("");
    $("input#lastName").val("");

    $('#dessert-list').append('<li><span class="dessert">' + newName.fullName() + newDessert.shortDescription() + '</span></li>');

    document.getElementById("order-form").reset();

    $(".dessert").last().click(function() {
      $('#dessert-list').show();
      $('#dessert-list h2').text(newDessert.shortDescription());
    });
  });
});
