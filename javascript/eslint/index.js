module.exports = {
    plugins: [
        'react',
    ],

    parserOptions: {
        sourceType:   'module',
        ecmaVersion:  2018,
        ecmaFeatures: {
            jsx: true,
        },
    },

    env: {
        es6: true,
    },

    rules: {
        semi:                  ['error', 'always'],
        indent:                ['error', 4, {VariableDeclarator: 'first'}],
        quotes:                ['error', 'single'],
        'one-var':             ['error', 'never'],
        'prefer-const':        ['error'],
        'no-const-assign':     ['error'],
        'no-var':              ['error'],
        'space-before-blocks': ['warn'],
        'keyword-spacing':     ['error', {before: true}],
        'space-infix-ops':     ['error', {'int32Hint': false}],
    },
};

