module.exports = {
  // ここより親階層のeslintrcを参照しない
  root: true,
  env: {
    // nodeのグローバル変数とnode特有のルールを有効に
    node: true,
  },
  parserOptions: {
    // tsも解釈できるパーサを使う
    parser: "@typescript-eslint/parser",
  },
  // tsに対する基本ルール、そしてprettier
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "arrow-parens": ["error", "as-needed"],
    // 開発時には許容される
    "no-console": "off",
    "no-debugger": "off",
    // 変数が使用されているかのチェックについては、通常はtsのルールを優先する
    // 型変数も含めて使用しているかチェック可能
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    // typescriptは、継承先クラスでsuper()呼び出しを強制するので、super呼び出しだけするコンストラクタを許容する
    "no-useless-constructor": "off",
    // インデントについては、通常はprettierのルールを優先する
    indent: "off",
    "@typescript-eslint/indent": "off",
    // async関数でawaitを必ずしも要求しない(ただただpromiseにしたい場合があるため)
    "require-await": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    // object, {}型を許容する
    "@typescript-eslint/ban-types": "off",
  },
  overrides: [
    // tsファイルにおいてeslintのインデント検知は効かせない
    // genericsに関するインデントをeslintは適切に処理できないので、prettierにまかせる
    {
      files: ["*.ts"],
      rules: {
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
    // spec fileにおいてはundefinedな変数が出ることもあるのでundefは無効化する
    {
      files: ["*.spec.js"],
      rules: {
        "no-undef": "off",
        "no-unused-expressions": "off",
      },
    },
  ],
};
