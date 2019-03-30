export interface LanguageResources {
    argumentNull?: string; // parameterName
    creditCard?: string;
    email?: string;
    empty?: string;
    equal?: string;
    exactLength?: string;
    exclusiveBetween?: string;
    greaterThan?: string;
    greaterThanOrEqual?: string;
    inclusiveBetween?: string;
    invalidField?: string; // name
    invalidFieldType?: string; // name, type, expectedType 
    lessThan?: string;
    lessThanOrEquals?: string;
    maxLength?: string;
    minLength?: string;
    notEmpty?: string;
    notEqual?: string;
    notNull?: string;
    null?: string;
    phone?: string;
    predicate?: string;
    regularExpression?: string;
    uri?: string;
    [key: string]: string | undefined
}