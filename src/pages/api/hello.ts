// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createSocial } from "@/fetch";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const t = await createSocial(req.body);
    res.status(200).json({ ...t });
  } catch (err) {
    res.status(500).json({ err: err });
  }
}
