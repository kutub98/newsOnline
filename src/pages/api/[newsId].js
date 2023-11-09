// [newsId].js

import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://NewsPortal:PY0hnIQcl865DzUV@cluster0.7mwsjuk.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function SingleNews(req, res) {
  try {
    await client.connect();
    const NewsCollection = client.db("NewsPortal").collection("news");

    if (req.method === "GET") {
      const { id } = req.query; // Destructure newsId correctly
      const SingleNews = await NewsCollection.findOne({ _id: id }); // Create a query object

      if (SingleNews) {
        res.status(200).json({
          message: "success",
          statusCode: 200,
          data: SingleNews, // Send the SingleNews data
        });
      } else {
        res.status(404).json({
          message: "News not found",
          statusCode: 404,
        });
      }
    } else {
      res.status(405).json({ message: "Method Not Allowed", statusCode: 405 });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error", statusCode: 500 });
  } finally {
    await client.close();
  }
}

export default SingleNews;
