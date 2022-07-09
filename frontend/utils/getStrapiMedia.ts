import { UploadFileEntityResponse } from "../types/entities/UploadFileEntityResponse"
import { getStrapiURL } from "./getStrapiUrl"

export function getStrapiMedia(media: UploadFileEntityResponse) {
  const { url } = media.data.attributes
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url
  return imageUrl
}
