import { Route, Routes } from "react-router-dom";
import { Menu } from "../Menu/Menu";
import { Fashion } from "../Fashion/Fashion";
import { Header } from "../Header/Header";
import { Home } from "../Home/Home";
import { Food } from "../Food/Food";
import { Travel } from "../Travel/Travel";
import { Study } from "../Study/Study";
import { Location } from "../Loacation/Location";

export function AppRouter(){
    return(
        <>
        <Routes>
            {/* <Route path="/" element={<Menu></Menu>}></Route>  */}
            <Route path="/home" element={<Home></Home>}></Route>  
            <Route path="/fashion" element={<Fashion></Fashion>}></Route>
            <Route path="/header" element={<Header></Header>}></Route>
            <Route path="/food" element={<Food></Food>}></Route>
            <Route path="/travel" element={<Travel></Travel>}></Route>
            <Route path="/study" element={<Study></Study>}></Route>
            <Route path="/location" element={<Location></Location>}></Route>
        </Routes>
        </>
    )
}