import app from "./src/app.js";

const port = 8000

app.listen(port, () => {
    console.log(`Aplicação escutando na porta ${port}`)
})