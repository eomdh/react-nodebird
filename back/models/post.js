module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: {
      type: DataTypes.TEXT,   // TEXT는 무제한 글 작성
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4',       // mb4 : 이모티콘 저장
    collate: 'utf8mb4_general_ci',
  });
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // post.addUser, post.getUser, post.setUser, post.removeUser 제공됨
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);  
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHastag' });
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
    db.Post.belongsTo(db.Post, { as: 'Retweet' });
  };
  return Post;
};