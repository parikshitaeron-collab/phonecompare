import { connectDB } from "@/lib/db";
import Phone from "@/models/Phone";

export default async function handler(req, res) {
  await connectDB();

  const phones = await Phone.find();

  res.status(200).json(phones);
}