// The purpose of this function is to be able to correctly map the CloudFront
// requests from a given URL to the concatenated version compatible with NextJs
// which has the ".html" part appended at the end (otherwise we will get errors)

function handler(event, _context) {
  var request = event.request;
  var uri = request.uri;

  if (uri == "/") {
    request.uri += "index.html";
  } else if (!uri.includes(".")) {
    request.uri += ".html";
  }

  return request;
}
