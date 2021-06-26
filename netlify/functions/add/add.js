// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const wr = require('wordref');

const MongoClient = require("mongodb").MongoClient;
const mongoUrl =
  "mongodb+srv://wordreference:UKrRo76ap5acsurW@cluster0-dcyel.mongodb.net/mydb?retryWrites=true&w=majority";
const COLLECTION = "words";

const handler = async (event) => {
  try {
    let client = await MongoClient.connect(mongoUrl, {
      useUnifiedTopology: true,
    });

    const db = client.db("mydb").collection(COLLECTION);

    const word = event.queryStringParameters.word;

    const result = await wr(word, "en", "it");
    db.insertOne(result, function (err, response) {
      if (err) {
        if (err.name === "MongoError" && err.code === 11000) {
          console.log("word alredy stored");
        } else {
          throw err;
        }
      }

    });

    return {
      statusCode: 200,
      body: JSON.stringify(result),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
