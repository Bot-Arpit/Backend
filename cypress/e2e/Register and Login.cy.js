describe('Backend_SC_4', () => {
    it('Register user', () => {
        cy.request({
            method: "POST",
            url: "api/register", 
            // giving payload of the request in body as json
            body: {
                "email": "eve.holt@reqres.in",
                "password": "Qwerty@123"
            }
        }).then((response) => {
            expect(response.status).equal(200) //checking status code
            expect(response.body.id).not.to.be.null //id should not be null
            expect(response.body.token).not.to.be.undefined
        })
    })
    it('Try to Register user but without password', () => {
        cy.request({
            method: "POST",
            url: "api/register",
            failOnStatusCode : false,
            // giving payload of the request in body as json
            body: {
                "email": "eve.holt@reqres.in"
            }
        }).then((response) => {
            expect(response.status).equal(400) //checking status code
            expect(response.body.error).eq('Missing password')
        })
    })
    it('Try to Register user but without email', () => {
        cy.request({
            method: "POST",
            url: "api/register",
            failOnStatusCode : false,
            // giving payload of the request in body as json
            body: {
                "password" : 'email@123'
            }
        }).then((response) => {
            expect(response.status).equal(400) //checking status code
            expect(response.body.error).eq("Missing email or username")
        })
    })

    // login
    it('Login system', () => {
        cy.request({
            method: "POST",
            url: "api/login", 
            // giving payload of the request in body as json
            body: {
                "email": "eve.holt@reqres.in",
                "password": "Qwerty@123"
            }
        }).then((response) => {
            expect(response.status).equal(200) //checking status code
            expect(response.body.token).not.to.be.undefined
        })
    })
    it('Try Login system without password', () => {
        cy.request({
            method: "POST",
            url: "api/login", 
            failOnStatusCode: false,
            // giving payload of the request in body as json
            body: {
                "email": "eve.holt@reqres.in",
            }
        }).then((response) => {
            expect(response.status).equal(400) //checking status code
            expect(response.body.error).eq('Missing password')
        })
    })
    it('Login system  without Username', () => {
        cy.request({
            method: "POST",
            url: "api/login", 
            failOnStatusCode: false,
            // giving payload of the request in body as json
            body: {
                "password": "Qwerty@123"
            }
        }).then((response) => {
            expect(response.status).equal(400) //checking status code
            expect(response.body.error).eq("Missing email or username")
        })
    })
})