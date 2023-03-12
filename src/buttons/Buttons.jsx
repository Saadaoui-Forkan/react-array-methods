import React from 'react'

function Buttons({handleAdd, doubleMoney, showMillionaires, calculateWealth, sortByRichest}) {
  return (
    <div className='btns-container'>
        <aside>
            <button className="aside-btn add-user" type="button" onClick={handleAdd}>Add User 👱‍♂️</button>
            <button className="aside-btn double" type="button" onClick={doubleMoney}>Double Money 💰</button>
            <button className="aside-btn show-millionaires" type="button" onClick={showMillionaires}>Show Only Millionaires 💵</button>
            <button className="aside-btn sort" type="button" onClick={sortByRichest}>Sort by Richest ↓</button>
            <button className="aside-btn calculate-wealth" type="button" onClick={calculateWealth}>Calculate entire Wealth 🧮</button>
        </aside>

    </div>
  )
}

export default Buttons
