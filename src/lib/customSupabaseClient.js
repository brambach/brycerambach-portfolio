import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ugzmkogjdxszuqniadbb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnem1rb2dqZHhzenVxbmlhZGJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2NjYzMTYsImV4cCI6MjA4MTI0MjMxNn0.eyO7I7xrR_X8GbCAN0hDPPqn4PpPkz1IqWeP86zwryU';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
