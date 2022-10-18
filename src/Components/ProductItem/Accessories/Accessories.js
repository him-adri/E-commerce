import React from 'react'
import './Accessories.css'
const AccessoriesListItems = [
    {
      id: 1,
      img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/jewellery-set/s/5/z/na-na-js-112-aslworld-original-imaggh6uyrpfraqq.jpeg?q=50'
    },
    {
      id: 2,
      img: 'https://rukminim1.flixcart.com/image/452/542/kri3xjk0/jewellery-set/g/2/c/ffr4503or-fashion-fusion-original-imag5a3dbyjhppcz.jpeg?q=50',
    },
    {
      id: 3,
      img: 'https://rukminim1.flixcart.com/image/452/542/l02r1jk0/pencil-box/w/e/q/unicorn-fur-pouch-for-kids-set-of-1-1-a-little-swag-original-imagbxwedps5rkwg.jpeg?q=50'
    },
    {
      id: 4,
        img: 'https://rukminim1.flixcart.com/image/452/542/xif0q/hand-messenger-bag/c/g/j/-original-imaggbwda6qqygcz.jpeg?q=50'
    },
    {
      id: 5,
      img: 'https://rukminim1.flixcart.com/image/452/542/k6gsk280/watch/h/r/y/118-shiny-and-slim-rizzly-original-imafzp58juqtawzd.jpeg?q=50'
    },
    {
      id: 6,
      img: 'https://rukminim1.flixcart.com/image/452/542/kl175ow0/watch/k/w/a/anlg-428-brown-brwn-analogue-original-imagy8tnbzftnw3a.jpeg?q=50'
    },
    {
      id: 7,
      img: 'https://rukminim1.flixcart.com/image/452/542/jcqjr0w0/tie/t/y/2/free-tie-cmb-38-fashmade-original-imaffsfx2enxyffb.jpeg?q=50'
    },
    {
      id: 8,
      img: 'https://rukminim1.flixcart.com/image/452/542/k4rcmfk0pkrrdj/watch-refurbished/e/h/3/c-1773sl02-titan-original-imafdcjhhqhr7nfu.jpeg?q=50'
    },
    {
        id: 9,
        img: 'https://rukminim1.flixcart.com/image/452/542/l2ghgnk0/jewellery-set/f/1/6/na-na-002-brahanicreation-original-imagdst8yx6e8dxy.jpeg?q=50'
    }
  
  ]

const Accessories = () => {
  return (
    <div className='accessories-container'>
      <div className='accessories-header'>A<span>ccessorie</span>s</div>
      <div className='accessories-inner-container'>
        <div className='accessories-product-list'>
          {
            AccessoriesListItems.map(AccessoriesListItems => {
              return (
                <>
                    <div className='accessories-product-item'>
                    <img src={AccessoriesListItems.img}/>
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

export default Accessories