# Array 
## Cách khai báo Array 
**Cách 1 Array Literal (phổ biến nhất)**
- let traiCay = ["Táo", "Cam", "Xoài"];
- let diemSo = [8, 9, 7.5, 10];
- let hocSinh = []; // mảng rỗng  

**Cách 2: Dùng new Array()**  
let traiCay = new Array("Táo", "Cam", "Xoài");  
Thực tế: Cách 1 (Array Literal) được dùng gần như 100% vì ngắn gọn hơn.  
**Array có thể chứa nhiều kiểu dữ liệu khác nhau**  
let honHop = ["Lan", 22, true, null, { lop: "WEB01" }];  

## Truy xuất dữ liệu trong Array
**Lấy phần tử theo index (chỉ số)**  
Index bắt đầu từ 0, không phải từ 1.  
let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
console.log(monHoc[0]); // "Toán" — phần tử đầu tiên
console.log(monHoc[2]); // "Hoá" — phần tử thứ 3
console.log(monHoc[4]); // "Tin" — phần tử cuối cùng
console.log(monHoc[5]); // undefined — không tồn tại  
**Lấy phần tử cuối cùng**  
let cuoi = monHoc[monHoc.length - 1]; // "Tin"  
**Đếm số phần tử: .length**  
console.log(monHoc.length); // 5  
**Gán lại giá trị theo index**  
monHoc[1] = "Vật lý";  
console.log(monHoc); // ["Toán", "Vật lý", "Hoá", "Anh", "Tin"]  
## Thêm, xoá phần tử 
**Thêm vào cuối*Thêm vào cuối: .push()**   
- let monHoc = ["Toán", "Lý"];  
- monHoc.push("Hoá");  
- console.log(monHoc); // ["Toán", "Lý", "Hoá"]  
**Xoá phần tử cuối: .pop()**  
- let monBiXoa = monHoc.pop();  
- console.log(monBiXoa); // "Hoá"  
- console.log(monHoc); // ["Toán", "Lý"] 
**Thêm vào đầu: .unshift()**  
- monHoc.unshift("Anh");  
- console.log(monHoc); // ["Anh", "Toán", "Lý"]  
**Xoá phần tử đầu: .shift()**  
- monHoc.shift();  
- console.log(monHoc); // ["Toán", "Lý"]  
## Kết hợp Array với vòng lặp 
**Dùng for truyền thống**  
let diemSo = [8, 6, 9, 7, 10];  
for (let i = 0; i < diemSo.length; i++) {  
console.log("Học sinh " + (i + 1) + ": " + diemSo[i] + " điểm");  
}  
// Học sinh 1: 8 điểm  
// Học sinh 2: 6 điểm  
// Học sinh 3: 9 điểm  
// Học sinh 4: 7 điểm  
// Học sinh 5: 10 điểm  
**Lưu ý**: i < diemSo.length chứ không phải i <= diemSo.length (vì index bắt đầu từ 0).
**Dùng for...of — gọn hơn khi không cần index**  
let traiCay = ["Táo", "Cam", "Xoài"];  
for (let qua of traiCay) {  
console.log(qua);  
}  
// Táo  
// Cam  
// Xoài  
**Dùng .forEach() — cách hiện đại**  
let traiCay = ["Táo", "Cam", "Xoài"];  
traiCay.forEach(function(qua, viTri) {  
console.log(viTri + ": " + qua);  
});  
// 0: Táo  
// 1: Cam  
// 2: Xoài  
**Ví dụ thực tế**  
Khi gọi API, dữ liệu thường là Array chứa nhiều Object:  

// Ví dụ response từ https://jsonplaceholder.typicode.com/users  
let users = [  
{ id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },  
{ id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },  
{ id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net" }  
];  
// In danh sách tên user  
for (let user of users) {  
console.log(user.name);  
}  
// Leanne Graham  
// Ervin Howell  
// Clementine Bauch  
# Object đối tượng 
## Cách khai báo object 
**Cách 1: Object Literal (phổ biến nhất)**  
- let xe = {  
- hang: "Toyota",  
- mau: "Trắng",  
- namSanXuat: 2023  
};  
**Cách 2: Dùng new Object()**  
- let xe = new Object();  
- xe.hang = "Toyota";  
- xe.mau = "Trắng";  
- xe.namSanXuat = 2023;  
**Quy tắc đặt tên key**
- Key thường là string, không cần đặt trong dấu ngoặc kép nếu là tên hợp lệ (không có dấu cách, ký tự đặc biệt).  
- Nếu key có dấu cách hoặc ký tự đặc biệt → bắt buộc đặt trong ngoặc kép.  
let person = {  
"full name": "Nguyen Van A", // key có dấu cách → cần ngoặc kép  
age: 25 // key bình thường → không cần  
};  
## Truy xuất dữ liệu trong object 
**Cách 1: Dot notation (Dấu chấm) — phổ biến**  
let sinhVien = { hoTen: "Lan", tuoi: 22 };  
console.log(sinhVien.hoTen); // "Lan"  
console.log(sinhVien.tuoi); // 22  
## Gán giá trị cho Object 
let sinhVien = { hoTen: "Lan", tuoi: 22 };  
**// Sửa giá trị**  
sinhVien.tuoi = 23;  
console.log(sinhVien.tuoi); // 23  
**// Thêm key mới (key chưa tồn tại → tự tạo mới)**  
sinhVien.email = "lan@gmail.com";  
console.log(sinhVien);  
// { hoTen: "Lan", tuoi: 23, email: "lan@gmail.com" }   
## Thêm, sửa, xoá thuộc tính 
**Thêm**  
let product = { ten: "Áo thun" };  
product.gia = 150000; // thêm bằng dot  
product["mauSac"] = "Đen"; // thêm bằng bracket  
**Sửa**  
product.gia = 180000; // cập nhật giá  
**Xoá**  
delete product.mauSac;  
console.log(product); // { ten: "Áo thun", gia: 180000 }  
## Object lồng nhau (Nested Object)
Giá trị (value) của một key có thể là bất kỳ kiểu dữ liệu nào, kể cả một Object khác.  
let sinhVien = {  
hoTen: "Minh",  
tuoi: 21,  
diaChi: {  
soNha: "12",  
duong: "Lê Lợi",  
thanhPho: "Hồ Chí Minh"  
}  
};  
## Truy xuất Object lồng nhau
console.log(sinhVien.diaChi.duong); // "Lê Lợi"  
console.log(sinhVien["diaChi"]["soNha"]); // "12" 
**Ví dụ thực tế: Dữ liệu API trả vể** 
Khi gọi API, dữ liệu thường có dạng Object lồng nhau:  

// Ví dụ response từ https://jsonplaceholder.typicode.com/users/1  
let user = {  
id: 1,  
name: "Leanne Graham",  
address: {  
street: "Kulas Light",  
city: "Gwenborough",  
geo: {  
lat: "-37.3159",  
lng: "81.1496"  
}  
},  
company: {  
name: "Romaguera-Crona"  
}  
};  
// Lấy tên thành phố  
console.log(user.address.city); // "Gwenborough"  
// Lấy toạ độ  
console.log(user.address.geo.lat); // "-37.3159"  
// Lấy tên công ty  
console.log(user.company.name); // "Romaguera-Crona"  
# Function 
## Cách khai báo function 
**Cú pháp**  
function tenHam() {    
// các dòng lệnh bên trong  
}  
- function — từ khoá bắt buộc
- tenHam — tên do bạn đặt
- {} — thân hàm, chứa code sẽ thực thi
**Quy tắc đặt tên**  
- Dùng camelCase: tinhTong , layDuLieu , hienThiSanPham  
- Nên bắt đầu bằng động từ: tinh... , lay... , hienThi... , kiemTra...  
- Tên phải diễn tả hành động mà hàm thực hiện  
## Gọi hàm
Khai báo ≠ Thực thi  
// Khai báo — chỉ "ghi công thức", chưa có gì xảy ra  
function demNguocPhongTen() {  
console.log("3...");  
console.log("2...");  
console.log("1...");  
console.log("🚀 Phóng!");  
}  
// Gọi hàm — code bên trong MỚI chạy  
demNguocPhongTen();  
Kết quả:  
3...  
2...  
1...  
🚀 Phóng!  
**Gọi hàm = tên hàm + dấu ()**  
- demNguocPhongTen(); // ✅ Gọi hàm — có ()  
- demNguocPhongTen; // ❌ Chỉ tham chiếu tới hàm, KHÔNG chạy  
**Gọi nhiều lần**  
function veDuong() {  
console.log("──────────");  
}  
veDuong();  
console.log("Phần 1: Giới thiệu");  
veDuong();  
console.log("Phần 2: Nội dung");  
veDuong();  
Kết quả:  
──────────  
Phần 1: Giới thiệu  
──────────  
Phần 2: Nội dung  
──────────  
**4. Function với tham số (Parameter)**  
Hàm chaoMung() ở trên luôn in cùng một nội dung. Nếu muốn chào từng người khác nhau thì sao?  
**Tham số = "nguyên liệu" truyền vào cho hàm**  
// tham số ↓  
function chao(ten) {  
console.log("Xin chào " + ten + "!");  
}  
chao("Lan"); // "Xin chào Lan!"  
chao("Minh"); // "Xin chào Minh!"  
chao("Hoa"); // "Xin chào Hoa!"  
## Function có giá trị trả về: return
**Không có return — chỉ "làm"**  
function inTong(a, b) {  
console.log(a + b); // in ra, nhưng không trả về   
}  
let ketQua = inTong(3, 5); // in 8  
console.log(ketQua); // undefined — vì hàm không return  
**Có return — "làm" xong "trả kết quả"**  
function tinhTong(a, b) {  
return a + b; // trả kết quả về cho nơi gọi  
}  
let ketQua = tinhTong(3, 5);  
console.log(ketQua); // 8  
// Dùng trực tiếp trong biểu thức  
console.log(tinhTong(10, 20) * 2); // 60  
**return dừng hàm ngay lập tức**  
function kiemTraTuoi(tuoi) {  
if (tuoi < 0) {  
return "Tuổi không hợp lệ"; // dừng hàm tại đây  
}  
return "Tuổi của bạn là " + tuoi;  
}  
console.log(kiemTraTuoi(-5)); // "Tuổi không hợp lệ"    
console.log(kiemTraTuoi(20)); // "Tuổi của bạn là 20"  
