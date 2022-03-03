
function init() {

  $("table").each(function (i) {
    updateTableById($(this).attr("data-id"));
  });
}

function updateTableById(id) {
  var rows = $("#sel-rows-" + id).val();
  var cols = $("#sel-cols-" + id).val();

  var tableB_rows = "";
  var tableB_cols = "";
  var tableH_cols = "";

  for (var j = 0; j < cols; j++) {

    tableH_cols += '<th>' + j + '</th>';
  }

  for (var i = 0; i < rows; i++) {

    tableB_cols = "";

    for (var j = 0; j < cols; j++) {

      tableB_cols += '<td>' + j + '</td>';
    }
    
    tableB_rows += '<tr>' + tableB_cols + '</tr>';
  }

  $("#table-" + id).html(
    '<thead>' +
    '<tr>' + tableH_cols + '</tr>' +
    '</thead>' +
    '<tbody>' + tableB_rows + '</tbody>'
  );
}

function updateTable(event) {
  updateTableById($(event.currentTarget).attr("data-id"));
}