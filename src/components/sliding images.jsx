import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ooty1 from '../images/ooty_flower_show_1.jpg'
import ooty2 from '../images/ooty_flower_show_2.jpg'
import ooty4 from '../images/ooty_flower_show_4.jpg'
import kodai1 from '../images/Kodai_tourists1.jpeg'
import yelagiri1 from '../images/Yelagiri_rose.jpg'
import yelagiri2 from '../images/yelagiri_dog.jpg'
import yelagiri3 from '../images/yelagiri_rose_2.jpg'
import yelagiri4 from '../images/spice exhibition_yelagiri.jpg'
import Kotagiri1 from '../images/Kotagiri_fest1.jpg'
import Kotagiri2 from '../images/Kotagiri_fest2.jpg'
import Kotagiri3 from '../images/Kotagiri_fest3.jpg'
import Kotagiri4 from '../images/Kotagiri_fest4.jpg'
import './sliding images.css'

export default function Slide() {
  
        return (
          
          <div className='container'>
            <h1 className='heading'>Events to Experience</h1>
                {/*-------First Place Ooty*/ }
            <div className='first-des'>
            <div className='img_slider'>
            <Carousel className="slides" showThumbs={false} autoPlay interval={2000} infiniteLoop autoFocus={true}>
               
                <div>
                    <img  height={350}  width={600} className="img" src={ooty2} alt="Image 1"/>
                </div>
                <div>
                    <img height={350} width={600} className="img" src={ooty1} alt="Image2"/>
                    
                </div>
                <div>
                    <img  height={350} width={600} className="img" src={ooty4} alt="Image3"/>
                   
                </div>
               
            </Carousel>
            </div>
            <div className='text'>
              <h1>Ooty</h1>
              <h2>Summer Festival - May</h2>
              <p>The world famous Ooty Summer Festival - 2023 is held annually in the Queen of Hills - Ooty during the month of May. The Summer Festival which includes flower show, fruit show, vegetable show, rose show and spice show, attracts a huge number of tourists to Ooty. Different verities of flowers, fruits and vegetables,
                 and several images of animals and birds decorated with flowers are displayed during the Summer Festival to provide a visual treat to the tourists.
                The annual Flower show is organised to showcase the best in garden design, flower sculptures, authentic and modern floral craftsmanship as well as encouraging young local artists through arts and cultures.Held annually for the past 124th years, the 2023 edition will take place at Botanical Garden in the heart of charing cross ooty, during 15th May, from 9 a.m. to 7 p.m.
                </p>
            </div>
            </div> 

            {/* ---------Second Place Yelagiri-------*/}

            <div className='first-des'>
            <div className='img_slider'>
            <Carousel className="slides" showThumbs={false} autoPlay interval={2000} infiniteLoop>
               <div>
                    <img height={350} width={600} className="img" src={yelagiri2} alt="Image2"/>
                    
                </div>
                <div>
                    <img  height={350}  width={600} className="img" src={yelagiri4} alt="Image 1"/>
                </div>
                <div>
                    <img height={350} width={600} className="img" src={yelagiri3} alt="Image2"/>
                    
                </div>
                <div>
                    <img  height={350} width={600} className="img" src={yelagiri1} alt="Image3"/>
                   
                </div>
               
            </Carousel>
            </div>
            <div className='text'>
              <h1>Yelagiri</h1>
              <h2>Dog Show , Spice Show - May</h2>
              <p>The celebration is conducted in the Yelagiri Hills to emphasise the indigenous population's culture, traditions, and customs. A flower exhibition, spice exhibition, dog show, cultural programmes, and a rose festival are all part of the festivities.
The Yelagiri Summer Festival is celebrated annually in the months of May and June. Yelagiri is one of the most well-known destinations in India for hiking and mountain climbing because of its stunning hills and mountains to explore.  Flower show  Dog show  Rose Festival  Spice show  Cultural programs Fruit show     </p>
            </div>
            </div> 


            {/* ---------Third Place Kotagiri-------*/}

            <div className='first-des'>
            <div className='img_slider'>
            <Carousel className="slides" showThumbs={false} autoPlay interval={2000} infiniteLoop>
               <div>
                    <img height={350} width={600} className="img" src={Kotagiri4} alt="Image2"/>
                    
                </div>
                <div>
                    <img  height={350}  width={600} className="img" src={Kotagiri2} alt="Image 1"/>
                </div>
                <div>
                    <img height={350} width={600} className="img" src={Kotagiri3} alt="Image2"/>
                    
                </div>
                <div>
                    <img  height={350} width={600} className="img" src={Kotagiri1} alt="Image3"/>
                   
                </div>
               
            </Carousel>
            </div>
            <div className='text'>
              <h1>Kotagiri</h1>
              <h2>Annual Summer Festival, Vegetable show - May</h2>
              <p>
                The two day vegetable show marks the beginning of Summer Festival in Kotagiri.It is a world famous vegetable show which 
                everyone deserves to visit. The show has display of mega structures and carvings made out of vegetables. 
                This included shapes of teddy bear, hens, and ducks using vegetables. There were six district-wise stalls.
                It acts as a great attraction for kids. Vegetable show in Kotagiri is one of the must visit events in Kotagiri.
            </p>
            </div>
            </div> 

            </div>
        );
};
