module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    star: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: false,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });

  Rating.associate = (db) => {

  };
};