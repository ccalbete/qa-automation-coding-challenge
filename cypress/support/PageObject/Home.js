class Home{
    getUsernameInput(){
        return cy.get('#username')
    }
    getSubmitButton(){
        return cy.get('.submit')
    }

    getRepoListSection(){
        return cy.get('.repo-list-container')
    }

    getFailureMessage(){
        return cy.get('.message-failure')
    }

    getSuccessMessage(){
        return cy.get('.message-success')
    }
}

export default Home