import { compareSync } from "bcrypt"
import { randomUUID } from 'crypto'
import Usuario from "../DAO/Usuario.js"

export default class UsuarioController {
    static rotas(app) {
        app.post('/login', UsuarioController.login)
    }

    static async login(req, res) {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).send({
                message: 'Os campos "email" e "password" são obrigatórios'
            })
        }

        const usuario = await Usuario.findByProperty('email', email)
        if (!usuario) {
            return res.status(404).send({
                message: 'Usuário não encontrado'
            })
        }

        const passwordsMatch = compareSync(password, usuario.encryptedPassword)
        if (!passwordsMatch) {
            return res.status(401).send({
                message: 'Senha incorreta'
            })
        }

        usuario.authToken = randomUUID()
        await usuario.save()

        res.status(200).send({
            token: usuario.authToken
        })
    }
}