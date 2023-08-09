import React,{useState} from 'react'
import Menu from './Menu'
import items from './data'
import Categories from './Categories'
const allCategories = ["all",...new Set(items.map((item) =>item.category))]


const App = () => {
  const[menuItem,setMenuItems] = useState(items)
  const[categories,setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return(
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className = 'underline'></div>
          <Categories categories = {categories} filterItems = {filterItems}/>

        </div>

     
    <Menu items={menuItem}/>
    </section>
    
    </main>
  )
}

export default App