export const RouterPath = {
  root: {
    path: "/",
  },
  home: {
    path: "/",
    getPath: () => RouterPath.home.path,
  },
  somePage: {
    path: "/awesome/:id",
    getPath: (id: string) => RouterPath.somePage.path.replace(":id", id),
  },
  notFound: {
    path: "*",
  },
};
