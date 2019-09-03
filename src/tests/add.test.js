//When comparing primitive types, toEqual() and toBe() will yield the same result. 
//When comparing objects, toBe() is a stricter comparison, 
//and if it is not the exact same object in memory this will return false

const add = (a,b) => a+b;
const generateGreeting = (name) =>  `Hello ${name}!`;
test('Should Add Two Numbers', () =>{
    const result = add(3, 4);
    expect(result).toBe(7);
    // if(result !== 7){
    //     throw new Error(`You added 4 and 3. The result was ${result}. Expect 7`)
    // }
});

test("Generating greeting for Mike", () => {
    const result = generateGreeting("Mike");
    expect(result).toBe("Hello Mike!");
});