const axios=require('axios')
const colors=require('colors');

class CryptoAPI{
    constructor(apiKey){
        this.apiKey=apiKey;
        this.baseUrl='https://pro-api.coinmarketcap.com/v1/cryptocurrency/map';
    }
    async getpriceData(coinoption){
        try{
const res=await axios.get(`${this.baseUrl}?CMC_PRO_API_KEY=${this.apiKey}&symbol=${coinoption}`)
let output='';
res.data.data.forEach(coin=>{
    output+=`Coin:${coin.symbol.yellow} | (${coin.name.blue}) | Rank:${coin.rank.green}`
}) ;   
//let output=res.data;    

return output;
}
        catch(err){
console.log(err);
        }
    }
}
module.exports=CryptoAPI;
//https://api.coingecko.com/api/v3/simple/price?ids=USD&vs_currencies=ETH%2CBTC%2CXRP&include_market_cap=true
//https://www.coingecko.com/en/api/documentation
//https://coinlayer.com/documentation

//let output=res.data.data;    

//return output;