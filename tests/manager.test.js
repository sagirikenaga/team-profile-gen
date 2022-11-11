const Manager = require('../lib/manager');
const manager = new Manager('sagiri','111','sagirikenaga@icloud.com', '222');

test('testing the input values for Manager', () => {
    expect(manager.name).toBe('sagiri');
    expect(manager.id).toBe('111');
    expect(manager.email).toBe('sagirikenaga@icloud.com');
    expect(manager.officeNumber).toBe('222');
});

test('testing getName() function', () => {
    expect(manager.getName()).toBe('sagiri');
});

test('testing getId() function', () => {
    expect(manager.getId()).toBe('111');
});

test('testing getEmail() function', () => {
    expect(manager.getEmail()).toBe('sagirikenaga@icloud.com');
});

test('testing getOfficeNumber() function', () => {
    expect(manager.getOfficeNumber()).toBe('222');
})

test('testing getRole() function', () => {
    expect(manager.getRole()).toBe('Manager');
});