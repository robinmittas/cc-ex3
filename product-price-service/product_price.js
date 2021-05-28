module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductPrice', productPrice);




    //To DO: add the pattern functions and describe the logic inside the function

    function productPrice(msg, respond){
        for(var json_obj in mockData) {
           // console.log(msg.productId, mockData[json_obj].product_id)
            if (msg.productId == mockData[json_obj].product_id) {
                var res = mockData[json_obj].product_price;
                console.log(res)
                respond(null, { result: res });
                break;
            }
            else {continue}
        }
    }

}