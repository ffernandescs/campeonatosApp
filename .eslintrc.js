module.exports = {
  root: true,
  extends: '@react-native-community',
};

rules: {
  'prettier/prettier': ['error', { "endOfLine": "auto"}, { usePrettierrc: true }],  // Use our .prettierrc file as source
  'react/react-in-jsx-scope': 'off',
  'react/prop-types': 'off',
  'simple-import-sort/imports': 'error',
  "simple-import-sort/exports": "error"
}