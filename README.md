
# CryptoPedia

Command line interface written in Node.js to check cryptocurrency prices

Register an API key at https://coinmarketcap.com/

## How to use

npm install

npm link
## Commands

1. Help & Commands

coindex -h

2. Version

coindex -V

3. API Key Commands

coindex key set\
coindex key show\
coindex key remove

4. Crypto Check Commands
coindex check price

5. Check Specific Coins (default: BTN,ETH,XRP)
coindex check --coin=BTC,ETH


## Version

1.0.0
## Acknowledgements

 - [NodeJS](https://nodejs.org/en/docs/)
 - [API Documentation](https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyMap)
 - [Node Package Manager](https://www.npmjs.com/)

## API Reference

#### Get all items

```http
  GET https://pro-api.coinmarketcap.com/v1/exchange/map?CMC_PRO_API_KEY=
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `CMC_PRO_API_KEY` | `string` | **Required**. Your API key |

#### Get item

```http
  GET https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=(Your_api_key)&symbol=BTC
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



## Badges


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shreya-sri-a83a20205/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Shreya_sri25)
[![Github](https://img.shields.io/badge/github-0A66C2?style=for-the-badge&logo=github&logoColor=black)](https://github.com/shreyasri258)



## Tech Stack

NodeJS\
ExpressJS



