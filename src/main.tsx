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
import {KindeProvider} from "@kinde-oss/kinde-auth-react";


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
    <KindeProvider
      clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
      domain={import.meta.env.VITE_KINDE_DOMAIN}
      logoutUri={import.meta.env.VITE_KINDE_LOGOUT_URL}
      redirectUri={import.meta.env.VITE_KINDE_REDIRECT_URL}
      isDangerouslyUseLocalStorage={import.meta.env.DEV}
    >
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
    </KindeProvider>
  </React.StrictMode>,
)
