import {
   serve,
   json,
   validateRequest
 } from "https://deno.land/x/sift@0.5.0/mod.ts";
 const quotes = [
  {
    quote: "Those who can imagine anything, can create the impossible.",
    author: "Alan Turing",
  },
  {
    quote: "Any sufficiently advanced technology is equivalent to magic.",
    author: "Arthur C. Clarke",
  },
];

async function handledata(request:Request){
  const { error } = await validateRequest(request, {
    GET: {},
    POST:{
      body: ["quote", "author"]
    }
  });
  if (request.method === "POST") {
     const { quote, author } = body as { quote: string; author: string };
  return json("nice123")

        // return json({ quote, author }, { status: 201 });
        // return json({ quote, author }, { status: 201 });
      }
  return json("nice123")

}
serve({
  "/":handledata ,

});

