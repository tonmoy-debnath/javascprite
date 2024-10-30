const person = {fname: "John", lname: "Doe", age: 25};
for (let key in person) {
     console.log(key + ": " + person[key]);
    }

    let array = [1, 2, 3, 4, 5];
    for (let i in array) {
     array[i] = array[i] * 2; // প্ররেটি উপোদোনযক ২ রদযয় গুণ কিো হযচ্ছ
    }
    console.log(array); // [2, 4, 6, 8, 10]
    