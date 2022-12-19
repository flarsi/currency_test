export class HttpService {
    constructor(baseUrl, baseRequestInit) {
        this.baseUrl = baseUrl;
        this.baseRequestInit = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem("token") || ''
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            ...baseRequestInit
          }
    }

   baseUrl;
   baseRequestInit;
   lastResponse;

   paramsToString(params) {
    let paramsString = '';

    if(params){
        paramsString = '?'
        Object.keys(params).forEach((key, index, arr) => {
            let value = params[key]
            if(value) {
                paramsString += `${key}=${value}`
            }
            if(arr.length - 1 > index) {
                paramsString += '&'
            }
        })
    }
        return paramsString;
   }

   getLastResponse = () => this.lastResponse
   setLastResponse = ((res) => {
    this.lastResponse = res
    return res.json()
   })
   

    get = async (params) => {
        const queryParams = this.paramsToString(params.queryParams)

        return fetch(this.baseUrl + params.url + queryParams, {...this.baseRequestInit, method: "GET"})
        .then(this.setLastResponse)
        .then(data => data)
    }
    
    post = async (params) => {
        const queryParams = this.paramsToString(params.queryParams)

        return fetch(this.baseUrl + params.url + queryParams, {...this.baseRequestInit, method: "POST", body: JSON.stringify(params.body)})
        .then(this.setLastResponse)
        .then(data => data)

    }

    put = async (params) => {
        const queryParams = this.paramsToString(params.queryParams)

        return fetch(this.baseUrl + params.url + queryParams, {...this.baseRequestInit, method: "PUT", body: JSON.stringify(params.body)})
        .then(this.setLastResponse)
        .then(data => data)

    }

    update = async (params) => {
        const queryParams = this.paramsToString(params.queryParams)

        return fetch(this.baseUrl + params.url + queryParams, {...this.baseRequestInit, method: "UPDATE", body: JSON.stringify(params.body)})
        .then(this.setLastResponse)
        .then(data => data)

    }

    patch = async (params) => {
        const queryParams = this.paramsToString(params.queryParams)

        return fetch(this.baseUrl + params.url + queryParams, {...this.baseRequestInit, method: "PATCH", body: JSON.stringify(params.body)})
        .then(this.setLastResponse)
        .then(data => data)
    }

    delete = async (params) => {
        const queryParams = this.paramsToString(params.queryParams)

        return fetch(this.baseUrl + params.url + queryParams, {...this.baseRequestInit, method: "DELETE"})
        .then(this.setLastResponse)
        .then(data => data)
    }

    fetch = async (url, params) => fetch(url, params)
}

export default new HttpService("http://localhost:3001", {})