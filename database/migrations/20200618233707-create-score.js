module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Scores', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        player: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        attempts: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        time: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        gameNumber: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
    }),
    down: (queryInterface) => queryInterface.dropTable('Scores'),
};
