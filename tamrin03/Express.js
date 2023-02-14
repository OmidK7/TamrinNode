const express = require("express");

const { getData, writeData } = require("./Data.js");

const { find, findIndex } = require("./funcs/util.js");

async function run() {
  const app = express();

  let books = await getData();
  app.use(express.json());

  app.get("/", (req, res) => {
    return res.send("<h1>Welcom</h1>");
  });
  app.get("/person", (req, res) => {
    return res.send(JSON.stringify(books));
  });

  app.get("/person/:id", (req, res) => {
    let id = req.params.id;
    const bookFind = find(id, books);
    console.log("in : ", bookFind);
    if (!bookFind) {
      return res.status(404).send("book not find...");
    }
    return res.send(bookFind);
  });
  app.put("/person/:id", (req, res) => {
    const id = req.params.id;
    let indexbook = findIndex(id, books);

    if (!indexbook) {
      return res.status(404).send("book not find 404 ...");
    }
    books[indexbook.id] = {
      id: Number(id),
      ...req.body,
    };
    writeData(books);

    return res.send(books);
  });
  app.post("/person", (req, res) => {
    const id = Math.max(...books.map((item) => item.id)) + 1;
    books[id] = {
      id,
      ...req.body,
    };
    writeData(books);
    res.send(books[id]);
  });
  app.delete("/person/:id", (req, res) => {
    const i = req.params.id;
    const removeBook = find(i, books);
    books = books.filter((item) => item.id !== removeBook.id);
    writeData(books);
  });

  app.listen(3100, () => {
    console.log("start listening on 3100");
  });
}
run();
