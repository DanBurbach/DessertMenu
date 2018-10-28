//business logic

function Order(firstName, lastName, newSize, newIcecream, newToppings, newSauce) {
  this.firstName = firstName,
    this.lastName = lastName,
    this.newSize = newSize,
    this.newIcecream = newIcecream,
    this.newToppings = newToppings,
    this.newSauce = newSauce
}
debugger;
Order.prototype.fullOrder = function() {
  return this.firstName + " " + this.lastName + " " + this.newSize + " " + this.newIcecream + " " + this.newToppings + " " + this.newSauce
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
  event.preventDefault();
  $("#submit").click(function() {
    $("#orderName").append('<div class="form-group">' + '<label for="firstName">First name</label>' + '<input type="text" class="form-control" id="firstName">' + '</div>' + '<div class="form-group">' + '<label for="lastName">Last name</label>' + '<input type="text" class="form-control" id="lastName">' + '</div>');
  });
  debugger;
  $("form#fullOrder").submit(function(event) {
    $(".order-group").each(function() {
      var inputtedFirstName = $(this).text("input#firstName").val();
      var inputtedLastName = $(this).text("input#lastName").val();
      var inputtedSize = $(this).find("input.newSize").val();
      var inputtedIceCream = $(this).find("input.newIcecream").val();
      var inputtedToppings = $(this).find("input.newToppings").val();
      var inputtedSauces = $(this).find("input.newSauce").val();
      var newOrder = new Order(inputtdFirstName, inputtdLastName, inputtedSize, inputtedIceCream, inputtedToppings, inputtedSauces)
      newOrder.yourOrder.push(newOrder)
    });

    $("ul#orders").append("<li><span class='contact'>" + newOrder.fullOrder() + "</span></li>");

    debugger;
    $(".contact").last().click(function() {
      $("#show-orders").show();
      $("#show-orders h2").text(newContact.fullName());
      $(".firstName").text(newContact.firstName);
      $(".lastName").text(newContact.lastName);
      $("ul#orders").text("");
      newOrder.order.forEach(function(order) {
        $("ul#orders").append("<li>"
          order.firstName + ", " + order.lastName + ", " + order.newSize + ", " + order.newIceCream + ", " + order.newToppings + ", " + order.newSauce + "</li>");
      });
    });
  })
  debugger;

  function updateTotal(e) {
    var form = this.form;
    var val = parseFloat(form.elements['total'].value);
    if (this.checked) {
      val += parseFloat(this.value);
    } else {
      val -= parseFloat(this.value);
    }
    form.elements['total'].value = formatDecimal(val);
  }
  debugger;

  function formatDecimal(val, n) {
    n = n || 2;
    var str = "" + Math.round(parseFloat(val) * Math.pow(10, n));
    while (str.lenght <= n) {
      str = "0" + str;
    }
    var pt = str.lenght - n;
    return str.slice(0, pt) + "." + str.slice(pt);
  }
});
