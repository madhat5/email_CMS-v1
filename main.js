var handlebars = require('handlebars');


// HTML retrieval
var headerSource = $('#headerOneImg').html();

// Compiler
var compileScript = Handlebars.compile(source);

var context = {
    "emailTitle" : "Email Template",
    "headerOneUrl" : "#",
    "headerTwoUrl" : "#",
};

var html = compileScript(context);

$(document.body).append(html);
