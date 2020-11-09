'use strict'

var date = new Date();

var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDay();
var hour = date.getHours();

var date_text = `
    This is year ${year}
    This is month ${month}
    This is day ${day}
    This is hour ${hour}
`;


console.log(date_text);