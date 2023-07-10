// Memoization is a technique for speeding up applications by caching the results
// of expensive function calls and returning them when the same inputs are used again.

let cache = {};
const fun = (num) => {
  if (num in cache) {
    console.log("It is present in the cache i.e: " + cache[num]);
  } else {
    result = num + 1;
    cache[num] = result;
    console.log("This is the new value i.e: " + cache[num]);
  }
};

fun(4);
fun(4);

// In the above eg, we use cache as a global scope which can be accessed from anywhere, which is not secure.
// So we use Closure, through which the cache will be in private scope and it will be more secure.

const fun2 = () => {
  let cache2 = {};
  return function (num2) {
    if (num2 in cache2) {
      console.log("It is present in the cache2 i.e: " + cache2[num2]);
    } else {
      result2 = num2 + 1;
      cache2[num2] = result2;
      console.log("This is the new value i.e: " + cache2[num2]);
    }
  };
};

const ans = fun2();
ans(7);
ans(7);
