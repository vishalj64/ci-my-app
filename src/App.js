import './App.css';
import { useState } from 'react';

function App() {

  // let [fullName, setFullName] = useState('Vishal');

  // let price = useSelector((state) => state.personName)
let [price, setPrice] = useState([])

  function showPrices() {

    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(res => res.json())
    .then(res => {
      let arr = []
      for(let each in res.bpi) {
        arr.push(res.bpi[each])
      }
      setPrice(arr)
    })

  
   

  }
  return (
    <>
      <div className="App">



        <button onClick={showPrices}>Show Prices</button>

        {
          price &&
          <table>
            <thead>
              <tr>
                <th>code</th>
                <th>description</th>
                <th>rate</th>

              </tr>
            </thead>
            <tbody>
              {
                price.map(eachObj =>

                  <tr>

                    <td>{eachObj.code}</td>
                    <td>{eachObj.description}</td>
                    <td>{eachObj.rate_float.toFixed(2)}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        }


      </div>
    </>
  );
}

export default App;
