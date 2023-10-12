import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://hgasttezstblwqefdudr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnYXN0dGV6c3RibHdxZWZkdWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY3Nzc2ODMsImV4cCI6MjAxMjM1MzY4M30.bO4wKLuYCZiLIxogg2FOWk6YH2H3a661rLU2S8EgTeo"
);

export default supabase;
