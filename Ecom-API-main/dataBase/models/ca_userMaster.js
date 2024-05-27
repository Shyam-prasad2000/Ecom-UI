const mongoose = require("mongoose");

const ca_userMasterSchema = new mongoose.Schema({
    userId:{
        type:String,
        require:true

    },
    passWord: {
    type: String,
    require:true
  },
  createdOn:{
    type:Date
  }
});

const ca_userMaster = mongoose.model("ca_userMaster", ca_userMasterSchema);

module.exports = ca_userMaster;