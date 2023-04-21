import { db } from '../app.js';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

export async function signup(req, res) {
    
    const { name, email, password } = req.body;

    try {
        const hash = bcrypt.hashSync(password, 10);

        await db.collection('users').insertOne({ name, email, password: hash });
        res.status(201).send('✅ User created SUCESSFULLY!');
    } catch (err) {
        res.status(500).send(`🚫 Unknown server error!\n\n${err.message}`);
    }
}

export async function signin(req, res) {
    const { email, senha } = req.body

    try {
        const usuario = await db.collection("usuarios").findOne({ email })
        if (!usuario) return res.status(401).send("E-mail não cadastrado.")

        const senhaEstaCorreta = bcrypt.compareSync(senha, usuario.senha)
        if (!senhaEstaCorreta) return res.status(401).send("Senha incorreta")

        const token = uuid()
        await db.collection("sessoes").insertOne({ token, idUsuario: usuario._id })
        res.send(token)
    } catch (err) {
        res.status(500).send(err.message)
    }
}