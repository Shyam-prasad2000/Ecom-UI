const generalService = require("../services/generalService");
module.exports=function(app){
    app.get('/general/getProductList',(request, response)=>{
        try {
            generalService.getProductList().then(res=>{
                response.json(res)
               }) 
        } catch (error) {
            throw(error);
        }

     });

     app.post("/general/addProduct",  (request, response) => {
     
            generalService.addProduct(request).then(res=>{
                response.json(res)
               })
    });
    
    app.post("/general/addNewUser",  (request, response) => {
     
        generalService.addNewUser(request).then(res=>{
            response.json(res)
           })
});
app.post("/general/getAuth",  (request, response) => {
     
    generalService.getAuth(request).then(res=>{
        response.json(res)
       })
});
}