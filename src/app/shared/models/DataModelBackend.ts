import { Month } from "./Month";
import { PaymentFrequency } from "./PaymentFrequncy";
import { PrepaymentFrequency } from "./PrepaymentFrequency";
import { Term } from "./Term";
import { Year } from "./Year";

export class DataModelBackend{
    amortPeriodYearList: Year[];
    amortPeriodMonthList: Month[];
    paymentFrequencyList: PaymentFrequency[];
    termList: Term[];
    prepaymentFrequencyList: PrepaymentFrequency[];

}