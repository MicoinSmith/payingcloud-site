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
    var token= ' asdas';
         $.ajax({
             url:'/path/to/file',
             //type: 'GET',
             //dataType: 'json',
             data:{'email':'sadasd','token':token},
             success:function(){

             },
             error:function(){

             }
             setTimeout(function () {

             }, 1000),
             compelte:function(){

             }
         })
  }
}
