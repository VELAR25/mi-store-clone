import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProducts from "./components/StarProducts";
import HotAss from "./components/HotAss";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavOptions from "./components/NavOptions";

import data from "./data/data.json";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
        audio={data.audio}
        accessories={data.accessories}
      />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="Star Products" />
      <StarProducts starProduct={data.starProduct} />
      <Heading text="Hot Accessories" />
      <HotAss />

      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        ></Route>

        <Route
          exact
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        ></Route>

        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        ></Route>

        <Route
          exact
          path="/lifeStyle"
          element={
            <HotAccessories
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        ></Route>

        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              lifeStyle={data.hotAccessories.mobileAccessories}
              lifeStyleCover={data.hotAccessoriesCover.mobileAccessories}
            />
          }
        ></Route>
      </Routes>
      <Heading text="Product Reviews" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="Videos" />
      <Videos videos={data.videos} />
      <Heading text="In the Press" />
      <Banner banner={data.banner} />

      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
