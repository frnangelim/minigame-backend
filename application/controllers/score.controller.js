const ScoreService = require('../services/score.service');
const RestService = require('../services/rest.service');

const create = async (req, res) => {
    try {
        if (!req.body.player)
            return RestService.badRequest(res, 'Nome do jogador não informado.');

        if (!req.body.attempts)
            return RestService.badRequest(res, 'Número de tentativas não informado.');

        if (!req.body.time)
            return RestService.badRequest(res, 'Tempo não informado.');

        if (!req.body.gameNumber)
            return RestService.badRequest(res, 'Número de jogos não informado.');

        const newScore = await ScoreService.create(req.body);

        if (!newScore) return RestService.badRequest(res, 'Não foi possível adicionar o seu score.');

        return RestService.ok(res, newScore);
    } catch (e) {
        const errorMsg = 'Erro ao cadastrar score';
        return RestService.internalError(res, `${errorMsg} ${e.message}`)
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;

        const score = await ScoreService.getById(id);

        if (!score) return RestService.badRequest(res,'Score não encontrado');

        return RestService.ok(res, score);
    } catch (e) {
        const errorMsg = 'Erro ao buscar score por id';
        return RestService.internalError(res, `${errorMsg} ${e.message}`)
    }
};

const getAll = async (req, res) => {
    try {
        const scores = await ScoreService.getAll(req.query);

        if (!scores) RestService.badRequest(res,'Nenhum score encontrado' );

        return RestService.ok(res, scores);
    } catch (e) {
        const errorMsg = 'Erro ao buscar scores';
        return RestService.internalError(res, `${errorMsg} ${e.message}`)
    }
};

const edit = async (req, res) => {
    try {
        const { id } = req.params;
        const scoreData = { ...req.body, updatedAt: new Date() };

        const updatedScore = await ScoreService.edit(id, scoreData);

        if (!updatedScore) RestService.badRequest(res,'Score não encontrado' );

        return RestService.ok(res, updatedScore);
    } catch (e) {
        const errorMsg = 'Erro ao editar score';
        return RestService.internalError(res, `${errorMsg} ${e.message}`)
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await ScoreService.remove(id);

        if (!result) RestService.badRequest(res,'Score não encontrado' );

        const message = 'Score deletado com sucesso';

        return RestService.ok(res, message);
    } catch (e) {
        const errorMsg = 'Erro ao deletar score';
        return RestService.internalError(res, `${errorMsg} ${e.message}`)
    }
};

module.exports = {
    create,
    getById,
    getAll,
    edit,
    remove,
};
