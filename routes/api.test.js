const request = require('supertest');
const app = require('../app');
const connectMongo = require('../services/mongo');

describe('Test weather API', () => {

    beforeAll(async () => {
        await connectMongo()
    })

    test('it should get the pincode from the request', async () => {
        const response = await request(app)
        .get('/126116')
        .expect(200)
        console.log(response)
    });
});