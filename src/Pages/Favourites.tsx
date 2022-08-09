import React from 'react'
import ColorCard from '../Components/ColorCard'
import ColorFolder from '../Components/ColorCard'
import DashboardLayout from '../Layout/Dashboard/DashboardLayout'

const Favourite = () => {
  return (
    <DashboardLayout title='Favourites' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto.
    '> 
    <ColorCard />
    </DashboardLayout>
  )
}

export default Favourite