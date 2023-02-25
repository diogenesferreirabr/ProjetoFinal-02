import Pagina from "../src/DAO/Pagina.js"
import Livro from "../src/DAO/Livro.js"
import Usuario from "../src/DAO/Usuario.js"

const models = [
    Pagina, Livro, Usuario
]

const limpar = async () => {
    await Promise.all(models.map(model => model._limpar()))
}

limpar()