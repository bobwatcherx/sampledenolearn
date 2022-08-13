import {
   serve,
   json
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

async function handledata(){
  return json({quotes})

}
serve({
  "/":handledata ,

});

