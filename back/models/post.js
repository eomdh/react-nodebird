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
  User.associate = (db) => {};
  return Post;
}