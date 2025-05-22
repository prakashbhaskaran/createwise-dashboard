import NavLayout from "@/layouts/NavLayout";
import CreateArticle from "@/pages/CreateArticle";
import GeneratedArticles from "@/pages/GeneratedArticles";
const BasicRoutes = {
  path: "/",
  element: <NavLayout />,
  children: [
    { path: "/", Component: GeneratedArticles },
    { path: "/create-articles", Component: CreateArticle },
  ],
};

export default BasicRoutes;
