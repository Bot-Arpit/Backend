describe('Backend_SC_2', () => {
    it('POST create user with name and job', () => {
      // making Post request 
      cy.request({
        method: "POST",
        url: "api/users",
        // giving payload of the request in body as json
        body :{
          "name": "morpheus",
          "job": "leader"
        }
      }).then((response) => {
        expect(response.status).equal(201) //checking status code
        expect(response.body).not.to.be.null //checking response should not be null
        expect(response.body.name).eq("morpheus") //checking the username
        expect(response.body.job).eq("leader") //checking the job
        expect(response.body.job).not.to.be.null // checking there should be some id alloted
        let date = new Date() 
        let sysDate = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()
        let dte = response.body.createdAt
        let cdate = new Date(dte)
        let createdDate = cdate.getDate() + '-' + cdate.getMonth() + '-' + cdate.getFullYear()
       expect(sysDate).eq(createdDate)  //verifying the user created  on the same date


       //saving response to use in other request like PUT, DELETE ,PATCH
       cy.writeFile('cypress/fixtures/CreatedUserData.json',response.body)
        
      })
    })
    // commenting negative test cases
    // it('POST create user with name only', () => {
    //   cy.request({
    //     method: "POST",
    //     url: "api/users",
    //     body :{
    //       "name": "morpheus"
    //     }
    //   }).then((response) => {
    //     expect(response.status).equal(201)
    //     expect(response.body).not.to.be.null
    //     expect(response.body.name).eq("morpheus")
    //     expect(response.body.job).not.to.be.null
    //     let date = new Date()
    //     let sysDate = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()
    //     let dte = response.body.createdAt
    //     let cdate = new Date(dte)
    //     let createdDate = cdate.getDate() + '-' + cdate.getMonth() + '-' + cdate.getFullYear()
    //    expect(sysDate).eq(createdDate)  
        
    //   })
    // })
    // it('POST create user with  job only ', () => {
    //   cy.request({
    //     method: "POST",
    //     url: "api/users",
    //     body :{
    //       "job": "leader"
    //     }
    //   }).then((response) => {
    //     expect(response.status).equal(201)
    //     expect(response.body).not.to.be.null
    //     expect(response.body.job).eq("leader")
    //     expect(response.body.job).not.to.be.null
    //     let date = new Date()
    //     let sysDate = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()
    //     let dte = response.body.createdAt
    //     let cdate = new Date(dte)
    //     let createdDate = cdate.getDate() + '-' + cdate.getMonth() + '-' + cdate.getFullYear()
    //    expect(sysDate).eq(createdDate)  
        
    //   })
    // })
    // it('POST create user with  empty body', () => {
    //   cy.request({
    //     method: "POST",
    //     url: "api/users",
    //     body :{
         
    //     }
    //   }).then((response) => {
    //     expect(response.status).equal(201)
    //     expect(response.body).not.to.be.null
    //     expect(response.body.job).not.to.be.null
    //     let date = new Date()
    //     let sysDate = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()
    //     let dte = response.body.createdAt
    //     let cdate = new Date(dte)
    //     let createdDate = cdate.getDate() + '-' + cdate.getMonth() + '-' + cdate.getFullYear()
    //    expect(sysDate).eq(createdDate)  
        
    //   })
    // })
  })