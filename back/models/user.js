module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { // MySQL에는 users 테이블로 생성
    // id는 자동으로 생성
    email: {
      type: DataTypes.STRING(30), // 데이터타입
      allowNull: false,           // NOT NULL
      unique: true,               // UNIQUE
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100), // 암호화 대비
      allowNull: true,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',    // 한글 저장
  });
  User.associate = (db) => {  
    db.User.hasMany(db.Post);                                         // through: 중간테이블 이름 변경 
    db.User.hasMany(db.Comment);                                      // as: 별칭
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' }); // foreignKey: 중간테이블에서 사용하는 아이디
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId' });
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId' });
  };
  return User;
};