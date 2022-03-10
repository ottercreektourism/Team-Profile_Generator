const Manager = require('../lib/Manager');
const manager = new Manager('Jill', '12', 'qwerty@gmail.com', '5555');

test('getting the values from the manager constructor', () => {
    expect(manager.name).toBe('Jill');
    expect(manager.id).toBe('12');
    expect(manager.email).toBe('qwerty@gmail.com');
    expect(manager.officeNum).toBe('5555');
});

// testing getName method
test('got the getName method working', () => {
    expect(manager.getName()).toBe('Jill');
})

// testing getId
test('got the getId method working', () => {
    expect(manager.getId()).toBe('12');
})

// testing getEmail
test('got the getEmail method working', () => {
    expect(manager.getEmail()).toBe('qwerty@gmail.com');
})

// testing getOfficeNum
test('got the getOfficeNum method working', () => {
    expect(manager.getOfficeNum()).toBe('5555');
})

// testing getRole
test('got the getRole method working', () => {
    expect(manager.getRole()).toBe('Manager');
})