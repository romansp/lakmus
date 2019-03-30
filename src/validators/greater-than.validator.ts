import { RangeValidator } from "./range.validator";

export class GreaterThanValidator extends RangeValidator {
    constructor(min: number, errorMessage?: string) {
        super(min, undefined, false, errorMessage);

        this.errorMessageResourceName = "greaterThan";
    }
}