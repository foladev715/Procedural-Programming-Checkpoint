// Declaring the variables
let v1 = [1, 2, 3];
let v2 = [1, 0, 1];
// ps = dotproduct(v1, v2);

//Dot_Product Procedure
ps = (a, b) => a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);

console.log(ps(v1, v2));

//Orthogonality algorithm(using the Dot_Product Procedure)
if ((ps = 0)) {
  console.log("The vectors are orthogonal");
} else {
  console.log("The vectors are not orthogonal");
}

//Dot-Product Function
function dot_product(a, b) {
  let result = 0;
  for (let i = 0; i < 3; i++) {
    result += a[i] * b[i];
  }
  return result;
}

console.log(dot_product(v1, v2));

//Orthogonality algorithm(using the Dot_Product Procedure)
if ((dot_product = 0)) {
  console.log("The vectors are orthogonal");
} else {
  console.log("The vectors are not orthogonal");
}
