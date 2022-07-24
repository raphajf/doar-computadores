const request = require("supertest");
const app = require('../src/app.js');

test("Servidor na porta 3000 retornando objeto ({ alive: true })", async () => {
    const resposta = await request(app).get("/");
    expect(resposta.status).toEqual(200);
    expect(resposta.body).toEqual({ alive: true });
});
