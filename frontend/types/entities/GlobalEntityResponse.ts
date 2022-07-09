import { ComponentSharedLayout } from "../components/ComponentSharedLayout"
import { ComponentSharedSeo } from "../components/ComponentSharedSeo"
import { UploadFileEntityResponse } from "./UploadFileEntityResponse"

export interface Global {
  siteName: string
  defaultSeo: ComponentSharedSeo
  favicon: UploadFileEntityResponse
  layout: ComponentSharedLayout
}

interface GlobalEntity {
  attributes: Global
}

export interface GlobalEntityResponse {
  data: GlobalEntity
}
