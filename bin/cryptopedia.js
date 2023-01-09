#!/usr/bin/env node

//const program=require('commander');
const { Command } = require('commander');
const program = new Command();
const pkg=require('../package.json')
program
    .version(pkg.version)
    .command('key','Manage API Key -- https://coinmarketcap.com/')
    .command('check','Check coin price info')
    .parse(process.argv)

console.log("hello ");
//console.log(process.argv);

