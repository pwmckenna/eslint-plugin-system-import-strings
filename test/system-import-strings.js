"use strict";

var rule = require('../rules/system-import-strings');
var RuleTester = require('eslint').RuleTester;

var ruleTester = new RuleTester();
ruleTester.run('system-import-strings', rule, {
    valid: [
        'System.import(\'asdf\')',
        'System.import("asdf")'
    ],
    invalid: [
        {
            code: 'var s; System.import(s);',
            errors: [ { message: 'Invalid System.import path' } ]
        }
    ]
});
