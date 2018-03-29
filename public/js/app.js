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

      window.fileList = files;

      const data = {files: files};
      const html = compiledTemplate(data);
      $('#list-container').html(html);
    })
}

function handleAddFileClick() {
  setFormData({});
  toggleAddFileFormVisibility();

}

function toggleAddFileFormVisibility() {
  $('#form-container').toggleClass('hidden');
}

function submitFileForm() {
    const fileData = {
    name: $('#file-name').val(),
    duration: $('#file-duration').val(),
    _id: $('#file-id').val(),
  };

  let method, url;
  if (fileData._id) {
    method = 'PUT';
    url = '/api/file/' + fileData._id;
  } else {
    method = 'POST';
    url = '/api/file';
  }

  $.ajax({
    type: method,
    url: url,
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
    })

  console.log("Your file data", fileData);
}

/*  $.ajax({
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
*/

function cancelFileForm() {
  toggleAddFileFormVisibility();
}

/** EDIT **/



function handleEditFileClick(id) {
  const file = window.fileList.find(file => file._id === id);
  if (file) {
    setFormData(file);
    toggleAddFileFormVisibility();
  }
}

function setFormData(data) {
  data = data || {};

  const file = {
    name: data.name || '',
    duration: data.duration || '',
    _id: data._id || '',
  };

  $('#file-name').val(file.name);
  $('#file-duration').val(file.duration);
  $('#file-id').val(file._id);
}


refreshFileList();
