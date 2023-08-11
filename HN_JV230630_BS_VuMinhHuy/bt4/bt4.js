// Viết một chương sắp xếp các phần tử trong mảng theo thứ tự giảm dần bằng 2 cách:
// sử dụng và không sử dụng hàm sort
// Đầu vào: 1 mảng bất kỳ

// cho mảng bất kỳ

arr1 = [7, 8, 9, 6, 44, 33, 88];
console.log("Cho chuỗi");
console.log(arr1);
// Cách 1 : sử dụng hàm sort

arr1.sort((a, b) => b - a);
console.log("Chuỗi sắp xếp theo thứ tự giảm dần là");
console.log(arr1);
console.log("================================");

// Cách 2: không sử dụng hàm sort

arr2 = [4,7,3,9,11,5645,33,654,564];
console.log("Cho chuỗi");
console.log(arr2);
let temp;
for (let i = 0; i < arr2.length - 1; i++) {
    for (let j = i + 1; j < arr2.length; j++) {
        if (arr2[i] < arr2[j]) {
            temp = arr2[i];
            arr2[i] = arr2[j];
            arr2[j] = temp;
        }
    }
}
console.log("Chuỗi sắp xếp theo thứ tự giảm dần là");
console.log(arr2);
console.log("================================");
