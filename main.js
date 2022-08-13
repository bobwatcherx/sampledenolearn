import { serve } from "https://deno.land/x/sift@0.5.0/mod.ts";

async function handledata(){
  return new Response("tolol")

}
serve({
  "/":()=> handledata,

});

