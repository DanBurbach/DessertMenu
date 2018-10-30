//business logic
function Name(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
Name.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

var order = [];

function Order(newSize, newIcecream, newToppings, newSauce) {
  this.newSize = size,
    this.newIcecream = icecream,
    this.newToppings = toppings,
    this.newSauce = sauce
}
Order.prototype.cost = function() {
  var dessertPrice = 0;
  if (this.newIcecream === "Vanilla" || "Chocolate") {
    dessertPrice += 0.40;
  }
  if (this.newIcecream === "PeanutbutterFudge" || "Coffee") {
    dessertPrice += 0.75;
  }
  if (this.newIcecream === "Strawberry") {
    dessertPrice += 0.80;
  }
  if (this.newToppings === "Nuts") {
    dessertPrice += 0.25;
  }
  if (this.newToppings === "Sprinkles") {
    dessertPrice += 0.15;
  }
  if (this.newToppings === "Bananas") {
    dessertPrice += 0.50;
  }
  if (this.newToppings === "CookieCrumble" || "PeanutbutterCups") {
    dessertPrice += 0.45;
  }
  if (this.newToppings === "GummyBears") {
    dessertPrice += 0.35;
  }
  if (this.newSauce === "ChocolateSauce" || "PeanutbutterSauce") {
    dessertPrice += 0.50;
  }
  if (this.newSauce === "CherrySauce") {
    dessertPrice += 0.40;
  }
  if (this.newSauce === "Marshmallow") {
    dessertPrice += 0.55;
  }
  if (this.newSauce === "Caramel") {
    dessertPrice += 0.45;
  }
  if (this.newSauce === "HotFudge") {
    dessertPrice += 0.75;
  }

  if (this.size === "SizeSm") {
    dessertPrice += 3.00;
  } else if (this.size === "SizeMd") {
    dessertPrice += 3.75;
  } else if (this.size === "SizeLg") {
    dessertPrice = 4.25;
  }

  return dessertPrice
}

// user interface logic
$(document).ready(function() {
  $("form#userName").click(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("#input.firstName").val();
    var inputtedLastName = $("#input.lastName")
    order.push(newOrder);
    order.push(newName);

    $("ul#orders").append("<li><span class='contact'>" + newName.fullName() + "</span></li>");
    $("input#name").val("");

    $(".contact").last().click(function() {
      $("#show").show();
    })
  })
  $("#checkout").click(function() {
    var inputtedSize = $("#input.newSize").val();
    var inputtedIceCream = $("#input.newIcecream").val();
    var inputtedToppings = $("#input.newToppings").val();
    var inputtedSauces = $(this).find("input.newSauce").val();
    var newOrder = new Order(inputtedSize, inputtedIceCream, inputtedToppings, inputtedSauces);
    var newName = new Name(inputtedFirstName, inputtedLastName)
    $("#showOrders").empty();

    $("#output").append("<h2> Here you go " + newName.name + ", here is your recent order:</h2><ul></ul>");
    var totalCost = 0;
    var counter = 0;
    orders.forEach(function(order) {
      if (order) {
        $("#output ul").append("<li><input type='checkbox' value'" + counter + "'>One " + order.topping + " Cost for your order: $" + newOrder.cost() + ", please.</li>");
        totalCost += order.cost();
      }
      counter++;
    });
    $("#output").append(total);
    $("#output").show();
    $("#showOrders h2").text(yourName());
    $("ul#orders").text("");
    $("#delete").show();
    consol.log(firstName);
    consol.log(lastName);
  });
})
