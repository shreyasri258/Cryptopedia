
const KeyManager=require('../lib/KeyManager')
const colors=require('colors')
const inquirer=require('inquirer');
const {isRequired}=require('../utils/validation')
const key={
    async set(){
        const keyManager= new KeyManager();
const input=await inquirer.prompt([
{
    type:'input',
    name:'key',
    message:'Enter API key'.green+'https://coinmarketcap.com/',
validate:isRequired
}
]);
const key=keyManager.SetKey(input.key);
if(key){
    console.log('API key set'.blue);
}
    },
    show(){
        try {
            const keyManager=new KeyManager();
            const key=keyManager.getKey();
            console.log('current API key ',key.yellow);
        } catch (error) {
            console.log(error.message.red);
        }
    },
    remove(){
        try {
            const keyManager=new KeyManager();
            keyManager.deleteKey();
            console.log('key is removed '.blue);
        } catch (error) {
            console.log(error.message.red);
        }
    }
};

module.exports=key;
//26