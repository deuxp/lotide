const flatten = input => {
  let subArray = new Array;


  // base
  if (input.length === 1) {
    return input[0];
  } else {


    let a = input.splice(0,1);
    if (Array.isArray(a)) {
       = a;
      a = input.splice(0,1);
    } 
    
    return a.concat(flatten(input));
      
    
    
  }
  
};


console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]