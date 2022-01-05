import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    // new Car({ make: 'ford', model: 'focus', year: 2008, price: 7500, description: 'Like new only 100,000 miles', color: '#91e880', imgUrl: 'https://i.pinimg.com/originals/c1/d1/a8/c1d1a890282f877de2ef09cd53131cdb.jpg' }),
    // new Car({ make: 'ford', model: 'taurus wagon', year: 1989, price: 1000, description: 'Great Family vehicle for long vacations', color: '#93776a', imgUrl: 'https://cdn.motor1.com/images/mgl/xWqly/s3/home-built-christmas-vacation-display-includes-movie-s-epic-vehicles.jpg' }),
    // new Car({ make: 'Elven', model: 'Sleigh', year: 1700, price: 900000, description: 'It only works once a year, and has 8 horsepower', color: '#f44545', imgUrl: 'https://cdn.shopify.com/s/files/1/1319/9267/products/metal-sleigh_1_1024x1024.jpg' })
  ]
  /** @type {import('./Models/House').House[]} */
  houses = [
    // new House({ address: '1234 Harrington Way', price: 20000, zip: '87465', size: '2250 sq/ft', description: 'Previous owner was a MK IV spartan', color: '#a0b7bc', imgUrl: 'https://gamerliving.net/wp-content/uploads/2012/12/MasterChiefWhiteHouse.jpg'}),
    
    // new House({ address: '97866 DM Master Dr', price: 30000, zip: '86354', size: '3250 sq/ft', description: 'Smells like D&D', color: '#ff9b37', imgUrl: 'http://scrollmaster.net/wp-content/uploads/2020/02/IMG_0605.jpg'}),
    
    // new House({ address: '10110 Binary Court', year:'2001', price: 40000, zip: '27364', size: '1010 sq/ft', description: '1010101010 101010 101010', color: '#3c4055', imgUrl: 'https://thumbs.dreamstime.com/b/smart-house-background-abstract-glowing-binary-code-house-background-smart-house-concept-d-rendering-113932035.jpg'})
  ]

  /** @type {import('./Models/Jobs').Job[]} */
  jobs = [
    // new Job({name: 'Bingos Bongos', title: 'Bongo Sellsmen', pay: '8.00', imgUrl: 'https://m.media-amazon.com/images/I/61W1igWXdEL._AC_SL1500_.jpg', age: '18', experience: '2', description: 'Looking for a talented bongo-er' }),

    // new Job({name: 'TacoBurger', title: 'burger taco man', pay: '7', imgUrl: 'https://cdn.vox-cdn.com/thumbor/m7-WGxv_B0IZQDGXJjwso2W_yz4=/30x0:629x449/1400x1400/filters:focal(30x0:629x449):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/38808908/del-taco-bun-taco.0.png', age: '45', experience: '100', description: 'If you can cook burgers, tacos, and burgerTacos apply now' }),

    // new Job({name: 'Air Breather', title: 'respirator', pay: '72.50', imgUrl: 'https://i.pinimg.com/600x315/63/98/c7/6398c7d1fe1c7da7afba4e7837ba31b5.jpg', age: 'Any', experience: '10+', description:'In need of CO2'}),
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
