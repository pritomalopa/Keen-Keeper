import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
// Note: On vercel, add a vercel.json file with rewrites for React Router to work properly on refresh.