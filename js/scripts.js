//business logic

var order = [];
function Order(name, newSize, newIcecream, newToppings, newSauce) {
    this.name = name,
    this.newSize = newSize,
    this.newIcecream = newIcecream,
    this.newToppings = newToppings,
    this.newSauce = newSauce
}
Contact.prototype.yourName = function() {
  return this.yourName;
}

Order.prototype.cost = function() {
  var dessertPrice = 0;
    if (this.newIcecream === "Vanilla" || "Chocolate") {
      orderPrice += 0.40;
    }
    if (this.newIcecream === "PeanutbutterFudge" || "Coffee") {
      orderPrice += 0.75;
    }
    if (this.newIcecream === "Strawberry") {
        orderPrice += 0.80;
    }
    if (this.newToppings === "Nuts") {
      orderPrice += 0.25;
    }
    if (this.newToppings === "Sprinkles") {
      orderPrice += 0.15;
    }
    if (this.newToppings === "Bananas") {
      orderPrice += 0.50;
    }
    if (this.newToppings === "CookieCrumble" || "PeanutbutterCups") {
      orderPrice += 0.45;
    }
    if (this.newToppings === "GummyBears") {
      orderPrice += 0.35;
    }
    if (this.newSauce === "ChocolateSauce" || "PeanutbutterSauce") {
      orderPrice += 0.50;
    }
    if (this.newSauce === "CherrySauce") {
      orderPrice += 0.40;
    }
    if (this.newSauce === "Marshmallow") {
      orderPrice += 0.55;
    }
    if (this.newSauce === "Caramel") {
      orderPrice += 0.45;
    }
    if (this.newSauce === "HotFudge") {
      orderPrice += 0.75;
    }

/*    if (this.size === "SizeSm") {
      orderPrice += 3.00;
    } else if (this.size === "SizeMd") {
      orderPrice += 3.75;
    } else (this.size === "SizeLg") {
      orderPrice = 4.25;
    }
    */
  return orderPrice
}

// user interface logic
$(document).ready(function() {
  $("form#orderName").click(function(event) {
    event.preventDefault();

    var fullName = $(input#name).val();
    var newContact = new Contact(fullName);

    $("ul#orders").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#name").val("");

    $(".contact").last().click(function() {
      $("#show-contact")
    })
  })
  $("#submit").submit(function() {
    event.preventDefault();
        $("#showOrders").empty();
        var inputtedName = $("#input.name").val();
        var inputtedSize = $("#input.newSize").val();
        var inputtedIceCream = $("#input.newIcecream").val();
        var inputtedToppings = $("#input.newToppings").val();
        var inputtedSauces = $(this).find("input.newSauce").val();
        var newOrder = new Order(inputtedName, inputtedSize, inputtedIceCream, inputtedToppings, inputtedSauces);
        order.push(newOrder);

        $("ul#orders").append("<li><span class='contact'>" + newOrder.name + "</span></li>");
        var totalCost = 0;
        var counter = 0;
        order.forEach(function(order) {
          if (order) {
            $("ul#orders").append("<li>" + order.name + ", " + order.newSize + ", " + order.newIceCream+ ", " + order.newToppings + ", " + order.newSauce + "</li>");
            totalCost += order.cost();
          }
            counter++
        });
      });
      $("#output").append(total);
      $("#output").show();
      $("#showOrders h2").text(yourName());
      $("ul#orders").text("");
      $("#delete").show();


//auto fill value of order JS code

/*  (function() {
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
      var value;

      for (var i=0, len=radios.length; i<len; i++) {
        if (radios[i].checked == true) {
          value = radios[i].value;
          break;
        }
      }
      return value;
    }

    function getToppingsTotal(e) {
      var form = this.form;
      var val = parseFloat( form.elements['tops_tot'].value );

      if ( this.checked === true ) {
        val += parseFloat(this.value);
      } else {
        val -= parseFloat(this.value);
      }

      form.elements['tops_tot'].value = formatDecimal(val);
      updateTotal(form);
    }

    function getSizePrice(e) {
      this.form.elements['sz_tot'].value = parseFloat(this.value);
      updateTotal(this.form);
    }

    function updateTotal(form) {
      var sz_tot = parseFloat( form.elements['sz_tot'].value );
      var tops_tot = parseFloat( form.elements['tops_tot'].value );
      form.elements['total'].value = formatDecimal( sz_tot + tops_tot );
    }

    var form = document.getElementById('orderGroup');
    var el = document.getElementById('addedTreats');
    var tops = el.getElementsByTagName('input');

    for (var i=0, len=tops.length; i<len; i++) {
      if (tops[i].type === 'checkbox') {
        tops[i].onclick = updateTotal();
          this.form.elements['total'].value = this.value;
        }
      }


    var sz = form.elements['size'];

    for (var i=0, len = sz.length; i<len; i++) {
      sz[i].onclick = getSizePrice();
        this.form.elements['total'].value = this.value;
    }

    form.elements['sz_tot'].value = formatDecimal(parseFloat(getRadioVal(form, 'size')));
    updateTotal(form);
    console.log(total);
  });
  */
});
