import ApplicationModel from "./ApplicationModel.js";

export default class Livro extends ApplicationModel {
    id; nome; autor; editora; idioma; paginas; ano;

    static configurar() {
        Livro.associar('id', 'ID')
        Livro.associar('nome', 'NOME')
        Livro.associar('autor', 'AUTOR')
        Livro.associar('editora', 'EDITORA')
        Livro.associar('idioma', 'IDIOMA')
        Livro.associar('paginas', 'PAGINAS')
        Livro.associar('ano', 'ANO')
    }
}
