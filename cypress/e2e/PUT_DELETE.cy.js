describe('Backend_SC_3', () => {
    it('PUT', () => {
        // calling fixtures.json to update info of earlier created Record
        cy.fixture("CreatedUserData.json").then((data) => {
            let id = data.id
            let name = data.name

            cy.request({
                method: "PUT",
                url: "api/users/" + id, // concat the id to update specific record which we created earlier
                // giving payload of the request in body as json
                body: {
                    "name": name,
                    "job": "zion resident"
                }
            }).then((response) => {
                expect(response.status).equal(200) //checking status code
                expect(response.body).not.to.be.null //checking response should not be null
                expect(response.body.name).eq(name) //checking the username
                expect(response.body.job).eq("zion resident") //checking the updated Job
            })
        })
    })
    it('DELETE', () => {
        // calling fixtures.json to update info of earlier created Record
        cy.fixture("CreatedUserData.json").then((data) => {
            let id = data.id
            cy.request({
                method: "DELETE",
                url: "api/users/" + id, // concat the id to update specific record which we created earlier
            }).then((response) => {
                expect(response.status).equal(204) //checking status code
            })

            //checking record is deleted or not by making a get request 
            cy.request({
                method: "GET",
                url: "api/users?delay=3", 
                failOnStatusCode : false
            }).then((response) => {
                //expect(response.status).equal(404) //checking status code if 404 then user deleted
            })
        })
    })
})