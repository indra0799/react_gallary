import React from 'react'

const Gallary = ({arr1}) => {

  return (
    <div className='grid'>
        {arr1.map((item,index)=>{
          return (

            <div className='card' key={index}>
            <img src={item.largeImageURL} alt="no images foud" />
            <div className='des'>
              <p className='pes'>likes {item.likes}</p>
              <p className='pes'>comments {item.comments}</p>
              <p className='pes'>viwes {item.views}</p>
              <p className='pes'> downloads {item.downloads}</p>
              
            </div>
          </div>
            )
        })}
    </div>
  )
}

export default Gallary