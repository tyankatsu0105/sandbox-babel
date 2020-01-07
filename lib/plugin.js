module.exports = function({ types: t }) {
  return {
    name: 'babel-tyankatsu-plugin',
    visitor: {
      BinaryExpression(path) {
        if (path.node.operator !== "===") {
          return;
        }

        path.node.left = t.identifier('left');
        path.node.right = t.identifier('right');
      }
    }
  }
}