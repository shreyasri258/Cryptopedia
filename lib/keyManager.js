const Configstore=require("configstore");
const pkg=require('../package.json')

class KeyManager{
    constructor(){
        this.conf=new Configstore(pkg.name);
    }
    SetKey(key){
        this.conf.set('apiKey',key);
        return key;
    }
    getKey(){
        const key=this.conf.get('apiKey');
        if(!key)
        throw new Error('No api key found');

        return key;
    }
    deleteKey(){
        const key=this.conf.getKey('apiKey');
        if(!key)
        throw new Error('No api key found');
this.conf.delete('apiKey')
        return ;
    }

}
module.exports=KeyManager;