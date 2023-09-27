/* eslint-disable */
import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCard.css';
import { instance } from '../../lib/AxiosInstance';
import { useLocation } from 'react-router-dom';




function Tindercard( ) {
    const {state} = useLocation();
    const [loading, setloading] = useState(true)
    console.log("item state", state);
    
    const [extradata, setextradata] = useState(null);

    useEffect(() => {
        const findExtraDes = async () => {
          try {
            const response = await instance.get(`categories?name=${state?.category || 'Biotechnology'}`);
            setextradata(response?.data);
            console.log("💥🤯💥🤯",response?.data);
            setloading(false)
          } catch (error) {
            console.log('error', error);
            setloading(false)
          }
        };
    
        findExtraDes();
      }, []);

      console.log('extra dta', extradata);
      

   const characters = [
        {
          name: 'Richard Hendricks',
          url: 'https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_1280.png',
        },
        {
          name: 'Erlich Bachman',
          url: './img/erlich.jpg',
        },
        {
          name: 'Monica Hall',
          url: './img/monica.jpg',
        },
        {
          name: 'Jared Dunn',
          url: './img/jared.jpg',
        },
        {
          name: 'Dinesh Chugtai',
          url: './img/dinesh.jpg',
        },
      ];
 
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction : any, nameToDelete : any) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name : any) => {
    console.log(name + ' left the screen!');
  };

  if(loading){
    return <p>loading..</p>
  }

  return (
    // <div>
    //   <link
    //     href="https://fonts.googleapis.com/css?family=Damion&display=swap"
    //     rel="stylesheet"
    //   />
    //   <link
    //     href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
    //     rel="stylesheet"
    //   />
    //   <h1>React Tinder Card</h1>
    //   <div className = "tinderCards__cardContainer">
    //             {extradata?.data?.symbols?.map((person) => (
    //                 <TinderCard
    //                     className = "swipe"
    //                     key = {person.name}
    //                     //preventSwipe = {[ 'up', 'down' ]}
    //                     onSwipe={(dir) => swiped(dir, person.name)}
    //                   onCardLeftScreen={() => outOfFrame(person.name)}
    //                 >
    //                     <div
    //                         style = {{ backgroundImage: `url(${person?.logo})` }}
    //                         className = "card"
    //                     >
    //                         <h3>{person.symbol}</h3>
    //                     </div>
    //                 </TinderCard>
    //             ))}
    //         </div>
    //   {lastDirection ? (
    //     <h2 className="infoText">You swiped {lastDirection}</h2>
    //   ) : (
    //     <h2 className="infoText" />
    //   )}
    // </div>

    // new addition
    <div  className="tinderCards bg-orange-500">
    <div  className="tinderCards__cardContainer">
        {extradata?.data?.symbols?.map((person) => (
            <TinderCard

                 className="swipe bg-orange-400"
                key={person.name}
                // preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
            >
                <div
                    style={{ backgroundImage: `url(${person?.logo})` }}
                    className="card"
                >
                    <h3>{person.name}</h3>

                </div>                                                                              

            </TinderCard>
        ))}
    </div>
</div>
  );
}

export default Tindercard;
