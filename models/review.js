module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    star: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: false,
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  });

  Review.associate = (db) => {
    db.Review.belongsTo(db.User);
    db.Review.belongsTo(db.Court);
  };

  return Review;
};