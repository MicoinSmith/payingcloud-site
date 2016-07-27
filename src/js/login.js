function login_check(){
  var login_email = document.getElementById("login_email").value;
  var login_pwd = document.getElementById("login_password").value;
  if (true) {
    alert(login_email);
    alert(login_pwd);
    var token= 'abc';
         $.ajax({
             type: 'post',
             url:'https://dashboard.pingxx.com/auto/user/register/',
             dataType: 'json',
             data:{'email':login_email,'password':login_pwd},
            //  alert("login_pwd")
             success:function(data){
              alert("Fine,it's ok!")
             }
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
  }return true;
}
