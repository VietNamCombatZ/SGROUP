var express = require('express');
var app = express();
var port = 3000;
app.get('', function(req, res) /* là API vì có method: GET và body  */
{
   return res.send('Hello World');
});
app.listen(port, function(){
    console.log(`Example app listening on port ${port}`);
})

