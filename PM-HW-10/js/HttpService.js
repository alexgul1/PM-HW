const END_POINT = "https://api.github.com";
const AuthToken = "";

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
      ...(AuthToken && {"Authorization": `token ${AuthToken}`})
      }
    }

    return fetch(urlObj.toString(), options)
      .then(response => response.json())
  }
}