import Examen from "./PageObjectModel";
require("cypress-plugin-tab")
require("cypress-file-upload")

Cypress.on("uncaught:exception", (err,runnable)=>{
    return false
})

/// <reference types="Cypress"/>
describe("Page Object Model Use",()=>{  
   
    it("Page Object Model Use",()=>{  
        const ejercicio = new Examen
        
        ejercicio.visitValidPage("https://demoqa.com/automation-practice-form","DEMOQA")
        ejercicio.firstLastEmail("#firstName","#lastName","#userEmail")
        ejercicio.radioButton()
        ejercicio.movil("#userNumber")
        ejercicio.date()
        ejercicio.subjects("#subjectsContainer")
        ejercicio.checkbox()
        ejercicio.upLoadPicture()
        ejercicio.currentAddress("#currentAddress")
        ejercicio.selectStateCity()
        ejercicio.submit()
    })
})