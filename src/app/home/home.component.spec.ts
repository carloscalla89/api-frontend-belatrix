import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture,
  getTestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

/**
 * Load the implementations that should be tested.
 */
import { AppState } from '../app.service';
import { HomeComponent } from './home.component';
import { Title } from './title';
import { ExchangeService } from 'app/services/exchange.service';
import { Observable } from 'rxjs/Observable';
import { error } from 'util';

describe(`Home`, () => {

  let exchangeService  = {
    getExchageUSDtoANY() {
      return Observable.create({ base: 'USD', date: '16/08/2017',
                      rates: [{ name: 'EUR', exchange: 1.25 }] });
    }
  };

  let fixture: ComponentFixture<HomeComponent>;
  let instance : HomeComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      providers: [
        { provide: ExchangeService, useValue: exchangeService  }
      ]
    });

    //fixture = TestBed.createComponent(HomeComponent);
    //instance = fixture.componentInstance;

  });

  it('calcular tipo de cambio de dolar a euro (cero)', inject([ExchangeService],
                    (exchangeService: ExchangeService)  => {
    spyOn(exchangeService, 'getExchange').and.callThrough();
    instance.ngOnInit();
    expect(exchangeService.getExchange).toHaveBeenCalled();
  }));
  
 
 /* it('should have default data', () => {
    expect(comp.localState).toEqual({ value: '' });
  });

  it('should have a title', () => {
    expect(!!comp.title).toEqual(true);
  });

  it('should log ngOnInit', () => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    comp.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  });
*/
});
