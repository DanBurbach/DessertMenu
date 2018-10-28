//business logic
function Contact(firstName, lastName) {
  this.firstName = firstName,
  this.lastName = lastName
}

function Order(newSize, newIcecream, newToppings, newSauce) {
  this.newSize = newSize,
  this.newIcecream = newIcecream,
  this.newToppings = newToppings,
  this.newSauce = newSauce
}

Order.prototype.fullOrder = function() {
  return this.newSize + " " + this.newIcecream + " " + this.newToppings + " " + this.newSauce
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName
}


//function attachCheckbox() {
//  var order = document.getElementById('order-group');
//  var tops = order.getElementByTagName('input');
//  for (var i=0, len=tops.length; i<len; i++) {
//    if (tops[i].type === 'checkbox') {
//      tops[i].onclick = updateTotal;
//    }
//  }
//}


// user interface logic
$(document).ready(function() {

  $("#submit").click(function() {
    $("#orderName").append('<div class="form-group">' + '<label for="firstName">First name</label>' + '<input type="text" class="form-control" id="firstName">' + '</div>' + '<div class="form-group">' + '<label for="lastName">Last name</label>' + '<input type="text" class="form-control" id="lastName">' + '</div>');
    });

  $("form#fullOrder").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#firstName").val();
    var inputtedLastName = $("input#lastName").val();
    var newName = new Name(inputtdFirstName, inputtdLastName);

  $(".order-group").each(function() {
      var inputtedSize = $(this).find("input.newSize").val();
      var inputtedIceCream = $(this).find("input.newIcecream").val();
      var inputtedToppings = $(this).find("input.newToppings").val();
      var inputtedSauces = $(this).find("input.newSauce").val();
      var newOrder = new Order (inputtedSize, inputtedIceCream, inputtedToppings, inputtedSauces)
      newName.yourOrder.push(newOrder)
  });
  $("ul#orders").append("<li><span class='contact'>" + newContact.fullName() + newOrder.fullOrder() + "</span> + </li>");

  $(".o")

  $(".contact").last().click(function() {
    $("#show-orders").show();
    $("#show-orders h2").text(newContact.fullName());
    $(".firstName").text(newContact.firstName);
    $(".lastName").text(newContact.lastName);
    $("ul#orders").text("");
    newOrder.order.forEach(function(order) {
      $("ul#orders").append("<li>" + order.newSize + ", " + order.newIceCream + ", " + order.newToppings + ", " + order.newSauce + "</li>");
    });
  });

  function updateTotal(e) {
    var form = this.form;
    var val = parseFloat (form.elements['total'].value);
    if (this.checked) {
      val += parseFloat(this.value);
    } else {
      val -= parseFloat(this.value);
    }
    form.elements['total'].value = formatDecimal(val);
    }
  function formatDecimal(val, n) {
    n = n || 2;
    var str = "" + Math.round (parseFloat(val) * Math.pow(10,n));
    while (str.lenght <=n ) {
      str = "0" + str;
    }
    var pt = str.lenght - n;
    return str.slice(0,pt) + "." + str.slice(pt);
  }
  attachCheckboxHandlers();
});
