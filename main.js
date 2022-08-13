import { serve } from "https://deno.land/x/sift@0.5.0/mod.ts";

serve({
  "/": handledata,

});

const handledata = async()=>{
  new Response("tolol")
}
