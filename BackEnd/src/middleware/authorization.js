import Usuario from "../DAO/Usuario.js"

/**
 * Verifica se uma request foi feita por um token válido de usuário
 *
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 */

// Cria uma função assíncrona chamada verificarToken que recebe um objeto de request, um objeto de response e uma próxima função middleware.
export const verificarToken = async (request, response, next) => {
    const token = request.headers['x-auth-token']
    if (!token) {
        response.status(401).send({
            success: false,
            message: 'Token não informado!'
        })
        return
    }

    // Procura pelo usuário associado ao token fornecido.
    const usuario = await Usuario.findByProperty('authToken', token)
    if (!usuario) {
        response.status(401).send({
            success: false,
            message: 'Não autorizado!'
        })
        return
    }
    next()
}