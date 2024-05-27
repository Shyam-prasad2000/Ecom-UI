const ca_userMaster = require("../dataBase/models/ca_userMaster");
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const { insertIntoProductMaster, getProductionMaster } = require("../dataBase/repository/ec_productMasterRepository");
async function getProductList(request, response = []) {
    try {
        response = await getProductionMaster();

    } catch (err) {
        throw (err)
    }
    return response
}

async function addProduct(request, response = {}) {
    try {
        let reqData = {
            productId: request.body.productId,
            productName: request.body.productName,
            createdOn: new Date()
        }
        response = await insertIntoProductMaster(reqData)
        console.log(request.body);
        response.message = "Sucessfully Added..!"
    } catch (err) {
        throw (err)
    }
    return response
}
async function addNewUser(request, response = {}) {
    try {
        await bcrypt.hash(request.body.passWord, 10).then(async (hash) => {
            let reqData = {
                userId: request.body.userId,
                passWord: hash,
                createdOn: new Date()
            }
            response = await ca_userMaster.create(reqData)
        });
        console.log(request.body);
        response.message = "Sucessfully Added..!"
    } catch (err) {
        throw (err)
    }
    return response
}
async function getAuth(request, response = {}) {
    try {
        let user = await ca_userMaster.findOne({
            userId: request.body.userId
        })
        if (user) {
            // comparing given password with hashed password
            await bcrypt.compare(request.body.passWord, user.passWord).then(function (result) {
                console.log(request.body);
                if (result) {
                    let tokenObj = {
                        userId: user.userId
                    }
                    let maxAge = 60000
                    let jwtSecret = "shyam"
                    const token = jwt.sign(
                        tokenObj,
                        jwtSecret,
                        {
                            expiresIn: maxAge, // 3hrs in sec
                        }
                    );
                    console.log(result);
                    response.message = "login successful..!"
                    response.token = token
                }
            })
        }
    } catch (err) {
        throw (err)
    }
    return response
}
module.exports = {
    getProductList: getProductList,
    addProduct: addProduct,
    addNewUser: addNewUser,
    getAuth: getAuth
}