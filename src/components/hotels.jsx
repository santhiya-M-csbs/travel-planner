import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Star from '../images/star.png'
import bghotel from '../images/bg-hotel.jpeg'
import girlimg from '../images/girl1.png'
import oot  from '../images/ooty2.webp'
import oot1 from '../images/ooty3.webp'
import oot2 from '../images/yercaud1.webp'
import oot3 from '../images/yercaud2.webp'
import oot4 from '../images/kotagiri 5 star.jpeg'
import oot5 from '../images/valparai 5 star.jpeg'
import oot6 from '../images/javadi 5 star.jpeg'
import oot7 from '../images/yelgiri 5 star.jpeg'
import oot8 from '../images/conoor 5 star.jpeg'

import './hotels.css';

export default function Hotel(){

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

          <div>

                <h1 className='txt'>Just <br></br>Nature And You</h1>
                <img src={bghotel} className="b1"></img>
               <img src={girlimg} className="girl"></img>
               
            </div>
            
               <h1 className='txt1'>Popular 5-Star Hotels</h1>

            <Carousel responsive={responsive}>


            <div className='colclr'>
                     <img src={oot} height={200} width={330} className='img'></img>
                     <h4>&nbsp;Welcomheritage Fernhills Royal Palace</h4>
                     <h5>&nbsp;Central Ooty|2.9km from OOty Lake</h5>
                     &nbsp;Very Good <button className="but">3.8 </button> <img src={Star} width={15}/>
                     <h6>&nbsp; (126 Rating) </h6>
                     </div>


                     <div className='colclr'>
                     <img src={oot1} height={200} width={330}></img>
                     <h4>&nbsp;Savoy, Ooty - IHCL SeleQtions</h4>
                     <h5>&nbsp;Sylks Road|2.7km from Government Rose Garden</h5>
                     &nbsp;Excellent  <button className="but">4.5</button> <img src={Star} width={15}/>
                     <h6>&nbsp;(396 Rating)</h6>
                     </div>


                     <div className='colclr'>
                     <img src={oot2} height={200} width={330}></img>
                     <h4>Shambala Yercaud</h4>
                     <h5>Near Yercaud Lake</h5>
                     Excellent  <button className="but">4.5</button> <img src={Star} width={15}/>
                     <h6>(162 Rating)</h6>
                     </div>

                     
                     <div className='colclr'>
                     <img src={oot3} height={200} width={330}></img>
                     <h4>Sarvakaya Timber Trails Yercaud</h4>
                     <h5>Near Yercaud Lake</h5>
                     Excellent  <button className="but">4.3</button> <img src={Star} width={15}/>
                     <h6>(142 Rating)</h6>
                     </div>


                     <div className='colclr'>
                     <img src={oot4} height={200} width={330}></img>
                     <h4>&nbsp;Green Nest Resort</h4>
                     <h5>&nbsp;KettiKambai, Kotagiri 643217 India</h5>
                     &nbsp;Excellent  <button className="but">4.5</button> <img src={Star} width={15}/>
                     <h6>&nbsp;(192 Rating)</h6>
                     </div>


                     <div className='colclr'>
                     <img src={oot5} height={200} width={330}></img>
                     <h4>&nbsp;Briar Tea Bungalows - Valparai</h4>
                     <h5>&nbsp;10, Damu Nagar, Valparai 641 045 India</h5>
                     &nbsp;Excellent  <button className="but">4.3</button> <img src={Star} width={15}/>
                     <h6>&nbsp;(162 Rating)</h6>
                     </div>

                     <div className='colclr'>
                     <img src={oot6} height={200} width={330}></img>
                     <h4>Thaai Residency</h4>
                     <h5>579,bangalore highway, athiyandal hospital road, athiyandal,</h5>
                     Excellent  <button className="but">3.9</button> <img src={Star} width={15}/>
                     <h6>(162 Rating)</h6>
                     </div>

                     <div className='colclr'>
                     <img src={oot7} height={200} width={330}></img>
                     <h4>&nbsp;Hotel Landmark</h4>
                     <h5>&nbsp;Boat House Road, Athanavur, Yelagiri Hills,</h5>
                     &nbsp;Excellent  <button className="but">4.9</button> <img src={Star} width={15}/>
                     <h6>&nbsp;(578 Rating)</h6>
                     </div>

                     <div className='colclr'>
                     <img src={oot8} height={200} width={330}></img>
                     <h4>&nbsp;Gateway Coonoor - IHCL SeleQtions</h4>
                     <h5>&nbsp;Church Road Upper Coonoor, The Nilgris</h5>
                     &nbsp;Excellent  <button className="but">4.8</button> <img src={Star} width={15}/>
                     <h6>&nbsp;(1152 Rating)</h6>
                     </div>

                     
</Carousel>;


        </div>
         
            
    )
}