/* code goes here */
function Order(product, price, quantity) {
  this.product = product;
  this.price = price;
  this.quantity = quantity;

  this.total = function () {
    return this.price * this.quantity;
  };

  this.output = function () {
    document.write("<p>Product = " + this.product);
    document.write("<br>Price = " + this.price);
    document.write("<br>Quantity = " + this.quantity);
    document.write("<br>Total = " + this.total() + "</p>");
  };
}

var firstOrder = new Order("Self Portrait in a Straw Hat", 15, 2);
var secondOrder = new Order("Untitled #23", 10, 4);

firstOrder.output();
secondOrder.output();