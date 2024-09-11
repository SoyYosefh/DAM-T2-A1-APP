import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import App from './App.jsx'

// import { MyPromises } from './functions/MyPromises'
// import MyPromisesAll from './functions/MyPromisesAll.jsx';
// import MyPrimesesRace from './functions/MyPrimesesRace.jsx'
// import MyFetchAPIs from './functions/MyFetchAPIs.jsx'
// import MyFetchPost from './functions/MyFetchPost'
// import MyFetchPut from './functions/MyFetchPut'
import MyFetchBlob from './functions/MyFetchBlob'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MyFunctions /> */}
    {/* <MyPromises /> */}
    {/* <MyPromisesAll /> */}
    {/* <MyPrimesesRace /> */}
    {/* <MyFetchAPIs /> */}
    {/* <MyFetchPost /> */}
    {/* <MyFetchPut /> */}
    <MyFetchBlob />
  </StrictMode>
)
