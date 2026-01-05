import Card from '@/components/card/card'
import React from 'react'

const Ecommerce = () => {
  const productList = [
    {
      "id": "nk-001",
      "name": "Nike Air Max 270",
      "category": "Running",
      "price": 160.00,
      "description": "Nike's first lifestyle Air Max brings you style, comfort and big attitude.",
      "image_url":"https://static.nike.com/a/images/w_1280,q_auto,f_auto/vketg4g4lmtsfke2epht/air-max2-light-triple-white-release-date.jpg",
      "in_stock": true,
      "sizes": [7, 8, 9, 10, 11, 12]
    },
    // ... add your other products here
  ]

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center p-10">
      <div className='flex flex-wrap justify-center gap-8'>
         {productList.map((item) => (
            <Card key={item.id} products={item}/>
         ))}
      </div>
    </div>
  )
}

export default Ecommerce

