import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyService {
    constructor(private http: Http) { }

    loadCurrencies() {
        // Inferring the base is AUD
        return this.http.get('http://api.fixer.io/latest?base=AUD')
            .map( (res) => res.json())
            .map( (body) => body['rates'])
    }
}
