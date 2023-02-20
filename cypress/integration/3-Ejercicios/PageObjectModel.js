class Examen{
    visitValidPage(website,title){
        cy.visit(website)
        cy.title().should("eq",title)
    }

    firstLastEmail(nombre,apellidos,email){
        cy.get(nombre).type("Susana").tab().get(apellidos).type("Galvez")
        .tab().get(email).type("Sugalsi@gmail.com")
    }

    radioButton(){
        cy.get("#gender-radio-2").should("not.be.checked").check({force:true})
    }

    movil(numeros){
        cy.get(numeros).type("676129070")
    }

    date(){
        cy.get("#dateOfBirthInput").should("be.visible").click()
        cy.get(".react-datepicker__day--020").first().click({force:true})
    }

    subjects(asignatura){
        cy.get(asignatura).type("Matemáticas")
    }

    checkbox(){
        cy.get("#hobbies-checkbox-3").should("be.not.checked").click({force:true})
    }

    upLoadPicture(){
        const imagen = "CapturaFlores.PNG" 
        cy.get("#uploadPicture").attachFile(imagen)
    }

    currentAddress(address){
        cy.get(address).type("C/Navarra portal 1º 3ºB")
    }

    selectStateCity(){
        cy.get("#react-select-3-input").type("Haryana",{force:true}).tab()
        .get("#react-select-4-input").type("Delhi",{force:true})
        cy.wait(2000)
    }

    submit(){
        cy.get("#submit").click({force:true})
    }
    }

   


export default Examen