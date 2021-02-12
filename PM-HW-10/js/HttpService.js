const END_POINT = "https://api.github.com";

class HttpService {
  static async request({path, params = {}}) {
    const urlObj = new URL(`${END_POINT}${path}`);

    Object
      .entries(params)
      .forEach(([key, val])=> {
        urlObj.searchParams.append(key, val);
      });


    const options = {
      headers: {
        "Accept" : "application/vnd.github.v3+json",
        "Authorization": "token a8ec3f941d7118b9062dc6139183e0ec5f7600ef"
      }
    }

    return fetch(urlObj.toString(), options)
      .then(response => response.json())
  }
}