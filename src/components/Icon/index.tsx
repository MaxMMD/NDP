import React from "react"
import cx from "classnames"

export interface IconProps {
  className?: string
  fill?: string
  width?: number
}

export function Base({
  name,
  className,
  children,
  width = 16,
  viewbox = "0 0 16 16",
}: IconProps & { children: React.ReactNode; name: string; viewbox?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox={viewbox}
      className={cx("Icon", name, "fill-current", className)}
    >
      {children}
    </svg>
  )
}

export const Chevron = (props: IconProps) => (
  <Base name="ChevronIcon" viewbox="0 0 32 32" {...props}>
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"
    />
  </Base>
)

export const Arrow = (props: IconProps) => (
  <Base name="ArrowIcon" {...props}>
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M14.4 8.401c-.006.143-.064.308-.163.413l-3.2 3.4c-.216.195-.632.275-.874.05-.24-.222-.232-.653.006-.875L12.419 9H2.2c-.331 0-.6-.269-.6-.6 0-.331.269-.6.6-.6h10.219l-2.25-2.388c-.205-.205-.243-.65-.006-.875.236-.224.667-.152.874.05l3.2 3.4c.11.117.163.253.163.413z"
    />
  </Base>
)

export const Close = (props: IconProps) => (
  <Base name="CloseIcon" {...props}>
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M12.188 3l.812.812L8.812 8 13 12.188l-.812.812L8 8.812 3.812 13 3 12.188 7.187 8 3 3.812 3.812 3 8 7.188 12.188 3z"
    />
  </Base>
)

export const Search = (props: IconProps) => (
  <Base name="SearchIcon" viewbox="0 0 20 20" {...props}>
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M11.236 0C8.895 0 6.694.912 5.039 2.567 3.383 4.222 2.472 6.423 2.472 8.764c0 2.118.748 4.119 2.115 5.707L.195 18.862c-.26.26-.26.682 0 .943.13.13.301.195.472.195.17 0 .34-.065.471-.195l4.391-4.392c1.588 1.367 3.59 2.115 5.707 2.115 2.34 0 4.541-.911 6.197-2.567C19.088 13.306 20 11.105 20 8.764c0-2.34-.912-4.542-2.567-6.197C15.778.91 13.577 0 11.236 0zm5.254 14.019c-1.403 1.403-3.27 2.176-5.254 2.176-1.985 0-3.851-.773-5.255-2.176-1.403-1.404-2.176-3.27-2.176-5.255 0-1.985.773-3.85 2.176-5.254 1.404-1.404 3.27-2.177 5.255-2.177 1.985 0 3.85.773 5.254 2.177 1.404 1.403 2.177 3.27 2.177 5.254 0 1.985-.773 3.851-2.177 5.255z"
    />
  </Base>
)

export const Quotes = (props: IconProps) => (
  <Base name="SearchIcon" viewbox="0 0 30 30" {...props}>
    <path
      fill={props.fill}
      d="M10.7,15.54v8.65H2.05V16.67a22.74,22.74,0,0,1,.6-5.94A6.25,6.25,0,0,1,5.18,7.26,10.11,10.11,0,0,1,10.7,5.81V9.46q-4.21.63-4.22,5.24v.84Zm17.4,0v8.65H19.46V16.67A23.34,23.34,0,0,1,20,10.73a6.13,6.13,0,0,1,2.54-3.47A10.22,10.22,0,0,1,28.1,5.81V9.46q-4.22.63-4.21,5.24,0,.29,0,.84Z"
    />
  </Base>
)

export const ExternalLink = (props: IconProps) => (
  <Base name="ExternalLink" viewbox="0 0 16 16" {...props}>
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M13.056 13.222H2.944V2.528H8V1H2.944C2.143 1 1.5 1.688 1.5 2.528v10.694c0 .84.643 1.528 1.444 1.528h10.112c.794 0 1.444-.688 1.444-1.528V7.875h-1.444v5.347zM9.444 1v1.528h2.593l-7.1 7.509 1.02 1.077 7.099-7.51v2.743H14.5V1H9.444z"
    />
  </Base>
)

export const Facebook = (props: IconProps) => (
  <Base name="FacebookIcon" viewbox="0 0 167.657 167.657" {...props}>
    <path
      fill={props.fill}
      d="M83.829,0.349C37.532,0.349,0,37.881,0,84.178c0,41.523,30.222,75.911,69.848,82.57v-65.081H49.626
		v-23.42h20.222V60.978c0-20.037,12.238-30.956,30.115-30.956c8.562,0,15.92,0.638,18.056,0.919v20.944l-12.399,0.006
		c-9.72,0-11.594,4.618-11.594,11.397v14.947h23.193l-3.025,23.42H94.026v65.653c41.476-5.048,73.631-40.312,73.631-83.154
		C167.657,37.881,130.125,0.349,83.829,0.349z"
    />
  </Base>
)

export const Twitter = (props: IconProps) => (
  <Base name="TwitterIcon" viewbox="0 0 18.75 15" {...props}>
    <path
      fill={props.fill}
      id="Path_282"
      data-name="Path 282"
      d="M18.75,1.78a8,8,0,0,1-2.21.6A3.82,3.82,0,0,0,18.23.28a7.83,7.83,0,0,1-2.44.92A3.83,3.83,0,0,0,13,0,3.79,3.79,0,0,0,9.14,3.73a3.56,3.56,0,0,0,.1.92,11,11,0,0,1-7.93-4,3.72,3.72,0,0,0-.52,1.9A3.76,3.76,0,0,0,2.5,5.74,4,4,0,0,1,.75,5.27v0A3.65,3.65,0,0,0,1,6.69,3.84,3.84,0,0,0,3.84,9a3.83,3.83,0,0,1-1,.13,3.54,3.54,0,0,1-.73-.07,3.85,3.85,0,0,0,3.6,2.63A7.73,7.73,0,0,1,.92,13.34,7,7,0,0,1,0,13.29,11.09,11.09,0,0,0,5.9,15,10.7,10.7,0,0,0,16.58,6.5a10.3,10.3,0,0,0,.27-2.28c0-.17,0-.33,0-.49A7.86,7.86,0,0,0,18.75,1.78Z"
      transform="translate(0 0)"
    />
  </Base>
)

export const Instagram = (props: IconProps) => (
  <Base name="InstagramIcon" viewbox="0 0 30 30" {...props}>
    <path
      fill={props.fill}
      d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"
    />
  </Base>
)

export const LinkedIn = (props: IconProps) => (
  <Base name="LinkedInIcon" viewbox="0 0 15 15" {...props}>
    <g id="Component_7_1" data-name="Component 7 1">
      <path
        id="Path_279"
        data-name="Path 279"
        d="M0,7.74V15H3.46V5.12H0Z"
        fill={props.fill}
      />
      <path
        id="Path_280"
        data-name="Path 280"
        d="M1.73,0A1.73,1.73,0,1,0,3.46,1.73,1.73,1.73,0,0,0,1.73,0Z"
        fill={props.fill}
      />
      <path
        id="Path_281"
        data-name="Path 281"
        d="M14.93,8.15c-.24-1.86-1.09-3-3.61-3A3.1,3.1,0,0,0,8.41,6.45h0V5.12H5.61V15H8.49V10.1c0-1.29.25-2.54,1.84-2.54S12,9,12,10.18V15h3V9.57h0A13.37,13.37,0,0,0,14.93,8.15Z"
        fill={props.fill}
      />
    </g>
  </Base>
)

export const Play = (props: IconProps) => (
  <Base name="Play" viewbox="0 0 20 16" {...props}>
    <g id="surface1">
      <path
        stroke={props.fill}
        strokeWidth="1"
        fill="transparent"
        fillRule="evenodd"
        d="M 0 0.125 L 17.03125 9 L 0 17.875 Z M 0 0.125 "
      />
    </g>
  </Base>
)

export default {
  Arrow: Arrow,
  Chevron: Chevron,
  Close: Close,
  Search: Search,
  Quotes: Quotes,
  Facebook: Facebook,
  Twitter: Twitter,
  LinkedIn: LinkedIn,
  Instagram: Instagram,
  ExternalLink: ExternalLink,
  Play: Play,
}
