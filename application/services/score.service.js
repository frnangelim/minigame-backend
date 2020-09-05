const {Score} = require('../models');

const create = async (scoreData) => {
    try {
        const newScore = await Score.create(scoreData);

        return newScore;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getById = async (id) => {
    try {
        const score = await Score.findByPk(id);

        if (!score) return null;

        return score;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAll = async (query) => {
    try {
        const page = parseInt(query.page, 10);
        const pageSize = parseInt(query.pageSize, 10);
        let offset = null;
        let scores;

        if (page && pageSize) offset = (page - 1) * pageSize;

        if (offset !== null) {
            const options = {
                limit: pageSize,
                offset,
                order: [
                    ['attempts', 'ASC'],
                    ['time', 'ASC'],
                ],
            };
            scores = await Score.findAndCountAll(options);

            scores.pages = Math.ceil(scores.count / pageSize);
        } else {
            scores = await Score.findAll({
                order: [
                    ['attempts', 'ASC'],
                    ['time', 'ASC'],
                ]
            });
        }

        if (!scores) return null;

        return scores;
    } catch (error) {
        throw new Error(error.message);
    }
};

const edit = async (id, eventData) => {
    try {
        await Score.update(eventData, {
            where: {
                id,
            },
        });

        return getById(id);
    } catch (error) {
        throw new Error(error.message);
    }
};

const remove = async (id) => {
    try {
        const score = await getById(id);

        if (!score) return null;

        return score.destroy();
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    create,
    getById,
    getAll,
    edit,
    remove,
};
