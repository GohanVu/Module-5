// 1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu.
let arr = [1,2,4,5,7,8,9,10]
let arrGreater5 = arr.filter(value => value > 5);
console.log(arrGreater5);

// 2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.
let total = arr.reduce((currentTotal , currentValue) => currentTotal + currentValue ,0)
console.log(total)

// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy".
let V = 3;
let checkExist = arr.includes(V) ? V : "không tìm thấy"
console.log(checkExist)

// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không?.
let allGreaterThanZero  = arr.every((element) => element > 0);
console.log(allGreaterThanZero)

// 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.
let firstGreaterThan3 = arr.find((element) => element > 3)
console.log(firstGreaterThan3)

// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first"
// và các phần tử còn lại vào một mảng mới "rest".
let [first,...rest] = arr;
console.log(first)
console.log(rest)

// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
let person = {
    name : "Hoang",
    age : "27",
    address : "Ha Noi"
}
let {name : name1, age: age1} = person;
console.log(name1)
console.log(age1)

// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
function sum (...numbers){
    return numbers.reduce((currentSum, currentValue) => currentSum + currentValue, 0);
}
let total1 = sum(...arr);
console.log(total1);

// 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng
// "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.
function welcome (...names){
    return `Welcome, ${names.join(', ')}`
}
let message = welcome("Hoang", "Ngoc", "Tinh");
console.log(message)

// 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals.
//     Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.
let book = {
    title : "Home Sapiens",
    author : "Yuval Noah Harari",
    page : "750" ,
    displayInfo(){
        console.log(`Title: ${this.title}, Author: ${this.author}, Page:${this.page}`)
    }
}
book.displayInfo();