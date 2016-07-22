// function check(){
//   var email = document.getElementById("register_email");
//   if (email.value=="请输入您的邮箱") {
//     alert("请输入email");
//     return false;
//   }else if (!register_email.checkValidity()) {
//     alert("请输入正确的Email地址");
//     return false;
//   }
// }



// function send_email(){
//   var email = document.getElementById("register_email").value;
//
// }
 // function count_down{
 //   var count_time = setInterval(function(){
 //     count--;
 //   })
 // }
function check(){
  var email = document.getElementById("register_email").value;
  if (true) {
    var token= 'abc';
         $.ajax({
             type: 'post',
             url:'https://dashboard.pingxx.com/auto/user/register/',
             //dataType: 'json',
             data:{'email':email,'token':token},
             success:function(data){
              alert("Fine,it's ok!")
             },
             error:function(request){
               alert("well,there have something wrong~!")
             }
            //  setTimeout(function () {
             //
            //  }, 1000),
            //  compelte:function(){
             //
            //  }
         })
  }
}
