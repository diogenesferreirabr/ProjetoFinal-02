import { verificarToken } from "../middleware/authorization.js"
import Funcionalidade from "../DAO/Funcionalidade.js"

export default class FuncionalidadeController {
    static rotas(app) {
        app.post('/funcs', verificarToken, FuncionalidadeController.inserir)
        app.get('/funcs', FuncionalidadeController.listarTodos)
        app.patch('/funcs/:id', verificarToken, FuncionalidadeController.atualizar)
        app.delete('/funcs/:id', verificarToken, FuncionalidadeController.deletar)
    }

    static async inserir(req, res) {
        const { id, nome } = req.body

        if ( !id || !nome) {
            return res.status(400).send({
                message: 'Os campos de funcionalidades são obrigatórios'
            })
        }

        const funcionalidade = new Funcionalidade()
        funcionalidade.id = id
        funcionalidade.nome = nome

        await funcionalidade.save()

        res.status(200).send({
            message: 'Funcionalidade criada com sucesso!',
            data: funcionalidade
        })
    }

    static async listarTodos(req, res) {
        const funcionalidades = await Funcionalidade.findAll()
        res.status(200).send({
            message: 'Funcionalidades listadas com sucesso!',
            data: funcionalidades
        })
    }

    static async atualizar(req, res) {
        const {id} = req.params

        const funcionalidade = await Funcionalidade.findByProperty('id', id)
        if (!funcionalidade) {
            return res.status(404).send({
                message: `A funcionalidade de id ${id} não existe`
            })
        }

        const { nome} = req.body
        if (nome) {
            funcionalidade.nome = nome
        }
        
        await funcionalidade.save()

        res.status(200).send({
            message: 'Funcionalidade alterado com sucesso!',
            data: funcionalidade
        })
    }

    static async deletar(req, res) {
        const {id} = req.params

        const funcionalidade = await Funcionalidade.findByProperty('id', id)
        if (!funcionalidade) {
            return res.status(404).send({
                message: `A funcionalidade de id ${id} não existe`
            })
        }

        await livro.delete()

        res.status(200).send({
            message: 'Funcionalidade deletada com sucesso!'
        })
    }
}
