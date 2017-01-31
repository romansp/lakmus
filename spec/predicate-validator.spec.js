"use strict";
var predicate_validator_1 = require("../src/validators/predicate.validator");
var validation_context_1 = require("../src/validation-context");
var description = "Predicate validator spec.";
var customer = {
    id: 1000,
    hasDiscount: true
};
var validator = new predicate_validator_1.PredicateValidator(function (value, instance) { return instance["hasDiscount"]; });
var validationContext = new validation_context_1.ValidationContext();
validationContext.instance = customer;
validationContext.propertyValue = customer.id;
describe(description, function () {
    it("Predicate validator should pass.", function () {
        expect(validator.isValid(validationContext)).toBe(true);
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWMvcHJlZGljYXRlLXZhbGlkYXRvci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQ0FBbUMsdUNBQXVDLENBQUMsQ0FBQTtBQUUzRSxtQ0FBa0MsMkJBQTJCLENBQUMsQ0FBQTtBQUU5RCxJQUFJLFdBQVcsR0FBRywyQkFBMkIsQ0FBQztBQUM5QyxJQUFJLFFBQVEsR0FBRztJQUNYLEVBQUUsRUFBRSxJQUFJO0lBQ1IsV0FBVyxFQUFFLElBQUk7Q0FDcEIsQ0FBQztBQUVGLElBQUksU0FBUyxHQUFHLElBQUksd0NBQWtCLENBQUMsVUFBQyxLQUFLLEVBQUUsUUFBUSxJQUFLLE9BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7QUFDckYsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLHNDQUFpQixFQUFFLENBQUM7QUFDaEQsaUJBQWlCLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN0QyxpQkFBaUIsQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUU5QyxRQUFRLENBQUMsV0FBVyxFQUFFO0lBQ2xCLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRTtRQUNuQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoic3BlYy9wcmVkaWNhdGUtdmFsaWRhdG9yLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmVkaWNhdGVWYWxpZGF0b3IgfSBmcm9tIFwiLi4vc3JjL3ZhbGlkYXRvcnMvcHJlZGljYXRlLnZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eVZhbGlkYXRvclRlc3RlciwgUHJvcGVydHlWYWxpZGF0b3JUZXN0Q2FzZSB9IGZyb20gXCIuL3Byb3BlcnR5LXZhbGlkYXRvci10ZXN0ZXJcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRleHQgfSBmcm9tIFwiLi4vc3JjL3ZhbGlkYXRpb24tY29udGV4dFwiO1xyXG5cclxudmFyIGRlc2NyaXB0aW9uID0gXCJQcmVkaWNhdGUgdmFsaWRhdG9yIHNwZWMuXCI7XHJcbnZhciBjdXN0b21lciA9IHtcclxuICAgIGlkOiAxMDAwLFxyXG4gICAgaGFzRGlzY291bnQ6IHRydWVcclxufTtcclxuXHJcbmxldCB2YWxpZGF0b3IgPSBuZXcgUHJlZGljYXRlVmFsaWRhdG9yKCh2YWx1ZSwgaW5zdGFuY2UpID0+IGluc3RhbmNlW1wiaGFzRGlzY291bnRcIl0pO1xyXG5sZXQgdmFsaWRhdGlvbkNvbnRleHQgPSBuZXcgVmFsaWRhdGlvbkNvbnRleHQoKTtcclxudmFsaWRhdGlvbkNvbnRleHQuaW5zdGFuY2UgPSBjdXN0b21lcjtcclxudmFsaWRhdGlvbkNvbnRleHQucHJvcGVydHlWYWx1ZSA9IGN1c3RvbWVyLmlkO1xyXG5cclxuZGVzY3JpYmUoZGVzY3JpcHRpb24sICgpID0+IHtcclxuICAgIGl0KFwiUHJlZGljYXRlIHZhbGlkYXRvciBzaG91bGQgcGFzcy5cIiwgKCkgPT4ge1xyXG4gICAgICAgIGV4cGVjdCh2YWxpZGF0b3IuaXNWYWxpZCh2YWxpZGF0aW9uQ29udGV4dCkpLnRvQmUodHJ1ZSk7XHJcbiAgICB9KTtcclxufSk7Il19
