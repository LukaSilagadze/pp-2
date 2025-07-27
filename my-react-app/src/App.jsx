import List from './List.jsx'

function App() {

  const fruits = [
        {id: 1, name: "apple", calories: 96},
        {id: 2, name: "banana", calories: 45},
        {id: 3, name: "pinapple", calories: 105},
        {id: 4, name: "orange", calories: 159},
        {id: 5, name: "cocount", calories: 37},
    ];
    const vegetables = [
        {id: 6, name: "potato", calories: 96},
        {id: 7, name: "tomato", calories: 45},
        {id: 8, name: "cucumber", calories: 105},
        {id: 9, name: "carrot", calories: 159},
        {id: 10, name: "broccoli", calories: 37},
    ];

  return(
    <>
        {fruits.length>0 && <List items = {fruits} category="fruits"/>}
        {vegetables.length>0 && <List items = {vegetables} category = "vegetables"/>}
    </>
  )
}

export default App
