import React,{} from 'react'

function Main({data,formatMoney}) {
  
  return (
    <div className="main">
        <h2><strong>Person</strong> Wealth</h2>
        {
          data.map((user,index) => (
            <div  key={index}>
              <h4 className='person'>
                <strong>{user.user}</strong> 
                {formatMoney(user.money)}
              </h4>
            </div>
          ))
        }
    </div>
  )
}

export default Main
