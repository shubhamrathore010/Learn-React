
import './App.css'
import ProductList from './components/products'
import ClassBasedComponent from './components/class-based-componet'
import Users from './components/users';
import ContextButtonComponent from './components/context-concept/button';
import ContextTextButtonComponent from './components/context-concept/text';
import UseReducerExample from './components/use-reducer-example';

const dummyPRoductData = ["Product 1", "Product 2", "Product 3"];


function App() {

  return (
  <div>
    <h1>React JS Here Start</h1>
    {/* <ClassBasedComponent /> */}
 {/* <ProductList ListOfProducts={dummyPRoductData}  name= "Shubham" city="Indore"/> */}

    {/* <Users /> */}
    {/* <ContextButtonComponent />
    <ContextTextButtonComponent /> */}
    <UseReducerExample />

  </div>
  )
}

export default App
