module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    src: {
      type: DataTypes.STRING(200),  // URL 이므로
      allowNull: false,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  User.associate = (db) => {};
  return Image;
}