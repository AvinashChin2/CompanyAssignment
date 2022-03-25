
import {Component} from 'react'
import TableView from './Components/TableView'
import GridView from './Components/GridView'
import Header from './Components/Header'
import './App.css'

const sortbyOptions = [
  {
    optionId: 'GRIDVIEW',
    displayText: 'Grid View',
  },
  {
    optionId: 'TABLEVIEW',
    displayText: 'Table View',
  },
]

class App extends Component {
  state={
    activeOption:sortbyOptions[0].optionId
  }


  render(){
    const {sortbyOptions,activeOption} = this.props
    return(
      <div className="app-container">
        <GridView/>
      </div>
    )
  }
  
  }

export default App
