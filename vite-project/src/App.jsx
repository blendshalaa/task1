
import ItemList from './components/ItemList'
import './styles/list.css'

function App() {

  const items=[
    {title:'The TLD',subtitle:'Does the domain extension match the language of the domain name',icon:'TLD'},
    {title:'Domain Length',subtitle:'Is the domain short enough to remember',icon:'Ruler'},
   
    {title:'Language',subtitle:'How complex is the actual domain name',icon:'Language'},
    
   
    {title:'International recognition',subtitle:'Can the domain name be us on an international scale',icon:'Recognition'},
    {title:'Search engine',subtitle:'Does the domain follow search engine guidelines',icon:'Search'},
   
    {title:'Advertising Potential',subtitle:'Could the domain be used for advertising campaings',icon:'Advert'},
  
  
    {title:'Sales Opportunities',subtitle:'Can the domain name be used on an internation scale',icon:'Sales'},
    {title:'Typo susceptibility',subtitle:'How high is the risk of mistyping the domain name',icon:'T'},
  
    {title:'Business potential',subtitle:'Can the domain be used as your company adress',icon:'Business'},

  ]


  return (
    <>
    <div className='App'>
      <ItemList items={items}/>
    </div>
    
    </>
  )
}

export default App
