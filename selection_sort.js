//selection sort helper function
function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;
  
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] < smallest) {
      smallest = arr[j];// 0
      smallestIndex = j;// 1
    } 
  }
  return smallestIndex;
}

//selection sort
function selectionSort(arr) {
  let newArr = [];
  let length = arr.length;
  
  for (let k = 0; k < length; k++) {
    let smallest = findSmallest(arr);
    let item = arr.splice(smallest, 1)
    newArr.push(item[0]);
  }
  return newArr;
}
