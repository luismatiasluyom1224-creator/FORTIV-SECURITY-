
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient("SUPABASE_URL", "SUPABASE_ANON_KEY");

document.getElementById("send").onclick = async () => {
  const name = document.getElementById("name").value;
  const gps = document.getElementById("gps").value;
  const time = document.getElementById("time").value;

  const { error } = await supabase.from("marcaciones").insert({ name, gps, time });

  document.getElementById("msg").innerText = error ? "Error" : "Marcado ✔️";
};
