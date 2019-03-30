import { Validator } from "../src/validator";

export enum LoginTypes {
    Cloud,
    SubInstance,
    OnPrem,
}
export interface LoginOption {
    text: string;
    value: LoginTypes;
}

export interface LoginOptionCloud extends LoginOption {
    readonly value: LoginTypes.Cloud;
    host: string;
}

export interface LoginOptionSubInstance extends LoginOption {
    readonly value: LoginTypes.SubInstance;
    name: string;
    topLevelDomain: string;
}

export interface LoginOptionOnPrem extends LoginOption {
    readonly value: LoginTypes.OnPrem;
    host: string;
}

export type LoginOptions = LoginOptionCloud | LoginOptionSubInstance | LoginOptionOnPrem;

export interface LoginViaModel {
    options: LoginOptions[];
    selected: LoginOptions;
}

class LoginViaValidator extends Validator<LoginViaModel> {
    constructor() {
        super();

        this.ruleFor(x => x.selected.value === LoginTypes.SubInstance ? x.selected.name : null)
            .when(x => x.selected.value === LoginTypes.SubInstance)
            .notEmpty();
    }
}

var description = "class spec.";
const validator = new LoginViaValidator();
describe(description, () => {
    it("LoginViaValidator should pass.", () => {
        expect(validator.validate({
            options: [],
            selected: {
                value: LoginTypes.SubInstance,
                name: "",
                text: "",
                topLevelDomain: ""
            }
        }).isValid).toBe(true)
    });
});
