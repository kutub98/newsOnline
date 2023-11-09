import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://NewsPortal:PY0hnIQcl865DzUV@cluster0.7mwsjuk.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function News(req, res) {
  try {
    await client.connect();
    const NewsCollection = client.db("NewsPortal").collection("news");

    if (req.method === "GET") {
      const allNews = await NewsCollection.find({}).toArray();
      res.status(200).json({ message: "Success", statusCode: 200, data: allNews });
    } else if (req.method === "POST") {
      const news = req.body;
      const result = await NewsCollection.insertOne(news);
      res.status(201).json({ message: "Success", statusCode: 201, data: result.ops[0] });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error", statusCode: 500 });
  } finally {
    await client.close();
  }
}

export default News;
