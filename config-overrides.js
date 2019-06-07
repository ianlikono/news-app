/* eslint-disable no-param-reassign */
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#5F26FA',
      '@link-color': '#5F26FA',
      '@border-radius-base': '1px',
      '@success-color': '#52c41a',
      '@body-background': '#181818',
      '@text-color': '#AAAAAA',
      '@input-bg': '#333333',
      '@component-background': '#333333',
      '@heading-color': 'fade(#fff, 85%)',
      '@text-color-secondary': 'fade(#fff, 45%)',
      '@heading-color-dark': 'fade(#fff, 100%)',
      '@text-color-dark': 'fade(#fff, 85%)',
      '@text-color-secondary-dark': 'fade(#fff, 65%)',
      '@border-color-base': '#5F26FA',
      '@border-width-base': '0px',
      '@background-color-base': '#282828',
      '@table-selected-row-bg': '#B04AEA',
      '@table-expanded-row-bg': '#B04AEA',
      '@tree-directory-selected-color': '#B04AEA',
    },
  }),
);
