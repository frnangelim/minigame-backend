// Services
const RestService = require('../services/rest.service');

module.exports = {

    async ping(req, res) {

        try {
            RestService.ok(res, { result: 'Hello =)' });
        } catch (error) {
            RestService.internalError(res, error);
        }
    }
}
