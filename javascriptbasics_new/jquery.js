window.onload = function()
{
  var obj, obj2,obj3
//   var promise = $.get("user.json", function (data) {
//
// })
//
//
//   var promise2 = $.get("user2.json", function (data) {
//   })
//
//   var promise3 = $.get("user3.json", function (data) {
//   })
//
//   Promise.all([promise,promise2,promise3]).then(function (value) {
//     console.log(value)
//   })


  $.get("user.json", function (data) {
  }).done(function (data) {
    obj = data
    $.get("user2.json", function (data) {
    }).done(function (data) {
      obj2 = data
      $.get("user3.json", function (data) {
      }).done(function (data) {
        obj3 = data
        console.log(obj + obj2 +obj3)

      })
    })


  })







}