import mysql from "mysql2"

export const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "admin",
    database: "db_exemplo"
})

db.connect((err) => {
    if(err) {
        console.log(`Erro ao se conectar ao banco de dados ${err}`)
        return
    }

    console.log("Conecxão ao banco de dados MySql realizada com sucesso.")
})