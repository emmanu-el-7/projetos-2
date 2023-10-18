const mongoose = require("mongoose");
const { Schema } = mongoose;

const photoSchema = new Schema(
  {
    image: String, //caminho do arquivo
    title: String,
    likes: Array,
    comments: Array,
    userId: mongoose.ObjectId, //usuário que inseriu a foto (é uma string diferente, padrão mongoose)
    userName: String, //para associar o nome do usuário à foto
  },
  {
    timestamps: true,
  }
);

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
