import React from 'react'
import './MensWear.css'

const MensWearListItems = [
    {
      id: 1,
      img: 'https://rukminim1.flixcart.com/image/832/832/l09w8sw0/t-shirt/v/l/f/xl-bmrgyrn-z12-blive-original-imagc3pjxhbqwgh5.jpeg?q=70'
    },
    {
      id: 2,
      img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/shirt/g/9/p/s-black-5-jai-textiles-original-imag42m5hcfue7np-bb.jpeg?q=50',
    },
    {
      id: 3,
      img: 'https://rukminim1.flixcart.com/image/832/832/l3nco7k0/t-shirt/x/q/c/m-tie-dye-3008-veirdo-original-imagepw2mqpuxjgr.jpeg?q=70'
    },
    {
      id: 4,
        img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/jean/r/h/r/42-lj7160-lzard-original-imaggqhzx2bffpr8.jpeg?q=50'
    },
    {
      id: 5,
      img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/jean/y/n/a/30-11274726-roadster-original-imaftzfqgqqfkur4-bb.jpeg?q=50'
    },
    {
      id: 6,
      img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/trouser/a/f/z/32-kctr-2121-crm-fubar-original-imafzy38ewvc3zzw-bb.jpeg?q=50'
    },
    {
      id: 7,
      img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/short/i/e/e/3xl-ic-n24445-indiclub-original-imagc3sfychajz6r-bb.jpeg?q=50'
    },
    {
      id: 8,
      img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/ethnic-set/a/t/s/xxl-vskp06m-vesham-original-imageafnqxshwumt-bb.jpeg?q=50'
    },
    {
        id: 9,
        img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/kurta/v/7/w/xl-sksh-dt1105-pur-fubar-original-imafuy3z57uqgdrp-bb.jpeg?q=50'
    }
  
  ]

const MensWear = () => {
  return (
   <div className='mens-wear-container'>
      <div className='mens-wear-header'>M<span>en's Wea</span>r</div>
      <div className='mens-wear-inner-container'>
        <div className='mens-wear-product-list'>
          {
            MensWearListItems.map(MensWearListItems => {
              return (
                <>
                    <div className='mens-wear-product-item'>
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

export default MensWear