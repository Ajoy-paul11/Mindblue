import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import { ToastContainer } from "react-toastify";
import Amruth from "./components/client/Amruth.jsx";
import DigiService from "./components/service/DigitalService.jsx";
import MagazineService from "./components/service/MagazineService.jsx";
import RadioService from "./components/service/RadioService.jsx";
import NewspaperService from "./components/service/NewspaperService.jsx";
import OutdoorService from "./components/service/OutdoorService.jsx";
import TelevisionService from "./components/service/TelevisionService.jsx";
import Airline from "./components/service/Airline.jsx";
import Cinema from "./components/service/Cinema.jsx";
import Influencer from "./components/service/Influencer.jsx";
import NonTraditional from "./components/service/NonTraditional.jsx";
import Hyperlocal from "./components/service/Hyperlocal.jsx";
import Deals from "./components/service/Deals.jsx";
import AboutPage from "./components/AboutPage.jsx";
import Adhventha from "./components/client/Adhventha.jsx";
import Apollo from "./components/client/Apollo.jsx";
import Featherlite from "./components/client/Featherlite.jsx";
import GarudaMall from "./components/client/GarudaMall.jsx";
import Nethradhama from "./components/client/Nethradhama.jsx";
import Narayana from "./components/client/Narayana.jsx";
import Nps from "./components/client/Nps.jsx";
import Raymond from "./components/client/Raymond.jsx";
import Neuberg from "./components/client/Neuberg.jsx";
import Hitachi from "./components/client/Hitachi.jsx";
import Transcend from "./components/client/Transcend.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/digital-service",
        element: <DigiService />
      },
      {
        path: "/magazine-service",
        element: <MagazineService />
      },
      {
        path: "/radio-service",
        element: <RadioService />
      },
      {
        path: "/newspaper-service",
        element: <NewspaperService />
      },
      {
        path: "/television-service",
        element: <TelevisionService />
      },
      {
        path:"/outdoor-service",
        element:<OutdoorService/>
      },
      {
        path: "/airline-service",
        element: <Airline />
      },
      {
        path: "/cinema-service",
        element: <Cinema />
      },
      {
        path: "/influencer-service",
        element: <Influencer />
      },
      {
        path: "/nontraditional-service",
        element: <NonTraditional />
      },
      {
        path: "/hyperlocal-service",
        element: <Hyperlocal />
      },
      {
        path: "/deals-service",
        element: <Deals />
      },
      {
        path: "/portfolio-amruth",
        element: <Amruth />
      },
      {
        path: "/portfolio-adhventha",
        element: <Adhventha />
      },
      {
        path: "/portfolio-apollo",
        element: <Apollo />
      },
      {
        path: "/portfolio-featherlite",
        element: <Featherlite />
      },
      {
        path: "/portfolio-garudamall",
        element: <GarudaMall />
      },
      {
        path: "/portfolio-nethradhama",
        element: <Nethradhama />
      },
      {
        path: "/portfolio-narayana",
        element: <Narayana />
      },
      {
        path: "/portfolio-nps",
        element: <Nps />
      },
      {
        path: "/portfolio-raymond",
        element: <Raymond />
      },
      {
        path: "/portfolio-neuberg",
        element: <Neuberg />
      },
      {
        path: "/portfolio-hitachi",
        element: <Hitachi />
      },
      {
        path: "/portfolio-transcend",
        element: <Transcend />
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ThemeProvider>
  </StrictMode>
);
