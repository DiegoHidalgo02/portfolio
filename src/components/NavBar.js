import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { changeTabActive } from '../redux/action';

export const NavBar = ({activeTab}) => {
    const [listNav] = useState(['home', 'skills', 'projects', 'contacts']);
    const dispatch = useDispatch();
    const changeTab = (value) => {
        dispatch(changeTabActive(value));
    }
  return (
    <header>
        <div className='Logo'>
            <img src="/logo.png" alt="" />
        </div>
        <nav>
            {
                listNav.map((value, key) => (
                    <span className={activeTab === value ? 'active' : '' } 
                    key={key}
                    onClick={() => changeTab(value)}
                    >{value}</span>
                ))
            }
        </nav>
    </header>
  )
}

const mapStateToProps = (state) => ({
    activeTab: state.activeTab
})

export default connect(mapStateToProps, {changeTabActive})(NavBar)

