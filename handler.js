"use strict"

const AWS = require("aws-sdk")
const SES = new AWS.SES()

function sendEmail(formData, cb) {
  // Build the SES parameters
  const emailParams = {
    Source: "matt.taylr22@gmail.com",
    ReplyToAddresses: [formData.email],
    Destination: {
      ToAddresses: ["matt.taylr22@gmail.com"],
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `${formData.message}\n\nName: ${formData.name}\nEmail: ${formData.email}`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "New message!",
      },
    },
  }
  // Send the email
  SES.sendEmail(emailParams, cb)
}

module.exports.mailer = (event, context, callback) => {
  const formData = JSON.parse(event.body)

  sendEmail(formData, (err, data) => {
    const response = {
      statusCode: err ? 500 : 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message: err ? err.message : data,
      }),
    }

    // return response
    callback(null, response)
  })

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
