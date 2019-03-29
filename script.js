function myFunction() {
    let text;
    let num1 = document.getElementById("numb1").value;
    let num2 = document.getElementById("numb2").value;
    let n1 = Number(num1);
    let n2 = Number(num2);
    let numMin = Math.min(n1,n2);
    let numMax = Math.max(n1,n2);
    if (isNaN(num1) || num1 < 2 || num1 > 100 || 
        isNaN(num2) || num2 < 2 || num2 > 100) {
      text = "Invalid input, please try again.";
    } else {
        let i, primes = [];
    for (i = numMin; i <= numMax; ++i) 
    {
        if (isPrime(i) == true) {
            primes.push(i);
           }
    }
    let nPrimes = primes.length;
    let numPrimes = nPrimes.toString();
    text = primes;
    }
    document.getElementById("output").innerHTML = text;
  }
  function isPrime(n) {
    if (n < 2) return false;
    let q = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= q; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    return true;
}