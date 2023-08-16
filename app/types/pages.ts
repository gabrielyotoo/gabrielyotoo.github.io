interface NextJsLayoutPages {
  children: React.ReactNode;
  [parallelRoutes: string]: React.ReactNode;
}

export type NextJsLayout = NextJsLayoutPages & {
  params: {
    lng: string;
  };
};

export type NextJsPage = {
  params: {
    lng: string;
  };
};
