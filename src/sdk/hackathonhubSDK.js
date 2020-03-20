class HackathonHubSDK {
  constructor(params) {
    this.config = {
      appId: params.appId,
      hhubApi: params.hhubApi,
      hhubDevApi: params.hhubDevApi,
      development: params.development,
      languagePack: params.languagePack,
    };

    this.urls = {
      GET_HACKER_DATA: `${this.config.hhubDevApi}/v1/patch/hacker/me`,
      CHECK_PHONE_NUMBER: `${this.config.hhubDevApi}/v1/patch/check/phone`,
      CHECK_CODE_NUMBER: `${this.config.hhubDevApi}/v1/patch/check/phone/verify`,
    };

    this.api = {
      getHackerData: async (token) =>
        await this._fetchServer(
          this.urls.GET_HACKER_DATA,
          'get',
          undefined,
          token,
        ),

      checkUserPhone: async (phoneNumber) =>
        await this._fetchServer(
          `${this.urls.CHECK_PHONE_NUMBER}?q=${phoneNumber}`,
          'get',
        ),

      checkUserCode: async (phone, code) =>
        await this._fetchServer(
          `${this.urls.CHECK_CODE_NUMBER}?q=${phone}&code=${code}`,
        ),
    };
  }

  // SERVER FETCH HANDLER
  _fetchServer(url, method = "get", body = undefined, token = undefined) {
    const Header = new Headers({
      "Content-Type": "application/json",
    });

    if (this.config.appId)
      Header.set("Application-Id", this.config.appId);

    if (token)
      Header.set("Hackathon-Hub", token);

    const Params = {
      method: method,
      cache: 'default',
      headers: Header,
    };

    if (method === "post" || "put")
      Params.body = JSON.stringify(body);

    return new Promise((resolve, reject) => {
      fetch(`${url}`, Params)
        .then(HackathonHubSDK._checkHttpStatus).then(data => {
          resolve(data);
        }).catch(err => {
          console.error(err);
          reject(err);
      });
    })
  }

  static _checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      if (response.status === 204) return [];
      return response.json();
    } else {
      return response.json().then(Promise.reject.bind(Promise));
    }
  }
}

export default function SDK({ appId, hhubApi, hhubDevApi, development, languagePack }) {
  if (!appId && !hhubApi && !hhubDevApi && !development && !languagePack) return new Error("Error...");
  return new HackathonHubSDK({ appId, hhubApi, hhubDevApi, development, languagePack });
}
