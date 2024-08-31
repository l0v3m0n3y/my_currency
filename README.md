# my_currency
JavaScript library for my-currency.io
# main
```js
async function main(){
    const {my_currency} = require('./my_currency');
    const currency= new my_currency();
    let req=await currency.currency_list()
    console.log(req)
}
main()
```
