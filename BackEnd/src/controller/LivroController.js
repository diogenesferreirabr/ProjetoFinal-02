import { verificarToken } from "../middleware/authorization.js"
import Livro from "../DAO/Livro.js"

export default class LivroController {
    static rotas(app) {
        app.post('/livros', verificarToken, LivroController.inserir)
        app.get('/livros', LivroController.listarTodos)
        app.patch('/livros/:id', verificarToken, LivroController.atualizar)
        app.delete('/livros/:id', verificarToken, LivroController.deletar)
    }

    static async inserir(req, res) {
        const { nome, autor, editora, idioma, paginas, ano } = req.body

        if ( !nome || !autor || !editora || !idioma || !paginas || !ano ) {
            return res.status(400).send({
                message: 'Todos os campos são obrigatórios'
            })
        }

        const livro = new Livro()
        livro.nome = nome
        livro.autor = autor
        livro.editora = editora
        livro.idioma = idioma
        livro.paginas = paginas
        livro.ano = ano


        await livro.save()

        res.status(200).send({
            message: 'Livro criado com sucesso!',
            data: livro
        })
    }

    static async listarTodos(req, res) {
        const livros = await Livro.findAll()
        res.status(200).send({
            message: 'Livros listados com sucesso!',
            data: livros
        })
    }

    static async atualizar(req, res) {
        const {id} = req.params

        const livro = await Livro.findByProperty('id', id)
        if (!product) {
            return res.status(404).send({
                message: `O livro de id ${id} não existe`
            })
        }

        const { nome, autor, editora, idioma, paginas, ano} = req.body
        if (nome) {
            livro.nome = nome
        }
        if (autor) {
            livro.autor = autor
        }
        if(editora){
            livro.editora = editora
        }
        if(idioma){
            livro.idioma = idioma
        }
        if(paginas){
            livro.paginas = paginas
        }
        if(ano){
            livro.ano = ano
        }

        await livro.save()

        res.status(200).send({
            message: 'Livro alterado com sucesso!',
            data: livro
        })
    }

    static async deletar(req, res) {
        const {id} = req.params

        const livro = await Livro.findByProperty('id', id)
        if (!livro) {
            return res.status(404).send({
                message: `O livro de id ${id} não existe`
            })
        }

        await livro.delete()

        res.status(200).send({
            message: 'Livro deletado com sucesso!'
        })
    }
}
