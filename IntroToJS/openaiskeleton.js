/* 
Things to note 
1. Need to npm init -y
2. Need to npm install openai
3. Need to set up OpenAPI AI key in .env file (Need to npm install dotenv)

*/

import OpenAI from "openai";
import "dotenv/config";


const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
})

const response = await client.responses.create({
  model: "gpt-5.2",
  input: "What is 1+1?",
});

console.log(response.output_text);