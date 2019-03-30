import { RangeValidator } from "./range.validator";

export class LessThanValidator extends RangeValidator {
    constructor(max: number, errorMessage?: string) {
        super(undefined, max, false, errorMessage);

        this.errorMessageResourceName = "lessThan";
    }
}