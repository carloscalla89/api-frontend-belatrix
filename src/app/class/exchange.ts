import { Rate } from 'app/class/rate';

export class Exchange {

    private _rates: number;
    private _changedAmount: number

    public get rates(){
        return this._rates;
    }

    public set rates(values) {
        this._rates = values;
    }

    public get changedAmount() {
        return this._changedAmount;
    }

    public set changedAmount(changedAmount) {
        this._changedAmount = changedAmount
    }
}