import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
   base: '/linkrootshomepage/',
    define: {
      // process.env.API_KEY をコード内で使えるように置換設定
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})
