const axios=require('axios')
const colors=require('colors');

class CryptoAPI{
    constructor(apiKey){
        this.apiKey=apiKey;
        
        this.baseUrl= 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
    }
    async getpriceData(coinoption){
        try{
const res=await axios.get(`${this.baseUrl}?CMC_PRO_API_KEY=${this.apiKey}`)
let output=res.data;
let op=[]
res.data.data.forEach(ele => {
if(coinoption==ele.symbol)
    op.push(ele);
    
});

return op;

}
        catch(err){
console.log(err);
        }
    }
}
module.exports=CryptoAPI;
