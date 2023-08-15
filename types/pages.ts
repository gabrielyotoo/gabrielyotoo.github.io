export interface NextJsLayout {
  children: React.ReactNode;
  [parallelRoutes: string]: React.ReactNode;
}
