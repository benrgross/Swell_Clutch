import axios from "axios";
import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const { spot } = req.body;
  if (req.method === "POST") {
    try {
      const session = await prisma.session.create({});
      console.log(session);
      res.status(200).send(session);
    } catch (err) {
      console.log(err);
    }
  }
}
