import React from 'react'

interface IBannerProps {
    title: string
    owner: string
}

const Banner = ({ title, owner }: IBannerProps) => {
  return (
    <div className="flex flex-col w-full h-[936px] bg-banner-hero bg-cover bg-center object-center items-center justify-start">
        <p>{owner}</p>
        <p>{title}</p>
    </div>
  )
}

export default Banner