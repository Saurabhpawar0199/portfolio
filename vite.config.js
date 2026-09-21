import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy to GitHub Pages under a repo path, add: base: "/your-repo-name/"
export default defineConfig({
  plugins: [react()],
});
