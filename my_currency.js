const crypto = require('node:crypto');
class my_currency{
    constructor(){
        this.api = "https://android.my-currency.io/v1"
        this.headers={"Accept-Encoding":"gzip","Authorization":"8dJql1AQaV7IlRtSDgT5L4SgAoytJlXQ2jLGAxGY","Connection":"Keep-Alive","Content-Type":"application/json","Host":"android.my-currency.io","User-Agent":"okhttp/5.0.0-alpha.14"}
        this.token=null
    }
    async currency_list(){
        let req=await fetch(`${this.api}/rates`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {my_currency};