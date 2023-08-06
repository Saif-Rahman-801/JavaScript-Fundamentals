function discount(ticketQuantity) {
  const first100Price = 100;
  const second100Price = 80;
  const restOfThePrice = 50;

  if (ticketQuantity <= 100) {
    return (totalPrice = ticketQuantity * first100Price);
  } else if (ticketQuantity > 100 && ticketQuantity < 200) {
    return (totalPrice = ticketQuantity * second100Price);
  } else if (ticketQuantity > 200) {
    return (totalPrice = ticketQuantity * restOfThePrice);
  }
}
console.log(discount(500));
