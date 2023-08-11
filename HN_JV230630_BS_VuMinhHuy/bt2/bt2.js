// Viết 1 chương trình chuẩn hóa một câu: loại bỏ các khoảng trắng(space) ở đầu và cuối
// câu, các từ cách nhau 1 khoảng trắng(space), ký tự đầu ở mỗi từ viết hoa, các ký tự khác
// trong từ viết thường

let str1 = " this     is A tEst ";
let str2 = "heLlo riKkei academy";
let newstr1 = [];
let newstr2 = [];
function chuanHoa(str, newstr) {
    str = str.trim().split(" ");
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "") {
            newstr.push(str[i][0].toUpperCase() + str[i].slice(1).toLowerCase());
        }
    }
    let a = newstr.join(" ");
    console.log("===============================");
    console.log("Câu được chuẩn hóa là");
    console.log(a);
    console.log("===============================");
}
console.log(str1);
chuanHoa(str1, newstr1);
console.log(str2);
chuanHoa(str2, newstr2);