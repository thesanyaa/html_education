/**
 * Created by 212585857 on 11/4/2016.
 */

$(document).ready(function () {
  var menu1
  $.get("dropdown1.json", function (data) {
     menu1 = data
  }).done(function (data) {
    menu1.forEach(function (item) {
      $('#dropdown1')
          .append($("<option></option>")
              .attr("value",item.value)
              .text(item.text));

    })
  })

  var menu2
  $.get("dropdown2.json", function (data) {
    menu2 = data
  }).done(function (data) {
    menu2.forEach(function (item) {
      $('#dropdown2')
          .append($("<option></option>")
              .attr("value",item.value)
              .text(item.text));

    })
  })

  $( "#dropdown2" ).on( "choose", function(event, selected) {
    $("#dropdown2").empty()
    menu2.forEach(function (item) {
      if(item.parent === selected) {
        $('#dropdown2')
            .append($("<option></option>")
                .attr("value",item.value)
                .text(item.text));
      }
    })
  });

  $( "#dropdown1" ).change(function(){
    console.log("test");
    var selected = $("#dropdown1 option:selected").val()
    $( "#dropdown2" ).trigger( "choose", selected )
  })
})






