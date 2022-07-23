import  {Link} from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'>
      <div className='custom_logo text-2xl font-[300]'>
        <span className="">Fetiino</span>
    </div>
    </Link>
  )
}

export default Logo