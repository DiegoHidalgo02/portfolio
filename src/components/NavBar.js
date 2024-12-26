import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeTabActive } from '../redux/action';

export const NavBar = (activeTab) => {
    alert()
    const [listNav] = useState(['home', 'skills', 'projects'])
  return (
    <header>
        <div className='Logo'>
            <img src="/logo.png" alt="" />
        </div>
        <nav>
            {
                listNav.map((value, key) => {
                    return <span className='active' key={key}>{value}</span>
                })
            }
        </nav>
    </header>
  )
}

const mapStateToProps = (state) => ({
    activeTab: state.activeTab
})

export default connect(mapStateToProps, {changeTabActive})(NavBar)

