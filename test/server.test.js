const request = require('supertest');
const app = require('../src/app.js');
const payloads = require('./test-payloads.js');

describe('Testes de integração', () => {
    
    describe('Rota GET', () => {
        test('GET na raiz retornando status 200 e objeto', async () => {
            const resposta = await request(app).get('/');
            expect(resposta.status).toEqual(200);
            expect(resposta.body).toEqual({ alive: true });
        });

        test('GET em /donation retornando 200', async () => {
            const resposta = await request(app).get('/donation');
            expect(resposta.status).toEqual(200);
        });
    });

    describe('Rota POST', () => {
        test('Responder com erro POST com campos faltando', async () => {
            const resposta = await request(app)
                .post('/donation')
                .send(payloads.payloadWithoutRequiredFields);
            
            expect(resposta.status).toEqual(400);
            expect(resposta.body.errorMessage).toBe('Todos os campos obrigatórios devem ser informados');
        });

        test('Responder com erro POST com email invalido', async () => {
            const resposta = await request(app)
                .post('/donation')
                .send(payloads.payloadInvalidEmail);
            
            expect(resposta.status).toEqual(400);
            expect(resposta.body.errorMessage).toBe('Email inválido');
        });

        test('Responder com erro POST com campo equipamentos faltando', async () => {
            const resposta = await request(app)
                .post('/donation')
                .send(payloads.payloadWithoutDevices);
            
            expect(resposta.status).toEqual(400);
            expect(resposta.body.errorMessage).toBe('Todos os campos obrigatórios devem ser informados');
        });

        test('Responder com erro POST com deviceCount diferente do numero de equipamentos enviados', async () => {
            const resposta = await request(app)
                .post('/donation')
                .send(payloads.payloadDeviceCountNoMatch);
            
            const form = payloads.payloadDeviceCountNoMatch;

            expect(resposta.status).toEqual(400);
            expect(resposta.body.errorMessage).toBe(`A quantidade de equipamentos (${form.deviceCount}) não está de acordo com as informações de equipamentos enviados (${form.devices.length})`);
        });

        test('Responder com erro POST com campo tipo do equipamento inválido', async () => {
            const resposta = await request(app)
                .post('/donation')
                .send(payloads.invalidTypePayload);
            
            expect(resposta.status).toEqual(400);
            expect(resposta.body.errorMessage).toBe('Tipo inválido de equipamento');
        });

        test('Responder com erro POST com String Vazia', async () => {
            const resposta = await request(app)
                .post('/donation')
                .send(payloads.missingFieldsPayload);
            
            expect(resposta.status).toEqual(400);
            expect(resposta.body.errorMessage).toBe('Estes campos estão em branco');
        });

        test('Responder com sucesso POST completo', async () => {
            const resposta = await request(app)
                .post('/donation')
                .send(payloads.correctPayload);
            
            expect(resposta.status).toEqual(200);
            expect(resposta.body[0].success).toBe(true);
        
        });
    });   
});
