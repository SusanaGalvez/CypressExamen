// Para iniciar proyecto en Cypress
npm init

npm install cypress@9.7.0

npm install -g npx

npx cypress open

//Solo si da problemas:

npx cypress install --force  (opcional)


// Plugins a instalar:

Tab:

npm install -D cypress-plugin-tab

Xpath:

npm install -D cypress-xpath

Drag and Drop:

npm install --save-dev @4tw/cypress-drag-drop

//Importar archivos:

npm install --save-dev cypress-file-upload

//Configuación de Cucumber 

npm install --save-dev cypress-cucumber-preprocessor

En el directorio raiz, package.json escribir lo siguiente:

"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}

En plugins/index.js escribir lo siguiente

const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
on('file:preprocessor', cucumber())
}




