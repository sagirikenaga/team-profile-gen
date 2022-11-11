const Employee = require('../lib/employee');
const employee = new Employee('sagiri','111','sagirikenaga@icloud.com');

test('testing the input values for Employee', () => {
    expect(employee.name).toBe('sagiri');
    expect(employee.id).toBe('111');
    expect(employee.email).toBe('sagirikenaga@icloud.com');
});

test('testing getName() function', () => {
    expect(employee.getName()).toBe('sagiri');
});

test('testing getId() function', () => {
    expect(employee.getId()).toBe('111');
});

test('testing getEmail() function', () => {
    expect(employee.getEmail()).toBe('sagirikenaga@icloud.com');
});

test('testing getRole() function', () => {
    expect(employee.getRole()).toBe('Employee');
});