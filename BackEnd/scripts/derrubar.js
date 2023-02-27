import Pagina from "../src/DAO/Pagina.js"
import Livro from "../src/DAO/Livro.js"
import Usuario from "../src/DAO/Usuario.js"
import Funcionalidade from "../src/DAO/Funcionalidade.js"

const models = [
    Pagina, Livro, Usuario, Funcionalidade
]

const derrubar = async () => {
    await Promise.all(models.map(model => model._derrubar()))
}

derrubar()