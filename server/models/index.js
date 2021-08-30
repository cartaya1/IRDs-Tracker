const { post } = require('../controllers');
const User = require('./User');
const Post = require('./Post');
const Track = require('./Track');

User.hasMany(Post, {
    foreignKey: 'user_id'
});
//Post.belongsTo(User, {
//    foreignKey: 'user_id',
//    onDelete: "cascade"
//});

//Track.belongsTo(User, {
//    foreignKey: 'user_id',
//    onDelete: "cascade"
//});

//Track.belongsTo(Post, {
//    foreignKey: 'post_id',
//    onDelete: "cascade"
//});

User.hasMany(Track, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

//Post.hasMany(Track, {
//    foreignKey: 'post_id',
//    onDelete: "cascade"
//})

module.exports = { User };

//, Post, Track