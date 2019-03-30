import { MinLengthValidator } from "../src/validators/min-length.validator";
import { PropertyValidatorTester } from "./property-validator-tester";

var description = "Min length validator spec.";

var tester = new PropertyValidatorTester(new MinLengthValidator(5));
tester.test(description, [
    { value: null, pass: true },
    { value: "value", pass: true },
    { value: "text", pass: false }
]);