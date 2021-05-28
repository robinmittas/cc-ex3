module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);

    function productURL(msg, respond){
   //     var index = msg.productID - 1
   //     const res = mockData[index]
    //    respond(null, { result: res})
    //    console.log(index)
     //   for(var json_obj in mockData) {
      //      console.log(mockData[json_obj].product_id)
//        }
        for(var json_obj in mockData) {
           // console.log(msg.productId, mockData[json_obj].product_id)
            if (msg.productId == mockData[json_obj].product_id) {
                var res = mockData[json_obj].product_url;
                console.log(res)
                respond(null, { result: res });
                break;
            }
            else {continue}
        }

    }

    function productName(msg, respond){
        //console.log(msg.productId)
        for(var json_obj in mockData) {
           // console.log(msg.productId, mockData[json_obj].product_id)
            if (msg.productId == mockData[json_obj].product_id) {
                var res = mockData[json_obj].product_name;
                console.log(res)
                respond(null, { result: res });
                break;
            }
            else {continue}
        }

   //     for(var json_obj in mockData) {
     //       if msg.productId == mockData[json_obj].product_id {
       //         var res = mockData[json_obj];
         //       respond(null, { result: res });
          //  }
       // }
    }


}

    //To DO: add the pattern functions and describe the logic inside the function

//*  function sayWelcome(msg, respond) {
      //  if(msg.name){
    //        var res = "Welcome "+msg.name;
  //          respond(null, { result: res });
//        }
      //  else {
    //        respond(null, { result: ''});
  //      }
//    }
