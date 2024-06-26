import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from "openai";
import { Image } from 'openai/resources';

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
    const { prompt, n, size} = req.body;
    const result = await openai.images.generate({
        model:"dall-e-3",
        prompt,
        n,
        size,
        quality: "hd"
    });
    res.status(200).json({ result: result.data[0]});


}