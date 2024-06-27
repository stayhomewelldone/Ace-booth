import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from "openai";
import promptText from './../../utils/prompt';
import { ChatCompletion } from 'openai/resources';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
    
});
 
type ResponseData = {
  result: ChatCompletion.Choice
}

export default async function Retrievehandler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData["result"]>
  ) {
      const { imageLocal, imageRemote} = req.body;
    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: promptText },
              {
                type: "image_url",
                image_url: {
                  "url": imageLocal,
                  
                },
              },
              {
                type: "image_url",
                image_url: {
                  "url": imageRemote,
                  
                },
              }
            ],
          },
        ],
      })
      res.status(200).json(response.choices[0]);
  
  
  }
