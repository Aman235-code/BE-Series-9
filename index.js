const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    username: "Aman",
    email: "amanahamed04@gmail.com",
    age: 20,
  });

  res.send(user);
});

app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    postdata: "Hello how are you my god",
    user: "66cc3e8baecae384314bc62b",
  });

  let user = await userModel.findOne({ _id: "66cc3e8baecae384314bc62b" });
  user.posts.push(post._id);
  await user.save();
  res.send({ post, user });
});

app.listen(3000);
