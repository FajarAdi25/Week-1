const PijarFood = (price, voucher, distance, tax) => {
    // Voucher
    let disc = 0;
    let maxValue = 0;
    if (voucher === "PIJARFOOD5" && price >= 50000) {
      disc = 0.5;
      maxValue = 50000;
    } else if (voucher === "DITRAKTIRPIJAR" && price >= 25000) {
      disc = 0.6;
      maxValue = 30000;
    }
  
    // After discount
    let afterDisc = price - price * disc;
    if (afterDisc > maxValue) {
      afterDisc = price - maxValue;
    }
  
    // discount
    if (afterDisc === price) {
      afterDisc = 0;
    } else {
      afterDisc - price;
    }
  
    // Delivery cost
    let deliveryCost = 5000 + Math.max(0, distance - 2) * 3000;
  
    // Tax
    let totalTax = 0;
    if (tax == true) {
      totalTax = price * 0.05;
    } else {
      totalTax;
    }
  
    // Subtotal
    let subTotal = afterDisc + deliveryCost + totalTax;
  
    // Reuslt object
    const result = {
      price: price,
      discount: afterDisc,
      deliveryCost: deliveryCost,
      tax: totalTax,
      subtotal: subTotal,
    };
    return result;
  };
  
  // Output
  const order = PijarFood(50000, "PIJARFOOD5", 5, true);
  console.log(`
    Harga : ${order.price}
    Potongan : ${-order.discount}
    Biaya Antar : ${order.deliveryCost}
    Pajak : ${order.tax}
    SubTotal : ${order.subtotal}
    `);