import './App.css';
import MainLayout from './Layouts/Components/main.layout';
import Album from './Layouts/Albums/main.album';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <MainLayout>
        <Router>
          <Routes>
            <Route path="/" element={<h1 className="text-center mt-4">HOMPAGE</h1>}/>
            <Route path="/albums" element={<Album title="Image API" description="Images description"/>}/>
            <Route path="/posts" element={<h1 className="text-center mt-4">POSTING</h1>}/>
            <Route path="*" element={<h1 className="text-center text-danger mt-4">404 Not Found</h1>}/>
          </Routes>
        </Router>
      </MainLayout>
      
    </>
  )
}

export default App;






























// const App = () => {
//     const [getLimit, setLimit] = useState(1)
//     const [getMyName, setMyname] = useState('Khairul Ahyar')
//     const inputNameRef = useRef(getMyName)
  
  
//     useEffect(() => {
//       setMyname(inputNameRef.current.value)
//     }, [getLimit])
  
//     return (
//       <>
//         <center>
//           {getMyName}
//           {getLimit}
//           <br />
//           <input ref={inputNameRef} defaultValue={inputNameRef.current}/>
//           <button onClick={() => setLimit((prev) => prev + 1)}>naikan limit</button>
//           <button onClick={() => setLimit((prev) => prev - 1)}>turunkan limit</button>
//         </center>
//         <Testing title="Hello Bang" description="apaan sih cuy"/>
//       </>
//     )
//   }