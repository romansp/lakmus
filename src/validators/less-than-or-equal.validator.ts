import { RangeValidator } from "./range.validator";

export class LessThanOrEqualValidator extends RangeValidator {
    constructor(max: number, errorMessage?: string) {
        super(undefined, max, true, errorMessage);

        this.errorMessageResourceName = "lessThanOrEquals";
    }
}