const mongoose = require('mongoose')

const userModel = {
     name : {
        type:String,
        required:true
     },
     email : {
        type : String,
        required : true
     },

     age : {
        type : Number
     }
}