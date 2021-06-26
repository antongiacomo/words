// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const wr = require("wordreference-api");
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


    var myquery = { word: event.queryStringParameters.word };
    await db.deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");

    });


    return {
      statusCode: 204,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
