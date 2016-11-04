$(document).ready(function()
{
  $.get('table_sok.json', function (dataSet) {
    $('#myTable').DataTable({
          data: dataSet,
          pageLength: 9999999,
          columns: [
            {data: "_id", title: "ID"},
            {data: "index", title: "Index"},
            {data: "guid", title: "guID"},
            {data: "isActive", title: "Activity"},
            {data: "balance", title: "Balance"},
            {data: "picture", title: "Picture"}
          ]
        } );
  })

 /* $('#myTable').DataTable({
    "ajax": "table_100.json",
    columns: [
      {data: "_id", title: "ID"},
      {data: "index", title: "Index"},
      {data: "guid", title: "guID"},
      {data: "isActive", title: "Activity"},
      {data: "balance", title: "Balance"},
      {data: "picture", title: "Picture"}
    ]
  } );*/
})