module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser":'vue-eslint-parser',
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser":"@typescript-eslint/parser",
        "project":'./tsconfig.json',
        "extraFileExtensions":['.vue']
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    // off 关闭规则 warn 警告 error 界面报错
    "rules": {
        "no-var": "error",
        "no-multiple-empty-lines":['warn',{max:1}],
        "no-console":process.env.NODE_ENV==='production'?'error':'off',
        "no-debugger":process.env.NODE_ENV==='production'?'error':'off',

        "@typescript-eslint/no-unused-vars":"error",
        "@typescript-eslint/no-explicit-any":"off",
        "@typescript-eslint/no-non-null-assertion":"off",
        "@typescript-eslint/no-namespace":"off",
        "@typescript-eslint/no-extra-semi":"off",
        "@typescript-eslint/no-unsafe-argument":"off",

        "vue/multi-word-component-names":'off',
        "vue/attribute-hyphenation":"off",
        

    }
}
