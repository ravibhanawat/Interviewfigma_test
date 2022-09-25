import { Drawer, List, Menu, MenuProps } from 'antd';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { isEmptyObject } from '../const/const';
import { Rcontext } from './DefaultLayout';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const {login,getData} = useContext(Rcontext)
  const navigate = useNavigate()
  const [current, setCurrent] = useState('');
  const openMenu = () => {

    setIsOpen(true)
  };

  const closeMenu = () => {
    setIsOpen(false)
  };
  const items =[
    {
      label: 'Product checkout', key: 'item-makeup' }, 
      {label: 'Category', key: 'item-1',
      
    children: [{ label: 'item 3', key: 'submenu-item-1' }],
    }, 
      { label: 'Logout', key: 'logout' },
    
  ]

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
    switch (e.key) {
      case "item-1":
        
        break;
      case "item-makeup":
        navigate('/products')
        break;
      case "logout":
        getData({})
        closeMenu()
        navigate('/')
        break;
      
    
      default:
        break;
    }
  };
  return (
    <div className='grid-container'>
      <header className='header'>
        <div className="brand">

          React App
        </div>
        {!isEmptyObject(login) &&
        <div className="header-links">
          <button onClick={openMenu}>&#9776;</button>


        </div>}
      </header>
      <Drawer onClose={closeMenu} open={isOpen}>
        <Menu items={items} onClick={onClick}  />

      </Drawer>


    </div>
  )
}

export default Header