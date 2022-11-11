const Intern = require('../lib/intern');
const intern = new Itern('sagiri','111','sagirikenaga@icloud.com', 'University of Toronto');

test('testing the input values for Intern', () => {
    expect(intern.name).toBe('sagiri');
    expect(intern.id).toBe('111');
    expect(intern.email).toBe('sagirikenaga@icloud.com');
    expect(intern.school).toBe('University of Toronto');
});

test('testing getName() function', () => {
    expect(intern.getName()).toBe('sagiri');
});

test('testing getId() function', () => {
    expect(intern.getId()).toBe('111');
});

test('testing getEmail() function', () => {
    expect(intern.getEmail()).toBe('sagirikenaga@icloud.com');
});

test('testing getSchool() function', () => {
    expect(intern.getSchool()).toBe('University of Toronto');
})

test('testing getRole() function', () => {
    expect(intern.getRole()).toBe('Intern');
});