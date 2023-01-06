
const KeyManager=require('../lib/KeyManager')
const colors=require('colors')
const inquirer=require('inquirer');
const key={
    async set(){
        const keyManager= new KeyManager();
const input=await inquirer.prompt([
{
    type:'input',
    name:'key',
    message:'Enter API key'.green+'https://coinmarketcap.com/'
}
]);
const key=keyManager.SetKey(input.key);
if(key){
    console.log('API key set'.blue);
}
    },
    show(){
        console.log("hello from show")
    },
    remove(){
        console.log("hello from remove")
    }
};

module.exports=key;
//26