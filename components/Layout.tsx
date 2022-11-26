import { FunctionalComponent } from "https://esm.sh/v95/preact@10.11.0/src/index.d.ts";

const Layout: FunctionalComponent = ({ children }) => {
  return (
    <>
      <link rel="stylesheet" href="/layout.css" />
      {children}
    </>
  );
};

export default Layout;
