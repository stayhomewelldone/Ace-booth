
import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from "openai";
import { Image } from 'openai/resources';
import fs from "fs";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
    
});
 
type ResponseData = {
  result: Image
}


 
export default async function Edithandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    const {image, prompt, n, size} = req.body;
    const result = await openai.images.edit({
        image: fs.createReadStream(image),
        prompt,
        n,
        size
    });
    res.status(200).json({ result: result.data[0]});


}