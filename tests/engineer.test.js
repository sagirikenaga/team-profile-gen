const Engineer = require('../lib/engineer');
const engineer = new Engineer('sagiri','111','sagirikenaga@icloud.com', 'sagirikenaga');

test('testing the input values for Engineer', () => {
    expect(engineer.name).toBe('sagiri');
    expect(engineer.id).toBe('111');
    expect(engineer.email).toBe('sagirikenaga@icloud.com');
    expect(engineer.github).toBe('sagirikenaga');
});

test('testing getName() function', () => {
    expect(engineer.getName()).toBe('sagiri');
});

test('testing getId() function', () => {
    expect(engineer.getId()).toBe('111');
});

test('testing getEmail() function', () => {
    expect(engineer.getEmail()).toBe('sagirikenaga@icloud.com');
});

test('testing getGithub() function', () => {
    expect(engineer.getGithub()).toBe('sagirikenaga');
})

test('testing getRole() function', () => {
    expect(engineer.getRole()).toBe('Engineer');
});