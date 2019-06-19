addMovie();
insertMovies();

function addMovie() {
  $(document).on('submit', '#add-movie-form', () => {
    return false;
  });
}

async function insertMovies() {
  let table = $('#watchlist-table');
  fetchMovies().then((data) => {
    console.log(data);
    let movies = JSON.parse(data);
  })
}

function fetchMovies() {
  return new Promise((fulfill, reject) => {
    $.get('/movies', (data, status) => {
      if (status == 'success') {
        fulfill(data);
      } else {
        reject();
      }
    });
  })
}

function appendTableColumn(table, rowData) {
  let lastRow = $('<tr/>').appendTo(table.find('tbody:last'));
  $.each(rowData, function (colIndex, c) {
    lastRow.append($('<td/>').text(c));
  });

  return lastRow;
}
