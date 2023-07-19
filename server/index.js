//Nod=s dépendances
const express = require("express")
const app = express()
const mysql = require('mysql2') 
const cors = require('cors')

//lets run the server
app.use(express.json())
app.use(cors())

app.listen(3002, ()=>{
    console.log('Le server torne sur le port 3002')
})

//Connectons notre base de donnée
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'plantdb',
})

//route versle serveur
//api d'inscription
app.post('/register', (req, res)=>{
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    const SQL = "INSERT INTO users (email, username, password) VALUES(?,?,?)"
    const values = [sentEmail,sentUserName, sentPassword ]
    db.query(SQL, values, (err, results)=>{
        if(err){
            res.send(err)
        }else{
            console.log('Uilisateur ajouté avec success')
            res.send({message: 'Utilisateur ajouté'})
        }
    })

})


//api de connection
app.post('/login', (req, res)=>{
    const sentloginUserName = req.body.LoginUserName
    const sentloginPassword = req.body.LoginPassword

    const SQL = "SELECT * FROM users WHERE username = ? && password = ?"
    const values = [sentloginUserName, sentloginPassword ]
    db.query(SQL, values, (err, results)=>{
        if(err){
            res.send({err:err})
        }
        if(results.length > 0){
            res.send(results)
        }else{
            res.send({message:'Les identifiants ne sont pas corrects'})
        }
         
      
    })

})
