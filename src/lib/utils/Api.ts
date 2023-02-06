import { QueryParam, ReadToken } from "../types/type";

export abstract class ApiCall {
  protected BASE_URL = "https://api.v1.pavilioncms.com";
  private ReadToken: string;
  private headers: any;

  constructor(readToken: ReadToken) {
    this.ReadToken = readToken;

    this.headers = {
      "Content-Type": "application/json;charset=utf-8",
      Accept: "application/json",
      "User-Agent": "pavilioncms-js-client",
      "X-Pavilion-Client": "JS/1.0.0",
      ReadToken: this.ReadToken,
    };
  }

  protected getData<T>(endpoint: string, queryObject?: QueryParam): Promise<T> {
    let url = `${this.BASE_URL}${endpoint}`;
    const options = {
      method: "GET",
      headers: this.headers,
    };

    if (queryObject) {
      let queryString = "?";
      for (const key in queryObject) {
        if (queryObject.hasOwnProperty(key)) {
          const value = encodeURIComponent(queryObject[String(key)]);
          queryString += `${key}=${value}&`;
        }
      }
      queryString.replace(/&$/, "");
      url += queryString;
    }
    return this.invoke<T>(url, options);
  }

  protected getPage<T>(url: string): Promise<T> {
    const options = {
      method: "GET",
      headers: this.headers,
    };
    return this.invoke<T>(url, options);
  }

  protected invoke<T>(url: string, options, type?: string) {
    return fetch(url, options).then((response) => {
      if (!response.ok) {
        return Promise.reject(
          response.json()?.detail ||
            "An error occurred. Please try again later."
        );
      }
      return response.json();
    });
  }
}
