"use strict";
var not_equal_validator_1 = require("../src/validators/not-equal.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Not equal validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new not_equal_validator_1.NotEqualValidator(null));
tester.test(description, [
    { value: null, pass: false },
    { value: undefined, pass: true },
    { value: 0, pass: true }
]);
tester = new property_validator_tester_1.PropertyValidatorTester(new not_equal_validator_1.NotEqualValidator("test string"));
tester.test(description, [
    { value: "test string", pass: false },
    { value: "TEST STRING", pass: true },
    { value: "another string", pass: true },
    { value: 100, pass: true }
]);
tester = new property_validator_tester_1.PropertyValidatorTester(new not_equal_validator_1.NotEqualValidator(new Date(2020, 1, 0)));
tester.test(description, [
    { value: new Date(2020, 1, 0), pass: false },
    { value: new Date(2010, 1, 0), pass: true }
]);
tester = new property_validator_tester_1.PropertyValidatorTester(new not_equal_validator_1.NotEqualValidator(false));
tester.test(description, [
    { value: false, pass: false },
    { value: true, pass: true },
    { value: "false", pass: true }
]);
tester = new property_validator_tester_1.PropertyValidatorTester(new not_equal_validator_1.NotEqualValidator(1000));
tester.test(description, [
    { value: 1000, pass: false },
    { value: "1000", pass: true },
    { value: 500, pass: true },
    { value: -1000, pass: true }
]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWMvbm90LWVxdWFsLXZhbGlkYXRvci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQ0FBa0MsdUNBQXVDLENBQUMsQ0FBQTtBQUMxRSwwQ0FBbUUsNkJBQTZCLENBQUMsQ0FBQTtBQUVqRyxJQUFJLFdBQVcsR0FBRywyQkFBMkIsQ0FBQztBQUU5QyxJQUFJLE1BQU0sR0FBRyxJQUFJLG1EQUF1QixDQUFDLElBQUksdUNBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN0RSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUNyQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUM1QixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUNoQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtDQUMzQixDQUFDLENBQUM7QUFFSCxNQUFNLEdBQUcsSUFBSSxtREFBdUIsQ0FBQyxJQUFJLHVDQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDM0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7SUFDckIsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDckMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDcEMsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUN2QyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtDQUM3QixDQUFDLENBQUM7QUFFSCxNQUFNLEdBQUcsSUFBSSxtREFBdUIsQ0FBQyxJQUFJLHVDQUFpQixDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xGLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0lBQ3JCLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7Q0FDOUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxHQUFHLElBQUksbURBQXVCLENBQUMsSUFBSSx1Q0FBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0lBQ3JCLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQzdCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0NBQ2pDLENBQUMsQ0FBQztBQUVILE1BQU0sR0FBRyxJQUFJLG1EQUF1QixDQUFDLElBQUksdUNBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUNyQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUM1QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUM3QixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMxQixFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0NBQy9CLENBQUMsQ0FBQyIsImZpbGUiOiJzcGVjL25vdC1lcXVhbC12YWxpZGF0b3Iuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vdEVxdWFsVmFsaWRhdG9yIH0gZnJvbSBcIi4uL3NyYy92YWxpZGF0b3JzL25vdC1lcXVhbC52YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgUHJvcGVydHlWYWxpZGF0b3JUZXN0ZXIsIFByb3BlcnR5VmFsaWRhdG9yVGVzdENhc2UgfSBmcm9tIFwiLi9wcm9wZXJ0eS12YWxpZGF0b3ItdGVzdGVyXCI7XHJcblxyXG52YXIgZGVzY3JpcHRpb24gPSBcIk5vdCBlcXVhbCB2YWxpZGF0b3Igc3BlYy5cIjtcclxuXHJcbnZhciB0ZXN0ZXIgPSBuZXcgUHJvcGVydHlWYWxpZGF0b3JUZXN0ZXIobmV3IE5vdEVxdWFsVmFsaWRhdG9yKG51bGwpKTtcclxudGVzdGVyLnRlc3QoZGVzY3JpcHRpb24sIFtcclxuICAgIHsgdmFsdWU6IG51bGwsIHBhc3M6IGZhbHNlIH0sXHJcbiAgICB7IHZhbHVlOiB1bmRlZmluZWQsIHBhc3M6IHRydWUgfSxcclxuICAgIHsgdmFsdWU6IDAsIHBhc3M6IHRydWUgfVxyXG5dKTtcclxuXHJcbnRlc3RlciA9IG5ldyBQcm9wZXJ0eVZhbGlkYXRvclRlc3RlcihuZXcgTm90RXF1YWxWYWxpZGF0b3IoXCJ0ZXN0IHN0cmluZ1wiKSk7XHJcbnRlc3Rlci50ZXN0KGRlc2NyaXB0aW9uLCBbXHJcbiAgICB7IHZhbHVlOiBcInRlc3Qgc3RyaW5nXCIsIHBhc3M6IGZhbHNlIH0sXHJcbiAgICB7IHZhbHVlOiBcIlRFU1QgU1RSSU5HXCIsIHBhc3M6IHRydWUgfSxcclxuICAgIHsgdmFsdWU6IFwiYW5vdGhlciBzdHJpbmdcIiwgcGFzczogdHJ1ZSB9LFxyXG4gICAgeyB2YWx1ZTogMTAwLCBwYXNzOiB0cnVlIH1cclxuXSk7XHJcblxyXG50ZXN0ZXIgPSBuZXcgUHJvcGVydHlWYWxpZGF0b3JUZXN0ZXIobmV3IE5vdEVxdWFsVmFsaWRhdG9yKG5ldyBEYXRlKDIwMjAsIDEsIDApKSk7XHJcbnRlc3Rlci50ZXN0KGRlc2NyaXB0aW9uLCBbXHJcbiAgICB7IHZhbHVlOiBuZXcgRGF0ZSgyMDIwLCAxLCAwKSwgcGFzczogZmFsc2UgfSxcclxuICAgIHsgdmFsdWU6IG5ldyBEYXRlKDIwMTAsIDEsIDApLCBwYXNzOiB0cnVlIH1cclxuXSk7XHJcblxyXG50ZXN0ZXIgPSBuZXcgUHJvcGVydHlWYWxpZGF0b3JUZXN0ZXIobmV3IE5vdEVxdWFsVmFsaWRhdG9yKGZhbHNlKSk7XHJcbnRlc3Rlci50ZXN0KGRlc2NyaXB0aW9uLCBbXHJcbiAgICB7IHZhbHVlOiBmYWxzZSwgcGFzczogZmFsc2UgfSxcclxuICAgIHsgdmFsdWU6IHRydWUsIHBhc3M6IHRydWUgfSxcclxuICAgIHsgdmFsdWU6IFwiZmFsc2VcIiwgcGFzczogdHJ1ZSB9XHJcbl0pO1xyXG5cclxudGVzdGVyID0gbmV3IFByb3BlcnR5VmFsaWRhdG9yVGVzdGVyKG5ldyBOb3RFcXVhbFZhbGlkYXRvcigxMDAwKSk7XHJcbnRlc3Rlci50ZXN0KGRlc2NyaXB0aW9uLCBbXHJcbiAgICB7IHZhbHVlOiAxMDAwLCBwYXNzOiBmYWxzZSB9LFxyXG4gICAgeyB2YWx1ZTogXCIxMDAwXCIsIHBhc3M6IHRydWUgfSxcclxuICAgIHsgdmFsdWU6IDUwMCwgcGFzczogdHJ1ZSB9LFxyXG4gICAgeyB2YWx1ZTogLTEwMDAsIHBhc3M6IHRydWUgfVxyXG5dKTsiXX0=
