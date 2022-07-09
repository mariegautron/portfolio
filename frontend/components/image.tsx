import NextImage from "next/image"
import { FC } from "react"
import { getStrapiMedia } from "../utils/getStrapiMedia"

interface ImageProps {
  image: any
  style?: any
}

const Image: FC<ImageProps> = ({ image, style }) => {
  const { url, alternativeText, width, height } = image.data.attributes

  // const loader = () => {
  //   return getStrapiMedia(image)
  // }

  return (
    <NextImage
      // loader={loader}
      layout="responsive"
      width={width || "100%"}
      height={height || "100%"}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  )
}

export default Image
