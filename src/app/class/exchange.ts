import { Rate } from 'app/class/rate';

export class Exchange {

    private _base: string;
    private _date: string;
    private _rates: Rate;

    public get base() {
        return this._base;
    }

    public set base(value) {
        this._base = value;
    }

    public get date() {
        return this._date;
    }

    public set date(value) {
        this._date = value;
    }

    public get rates(){
        return this._rates;
    }

    public set rates(values) {
        this._rates = values;
    }
}