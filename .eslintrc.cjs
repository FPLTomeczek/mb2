module.exports = {
   root: true,
   env: { browser: true, es2020: true },
   extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
   ],
   ignorePatterns: ['dist', '.eslintrc.cjs'],
   parser: '@typescript-eslint/parser',
   plugins: [
      'react-refresh',
      'import',
      'import-newlines',
      'react',
      'prettier',
      'unused-imports',
      '@stylistic/eslint-plugin',
   ],
   rules: {
      'react-refresh/only-export-components': [
         'warn',
         { allowConstantExport: true },
      ],
      quotes: ['warn', 'single'],
      'max-statements-per-line': ['error', { max: 3 }],
      indent: ['error', 3],
      '@stylistic/indent': [
         2,
         3,
         {
            SwitchCase: 1,
            VariableDeclarator: 1,
            FunctionDeclaration: {
               parameters: 1,
               body: 1,
            },
            FunctionExpression: {
               parameters: 1,
               body: 1,
            },
            CallExpression: {
               arguments: 1,
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            ignoredNodes: [
               'ConditionalExpression',
               'TemplateLiteral',
               'TSUnionType',
               'TSTypeAliasDeclaration',
               'TSIntersectionType',
               'TSTypeParameterInstantiation',
            ],
            ignoreComments: false,
         },
      ],
      'import-newlines/enforce': [
         2,
         {
            items: 2,
         },
      ],
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
         'error',
         {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
         },
      ],
   },
};
