import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import Star1 from '../images/star.png'


import bud1  from '../images/budooty1.jpeg'
import bud2 from '../images/budooty2.jpeg'
import bud3 from '../images/budyarcaud1.jpeg'
import bud4 from '../images/budyarcaud.jpeg'
import bud5 from '../images/anaimalai bud.jpeg'
import bud6 from '../images/kodaikanal bud.jpeg'
import bud7 from '../images/yellagiri bud.jpeg'
import bud8 from '../images/kolli bud.jpeg'
import bud9 from '../images/coonoor bud.jpeg'


import './hotels.css';

export default function Hotel1(){

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
            
               <h1 className='txt1'>Popular Budget Hotels</h1>

            <Carousel responsive={responsive}>


                     <div className='colclr'>
                     <img src={bud1} height={200} width={330}></img>
                     <h4>&nbsp;Hotel Gem Park Ooty</h4>
                     <h5>&nbsp;Central Ooty|2.9km from OOty Lake</h5>
                     &nbsp;Very Good <button className="but">4.5 </button> <img src={Star1} width={15}/>
                     <h6>&nbsp;(1,429 Rating) </h6>
                     </div>

                     <div className='colclr'>
                     <img src={bud2} height={200} width={330}></img>
                     <h4>&nbsp;Accord Highland Hotel Ooty</h4>
                     <h5>&nbsp;4/278 Dhoddabetta Junction KotagiriRoad,OOty</h5>
                     &nbsp;Excellent <button className="but">4.5</button> <img src={Star1} width={15}/>
                     <h6>&nbsp;(2,151 Rating) </h6>
                     </div>


                     <div className='colclr'>
                     <img src={bud3} height={200} width={330}></img>
                     <h4>&nbsp;The Regent Hill Side Villa & Resort</h4>
                     <h5>&nbsp;Hospital Road, Yercaud, Salem District</h5>
                     &nbsp;Excellent <button className="but">5.0 </button> <img src={Star1} width={15}/>
                     <h6>&nbsp;(856 Rating) </h6>
                     </div>

                     
                     <div className='colclr'>
                     <img src={bud4} height={200} width={330}></img>
                     <h4>&nbsp;TGI Star Holiday Resort</h4>
                     <h5>&nbsp;Salem Main Road.Opp Union Office Yarcaud</h5>
                     &nbsp;Excellent <button className="but">4.3 </button> <img src={Star1} width={15}/>
                     <h6>&nbsp;(547 Rating) </h6>
                     </div>


                     <div className='colclr'>
                     <img src={bud5} height={200} width={330}></img>
                     <h4>&nbsp;Royal Cottage</h4>
                     <h5>&nbsp;Royal Cottage 51a Sethumadai Road Near Masaniaam Temple, Anaimalai</h5>
                     &nbsp;Excellent <button className="but">4.1 </button> <img src={Star1} width={15}/>
                     <h6>&nbsp;(1047 Rating) </h6>
                     </div>


                     <div className='colclr'>
                     <img src={bud6} height={200} width={330}></img>
                     <h4>&nbsp;Sterling Kodai Lake</h4>
                     <h5>&nbsp;44 Gymkhana Road, Kodaikanal </h5>
                     &nbsp;Excellent <button className="but">4.3 </button> <img src={Star1} width={15}/>
                     <h6>&nbsp;(3076 Rating) </h6>
                     </div>




                     <div className='colclr'>
                     <img src={bud7} height={200} width={330}></img>
                     <h4>&nbsp;Hotel Landmark</h4>
                     <h5>&nbsp;Boat House Road, Athanavur, Yelagiri Hills</h5>
                     &nbsp;Excellent <button className="but">4.3 </button> <img src={Star1} width={15}/>
                     <h6>&nbsp;(360 Rating) </h6>
                     </div>


                     <div className='colclr'>
                     <img src={bud8} height={200} width={330}></img>
                     <h4>&nbsp;Nallathambi Resort</h4>
                     <h5>&nbsp;Semmedu, 637411 India</h5>
                     &nbsp;Excellent <button className="but">4.3 </button> <img src={Star1} width={15}/>
                     <h6>&nbsp;(120 Rating) </h6>
                     </div>


                     <div className='colclr'>
                     <img src={bud9} height={200} width={330}></img>
                     <h4>&nbsp;Teanest</h4>
                     <h5>&nbsp;Singara Estate Road, Coonoor</h5>
                     &nbsp;Excellent <button className="but">4.7 </button> <img src={Star1} width={15}/>
                     <h6>&nbsp;(1030 Rating) </h6>
                     </div>
</Carousel>;




        </div>
         
            
    )
}