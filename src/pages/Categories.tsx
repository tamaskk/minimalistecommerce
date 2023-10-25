import React from 'react'
import CategoriesHeader from '../components/CategoriesHeader'
import { Outlet } from 'react-router-dom'

const Categories = () => {
  return (
    <>
    <CategoriesHeader />
    <Outlet />
    </>
  )
}

export default Categories