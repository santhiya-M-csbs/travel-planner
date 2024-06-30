import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import o1 from '../images/guestooty1.jpeg'
import o2 from '../images/guestooty2.jpeg'
import o3 from '../images/guestyarcaud.jpeg'
import o4 from '../images/guestyarcaud1.jpeg'
import o5 from '../images/coonoor guest.jpeg'
import o6 from '../images/kodaikanal guest.jpeg'
import o7 from '../images/kolli guset.jpeg'
import o8 from '../images/valparai guest.jpeg'
import o9 from '../images/yelagiri guest.jpeg'



import Star1 from '../images/star.png'

import './hotels.css';

export default function Hotel2(){

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return(
        <div>

         
               <h1 className='txt1'>Popular Guest House</h1>

            <Carousel responsive={responsive}>


            <div className='colclr'>
                        <img src={o1} height={200} width={330}></img>
                     <h4>&nbsp;Lymond house</h4>
                     <h5>&nbsp;Sylks road, 643001 Ooty, India</h5>
                     &nbsp;Very Good <button className="but">4.2 </button> <img src={Star1} width={15}/>
                     <h6>&nbsp;(40 Rating) </h6>
                     </div>


                     <div className='colclr'>
                    <img src={o2} height={200} width={330}></img>
                     <h4>&nbsp;The last resort</h4>
                     <h5>&nbsp;near heli pad ,West Mera road Theettukal,Ooty</h5>
                     &nbsp;Very Good <button className="but">3.8 </button> <img src={Star1} width={15}/>
                     <h6>&nbsp;(30 Rating) </h6>
                     </div>


                     <div className='colclr'>
                    <img src={o3} height={200} width={330}></img>
                     <h4>&nbsp;Rain Rock Villa</h4>
                     <h5>&nbsp;Rain Rock Villa ,Yercaud Cauvery Peak Rd,</h5>
                     &nbsp;Very Good <button className="but">3.8 </button> <img src={Star1} width={15}/>
                     <h6>&nbsp;(20 Rating) </h6>
                     </div>

                     
                     <div className='colclr'>
                    <img src={o4} height={200} width={330}></img>
                     <h4>&nbsp;Yellow Lake Resort and Spa</h4>
                     <h5>&nbsp;345, Yercaud Cauvery Peak Rd Shevaroys Hill, Yercaud </h5>
                     &nbsp;Excellent <button className="but">4.5 </button> <img src={Star1} width={15}/>
                     <h6>&nbsp;(126 Rating) </h6>
                     </div>


                     <div className='colclr'>
                    <img src={o5} height={200} width={330}></img>
                     <h4>&nbsp;Gateway Coonoor - IHCL SeleQtions</h4>
                     <h5>&nbsp;Church Road Upper Coonoor, The Nilgris, Coonoor  </h5>
                     &nbsp;Excellent <button className="but">4.2 </button> <img src={Star1} width={15}/>
                     <h6>&nbsp;(1126 Rating) </h6>
                     </div>


                     <div className='colclr'>
                    <img src={o6} height={200} width={330}></img>
                     <h4>&nbsp;B's Hive</h4>
                     <h5>&nbsp;Anandhagiri 7th Street, Moonjikal,Kodaikanal </h5>
                     &nbsp;Excellent <button className="but">4.5 </button> <img src={Star1} width={15}/>
                     <h6>&nbsp;(1206 Rating) </h6>
                     </div>

                     <div className='colclr'>
                    <img src={o7} height={200} width={330}></img>
                     <h4>&nbsp;N.P.S Lake View Resort</h4>
                     <h5>&nbsp;Thanimaathi Road near Petrol Bunk, Semmedu</h5>
                     &nbsp;Excellent <button className="but">4.3 </button> <img src={Star1} width={15}/>
                     <h6>&nbsp;(1026 Rating) </h6>
                     </div>


                     <div className='colclr'>
                    <img src={o8} height={200} width={330}></img>
                     <h4>&nbsp;Star Tea Estate Bungalow</h4>
                     <h5>&nbsp;Sajeetha Estate Sholayar Dam, Valparai </h5>
                     &nbsp;Excellent <button className="but">4.5 </button> <img src={Star1} width={15}/>
                     <h6>&nbsp;(126 Rating) </h6>
                     </div>

                     <div className='colclr'>
                    <img src={o9} height={200} width={330}></img>
                     <h4>&nbsp;Yellow Lake Resort and Spa</h4>
                     <h5>&nbsp;345, Yercaud Cauvery Peak Rd Shevaroys Hill, Yercaud </h5>
                     &nbsp;Excellent <button className="but">4.5 </button> <img src={Star1} width={15}/>
                     <h6>&nbsp;(126 Rating) </h6>
                     </div>


</Carousel>;


        </div>
         
            
    )
}