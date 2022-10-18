import React from 'react'
import "./Recommendation.css";
import RecommendationItem from './RecommendationItem';

const RecommendationList = [
    {
        id: 1,
        title: 'Full Sleeve Solid Women Sweatshirt',
        description: ' METRONAUT Full Sleeve Solid Women Sweatshirt #JustHere. ',
        price: 320,
        img: 'https://rukminim1.flixcart.com/image/832/832/kfmv9u80/sweatshirt/y/d/y/l-ss18psst133-yellow-metronaut-original-imafwfgkyxyjnhzu.jpeg?q=70'
    },
    {
        id: 2,
        title: 'Full Sleeve Washed Women Jacket',
        description: 'HERE&NOW Full Sleeve Washed Women Jacket. ',
        price: 673,
        img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/jacket/y/g/k/xl-7371459-here-now-original-imafeqbxzpbzfg2t-bb.jpeg?q=70'
    },
    {
        id: 3,
        title: 'Slim Men Dark Blue Jeans',
        description: 'PETER ENGLAND Slim Men Dark Blue Jeans',
        price: 799,
        img: 'https://rukminim1.flixcart.com/image/832/832/kyrlifk0/jean/6/v/7/32-pjtfpskpu09867-peter-england-original-imagaxdeeyzhgebg.jpeg?q=70'
    },
    {
        id: 4,
        title: 'Slippers  (Black 7)',
        description: 'Aqualite Slippers  (Black 7)',
        price: 305,       
         img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/slipper-flip-flop/8/e/q/-original-imagg6qhepebbqhz.jpeg?q=70'
    },
    {
        id: 5,
        title: 'Unstitched Chanderi Kurta & Churidar Material Embroidered',
        description: 'VORIMA Unstitched Chanderi Kurta & Churidar Material Embroidered',
        price: 919,
        img: 'https://rukminim1.flixcart.com/image/832/832/l09w8sw0/fabric/e/p/f/yes-2-25-m-unstitched-2-2-m-krisha-vorima-original-imagc3pdrnuyvxvs.jpeg?q=70'
    },
    {
        id: 6,
        title: 'Analog Watch - For Men',
        description: 'Fastrack 3260NP01 Analog Watch - For Men',
        price: 2200,
        img:'https://rukminim1.flixcart.com/image/832/832/ks3jjbk0/watch/q/6/s/3260np01-fastrack-original-imag5qbn7snsfhrr.jpeg?q=70'
    }
]
const Recommendation = () => {
  return (
    <div className='recommendation-container'>
        <div className='recommendation-header'>
            O<span>ffer</span>s
        </div>
        <div className='recommendation-list'>
            {
                RecommendationList.map( item => 
                    <RecommendationItem 
                    key={item.id} 
                    title={item.title}  
                    description={item.description}
                    price={item.price}
                    img={item.img}
                    /> 
                )
            }
        </div>
    </div>
  )
}

export default Recommendation