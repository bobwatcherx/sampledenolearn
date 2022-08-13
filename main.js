import {
   serve,
   json,
   validateRequest
 } from "https://deno.land/x/sift@0.5.0/mod.ts";
 const quotes = [
  {
    CanvasCaptureMediaStreamTrack: "Those who can imagine anything, can create the impossible.",
    c: "cccc Turing",
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
  "/": (request, connInfo, params)=>{
    return new Response(JSON.stringify(request));
  },  

});

