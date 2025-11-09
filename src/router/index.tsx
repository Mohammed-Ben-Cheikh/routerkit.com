import { createRouter } from "router-kit";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Docs from "../pages/Docs";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const router = createRouter([
  {
    path: ["/", "/home"],
    component: <Home />,
  },
  {
    path: "/docs",
    component: <Docs />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/contact",
    component: <Contact />,
  },
  {
    path: "/404",
    component: <NotFound />,
  },
]);

export default router;
