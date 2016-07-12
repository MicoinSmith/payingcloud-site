var shoppingCart = {
  A:0,
  B:0,
};
function commodity_a() {
  var checkbox = document.getElementById('checkbox_a');//
  alert(checkbox.checked);//是否被选中
  if(checkbox.checked){
    //选中了
    A = 1;
  }else{
     //没选中
     A = 0;
  }
}
function commodity_a() {
  var checkbox = document.getElementById('checkbox_b');//
  alert(checkbox.checked);//是否被选中
  if(checkbox.checked){
    //选中了
    B = 1;
  }else{
     //没选中
     B = 0;
  }
}
function sure_by(){


    var token= '';
       $.ajax({
           url:'',
           data:{'email':'sadasd','token':token},
           success:function(){
              alert("success")
           },
           error:function(){
              alert("error")
           }
           setTimeout(function () {

           }, 5000),
           compelte:function(){
             alert('ok')
           }
       })
}
