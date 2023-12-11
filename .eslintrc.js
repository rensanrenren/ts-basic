const eslintConfig = {
    env: {
        browser: true,
        es2021: true, //ES6の構文でチェックする
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier", //Prettierのextendsは他のextendsより後に記述する。
    ],
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2021, //ES2021の構文でチェックする
        sourceType: "module",
        project: "./tsconfig.json", // Update the path to your tsconfig.json file
    },
    root: true,
    rules: {},
};
module.exports = eslintConfig;
