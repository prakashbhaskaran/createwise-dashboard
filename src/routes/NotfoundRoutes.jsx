const NotFoundRoutes = {
  children: [
    {
      path: "*",
      element: <>Not Found</>,
    },
    {
      path: "/404",
      element: <>Not Found</>,
    },
  ],
};

export default NotFoundRoutes;
