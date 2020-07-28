function factorial (number) {
    let product = 1;
    for (let i = 2; i <= number; i++) {
      product = product * i;
    }
    return product;
  };
