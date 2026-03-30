import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  image: String,
  specs: {
    display: String,
    processor: String,
    ram: String,
    storage: String,
    camera: String,
    battery: String
  }
});

export default mongoose.models.Phone || mongoose.model("Phone", phoneSchema);