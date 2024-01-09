import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/your_repo_here/' // if you intend to deploy this to github pages, change this to your project repo name
})
