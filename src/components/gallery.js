import ooty1 from '../images/ooty_tourists1.jpg'
import ooty2 from '../images/ooty_tourists2.jpg'
import kodai1 from '../images/Kodai_tourists1.jpeg'
import kodai2 from '../images/Kodai_tourists2.jpeg'
import yercaud1 from '../images/yercaud_tourists1.jpg'
import yercaud2 from '../images/yercaud_tourists2.jpg'
import './gallery.css'

function Gallery()
{
    return(
       <div className="gallery">
           <h1>Look at our Customers's Travel Gallery</h1>

                {/*-----First Place OOty--------            */}  

           <div className="first-des"> 
            <div className="des-text">
                <h2>Ooty,Queen of Nilgiris</h2>
                <p>The Ooty Lake is an popular attraction where tourists can go boating and enjoy the scenic views.
            During my stay, I also had the opportunity to taste the local cuisine of Ooty, which includes a variety of delicious dishes such as biryani, dosa, and kebabs. The food was flavorful and rich in taste, and I particularly enjoyed the use of local spices in the dishes.
            Overall, my trip to Ooty was a memorable experience,
             and I would highly recommend this beautiful hill station to anyone looking for a peaceful and scenic vacation
             </p>
            </div>
            <div className="image">
                <img alt="ooty1" src={ooty1} />
                <img alt="ooty1" src={ooty2} />
            </div>
           </div>

             {/*-----Second Place Kodai--------            */}

           <div className="first-des-reverse">
            <div className="des-text">
                <h2>Kodaikanal</h2>
                <p>
                Kodaikanal is a beautiful place. Hill area. When I went to kodaikanal the journey was really amazing. I show ever where green. There is forest, hills, water pond agriculture, flower garden and suicide point. I like that climate. 
                In that climate I had a hot tea it was amazing feeling I can't explain that movement still I remember that movement in my life.
             </p>
            </div>
            <div className="image">
                <img alt="ooty1" src={kodai1} />
                <img alt="ooty1" src={kodai2} />
            </div>
           </div>

            {/*-----Third Place Valparai------- */}

            <div className="first-des">
            <div className="des-text">
                <h2>Yercaud</h2>
                <p>
                 Yercaud is a small and amazing place. Since it is very close to Bangalore we decided to do it in one day.
                 We loved the park, lake and waterfall here. Try to reach early to get good pictures and easily enjoy the place. 
                 I had a pleasant stay at yercaud hotel named as VSV a good and nice hotel so u all should have a trip to Yercaud.
             </p>
            </div>
            <div className="image">
                <img alt="ooty1" src={yercaud2} />
                <img alt="ooty1" src={yercaud1} />
            </div>
           </div>

       </div>
    );
}
export default Gallery;