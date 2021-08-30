const { Post } = require('../models');

const postData = [{
    title: 'right one',
    content: 'more clear',
    user_id: 1

    },
    {
        title: '3er one',
        content: 'some more',
        user_id: 1
    },
    {
        title: 'this is for second user',
        content: 'test 3 for second user update',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;