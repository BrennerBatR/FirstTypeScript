1º Adicionar eslint 
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin


Adicionar o seguinte código no settings.json do seu Vs Code

 "eslint.autoFixOnSave":true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {"language":"typescript" , "autoFix" : true},
        {"language" : "typescriptreact", "autoFixed": true}
    ]