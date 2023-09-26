
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://pversiyslsjwefrpalkx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2ZXJzaXlzbHNqd2VmcnBhbGt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwODgxOTMsImV4cCI6MjAwOTY2NDE5M30.EZpUGTAbkrK5sN0IxmoCM9rUV9gYSF7Hur7PQk7blJ4')

export default supabase;