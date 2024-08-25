import { Component } from '@angular/core';
import { CurrencyDropDownList } from '../../models/currency-config';
import { CurrencyDropDown } from '../../datas/currency-dropdown';

@Component({
  selector: 'app-currency-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './currency-dropdown.component.html',
  styleUrl: './currency-dropdown.component.scss'
})
export class CurrencyDropdownComponent {
  public currencyList!: CurrencyDropDownList[];
  selectedCountryCode: string = 'us';
  selectedCurrency: string = 'usd';

  countryList!: any[];

  ngOnInit(): void {
    this.currencyList = CurrencyDropDown;
    this.countryList = this.currencyList.filter(item => this.currencyList.includes(item));
    // console.log(this.countryList);

  }

  selectCurrency(currencyCode: string) {
    this.selectedCurrency = currencyCode;
    console.log(this.selectedCurrency);
  }


}
