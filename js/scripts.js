//business logic

/*function Order(firstName, lastName, newSize, newIcecream, newToppings, newSauce) {
  this.firstName = firstName,
    this.lastName = lastName,
    this.newSize = newSize,
    this.newIcecream = newIcecream,
    this.newToppings = newToppings,
    this.newSauce = newSauce
}

Order.prototype.fullOrder = function() {
  return this.firstName + " " + this.lastName + " " + this.newSize + " " + this.newIcecream + " " + this.newToppings + " " + this.newSauce
}

*/
// user interface logic
$(document).ready(function() {
  /*    $("#submit").click(function() {
        $("#orderName").append('<div class="form-group">' + '<label for="firstName">First name</label>' + '<input type="text" class="form-control" id="firstName">' + '</div>' + '<div class="form-group">' + '<label for="lastName">Last name</label>' + '<input type="text" class="form-control" id="lastName">' + '</div>');
      });

  /*    $("form#add-order").click(function(event) {
        $(".order-group").each(function() {
          var inputtedFirstName = $(this).find("input#firstName").val();
          var inputtedLastName = $(this).find("input#lastName").val();
          var inputtedSize = $(this).find("input.newSize").val();
          var inputtedIceCream = $(this).find("input.newIcecream").val();
          var inputtedToppings = $(this).find("input.newToppings").val();
          var inputtedSauces = $(this).find("input.newSauce").val();
          var newOrder = new Order(inputtdFirstName, inputtdLastName, inputtedSize, inputtedIceCream, inputtedToppings, inputtedSauces);
          newOrder.yourOrder.push(newOrder)
        });
  */
  //      $("ul#orders").append("<li><span class='contact'>" + newOrder.fullOrder() + "</span></li>");

  /*      $(".contact").last().click(function() {
          $("#show-orders").show();
          $("#show-orders h2").text(newContact.fullName());
          $(".firstName").text(newContact.firstName);
          $(".lastName").text(newContact.lastName);
          $("ul#orders").text("");
          newOrder.order.forEach(function(order) {
            $("ul#orders").append("<li>" + order.firstName + ", " + order.lastName + ", " + order.newSize + ", " + order.newIceCream + ", " + order.newToppings + ", " + order.newSauce + "</li>");
          });
        });
      })
  */

  function attachCheckbox() {
    var order = document.getElementById('Vanilla', 'Chocolate', 'PeanutbutterFudge', 'Coffee', 'Strawberry', 'Nuts', 'Sprinkles', 'Bananas', 'CookieCrumble', 'PeanutbutterCups', 'GummyBears', 'ChocolateSauce', 'PeanutbutterSauce', 'CherrySauce', 'Marshmallow', 'Caramel', 'HotFudge');

    var tops = order.getElementByTagName('input');
    for (var i = 0, len = tops.length; i < len; i++) {
      if (tops[i].type === 'checkbox') {
        tops[i].onclick = updateTotal;
      };
    };
  }

  function getToppingsTotal(e) {
    var form = this.form;
    var val = parseFloat(form.elements['tops_tot'].value);

    if (this.checked == true) {
      val += parseFloat(this.value);
    } else {
      val -= parseFloat(this.value);
    }

    form.elements['tops_tot'].value = formatDecimal(val);
    updateOrderTotal(form);
  }

  function getSizePrice(e) {
    this.form.elements['sz_tot'].value = parseFloat(this.value);
    updateOrderTotal(this.form);
  }

  function updateOrderTotal(form) {
    var sz_tot = parseFloat(form.elements['sz_tot'].value);
    var tops_tot = parseFloat(form.elements['tops_tot'].value);
    form.elements['total'].value = formatDecimal(sz_tot + tops_tot);
  }

  function formatDecimal(val, n) {
    n = n || 2;
    var str = "" + Math.round(parseFloat(val) * Math.pow(10, n));
    while (str.length <= n) {
      str = "0" + str;
    }
    var pt = str.length - n;
    return str.slice(0, pt) + "." + str.slice(pt);
  }

  function getRadioVal(form, name) {
    var radios = form.elements[name];
    var val;

    for (var i = 0, len = radios.length; i < len; i++) {
      if (radios[i].checked == true) {
        val = radios[i].value;
        break;
      }
    }
    return val;
  }

  var form = document.getElementById('order-group');
  var el = document.getElementById('addedTreats');
  var sz = form.elements['size'];

  // input in toppings container element
  var tops = el.getElementsByTagName('input');

  for (var i = 0, len = tops.length; i < len; i++) {
    if (tops[i].type === 'checkbox') {
      tops[i].onclick = getToppingsTotal;
    }
  }


  for (var i = 0, len = sz.length; i < len; i++) {
    sz[i].onclick = getSizePrice;
  }

  // set sz_tot to value of selected
  form.elements['sz_tot'].value = formatDecimal(parseFloat(getRadioVal(form, 'size')));
  updateOrderTotal(form);

console.log(total);

  event.preventDefault();
});
