import { hashSync } from "bcrypt"

import Pagina from "../src/DAO/Pagina"
import Livro from "../src/DAO/Livro.js"
import Usuario from "../src/DAO/Usuario.js"

const models = [
    Pagina, Livro, Usuario
]

const semear = async () => {
    models.forEach(model => model.configure())

    const pagina = new Pagina()
    pagina.titulo = 'Sobre'
    pagina.texto = 'Lorem ipsum dolor sit amet.'
    const paginas = [pagina]

    const livros = []
    for (let i=1; i<=10; i  ) {
        const liv = new Livro()
        liv.nome = `Descrição do livro ${i}`
        livros.push(liv)
    }

    const usu = new Usuario()
    admin.email = "admin@case2.com"
    admin.encryptedPassword = hashSync('12345678', 10)
    const usuarios = [usu]
    
    await Pagina._semear(paginas)
    await Livro._semear(livros)
    await Usuario._semear(usuarios)
}

semear()