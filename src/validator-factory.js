"use strict";
var utils_1 = require("./utils");
var language_manager_1 = require("./localization/language-manager");
var validator_options_1 = require("./validator-options");
/**
 * Factory for creating validators.
 * */
var ValidatorFactory = (function () {
    function ValidatorFactory() {
    }
    /**
     * Gets a validator (singleton) of the specified type.
     * @param validatorType Type of the validator.
     */
    ValidatorFactory.getValidator = function (validatorType) {
        if (validatorType == null) {
            throw language_manager_1.LanguageManager.getLocalizedMessage("argumentNull", validator_options_1.ValidatorOptions.language, { parameterName: "validatorType" });
        }
        var validatorName = utils_1.getTypeName(validatorType);
        var validator = ValidatorFactory.validators[validatorName];
        if (validator == null) {
            validator = new validatorType();
            ValidatorFactory.validators[validatorName] = validator;
        }
        return validator;
    };
    /**
     * Performs validation.
     * @param instance Instance to validate.
     * @param validatorType Type of the validator.
     */
    ValidatorFactory.validate = function (instance, validatorType) {
        if (instance == null) {
            throw language_manager_1.LanguageManager.getLocalizedMessage("argumentNull", validator_options_1.ValidatorOptions.language, { parameterName: "instance" });
        }
        return ValidatorFactory.getValidator(validatorType).validate(instance);
    };
    /**
     * Performs validation and then throws an exception if validation fails.
     * @param instance Instance to validate.
     * @param validatorType Type of the validator.
     */
    ValidatorFactory.validateAndThrow = function (instance, validatorType) {
        if (instance == null) {
            throw language_manager_1.LanguageManager.getLocalizedMessage("argumentNull", validator_options_1.ValidatorOptions.language, { parameterName: "instance" });
        }
        return ValidatorFactory.getValidator(validatorType).validateAndThrow(instance);
    };
    ValidatorFactory.validators = {};
    return ValidatorFactory;
}());
exports.ValidatorFactory = ValidatorFactory;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3ItZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsc0JBQTRCLFNBQVMsQ0FBQyxDQUFBO0FBQ3RDLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLGtDQUFpQyxxQkFBcUIsQ0FBQyxDQUFBO0FBRXZEOztLQUVLO0FBQ0w7SUFBQTtJQWdEQSxDQUFDO0lBN0NHOzs7T0FHRztJQUNXLDZCQUFZLEdBQTFCLFVBQTJCLGFBQWtCO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sa0NBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsb0NBQWdCLENBQUMsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDN0gsQ0FBQztRQUVELElBQUksYUFBYSxHQUFHLG1CQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0MsSUFBSSxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTNELEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLFNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQ2hDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxTQUFTLENBQUM7UUFDM0QsQ0FBQztRQUVELE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7O09BSUc7SUFDVyx5QkFBUSxHQUF0QixVQUF1QixRQUFhLEVBQUUsYUFBdUI7UUFDekQsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxrQ0FBZSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxvQ0FBZ0IsQ0FBQyxRQUFRLEVBQUUsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUN4SCxDQUFDO1FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVEOzs7O09BSUc7SUFDVyxpQ0FBZ0IsR0FBOUIsVUFBK0IsUUFBYSxFQUFFLGFBQXVCO1FBQ2pFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sa0NBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsb0NBQWdCLENBQUMsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDeEgsQ0FBQztRQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQTlDYywyQkFBVSxHQUE0QixFQUFFLENBQUM7SUErQzVELHVCQUFDO0FBQUQsQ0FoREEsQUFnREMsSUFBQTtBQWhEWSx3QkFBZ0IsbUJBZ0Q1QixDQUFBIiwiZmlsZSI6InNyYy92YWxpZGF0b3ItZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SZXN1bHQgfSBmcm9tIFwiLi9yZXN1bHRzL3ZhbGlkYXRpb24tcmVzdWx0XCI7XHJcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gXCIuL3ZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBnZXRUeXBlTmFtZSB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCB7IExhbmd1YWdlTWFuYWdlciB9IGZyb20gXCIuL2xvY2FsaXphdGlvbi9sYW5ndWFnZS1tYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRvck9wdGlvbnMgfSBmcm9tIFwiLi92YWxpZGF0b3Itb3B0aW9uc1wiO1xyXG5cclxuLyoqIFxyXG4gKiBGYWN0b3J5IGZvciBjcmVhdGluZyB2YWxpZGF0b3JzLiBcclxuICogKi9cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvckZhY3Rvcnkge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdmFsaWRhdG9yczogeyBbbmFtZTogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBHZXRzIGEgdmFsaWRhdG9yIChzaW5nbGV0b24pIG9mIHRoZSBzcGVjaWZpZWQgdHlwZS5cclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JUeXBlIFR5cGUgb2YgdGhlIHZhbGlkYXRvci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRWYWxpZGF0b3IodmFsaWRhdG9yVHlwZTogYW55KTogVmFsaWRhdG9yPGFueT4ge1xyXG4gICAgICAgIGlmICh2YWxpZGF0b3JUeXBlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgTGFuZ3VhZ2VNYW5hZ2VyLmdldExvY2FsaXplZE1lc3NhZ2UoXCJhcmd1bWVudE51bGxcIiwgVmFsaWRhdG9yT3B0aW9ucy5sYW5ndWFnZSwgeyBwYXJhbWV0ZXJOYW1lOiBcInZhbGlkYXRvclR5cGVcIiB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB2YWxpZGF0b3JOYW1lID0gZ2V0VHlwZU5hbWUodmFsaWRhdG9yVHlwZSk7XHJcbiAgICAgICAgdmFyIHZhbGlkYXRvciA9IFZhbGlkYXRvckZhY3RvcnkudmFsaWRhdG9yc1t2YWxpZGF0b3JOYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkYXRvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvciA9IG5ldyB2YWxpZGF0b3JUeXBlKCk7XHJcbiAgICAgICAgICAgIFZhbGlkYXRvckZhY3RvcnkudmFsaWRhdG9yc1t2YWxpZGF0b3JOYW1lXSA9IHZhbGlkYXRvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtcyB2YWxpZGF0aW9uLlxyXG4gICAgICogQHBhcmFtIGluc3RhbmNlIEluc3RhbmNlIHRvIHZhbGlkYXRlLlxyXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclR5cGUgVHlwZSBvZiB0aGUgdmFsaWRhdG9yLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHZhbGlkYXRlKGluc3RhbmNlOiBhbnksIHZhbGlkYXRvclR5cGU6IEZ1bmN0aW9uKTogVmFsaWRhdGlvblJlc3VsdCB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgTGFuZ3VhZ2VNYW5hZ2VyLmdldExvY2FsaXplZE1lc3NhZ2UoXCJhcmd1bWVudE51bGxcIiwgVmFsaWRhdG9yT3B0aW9ucy5sYW5ndWFnZSwgeyBwYXJhbWV0ZXJOYW1lOiBcImluc3RhbmNlXCIgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gVmFsaWRhdG9yRmFjdG9yeS5nZXRWYWxpZGF0b3IodmFsaWRhdG9yVHlwZSkudmFsaWRhdGUoaW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybXMgdmFsaWRhdGlvbiBhbmQgdGhlbiB0aHJvd3MgYW4gZXhjZXB0aW9uIGlmIHZhbGlkYXRpb24gZmFpbHMuXHJcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgSW5zdGFuY2UgdG8gdmFsaWRhdGUuXHJcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yVHlwZSBUeXBlIG9mIHRoZSB2YWxpZGF0b3IuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdmFsaWRhdGVBbmRUaHJvdyhpbnN0YW5jZTogYW55LCB2YWxpZGF0b3JUeXBlOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGlmIChpbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IExhbmd1YWdlTWFuYWdlci5nZXRMb2NhbGl6ZWRNZXNzYWdlKFwiYXJndW1lbnROdWxsXCIsIFZhbGlkYXRvck9wdGlvbnMubGFuZ3VhZ2UsIHsgcGFyYW1ldGVyTmFtZTogXCJpbnN0YW5jZVwiIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFZhbGlkYXRvckZhY3RvcnkuZ2V0VmFsaWRhdG9yKHZhbGlkYXRvclR5cGUpLnZhbGlkYXRlQW5kVGhyb3coaW5zdGFuY2UpO1xyXG4gICAgfVxyXG59Il19
