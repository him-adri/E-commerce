import React from 'react'
import './LadiesWear.css'

const MensWearListItems = [
    {
      id: 1,
      img: 'https://rukminim1.flixcart.com/image/452/542/kx0q4y80/sari/n/u/b/free-vasundhra-rama-s-mrtakshcreation-unstitched-original-imag9khhufc3fwny.jpeg?q=50'
    },
    {
      id: 2,
      img: 'https://rukminim1.flixcart.com/image/452/542/kyeqjrk0/gown/z/k/c/na-xl-3-4-sleeve-stitched-atoz-2119-adhi-shree-fashion-na-original-imagangyarnagaqm.jpeg?q=50',
    },
    {
      id: 3,
      img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/trouser/l/x/x/l-shpan50233-shae-by-sassafras-original-imagcv8mtkvd6gtc-bb.jpeg?q=50'
    },
    {
      id: 4,
        img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/jean/2/q/w/32-jean-pln-blk-nifty-original-imagygz4gm7xyg8a-bb.jpeg?q=50'
    },
    {
      id: 5,
      img: 'https://rukminim1.flixcart.com/image/452/542/l2w7b0w0/ethnic-set/9/7/9/xxl-5048-v-tradition-original-image5fpzydceh83.jpeg?q=50'
    },
    {
      id: 6,
      img: 'https://rukminim1.flixcart.com/image/452/542/l2hwwi80/jean/e/m/x/29-258869001-vero-moda-original-imagdtm6j2gccsdh.jpeg?q=50'
    },
    {
      id: 7,
      img: 'https://rukminim1.flixcart.com/image/452/542/k05ljm80/jean/u/w/z/34-8803831-roadster-original-imafjv2wthyu8ksv.jpeg?q=50'
    },
    {
      id: 8,
      img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/skirt/7/e/r/free-long-blackk-royal-taylor-original-imag4rf4mwtvg6at-bb.jpeg?q=50'
    },
    {
        id: 9,
        img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/top/c/s/s/l-gr6201-blue-harpa-original-imafzt9tujn9m6te-bb.jpeg?q=50'
    }
  
  ]

const LadiesWear = () => {
  return (
   <div className='ladies-wear-container'>
      <div className='ladies-wear-header'>L<span>adies's Wea</span>r</div>
      <div className='ladies-wear-inner-container'>
        <div className='ladies-wear-product-list'>
          {
            MensWearListItems.map(MensWearListItems => {
              return (
                <>
                    <div className='ladies-wear-product-item'>
                    <img src={MensWearListItems.img}/>
                    </div>
                </>
                
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default LadiesWear