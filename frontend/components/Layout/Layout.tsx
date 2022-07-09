import { FC, ReactElement } from "react"
import SmallCentered from "./Footer"
import Nav from "./Header"
import Seo from "./seo"

interface LayoutProps {
  seo: any
  children: ReactElement | ReactElement[]
}

const Layout: FC<LayoutProps> = ({ seo, children }) => (
  <>
    <Seo seo={seo} />
    <Nav />
    {children}
    <SmallCentered />
  </>
)

export default Layout
