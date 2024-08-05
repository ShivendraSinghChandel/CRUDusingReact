import Contact from "./components/Contact";
import Display from "./components/Display";
import EditData from "./components/EditData";
import Home from "./components/Home";
import Insert from "./components/Insert";
import Search from "./components/Search";
import Update from "./components/Update";
import Layout from "./Layout";
import { BrowserRouter,Routes,Route  } from "react-router-dom";

const App=()=>{ 
     
    return(
        <>
           <BrowserRouter>
           <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="home" element={<Home/>}/>
            <Route path="insert" element={<Insert/>}/>
            <Route path="display" element={<Display/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="update" element={<Update/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="myedit/:id" element={<EditData/>}/>

            </Route>
           </Routes>
           </BrowserRouter>
        </>
    )
}

export default App;