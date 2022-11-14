
//  env
// warning! use .env for AWS access information
require('dotenv').config()

// AWS 
var AWS = require('aws-sdk');
var AWS = require('aws-sdk/global');

 let S3 = new AWS.S3({
   region: process.env['REGION'],
   accessKeyId: process.env['AWS_ACCESS_KEY'],
   secretAccessKey: process.env['AWS_SECRET_KEY']
 });

module.exports = new class main_app {
  constructor() {
    // 
    console.log('application1 is running')
    this.create_bucket()
  }

  // S3 functions -------

  // create_bucket
  create_bucket(){
    S3.createBucket(
      {
        Bucket: 'poc-create-buckets'
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


  // object--------------------------------
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

  del_object() {
    // 
  }
}