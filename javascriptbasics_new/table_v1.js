window.onload = function()
{

  $.get('table_sok.json', function (data) {
    data.forEach(function (res) {
      $('#myTable').append(
          '<tr><td> '+res['_id']+' </td> '
          + '<td> '+res['balance']+' </td> '
          + '<td> '+res['guid']+' </td> '
          + '<td> '+res['index']+' </td> '
          + '<td> '+res['isActive']+' </td> '
          + '<td> '+res['picture']+' </td> '
      )
    })
  })

}