const mix        = require('laravel-mix')
let   JavaScript = require('laravel-mix/src/components/JavaScript')

class Block extends JavaScript {
  name() {
    return 'blocks'
  }

  dependencies() {
    this.requiresReload = `
      Dependencies have been installed. Please run again.
    `

    return [
      'lodash',
      'classnames',
      'prop-types',
      '@wordpress/babel-preset-default',
    ]
  }

  webpackConfig(webpackConfig) {
    webpackConfig.externals = this.externals()
  }

  webpackPlugins() {
    /**
     * Unreleased to-date
     * #todo add support once released
     */
    // const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
    // return new DependencyExtractionWebpackPlugin()
  }

  babelConfig() {
    return {
      presets: ['@wordpress/babel-preset-default'],
    }
  }

  externals() {
    return {
      'lodash': 'lodash',
      'react': 'React',
      'react-dom': 'ReactDOM',
      '@wordpress/a11y': 'wp.a11y',
      '@wordpress/api-fetch': 'wp.apiFetch',
      '@wordpress/blob': 'wp.blob',
      '@wordpress/blocks': 'wp.blocks',
      '@wordpress/block-editor': 'wp.block-editor',
      '@wordpress/components': 'wp.components',
      '@wordpress/compose': 'wp.compose',
      '@wordpress/data': 'wp.data',
      '@wordpress/date': 'wp.date',
      '@wordpress/dom-ready': 'wp.domReady',
      '@wordpress/editor': 'wp.editor',
      '@wordpress/element': 'wp.element',
      '@wordpress/hooks': 'wp.hooks',
      '@wordpress/html-entities': 'wp.htmlEntities',
      '@wordpress/i18n': 'wp.i18n',
      '@wordpress/keycodes': 'wp.keycodes',
      '@wordpress/plugins': 'wp.plugins',
      '@wordpress/rich-text': 'wp.richText',
      '@wordpress/url': 'wp.url',
      '@wordpress/utils': 'wp.utils',
      '@wordpress/wordcount': 'wp.wordcount',
    }
  }
}

mix.extend('block', new Block())