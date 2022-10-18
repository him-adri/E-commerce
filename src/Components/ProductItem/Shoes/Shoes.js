import React from 'react'
import './Shoes.css'

const ShoesListItems = [
    {
      id: 1,
      img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/shoe/e/y/j/-original-imagg4zgqyzcynxn.jpeg?q=50'
    },
    {
      id: 2,
      img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/shoe/q/h/z/7-mrj1852-7-aadi-black-original-imagdwgudezandfs-bb.jpeg?q=50',
    },
    {
      id: 3,
      img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/shoe/5/t/q/9-w-5011-9-world-wear-footwear-red-original-imaggjkfjjxxz6yp.jpeg?q=50'
    },
    {
      id: 4,
        img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/shoe/d/7/n/-original-imaghvbbgksxmy2f.jpeg?q=50'
    },
    {
      id: 5,
      img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/shoe/f/i/2/-original-imaghryhzeer8jry.jpeg?q=50'
    },
    {
      id: 6,
      img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/shoe/s/b/7/-original-imagg896hhnbd7wt-bb.jpeg?q=50'
    },
    {
      id: 7,
      img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/sandal/j/t/6/-original-imagfxf9wqhm9zdm-bb.jpeg?q=50'
    },
    {
      id: 8,
      img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/sandal/7/b/q/-original-imaggcr5a2qzcatu-bb.jpeg?q=50'
    },
    {
        id: 9,
        img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/sandal/a/c/j/8-st602-flatswomen-41-shoestail-black-original-imagewvkdy3uvy4p-bb.jpeg?q=50'
    }
  
  ]

const Shoes = () => {
  return (
    <div className='shoes-container'>
      <div className='shoes-header'>S<span>hoe</span>s</div>
      <div className='shoes-inner-container'>
        <div className='shoes-product-list'>
          {
            ShoesListItems.map(ShoesListItems => {
              return (
                <>
                    <div className='shoes-product-item'>
                    <img src={ShoesListItems.img}/>
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

export default Shoes