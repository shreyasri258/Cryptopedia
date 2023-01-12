const KeyManager = require('../lib/keyManager');
const CryptoAPI=require('../lib/CryptoAPI');


const check={
   async price(cmd){
       try{
keyManager=new KeyManager();
const key =keyManager.getKey();

const api=new CryptoAPI(key);
const priceOutputData=await api.getpriceData(cmd.coin);
console.log(priceOutputData);
       }catch(err){
        console.error(err.message.red
            )
       }
    }
}
module.exports=check;