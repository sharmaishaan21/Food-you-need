import React, { useState } from "react";
import Planner from "../Planner/Planner";
import "./Content.css";
import Carousel from "react-bootstrap/Carousel";
import Query from "../Modals/Query";

const Content = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="banner">
      <header>
        <Carousel
          className="carousel"
          activeIndex={index}
          onSelect={handleSelect}
        >
          <Carousel.Item className="item">
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/butter-chicken-served-with-homemade-indian-naan-bread-picture-id618457124"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="slide">
                <h2 className="heading">SAMPOORNA BHOJAN</h2>
                <p className="content">
                  Delivering fresh food at your doorstep
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="item">
            <img
              className="d-block w-100"
              src="https://www.blueosa.com/wp-content/uploads/2020/07/Matar-Paneer-Peas-and-Cooked-Cottage-Cheese.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <div className="slide">
                <h2 className="heading">MISSING HOMEMADE FOOD</h2>
                <p className="content">
                  We deliver fresh meals at your doorstep with just few clickson
                  you phone.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="item">
            <img
              className="d-block w-100"
              src="https://www.blueosa.com/wp-content/uploads/2020/07/tomatoe-soup-Indian-Dishes.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className="slide">
                <h2 className="heading">MISSING HOMEMADE FOOD</h2>
                <p className="content">
                  <Query />
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </header>
      <div className="planContainer">
        <Planner count="4" amount="200gram" extra="Salad" price="50Rs" />
        <Planner count="6" amount="500gram" extra="Sweet" price="100Rs" />
        <Planner
          count="8"
          amount="700gram"
          extra="Salad and Sweet"
          price="150Rs"
        />
      </div>
    </div>
  );
};

export default Content;
