const CmsApi = () => {
    const url = 'http://localhost:8000'

    return {
        login (email, password) {
            return fetch(`${url}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
        },
        getSobre () {
            return fetch(`${url}/paginas/1`)
        },
        patchSobre (sobre) {
            return fetch(`${url}/paginas/1`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify(sobre)
            })
        },        
        getFuncionalidades () {
            return fetch(`${url}/livros`)
        },
        postFuncionalidade (funcionalidade) {
            return fetch(`${url}/livros`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify(funcionalidade)
            })
        },
        patchFuncionalidade (funcionalidade) {
            return fetch(`${url}/livros/${funcionalidade.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify(funcionalidade)
            })
        },
        deleteFuncionalidade (id) {
            return fetch(`${url}/livros/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                }
            })
        }
    }
}

export default CmsApi