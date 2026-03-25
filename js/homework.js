export class Converter {
    constructor() {
        this.button = document.getElementById("Convert");
        this.select = document.getElementById("Fiat");
        this.input = document.getElementById("MoneyInput");
        
        this.rates = {
            USD: 83.5,
            EUR: 104.2
        };
    }
    
    init() {
        this.button.addEventListener("click", () => this.convert());
    }
    
    convert() {
        const Amount = parseFloat(this.input.value);
        const targetCurrency = this.select.value;
        
        if (isNaN(Amount) || Amount <= 0) {
            this.input.value = "";
            return;
        }
        
        const result = Amount / this.rates[targetCurrency];
        
        this.input.value = result.toFixed(2);
    }
}
