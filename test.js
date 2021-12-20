import express from "express";

const app = require("./index")
const request = require('supertest')

describe('prueba de servidor', ()=>{
    it('Health check express', async ()=>{
        const res = await request(app).get('/healt-check')
        expect(res.statusCode).toEqual(200);
    })
})

