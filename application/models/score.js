module.exports = (sequelize, DataTypes) => {
    const Score = sequelize.define(
        'Score',
        {
            player: {
                type: DataTypes.STRING,
            },
            attempts: {
                type: DataTypes.INTEGER,
            },
            time: {
                type: DataTypes.STRING,
            },
            gameNumber: {
                type: DataTypes.INTEGER,
            },
        },
        {},
    );

    Score.associate = (models) => {
    };

    return Score;
};
