module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
        devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        set: function(value) {
          if (value === 'true') value = true;
          if (value === 'false') value = false;
          this.setDataValue('devoured', value);
        }
      }
    });
    return Burger;
  };