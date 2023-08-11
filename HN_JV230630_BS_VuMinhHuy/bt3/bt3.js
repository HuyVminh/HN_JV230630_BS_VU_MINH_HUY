// Viết một chương trình nhập vào tháng và năm và in ra số ngày của tháng đó

let year = +prompt("Nhập vào năm bạn muốn kiểm tra");
let month = +prompt("Nhập vào tháng bạn muốn kiểm tra");
if (month <= 12 && year > 1) {
    if (month == 4 || month == 6 || month == 9 || month == 11) {
        console.log("===============================");
        console.log(`Tháng ${month} năm ${year} có 30 ngày!`);
    } else if (month == 2) {
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0) {
                    console.log("===============================");
                    console.log(`Năm ${year} là năm nhuận`);
                    console.log(`Tháng ${month} năm ${year} có 29 ngày!`);
                } else {
                    console.log("===============================");
                    console.log(`Năm ${year} không phải là năm nhuận`);
                    console.log(`Tháng ${month} năm ${year} có 28 ngày!`);
                }
            } else {
                console.log("===============================");
                console.log(`Năm ${year} là năm nhuận`);
                console.log(`Tháng ${month} năm ${year} có 29 ngày!`);
            }
        } else {
            console.log("===============================");
            console.log(`Năm ${year} không phải là năm nhuận`);
            console.log(`Tháng ${month} năm ${year} có 28 ngày!`);
        }
    } else {
        console.log("===============================");
        console.log(`Tháng ${month} năm ${year} có 31 ngày!`);
    }
} else {
    alert("Dữ liệu bạn nhập không tồn tại!");
}
