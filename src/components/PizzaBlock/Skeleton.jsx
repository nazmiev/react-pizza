import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={470}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="125" r="123" /> 
    <rect x="0" y="280" rx="5" ry="5" width="280" height="25" /> 
    <rect x="0" y="330" rx="5" ry="5" width="280" height="90" /> 
    <rect x="0" y="450" rx="5" ry="5" width="95" height="30" /> 
    <rect x="125" y="440" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton
