/**
 * variable naming rules: Same as java
 * Primitive Data Types
 * numbers : 123 or 120.50
 * String : 'apple'
 * Boolean : true , false
 * Undefined : variable does not have a value yet
 * Null :
 */

/**
 * There are 3 different types of variable
 * var : abbreviation sf variable
 *      * If there is , globally-scope is a variable definition method.
 *      * You can change its value later and define the same value againg
 * 
 * let :  let is equal to ...
 *      * block-scope variable definition method
 *      * The structeure we call blocks are the place between the curly brackets.
 *      * The value of variables defined with let can be changed later
 *      * but you can NOT define the same variable againg 
 * 
 * const : short for constant,
 * as soon as the value of the variable is constant, like the number PI
 *      
 */

var name='Mike'
var age=36;
var name_object={firstname:"Mike",lastname:"Masters"}
var truth=true
var skills=["HTML","CSS","JS"]
var a = null;

//object
var student= {
    firstname:"Jake",
    lastname:"Masters",
    age:30,
    height:180,

    fullName: function(){
        return this.firstname+ " " + this.lastname
    }
}

const ageValue=student.age
//to run in console
console.log(ageValue)
console.log(student.fullName())

/**
 * code run to console
 * first should save your script or choose auto save from File menu
 * 1- The class in whizh this directory is located is accessed from the terminal
 *      PS C:\Users\Fatih\Desktop\ETS-B4-Cypress> cd cypress/e2e
        PS C:\Users\Fatih\Desktop\ETS-B4-Cypress\cypress\e2e> cd javascript_basics
        PS C:\Users\Fatih\Desktop\ETS-B4-Cypress\cypress\e2e\javascript_basics> 

   2- Type the full name with
   S C:\Users\Fatih\Desktop\ETS-B4-Cypress\cypress\e2e\javascript_basics>node datatypes-objects.js
   


 */