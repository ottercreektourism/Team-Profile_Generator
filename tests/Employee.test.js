const Employee = require('../lib/Employee');
const employee = new Employee('Franko', '3', 'mkflynn13@gmail.com');

test('getting the values from the employee constructor', () => {
    expect(employee.name).toBe('Franko');
    expect(employee.id).toBe('3');
    expect(employee.email).toBe('mkflynn13@gmail.com');
});

// testing getName method
test('got the getName method working', () => {
    expect(employee.getName()).toBe('Franko');
})
// testing getId
test('got the getId method working', () => {
    expect(employee.getId()).toBe('3');
})
// testing getEmail
test('got the getEmail method working', () => {
    expect(employee.getEmail()).toBe('mkflynn13@gmail.com');
})
// testing get Role
test('got the getRole method working', () => {
    expect(employee.getRole()).toBe('Employee');
})