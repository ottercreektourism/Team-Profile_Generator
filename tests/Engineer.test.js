const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Harold', '999', 'engineering@gmail.com', 'ottercreektourism');

test('getting the values from the engineer constructor', () => {
    expect(engineer.name).toBe('Harold');
    expect(engineer.id).toBe('999');
    expect(engineer.email).toBe('engineering@gmail.com');
    expect(engineer.github).toBe('ottercreektourism');
});

// testing getName method
test('got the getName method working', () => {
    expect(engineer.getName()).toBe('Harold');
})

// testing getId
test('got the getId method working', () => {
    expect(engineer.getId()).toBe('999');
})

// testing getEmail
test('got the getEmail method working', () => {
    expect(engineer.getEmail()).toBe('engineering@gmail.com');
})

// testing getGithub
test('got the getGithub method working', () => {
    expect(engineer.getGithub()).toBe('ottercreektourism');
})

// testing getRole
test('got the getRole method working', () => {
    expect(engineer.getRole()).toBe('Engineer');
})