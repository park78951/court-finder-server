module.exports = (sequelize, DataTypes) => {
  const Court = sequelize.define('Court', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 7),
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL(10, 7),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    gu_nm: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    parkingLot: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    in_out: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    web: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    web: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });

  Court.associate = (db) => {
    
  };

  return Court;
};