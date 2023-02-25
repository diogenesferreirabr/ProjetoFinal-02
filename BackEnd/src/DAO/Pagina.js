import ApplicationModel from "./ApplicationModel.js";

export default class Pagina extends ApplicationModel {
    id; titulo; texto;

    static configurar() {
        Pagina.associar('id', 'ID')
        Pagina.associar('titulo', 'TITULO')
        Pagina.associar('texto', 'TEXTO')
    }
}
