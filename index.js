'use strict';
const crawler = require('./lib/request');

Promise
    .all([
        crawler.load('http://google.com.br'),
        crawler.load('http://uol.com.br'),
        crawler.load('http://ig.com.br'),
        crawler.load('http://terra.com.br')
    ])
    .then(function (data) {
        console.log('todo mundo deu certo', data);
    })

for(var i; i<10 ; i++) {
        console.log(i);
}

console.log(i);