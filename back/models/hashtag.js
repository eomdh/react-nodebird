module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define('Hashtag', {
    name: {
      type: DataTypes.STRING(20),   // 20글자 미만
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  });
  User.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post);
  };
  return Hashtag;
};