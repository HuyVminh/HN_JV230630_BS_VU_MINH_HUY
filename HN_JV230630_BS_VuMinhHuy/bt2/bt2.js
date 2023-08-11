// Viết 1 chương trình chuẩn hóa một câu: loại bỏ các khoảng trắng(space) ở đầu và cuối
// câu, các từ cách nhau 1 khoảng trắng(space), ký tự đầu ở mỗi từ viết hoa, các ký tự khác
// trong từ viết thường

let str1 = " this is A tEst ";
let str2 = "heLlo riKkei academy";
function chuanHoa(str) {
    str = str.trim().toLocaleLowerCase();
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    let result = arr.join(" ");
    console.log("===============================");
    console.log("Câu được chuẩn hóa là");
    console.log(result);
    console.log("===============================");
}
console.log(str1);
chuanHoa(str1);
console.log(str2);
chuanHoa(str2);