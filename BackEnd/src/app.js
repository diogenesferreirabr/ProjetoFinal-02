import cors from "cors";
import express from "express";

import UsuarioController from './controller/UsuarioController.js'
import LivroController from './controller/LivroController.js'
import PaginaController from './controller/PaginaController.js'

import PaginaDAO from './DAO/Pagina.js'
import LivroDAO from './DAO/Livro.js'
import UsuarioDAO from './DAO/Usuario.js'

const app = express()
app.use(cors())
app.use(express.json())

PaginaDAO.configurar()
LivroDAO.configurar()
UsuarioDAO.configurar()

UsuarioController.rotas(app)
LivroController.rotas(app)
PaginaController.rotas(app)

export default app