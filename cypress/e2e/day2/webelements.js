///<reference types="cypress"/>

describe('Web Elements',()=>{

    it('First Test',()=>{

        //tag name
        cy.get('input')

        //by id
        cy.get('#twotabsearchtextbox')

        //by className
        cy.get('.nav-sprite')

        //by attribute name
        cy.get('[placeholder]')

        //by attribute name and value
        cy.get('[id="twotabsearchtextbox"]')
        cy.get('[placeholder="Ara Amazon.com.tr"]')

        //by two different attributes or more
        cy.get('[id="twotabsearchtextbox"][placeholder="Ara Amazon.com.tr"]')

        //by contains part
        cy.contains('accept').click()



    })
})