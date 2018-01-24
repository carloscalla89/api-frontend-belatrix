
export class Rate {

    private _base: string;
    private _exchangeValue: number;

    public get base() {
        return this._base;
    }

    public set base(value) {
        this._base = value;
    }

    public get exchangeValue() {
        return this._exchangeValue;
    }

    public set exchangeValue(values) {
        this._exchangeValue = values;
    }
}