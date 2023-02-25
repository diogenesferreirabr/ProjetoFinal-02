import sqlite3 from "sqlite3"
import { open } from "sqlite"

// Cria uma função chamada getConnection que retorna uma promessa para abrir um banco de dados SQLite.
export const getConnection = () => open({
    filename: './db.sqlite',
    driver: sqlite3.verbose().Database
})