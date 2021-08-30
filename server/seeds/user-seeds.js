const { User } = require('../models');

const userData = [{
        username: 'cartaya1',
        password: 'this no work need add news'

    },
    {
        username: 'cartaya2',
        password: 'rthis no work need add news'
    },
    {
        username: 'cartaya3',
        password: 'this no work need add news'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;