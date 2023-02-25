import Pagina from "../src/DAO/Pagina"
import Livro from "../src/DAO/Livro.js"
import Usuario from "../src/DAO/Usuario.js"

const migrar = async () => {
    await Pagina._migrar([
        '"ID" INTEGER PRIMARY KEY NOT NULL',
        '"TITULO" VARCHAR(200)',
        '"TEXTO" VARCHAR(200)'
    ])
    await Livro._migrar([
        '"ID" INTEGER PRIMARY KEY NOT NULL',
        '"NOME" VARCHAR(90)',
        '"AUTOR" VARCHAR(90)',
        '"EDITORA" VARCHAR(90)',
        '"IDIOMA" VARCHAR(90)',
        '"PAGINAS" VARCHAR(90)',
        '"ANO" VARCHAR(90)'

    ])
    await Usuario._migrar([
        '"ID" INTEGER PRIMARY KEY NOT NULL',
        '"EMAIL" TEXT NOT NULL',
        '"ENCRYPTED_PASSWORD" TEXT NOT NULL',
        '"AUTH_TOKEN" TEXT'
    ])
}

migrar()