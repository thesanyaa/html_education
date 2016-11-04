window.onload = function()
{
  var obj,obj2,obj3;
  var promise = $.get("user.json", function (data) {

  })


  var promise2 = $.get("user2.json", function (data) {
  })

  var promise3 = $.get("user3.json", function (data) {
  })

  Promise.all([promise,promise2,promise3]).then(function (value) {
    console.log(obj + obj2 + obj3)
    console.log(value)
  })


}