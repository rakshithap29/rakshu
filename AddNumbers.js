function createAdder(predefinedValue) {
    return function (number) {
        return predefinedValue + number;
    };
    }
    const addTen = createAdder(10);
    console.log(addTen(5)); 
    console.log(addTen(20)); 
    console.log(addTen(-3)); 
    const addFifty = createAdder(50);
    
    console.log(addFifty(5));  
    console.log(addFifty(20)); 
    console.log(addFifty(-10));
