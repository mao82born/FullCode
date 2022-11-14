import bcrypt from 'bcrypt';

export const dataU = {
    users: [
        {
            idocument: '111111',
            name: 'John',
            lastname: 'Smith',
            email: 'ja@prueba.com',
            //password: bcrypt.hashSync('123456'),
            password: '123456',
            address: '21 2nd Street, New York',
            age: 34,
            phone: 2125551234,
            isAdmin: false,
        },
        {
            idocument: '222222',
            name: 'Carlos',
            lastname: 'Rodriguez',
            email: 'carlos@prueba.com',
            //password: bcrypt.hashSync('123456'),
            password: '123456',
            address: 'Calle 80, Cali',
            age: 28,
            phone: 212500444,
            isAdmin: false,
        },
        {
            idocument: '1231',
            name: 'Judy',
            lastname: 'Moreno',
            email: 'jm@prueba.com',
            password: '123456',
            address: '1 2nd Street, New York',
            age: 30,
            phone: 2124441234,
            isAdmin: true,
        },
    ],
};
