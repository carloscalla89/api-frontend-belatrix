import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Exchange } from 'app/class/exchange';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExchangeService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private _exchangeApi = 'http://api.fixer.io/latest';
    private exchageUSDtoANY = 'http://api.fixer.io/latest?base=USD';
    private exchageUSDtoEUR = 'http://api.fixer.io/latest?base=USD&symbols=EUR';

    constructor(private httpClient: HttpClient) { }

    public getExchange(base, symbols = ''): Observable<Exchange> {
        let baseQuery = '?base=' + base;
        let symbolQuery = '';
        if (symbols !== '') {
            symbolQuery = '&symbols=' + symbols;
        }
        let endpoint = this._exchangeApi + baseQuery + symbolQuery;
        return this.httpClient.get<Exchange>(endpoint);
    }
}
