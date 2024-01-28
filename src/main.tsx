import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from '@/components/theme-provider'
import BlogArticle from './pages/blog/[slug].tsx';
import BlogSide from './pages/blog/BlogSide.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blog/:slug",  // Dynamic route for blog posts
    element: <BlogArticle />,
  },
  {
    path: "/blog",
    element: <BlogSide />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
