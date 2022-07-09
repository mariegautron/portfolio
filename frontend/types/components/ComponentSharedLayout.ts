import { UploadFileEntityResponse } from "../entities/UploadFileEntityResponse"
import { ComponentSharedNavItem } from "./ComponentSharedNavItem"

export interface ComponentSharedLayout {
  twitterLink: string
  linkedinLink: string
  rights: string
  logo: UploadFileEntityResponse
  navItems: ComponentSharedNavItem[]
}
