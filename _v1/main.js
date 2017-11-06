// DEPENDENCIES & SERVER
var     handlebars  = require('handlebars');

// HTML retrieval
var headerSource = $('#headerOneImg').html();

// Compiler
var compileScript = Handlebars.compile(source);

var context = {
    "headerOneUrl" : "#",
    "headerTwoUrl" : "#",
};

var html = compileScript(context);

$(document.body).append(html);
