// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ikiqvjfutmrnrmumtkig.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlraXF2amZ1dG1ybnJtdW10a2lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0NzIyNzcsImV4cCI6MjA1NzA0ODI3N30.3s6xxGGM0omMBpRIRArTsKRjwry_AnBQsINSLXMGsw8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);