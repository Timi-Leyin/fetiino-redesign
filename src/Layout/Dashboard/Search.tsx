import {FaSearch as SearchIcon} from 'react-icons/fa'
const Search = () => {
  return (
   <form action="" method="get" className='flex items-center p-3 md:w-[250px] justify-between bg-gray-800 text-xs text-white rounded-2xl'>
       <input type="search" placeholder='Search For Palette' className='hidden md:block mx-1 w-full outline-none bg-transparent' />
       <SearchIcon />
   </form>
  )
}

export default Search