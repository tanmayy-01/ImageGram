import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT
export const DB_URL = process.env.DB_URL
export const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
export const NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
