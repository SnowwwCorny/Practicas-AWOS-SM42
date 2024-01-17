import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import CondicionAtmosferica from "../Pages/CondicionAtmosferica";
import Login from '../components/Login'
import Login2 from '../components/Login2'
import CocteleRandom from '../Pages/CocteleRandom'
import Examen from "../Pages/Examen";
import Api from "../Pages/Api"
import Tours from "../components/Tours";
import Nasa from '../Pages/Nasa'
import Componente from "../components/Componente";

export const rutas = createBrowserRouter([
    {
      path: "/",
      element: <Api/>
    },
    {
      path: "/CondicionAtmosferica",
      element: <CondicionAtmosferica />,
    },
    {
      path: "/Login",
      element: <Login />
    },
    {
      path: "/Login2",
      element: <Login2 />
    },
    {
      path: "/CocteleRandom",
      element: <CocteleRandom />
    },
    {
      path: "/Examen",
      element: <Examen />
    },
    {
      path: "/Tours/:id",
      element: <Tours />
    },
    {
      path: "/Nasa",
      element: <Nasa />
    },
    {
      path: "/Componente",
      element: <Componente/>
    }

]);
