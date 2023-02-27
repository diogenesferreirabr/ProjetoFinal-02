import ApplicationModel from "./ApplicationModel.js";

export default class Funcionalidade extends ApplicationModel {
    id; nome; 

    static configurar() {
        Funcionalidade.associar('id', 'ID')
        Funcionalidade.associar('nome', 'NOME')
       
    }
}
