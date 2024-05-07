localStorage.setItem("id", "abc123");
/* muốn lưu biểu mẫu  vào localStorage thì dùng JSON.stringify 
=> dùng setItem, chuyển file vào localStorage*/

let data = localStorage.getItem("id");

console.log(data);
// localStorage.removeItem("id");
// localStorage.clear;



