function Promise_test()
{
    const promise_timeout = new Promise(function (resolve) {
        setTimeout(() => {
          console.log("Lan 1");
          resolve();

          /*nếu đặt resolve(); ở đây, thì setTImeout lần 1 xong 
        nó sẽ kích hoạt Promise và kích hoạt .then 
        => đếm ngược setTimeOut số 2 sau khi SetTimeout số 1 đã được thực hiện*/

        }, 2000);
        

        //resolve();
        /*nếu đặt resolve(); ở đây, thì vì setTImeout là bất đồng bộ 
        nên nó sẽ kích hoạt Promise và kích hoạt .then 
        => đếm ngược setTimeOut số 2 cùng lúc SetTimeout số 1*/

    });
    
    return promise_timeout;
}

Promise_test()
    .then(function()
    {
      setTimeout(() => {
        console.log("Lan 2");
      }, 2000);
    });


    /* thử làm console.log lần 3 2s sau lần 2 => tạo thêm 1 promise nhét vào trong .then

    => rối, quá nhiều phần tử lồng nhau, khó đọc code
    => dùng await/async thay thế
    */


