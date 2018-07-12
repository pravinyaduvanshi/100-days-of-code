function calculate( p , n , r ,t)
{
  var A = (p * Math.pow((1 + (r/(n*100))), (n*t)));
  console.log(A);
}

calculate(5000,12,5,10);