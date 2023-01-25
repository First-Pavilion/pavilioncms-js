import { Config } from "../types/Config";
import axios from "axios";

export abstract class ApiCall {
  protected BASE_URL = "https://api.themoviedb.org/3";
  private apiKey: string;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
  }

  protected invoke<T>(endpoint: string, type?: string): Promise<T> {
    const url = `${this.BASE_URL}${endpoint}`;
    const headers = {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${this.apiKey}`,
    };

    return axios({
      url,
      method: type || "GET",
      headers,
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}
