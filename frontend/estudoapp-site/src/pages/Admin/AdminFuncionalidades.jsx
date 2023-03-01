import {Container, Table, Form, Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import CmsApi from '../../api/CmsApi'
import Funcionalidades from './../Funcionalidades';

function AdminFuncionalidades() {
    const [funcionalidades, setFuncionalidades] = useState([])

    useEffect (() => {
        async function getFuncionalidades() {
            const response = await CmsApi().getFuncionalidades()
            const funcionalidades = await response.json()
            setFuncionalidades(funcionalidades.data)
        }

        getFuncionalidades()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget
        const nome = form.nome.value
        const autor = form.autor.value
        const editora = form.editora.value
        const idioma = form.idioma.value
        const paginas = form.paginas.value
        const ano = form.ano.value

        const response = await CmsApi().postFuncionalidade({nome, autor, editora, idioma, paginas, ano})
        if(!response.ok) {
            alert('Erro ao cadastrar livro')
            return
        }
        const funcionalidade = await response.json()
        alert('Livro cadastrado com sucesso')
        setFuncionalidades([...funcionalidades, funcionalidade.data])
        form.reset()
    }

    async function excluirFuncionalidade(id) {
        console.log(id)
        const response = await CmsApi().deleteFuncionalidade(id)
        if(!response.ok) {
            alert('Erro ao excluir livro')
            return
        }

        alert('Livro excluído com sucesso')
        const funcionalidadesAtualizadas = funcionalidades.filter((funcionalidade) => funcionalidade.id !== id)
        setFuncionalidades(funcionalidadesAtualizadas)
    }

    function habilitarEdicao(botao, id) {
        botao.innerText = 'Salvar'
        botao.classList.remove('btn-primary')
        botao.classList.add('btn-success')
        botao.onclick = (event) => {salvarEdicao(event.target, id)}
      
        const linha = botao.parentNode.parentNode
        const colunaNome = linha.children[1]
        // Cria um input para o nome
        const inputNome = document.createElement('input')
        inputNome.type = 'text'
        inputNome.value = colunaNome.innerText
        colunaNome.innerText = ''
        colunaNome.appendChild(inputNome)
        // Cria um input para o autor
        const colunaAutor = linha.children[2]
        const inputAutor = document.createElement('input')
        inputAutor.type = 'text'
        inputAutor.value = colunaAutor.innerText
        colunaAutor.innerText = ''
        colunaAutor.appendChild(inputAutor)
        // Cria um input para a editora
        const colunaEditora = linha.children[3]
        const inputEditora = document.createElement('input')
        inputEditora.type = 'text'
        inputEditora.value = colunaEditora.innerText
        colunaEditora.innerText = ''
        colunaEditora.appendChild(inputEditora)
        // Cria um input para o idioma
        const colunaIdioma = linha.children[4]
        const inputIdioma = document.createElement('input')
        inputIdioma.type = 'text'
        inputIdioma.value = colunaIdioma.innerText
        colunaIdioma.innerText = ''
        colunaIdioma.appendChild(inputIdioma)
        // Cria um input para paginas
        const colunaPaginas = linha.children[5]
        const inputPaginas = document.createElement('input')
        inputPaginas.type = 'text'
        inputPaginas.value = colunaPaginas.innerText
        colunaPaginas.innerText = ''
        colunaPaginas.appendChild(inputPaginas)
        // Cria um input para o Ano
        const colunaAno = linha.children[6]
        const inputAno = document.createElement('input')
        inputAno.type = 'text'
        inputAno.value = colunaAno.innerText
        colunaAno.innerText = ''
        colunaAno.appendChild(inputAno)
      }
      

    async function salvarEdicao(botao, id) {
         
        const linha = botao.parentNode.parentNode
        const colunaNome = linha.children[1]
        const inputNome = colunaNome.children[0]
        const colunaAutor = linha.children[2]
        const inputAutor = colunaAutor.children[0]
        const colunaEditora = linha.children[3]
        const inputEditora = colunaEditora.children[0]
        const colunaIdioma = linha.children[4]
        const inputIdioma = colunaIdioma.children[0]
        const colunaPaginas = linha.children[5]
        const inputPaginas = colunaPaginas.children[0]
        const colunaAno = linha.children[6]
        const inputAno = colunaAno.children[0]


        const response = await CmsApi().patchFuncionalidade({id: id, nome: inputNome.value, autor: inputAutor.value, editora: inputEditora.value, idioma: inputIdioma.value, paginas: inputPaginas.value, ano: inputAno.value})
        if(!response.ok) {
            alert('Erro ao editar livro')
            return
        }
        alert('Livro editado com sucesso')
        
        colunaNome.innerText = inputNome.value
        colunaAutor.innerText = inputAutor.value
        colunaEditora.innerText = inputEditora.value
        colunaIdioma.innerText = inputIdioma.value
        colunaPaginas.innerText = inputPaginas.value
        colunaAno.innerText = inputAno.value


        botao.innerText = 'Editar'
        botao.classList.remove('btn-success')
        botao.classList.add('btn-primary')
    }


    return (
        <Container className="conteudo-margin">
            <h1>Admin Funcionalidades</h1>
            <hr />
            <h2>Adicionar Livros</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite o nome do livro" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="autor">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control type="text" placeholder="Digite o autor" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="editora">
                    <Form.Label>Editora</Form.Label>
                    <Form.Control type="text" placeholder="Digite a editora" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="idioma">
                    <Form.Label>Idioma</Form.Label>
                    <Form.Control type="text" placeholder="Digite o idioma" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="paginas">
                    <Form.Label>Paginas</Form.Label>
                    <Form.Control type="text" placeholder="Digite a quantidade de páginas" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ano">
                    <Form.Label>Ano</Form.Label>
                    <Form.Control type="text" placeholder="Digite o ano do livro" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
            <hr />
            <p>Lista de Livros</p>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Autor</th>
                        <th>Editora</th>
                        <th>Idioma</th>
                        <th>Páginas</th>
                        <th>Ano</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {funcionalidades.map((funcionalidade) => (
                        <tr key={funcionalidade.id}>
                            <td>{funcionalidade.id}</td>
                            <td>{funcionalidade.nome}</td>
                            <td>{funcionalidade.autor}</td>
                            <td>{funcionalidade.editora}</td>
                            <td>{funcionalidade.idioma}</td>
                            <td>{funcionalidade.paginas}</td>
                            <td>{funcionalidade.ano}</td>
                            <td>
                                <Button variant="primary" onClick={(event) => {habilitarEdicao(event.target, funcionalidade.id)}}>Editar</Button>
                                 | 
                                 <Button variant="danger" onClick={() => {excluirFuncionalidade(funcionalidade.id)}}>Excluir</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default AdminFuncionalidades