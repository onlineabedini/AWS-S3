//  env
// warning! use .env for AWS access information
require('dotenv').config()

// AWS 
const AWS = require('aws-sdk');
 let S3 = new AWS.S3({
   region: process.env.region,
   accessKeyId: process.env.accessKeyId,
   secretAccessKey: process.env.secretAccessKey
 });


module.exports = new class main_app {
  constructor() {
    // 
    console.log('application1 is running')
  }

  // S3 functions -------

  // create_bucket
  create_bucket(){
    S3.createBucket(
      {
        Bucket: 'onl_bucket_create'
      },
      (error, success) => {
        if (error) {
          console.log(error)
        }

        if (success) {
          console.log(success) 
        }
        else {
          console.log('Not working properly')
        }
      }
    )
  }  

  // put object
  put_object() {
    S3.putObject(
      {
        Bucket: '',
        Key: '',
        Body: ''
      },
      (error, success) => {
        if (error) {
          console.log(error)
        }

        if (success) {
          console.log(success) 
        }
        else {
          console.log('Not working properly')
        }
      })
  }
  
}