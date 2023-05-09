import React from 'react'
import './WorkCardStyles.css'
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            {WorkCardData.map((val,index) => {
                return (<WorkCard
                    key={index}
                    img={val.img}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    src={val.src}
                    />)
            })}
        </div>
    </div>
  )
}

export default Work