module.exports = {
    create: function (context) {
        // rule implementation ...
        return {
            CallExpression: function (node) {
                if (
                    node.callee.type === 'MemberExpression' &&
                    node.callee.property.type === 'Identifier' &&
                    node.callee.property.name === 'import' &&
                    node.callee.object.type === 'Identifier' &&
                    node.callee.object.name === 'System' &&
                    node.arguments[0].type !== 'Literal'
                ) {
                    context.report(({
                        node,
                        message: 'Invalid System.import path'
                    }))
                }
            }
        };
    }
};
