const isPrime = (num) => {
  if (num % 2 === 0 && num % num === 0) {
    return true;
  } else {
    return false;
  }
};
const hasPrime = isPrime(2);
console.log(hasPrime);
