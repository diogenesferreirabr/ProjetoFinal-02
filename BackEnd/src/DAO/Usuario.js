import ApplicationModel from "./ApplicationModel.js";

export default class Usuario extends ApplicationModel {
    id; email; encryptedPassword; authToken;

    static configurar() {
        Usuario.associar('id', 'ID')
        Usuario.associar('email', 'EMAIL')
        Usuario.associar('encryptedPassword', 'ENCRYPTED_PASSWORD')
        Usuario.associar('authToken', 'AUTH_TOKEN')
    }
}