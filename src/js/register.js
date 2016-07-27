$(document).ready(function(){
  var json = {
    email: "467441151@qq.com"
  };

  $("#register_button").click(function(){
    $.ajax({
           type: 'post',
           url:'http://localhost:8081/account/create',
           contentType: "application/json",
           data: JSON.stringify(json),
           dataType:"json",
           success:function(data){
            alert("Fine,it's ok!");
           },
           error:function(request){
            //  alert("well,there have something wrong~!")
           }
       });
  });
});


// $("#register_button").click(function(){
//   alert(1);
//   $.ajax({
//     // url:'http://123.56.68.78:8080/account/create/',
//     type:"post",
//     data:$('#register_form').serialize(),
//     success: function(data) {
//       alert(2);
//       $("#result").text(data);
//     }
//   });
// });

// function check(){
//   var register_email = document.getElementById("register_email").value;
//   if (true) {
//     // register_email = document.getElementById("register_email").value;
//     // alert(register_email);
//     var jqxhr;
//          $.ajax({
//              type: 'post',
//              url:'http://123.56.68.78:8080/account/create/',
//              dataType: 'data',
//              data:{'email':register_email},
//              success:function(data){
//               alert("Fine,it's ok!")
//              },
//              error:function(request){
//                alert("well,there have something wrong~!")
//              }
//             //  setTimeout(function () {
//              //
//             //  }, 1000),
//              compelte:function(){
//               alert(compelte);
//              }
//          })
//   }
//   return true;
// }


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
