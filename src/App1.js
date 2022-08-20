// 1
// function testing() {
//   return <p>Paragraph</p>
// }
// 2
// function App() {
//   return (
//     <React.Fragment>
//       <h1>TESTING</h1>
//       <h2>HEADING 2</h2>
//     </React.Fragment>
//   );
// }

// 3
// class App extends React.Component {

  // componentWillUnmount(){
  //   console.log('will mount...')
  // }


  // 3
  // componentDidMount(){
  //   console.log('did mount...')
  // }

  // render() {
  //   return(
  //     <h1>testingku</h1>
  //   )
  // }

// }

import Testing from './testing';
import './App.css';
import React, { useEffect, useState, useRef} from 'react';

const App = () => {
  const [getLimit, setLimit] = useState(1)
  const [getMyName, setMyname] = useState('Khairul Ahyar')
  const inputNameRef = useRef()


  useEffect(() => {
    setMyname(inputNameRef.current.value)
    console.log(inputNameRef.current)
  }, [getLimit])

  return (
    <>
      <center>
        {getMyName}
        {getLimit}
        <br />
        <input ref={inputNameRef}/>
        <button onClick={() => setLimit((prev) => prev + 1)}>naikan limit</button>
        <button onClick={() => setLimit((prev) => prev - 1)}>turunkan limit</button>
      </center>
      <Testing />
    </>
  )
}

export default App;
