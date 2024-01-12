import React from 'react'
import Nav from '../Components/nav/nav';
import { Outlet } from 'react-router';

const index = () => {
  return (
    <>
        <Nav/>
        <Outlet/>
    </>
  )
}

export default index;