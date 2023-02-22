import Examen from "./PageObjectModel.js";
require("cypress-plugin-tab")
require("cypress-file-upload")

Cypress.on("uncaught:exception", (err,runnable)=>{
    return false
})

/// <reference types="Cypress"/>
describe("Page Object Model Use",()=>{  

    before(function(){  
        cy.fixture("ejemplo").then(function(data){ 
            globalThis.data=data;
        })
    })

    it.only("Page Object Model Use",()=>{  
        const ejercicio = new Examen
    
        ejercicio.visitValidPage()
        ejercicio.rellenarTexBox()
        ejercicio.checkRadioButton()
        ejercicio.date()
        ejercicio.subjects()
        ejercicio.checkBox()
        ejercicio.upLoadPicture()
        ejercicio.selectState()
        ejercicio.selectCity()
        ejercicio.submit()
        
    })

})
