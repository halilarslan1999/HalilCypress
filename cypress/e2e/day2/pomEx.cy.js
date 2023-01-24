///<reference types="cypress"/>

import{Login} from "../../pageObject/login"

const login=new Login()

describe('Login Test with Page Object', () => {

    it('TCO3 positive scenario', () => {
        login.navigate()
        login.title()
    })

    it('TC04 positive scenario',()=>{

        login.navigate()
        login.title()
        /** 
        login.loginBtn()
        login.username()
        login.password()
        login.submit
        */

        login.loginBtn()
             .username()
             .password()
             .submit()


    })
})