import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';
import { ExchangeService } from 'app/services/exchange.service';
import { Exchange } from 'app/class/exchange';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { error } from 'util';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    Title
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './home.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  is_edit : boolean;
  /**
   * Set our default values
   */
  public localState = { value: '' };
  public exchanges: Exchange = new Exchange();
  public exchange: Exchange = new Exchange();

  public arrayCountries = [];
  public change: number;
  public amount: number;
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
    public title: Title,
    private _exchangeService: ExchangeService
  ) {
    this.is_edit = true;
  }

  public ngOnInit() {

    TimerObservable.create(0, 600000).subscribe( () => {
      this._exchangeService.getExchange('USD', 'EUR',this.amount).subscribe( (data) => {
        this.exchanges = data;
        this.arrayCountries = [];
        Object.keys(this.exchanges.rates).forEach((key) => this.arrayCountries.push(key));
      }, (error) => {
        console.log('error ' +  error);
      });
    });
  }

  public calculateExchange(): void {
    if (!(this.amount >= 0)) { return; }
    this._exchangeService.getExchange('USD', 'EUR',this.amount).subscribe((data) => {
      this.exchange = data;
      this.change = this.exchange.changedAmount;
    }, (error) => {
      console.log('error ' + error);
    });
  }
}
