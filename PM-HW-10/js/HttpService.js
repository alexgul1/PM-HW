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
        "Authorization": "token ac29cac025933f05dc68e3d88bf232c6d6cab429"
      }
    }

    return fetch(urlObj.toString(), options)
      .then(response => response.json())
  }
}