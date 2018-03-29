function getFiles() {
  return $.ajax('/api/file')
    .then(res => {
      console.log("Results from getFiles()", res);
      return res;
    })
    .fail(err => {
      console.error("Error in getFiles()", err);
      throw err;
    });
}

function refreshFileList() {
  const template = $('#list-template').html();
  const compiledTemplate = Handlebars.compile(template);

  getFiles()
    .then(files => {
      const data = {files: files};
      const html = compiledTemplate(data);
      $('#list-container').html(html);
    })
}


function handleAddFileClick() {
  toggleAddFileFormVisibility();
}

function toggleAddFileFormVisibility() {
  $('#form-container').toggleClass('hidden');
}

  function submitFileForm() {
    const fileData = {
    name: $('#file-name').val(),
    duration: $('#file-duration').val(),
    isDone: false
  };

  $.ajax({
  type: "POST",
  url: '/api/file',
  data: JSON.stringify(fileData),
  dataType: 'json',
  contentType : 'application/json',
})
  .done(function(response) {
    console.log("We have posted the data");
    refreshFileList();
    toggleAddFileFormVisibility();
  })
  .fail(function(error) {
    console.log("Failures at posting, we are", error);
  });

  console.log("Your file data", fileData);
}

function cancelFileForm() {
  toggleAddFileFormVisibility();
}


refreshFileList();
