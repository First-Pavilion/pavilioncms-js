type Config = {
    apiKey: string;
}

const BASE_URL = "https://api.themoviedb.org/3";

export abstract class Client {
    private apiKey: string;

    constructor(config: Config) {
        this.apiKey = config.apiKey;
    }

    protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = `${BASE_URL}${endpoint}`;
        
        const headers = {
            "Content-Type": "application/json",
            "ReadToken": this.apiKey
        }

        const config = {
            ...options,
            headers
        }

        return fetch(url, config).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
    }


}

export class PavilionCMS{
    
}