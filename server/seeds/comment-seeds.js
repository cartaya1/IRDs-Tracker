const { Comment } = require('../models');

const commentData = [{
    comment_text: "This is the First Test",
    user_id: 2,
    post_id: 1
},
{
    comment_text: "other comment for this one",
    user_id: 2,
    post_id: 3
},
{
    comment_text: "comment?",
    user_id: 3,
    post_id: 1

    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;