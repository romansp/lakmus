/**
 * Validation context.
 */
export class ValidationContext<TInstance = any, TProperty = any> {

    /** The object to validate. */
    public instance!: TInstance;

    /** Property name. */
    public propertyName!: string;

    /** Property name to display in error message. */
    public propertyDisplayName!: string;

    /** Property value. */
    public propertyValue!: TProperty;

    constructor(instance?: TInstance, propertyValue?: TProperty, propertyName?: string, propertyDisplayName?: string) {
        if (instance) this.instance = instance;
        if (propertyName) this.propertyName = propertyName;
        if (propertyDisplayName) this.propertyDisplayName = propertyDisplayName;
        if (propertyValue) this.propertyValue = propertyValue;
    }
}