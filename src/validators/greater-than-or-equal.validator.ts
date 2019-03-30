import { RangeValidator } from "./range.validator";

export class GreaterThanOrEqualValidator extends RangeValidator {
    constructor(min: number, errorMessage?: string) {
        super(min, undefined, true, errorMessage);

        this.errorMessageResourceName = "greaterThanOrEquals";
    }
}