// onload onerror onprogress
function upload(url, form, options) {
  options = options || {};
  var xhr = new XMLHttpRequest();
  xhr.onload = function (result) {
    if (options.onload && (typeof options.onload === 'function')) {
      options.onload(result);
    }
  }

  xhr.onerror = function (result) {
    if (options.onerror && (typeof options.onerror === 'function')) {
      options.onerror(result);
    }
  }

  xhr.onprogress = function (data) {
    if (options.onprogress && (typeof options.onprogress === 'function')) {
      options.onprogress(data);
    }
  }

  xhr.open('POST', url);

  xhr.send(new FormData(form));
}