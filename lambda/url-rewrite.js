// The purpose of this function is to be able to correctly map the CloudFront
// requests from a given URL to the concatenated version compatible with NextJs
// which has the ".html" part strategically appended or modified at the end
// (otherwise we could get errors due to wrong uris)

function handler(event, _context) {
  var request = event.request;
  var uri = request.uri;

  if (uri == "/") {
    request.uri += "index.html";
  } else if (uri.endsWith("/")) {
    // Remove last char "/" (eg: "x.com/about/" becomes "x.com/about")
    request.uri = request.uri.slice(0, -1);
    request.uri += ".html";
  } else if (!uri.includes(".")) {
    request.uri += ".html";
  }

  return request;
}
