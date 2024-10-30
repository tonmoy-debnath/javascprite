let array = [1, 2, 3, 4, 5];
array.forEach((element, index, arr) => {
 arr[index] = element * 2; // প্ররেটি উপোদোনযক ২ রদযয় গুণ কিো হযচ্ছ
console.log(array)
});
console.log(array); // [2, 4, 6, 8, 10]
