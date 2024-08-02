const supertest = require('supertest')
const members = require('../utils/Members.js')

describe('Members Section Test', () => {
    describe('member get all data along', () => {
        test('should be return some data from db all members simple querying',async() =>{
            const getAllMember = await members.getAllMember()
            expect(getAllMember).not.toBeNull()
        })
    })

    describe('creating member', () => {
        test('post with code and user', async() =>{
            const postMember = await members.postMember('M004', 'Sarah')
            console.log(postMember)
            expect(postMember).not.toBeNull()
        })
    })
})