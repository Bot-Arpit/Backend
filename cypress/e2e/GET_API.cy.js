
describe('Backend_SC_01', () => {
  it('Get Api multiUsers', () => {

    //making GET request to server
    cy.request({
      method: "GET",
      url: "api/users?page=2"
    }).then((response) => {
      expect(response.status).equal(200) // checking status code
      expect(response.body).not.to.be.null // checking response body should not be null
      expect(response.body.data).to.have.length(response.body.per_page) //checking number of records 
      
    })
  })
  it('Get Api single user', () => {
    cy.request({
      method: "GET",
      url: "api/users/2"
    }).as('singleUser') // using alliasing concept this will act as variable to store response

    cy.get('@singleUser').then((response) => { //calling response of APi by using @ followed by alias
      expect(response.status).equal(200)
      expect(response.body.data.id).eq(2) //verifying id
      expect(response.body.data.email).eq("janet.weaver@reqres.in") //verifying email
      expect(response.body.data.first_name).eq("Janet") //verifying first-name
      expect(response.body.data.last_name).eq("Weaver") //verifying last-name
      
    })
  })
  it('Get Api with status 404 (not found)', () => {
    cy.request({
      method: "GET",
      url: "api/users/24",
      failOnStatusCode: false  // this will  prevent the test case to failed if api is throwing 40X or 500
    }).then((response) => {
      expect(response.status).equal(404)
      
    })
  })
})