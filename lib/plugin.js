const { NODE_ENV } = process.env
const DEFAULT_TARGET = '__DEV__'

/**
 * 
 * @param {import('babel__core')}
 * @return {import('babel__core').PluginObj}
 */
module.exports = ({ types: t }) => {
  return {
    name: 'babel-plugin-replace-statement-dev',
    visitor: {
      IfStatement(path, state){
        const {test} = path.node;
        if(test.name === DEFAULT_TARGET || test.name === state.opts.target) test.name = `process.env.NODE_ENV === "development"`
      }
    }
  }
}