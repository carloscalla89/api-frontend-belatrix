import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Exchange } from 'app/class/exchange';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExchangeService {


    private headers = new Headers({ 'Content-Type': 'application/json' });
    private _exchangeApi = 'http://localhost:8080/money-exchange/exchangeRate';
    private exchageUSDtoANY = 'http://api.fixer.io/latest?base=USD';
    private exchageUSDtoEUR = 'http://api.fixer.io/latest?base=USD&symbols=EUR';

    constructor(private httpClient: HttpClient) { }

    public getExchange(source, target ,amount): Observable<Exchange> {
        let baseQuery = '?base=' + source + '&target=' + target + '&amount=' + amount;
        
        let endpoint = this._exchangeApi + baseQuery ;
        return this.httpClient.get<Exchange>(endpoint);
    }
}
