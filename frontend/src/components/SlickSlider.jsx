import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
// import CssBaseline from '@mui/material/CssBaseline';
import AppBar from "@mui/material/AppBar";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#ccc", borderRadius: 5 }}>
      <div>
        {/* <CssBaseline /> */}
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Features
        </Typography>
        {/* <AppBar sx={{backgroundColor:'#FF9999'}} position="relative">
        <Toolbar>
          <ArrowRightIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Features
          </Typography>
        </Toolbar>
      </AppBar>  */}
      </div>
      <Slider {...settings}>
        <div>
          <h1>EASY TO USE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            sapiente nulla ut ex cum molestias expedita distinctio, dolores
            quisquam at iste repellendus maiores pariatur natus voluptates
            tempore vero. Asperiores, illum?
          </p>
        </div>
        <div>
          <h1>EDITABLE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            sapiente nulla ut ex cum molestias expedita distinctio, dolores
            quisquam at iste repellendus maiores pariatur natus voluptates
            tempore vero. Asperiores, illum?
          </p>
        </div>
        <div>
          <h1>AI GENERATION</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            sapiente nulla ut ex cum molestias expedita distinctio, dolores
            quisquam at iste repellendus maiores pariatur natus voluptates
            tempore vero. Asperiores, illum?
          </p>
        </div>
        <div>
          <h1>CUSTOM GENERATION</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            sapiente nulla ut ex cum molestias expedita distinctio, dolores
            quisquam at iste repellendus maiores pariatur natus voluptates
            tempore vero. Asperiores, illum?
          </p>
        </div>

        {/* <div>
        <h3>Slide 4</h3>
      </div>
      <div>
        <h3>Slide 5</h3>
      </div>
      <div>
        <h3>Slide 6</h3>
      </div> */}
      </Slider>
    </div>
  );
};

export default SlickSlider;
