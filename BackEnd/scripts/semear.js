import { hashSync } from "bcrypt"

import Pagina from "../src/DAO/Pagina.js"
import Livro from "../src/DAO/Livro.js"
import Usuario from "../src/DAO/Usuario.js"
import Funcionalidade from "../src/DAO/Funcionalidade.js"

const models = [
    Pagina, Livro, Usuario, Funcionalidade
]

const semear = async () => {
    models.forEach(model => model.configurar())

    const pagina = new Pagina()
    pagina.titulo = 'Sobre'
    pagina.texto = 'Lorem ipsum dolor sit amet.'
    const paginas = [pagina]

    const livros = []
    for (let i=1; i<=10; i++) {
        const liv = new Livro()
        liv.nome = `Descrição do livro ${i}`
        livros.push(liv)
    }

    const usu = new Usuario()
    usu.email = "admin@case2.com"
    usu.encryptedPassword = hashSync('12345678', 10)
    const usuarios = [usu]

    const funci = new Funcionalidade()
    funci.nome = 'nome'
    const funcis = [funci]
    




    await Pagina._semear(paginas, ['titulo', 'texto'])
    await Livro._semear(livros, ['nome'])
    await Usuario._semear(usuarios, ['email', 'encryptedPassword'])
    await Funcionalidade._semear(funcis, ['nome'])
}

semear()
