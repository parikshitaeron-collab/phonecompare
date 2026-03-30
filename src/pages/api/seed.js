import { connectDB } from "@/lib/db";
import Phone from "../../models/Phone";
export default async function handler(req, res) {
  await connectDB();

  await Phone.deleteMany();

  await Phone.insertMany([
    {
      name: "iPhone 15",
      brand: "Apple",
      price: 79999,
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg",
      specs: {
        display: "6.1 OLED",
        processor: "A16 Bionic",
        ram: "6GB",
        storage: "128GB",
        camera: "48MP",
        battery: "3349mAh"
      }
    },
    {
      name: "Samsung S23",
      brand: "Samsung",
      price: 74999,
      image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23.jpg",
      specs: {
        display: "6.1 AMOLED",
        processor: "Snapdragon 8 Gen 2",
        ram: "8GB",
        storage: "128GB",
        camera: "50MP",
        battery: "3900mAh"
      }
    }
  ]);

  res.status(200).json({ message: "Data inserted 🚀" });
}