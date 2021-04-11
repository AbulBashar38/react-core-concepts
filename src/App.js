import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const friendsName = ['bashar', 'rakib', 'tanvir', 'choyon'];

  const products = [
    { name: 'batabi lebo', price: '$60' },
    { name: 'anaros', price: '$80' },
    { name: 'kola', price: '$30' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <ShowUsers></ShowUsers>
        <Counter></Counter>
        <ul>
          {friendsName.map(friend => <li>{friend}</li>)}
        </ul>
        {products.map(productInfo => <Product productShow={productInfo}></Product>)}

      </header>
    </div>
  );
}
function ShowUsers() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      })
  })
  return (
    <div>
      <ul>
        {users.map(user=><li>{user.name}</li>)}
      </ul>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  )
}
function Product(props) {
  const productStyle = {
    border: '2px solid gray',
    borderRadius: '8px',
    margin: '5px',
    flex: 'left',
    backgroundColor: 'lightGray',
    color: 'black'
  }
  return (
    <div style={productStyle}>
      <h1>{props.productShow.name}</h1>
      <h3>{props.productShow.price}</h3>
      <button>buy now</button>
    </div>
  )
}

export default App;
