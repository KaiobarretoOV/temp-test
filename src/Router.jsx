
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./Pages/Contato/Contato";
import Tempo from "./Tempo";
import Home from "./Pages/Home/Home";
import WindyRadar from "./Pages/Mapa/Mapa";
import Noticias from "./Pages/Noticias/Noticias";



function Rotas(){
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/tempo" element={<Tempo/>}></Route>
                <Route path="/contatos" element={<Contato />}></Route>
                <Route path="/mapa" element={<WindyRadar />}></Route>
                <Route path="/noticias" element={<Noticias />}></Route>
            </Routes>
        </BrowserRouter>

    )
}
export default Rotas