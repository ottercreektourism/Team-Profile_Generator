const Intern = require('../lib/Intern');
const intern = new Intern('Sharon', '44', 'zxcvbnm@gmail.com', 'Oakland');

test('getting the values from the intern constructor', () => {
    expect(intern.name).toBe('Sharon');
    expect(intern.id).toBe('44');
    expect(intern.email).toBe('zxcvbnm@gmail.com');
    expect(intern.school).toBe('Oakland')
});

// testing getName method
test('got the getName method working', () => {
    expect(intern.getName()).toBe('Sharon');
})

// testing getId
test('got the getId method working', () => {
    expect(intern.getId()).toBe('44');
})

// testing getEmail
test('got the getEmail method working', () => {
    expect(intern.getEmail()).toBe('zxcvbnm@gmail.com');
})

// testing getSchool
test('got the getSchool method working', () => {
    expect(intern.getSchool()).toBe('Oakland');
})

// testing getRole
test('got the getRole method working', () => {
    expect(intern.getRole()).toBe('Intern');
})