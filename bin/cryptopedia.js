#!/usr/bin/env node

const program=require('commander');
const pkg=require('../package.json')
program
    .version(pkg.version)
    .command('key','Manage API Key --https://coinmarketcap.com/')
    .parse(process.argv)

console.log("hello ");
//console.log(process.argv);

