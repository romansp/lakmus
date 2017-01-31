"use strict";
var not_empty_validator_1 = require("../src/validators/not-empty.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Not empty validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new not_empty_validator_1.NotEmptyValidator());
tester.test(description, [
    { value: null, pass: false },
    { value: undefined, pass: false },
    { value: 0, pass: false },
    { value: 1, pass: true },
    { value: new Date(), pass: true },
    { value: "   ", valueDescription: "empty string", pass: false },
    { value: "text", pass: true },
    { value: true, pass: true },
    { value: false, pass: false },
    { value: [], valueDescription: "empty array", pass: false },
    { value: [1], pass: true }
]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWMvbm90LWVtcHR5LXZhbGlkYXRvci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQ0FBa0MsdUNBQXVDLENBQUMsQ0FBQTtBQUMxRSwwQ0FBbUUsNkJBQTZCLENBQUMsQ0FBQTtBQUVqRyxJQUFJLFdBQVcsR0FBRywyQkFBMkIsQ0FBQztBQUU5QyxJQUFJLE1BQU0sR0FBRyxJQUFJLG1EQUF1QixDQUFDLElBQUksdUNBQWlCLEVBQUUsQ0FBQyxDQUFDO0FBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0lBQ3JCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQzVCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQ2pDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQ3pCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQ3hCLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUNqQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDL0QsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDN0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDN0IsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQzNELEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtDQUM3QixDQUFDLENBQUMiLCJmaWxlIjoic3BlYy9ub3QtZW1wdHktdmFsaWRhdG9yLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb3RFbXB0eVZhbGlkYXRvciB9IGZyb20gXCIuLi9zcmMvdmFsaWRhdG9ycy9ub3QtZW1wdHkudmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IFByb3BlcnR5VmFsaWRhdG9yVGVzdGVyLCBQcm9wZXJ0eVZhbGlkYXRvclRlc3RDYXNlIH0gZnJvbSBcIi4vcHJvcGVydHktdmFsaWRhdG9yLXRlc3RlclwiO1xyXG5cclxudmFyIGRlc2NyaXB0aW9uID0gXCJOb3QgZW1wdHkgdmFsaWRhdG9yIHNwZWMuXCI7XHJcblxyXG52YXIgdGVzdGVyID0gbmV3IFByb3BlcnR5VmFsaWRhdG9yVGVzdGVyKG5ldyBOb3RFbXB0eVZhbGlkYXRvcigpKTtcclxudGVzdGVyLnRlc3QoZGVzY3JpcHRpb24sIFtcclxuICAgIHsgdmFsdWU6IG51bGwsIHBhc3M6IGZhbHNlIH0sXHJcbiAgICB7IHZhbHVlOiB1bmRlZmluZWQsIHBhc3M6IGZhbHNlIH0sXHJcbiAgICB7IHZhbHVlOiAwLCBwYXNzOiBmYWxzZSB9LFxyXG4gICAgeyB2YWx1ZTogMSwgcGFzczogdHJ1ZSB9LFxyXG4gICAgeyB2YWx1ZTogbmV3IERhdGUoKSwgcGFzczogdHJ1ZSB9LFxyXG4gICAgeyB2YWx1ZTogXCIgICBcIiwgdmFsdWVEZXNjcmlwdGlvbjogXCJlbXB0eSBzdHJpbmdcIiwgcGFzczogZmFsc2UgfSxcclxuICAgIHsgdmFsdWU6IFwidGV4dFwiLCBwYXNzOiB0cnVlIH0sXHJcbiAgICB7IHZhbHVlOiB0cnVlLCBwYXNzOiB0cnVlIH0sXHJcbiAgICB7IHZhbHVlOiBmYWxzZSwgcGFzczogZmFsc2UgfSxcclxuICAgIHsgdmFsdWU6IFtdLCB2YWx1ZURlc2NyaXB0aW9uOiBcImVtcHR5IGFycmF5XCIsIHBhc3M6IGZhbHNlIH0sXHJcbiAgICB7IHZhbHVlOiBbMV0sIHBhc3M6IHRydWUgfVxyXG5dKTsiXX0=
