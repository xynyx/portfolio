"use strict"

const AWS = require("aws-sdk")
const SES = new AWS.SES()

function sendEmail(formData, cb) {
  // Build the SES parameters
  // Send the email
}

module.exports.mailer = async (event, context, callback) => {
  const formData = JSON.parse(event.body)

  sendEmail(formData, (err, data) => {
    if (err) {
      console.error(err)
    } else {
      console.log(data)
    }
  })

  callback(null, response)

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
