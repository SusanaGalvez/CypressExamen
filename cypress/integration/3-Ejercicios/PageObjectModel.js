
class Examen {

    // FUNCIONES REUTILIZABLES 
    //el idName no me lo pone solo
    rellenarTexBox(id, texto) {
        cy.firstName("#firstName", data.firstName)
        cy.lastName("#lastName", data.lastName)
        cy.email("#userEmail", data.email)
        cy.address("#currentAddress", data.address)
        cy.phoneNumber("#userNumber", data.phoneNumber)
    }

    checkRadioButton(id) {
        cy.radioButton1("#gender-radio-1").should("not.be.checked").check({ force: true })
        cy.radioButton2("#gender-radio-2").should("not.be.checked").check({ force: true })
        cy.radioButton3("#gender-radio-3").should("not.be.checked").check({ force: true })
    }

    checkBox() {
        cy.checkBox1("#hobbies-checkbox-1").should("not.be.checked").check({ force: true })
        cy.checkBox2("#hobbies-checkbox-2").should("not.be.checked").check({ force: true })
        cy.checkBox3("#hobbies-checkbox-3").should("not.be.checked").check({ force: true })
    }


    // FUNCIONES SIN REUTILIZAR

    visitValidPage() {
        cy.visit(data.website)
        cy.title().should("eq", data.title)
        cy.wait(1000)
    }

    date() {
        cy.get("#dateOfBirthInput").should("be.visible").click()
        cy.get(".react-datepicker__day--020").first().click({ force: true })
    }

    subjects(){
        cy.get("#subjectsContainer").type("Maths{enter}")
    }

    upLoadPicture() {
        const imagen = "CapturaFlores.PNG"
        cy.get("#uploadPicture").attachFile(imagen)
    }

    selectState() {
         
        cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer')
        .type("Haryana{enter}")
    //     cy.get('.css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer')
    //     .type("Haryana{enter}")
    }
        
    selectCity(){

        cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer')
        .type("Delhi{enter}")
        // cy.get('.css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer')
        // .type("Delhi{enter}")
        // cy.wait(2000)
    }
    
        submit(){
            cy.get("#submit").click({force:true})
        }

}
export default Examen

// Crea en el POM un método el cual busque el ID de un
// textBox, y luego le pases como argumento a escribir
// una variable del json que tienes cargado en fixture.
// Ojo, este método tiene que ser dinámico y ha de ser
//  REUTILIZADO para todos los textBox.
// Los argumentos que recibirá será por una parte el ID,
// y por otra la variable del Json designada.

// Agrega otro método que valide de la misma forma los
//  checkbox y los radio buttons. Osea, le pases como
//  argumento el ID de los checkbox y el método
//   automaticamente los valide y les haga un check.


//    Agrega un último método para subir la fotografía. 



