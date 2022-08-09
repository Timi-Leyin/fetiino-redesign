import React from 'react'
import ColorCard from '../Components/ColorCard'
import ColorFolder from '../Components/ColorCard'
import DashboardLayout from '../Layout/Dashboard/DashboardLayout'

const Favourite = () => {
  return (
    <DashboardLayout title='Favourites' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto.
    '> 
    <div className="flex flex-wrap gap-8 p-4 justify-center">
    <ColorCard name={'Electric Spenser'} type={'GRADIENT'} />
    <ColorCard name={'Burger Squash'} type={'GRADIENT'} />
    <ColorCard name={'Butterfly Crazy'} type={'GRADIENT'} />
    <ColorCard name={'Blessing Peach'} type={'COLOR'} />
    <ColorCard name={'Fetiino Bloom'} type={'GRADIENT'} />
    <ColorCard name={'Prosperous Melody'} type={'GRADIENT'} />
    </div>
    </DashboardLayout>
  )
}

export default Favourite