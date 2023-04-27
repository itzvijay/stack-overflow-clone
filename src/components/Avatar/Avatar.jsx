import React from 'react'

const Avatar = ({children,backgroundColor,padding,py,px,color,borderRadius,fontSize,textALign,cursor}) => {
  const style = {
    backgroundColor,
    padding:`${py} ${px},
    color:color || "black`,
    borderRadius,
    fontSize,
    textALign:"center",
    cursor: cursor || null
  }
  return (
    <div style={style}>{children}</div>
  )
}

export default Avatar