function registerUser(username, password) {
    return new Promise((resolve, reject) => {
        // checking if the username already exists ( in db)
        const existingUsers = ['rakshitha', 'pallavi', 'kavya']; 

        if (!username || !password) {
            reject('Username and password are required.');
        } else if (existingUsers.includes(username)) {
            reject('Username already exists.');
        } else {
            // registration process (storing data)
            setTimeout(() => {
                resolve('Registration successful!');
            }, 2000); 
        }
    });
}

// Usage
registerUser('rakshitha', 'password123')
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.error(error); 
    });

registerUser('pallavi', 'password456')
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.error(error); 
    });

registerUser('kavya', 'mypassword')
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error); 
    });

