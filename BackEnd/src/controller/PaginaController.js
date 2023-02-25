import { verificarToken } from "../middleware/authorization.js"
import Pagina from "../DAO/Pagina.js"

export default class PaginaController {
    static rotas(app) {
        app.get('/paginas/:id', PaginaController.listar)
        app.patch('/paginas/:id', verificarToken, PaginaController.atualizar)
    }

    static async listar(req, res) {
        const {id} = req.params
        const pagina = await Pagina.findByProperty('id', id)
        if (!pagina) {
            return res.status(404).send({
                message: 'Página não encontrada'
            })
        }
        res.status(200).send({
            message: 'Sucesso ao buscar página',
            data: pagina
        })
    }

    static async atualizar(req, res) {
        const {id} = req.params
        const {titulo, texto} = req.body
        const pagina = await Pagina.findByProperty('id', id)
        if (!pagina) {
            return res.status(404).send({
                message: 'Página não encontrada'
            })
        }
        if (titulo) {
            pagina.titulo = titulo
        }
        if (texto) {
            pagina.texto = texto
        }
        await pagina.save()
        res.status(200).send({
            message: 'Sucesso ao alterar dados da página',
            data: pagina
        })
    }
}