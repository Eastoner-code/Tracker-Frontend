module.exports = {
  printWidth: 130,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'consistent',
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'crlf',
  overrides: [
    {
      files: '*.{scss,ts}',
      options: {
        tabWidth: 2
      }
    },
    {
      files: '*.html',
      options: {
        printWidth: 140
      }
    }
  ]
};
