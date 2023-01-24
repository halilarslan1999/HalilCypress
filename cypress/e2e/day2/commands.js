///<reference types="cypress"/>

//visit
cy.visit('open url')
cy.visit('url',{timeout:10000})

//should is promise in here
cy.url().should('include',path)

//finding the element
cy.get(loc).click()  //loc is the reference
cy.get(loc).should('be.visible')
cy.get(loc).should('be.exist')

//negative scenario
cy.get(loc).should('not.be.visible')
cy.get(loc).should('not.be.exist')

cy.get('label').should('have.text','Table of Contents')
cy.get('input').should('have.value','James')

//parent to child 
cy.get(loc).first()
cy.get(loc).last()
cy.get(loc).eq(3).click()

cy.get(loc).next().click() //if you dont use the multiple true it will throw an exception
cy.go('back')
cy.get(loc).nextAll().click({multiple:true})//web table like "t-body" click each of one by one


//position handling
cy.get(loc).click('top')
cy.get(loc).click('buttom')
cy.get(loc).click('topLeft')

//hover handling
cy.get(loc).trigger('mouseover').click()
cy.get(loc).trigger('mauseup').click()
cy.get(loc).trigger('mousedown').clic()

//login
cy.get('#username').clear().type('username')







