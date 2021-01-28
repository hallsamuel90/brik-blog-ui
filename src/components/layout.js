import React from "react"
import theme from "./theme";
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout";
import Nav from "./nav";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <ThemeTopLayout theme={theme}>
        <Nav title={title}></Nav>

        <div className="global-wrapper" data-is-root-path={isRootPath}>
          <main>{children}</main>
        
          <footer>
            © {new Date().getFullYear()} <a href="https://www.bigg-healthy.com"> biggHealthy</a>
          </footer>
        </div>
      </ThemeTopLayout>
    </div>
  )
}

export default Layout