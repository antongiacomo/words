// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const wr = require("wordreference-api");
const MongoClient = require("mongodb").MongoClient;
const mongoUrl =
  "mongodb+srv://wordreference:UKrRo76ap5acsurW@cluster0-dcyel.mongodb.net/mydb?retryWrites=true&w=majority";
const COLLECTION = "words";
const user = "wordreference";

const handler = async (event) => {
  try {
    let client =await  MongoClient.connect(mongoUrl, {
      useUnifiedTopology: true,
    })

      const db = client.db("mydb").collection(COLLECTION);
      const cursor =await db
        .find()
        .toArray()


    return {
      statusCode: 200,
      body: JSON.stringify(cursor)
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
