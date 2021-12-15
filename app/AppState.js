import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({ make: 'ford', model: 'focus', year: 2008, price: 7500, description: 'Like new only 100,000 miles', color: '#91e880', imgUrl: 'https://i.pinimg.com/originals/c1/d1/a8/c1d1a890282f877de2ef09cd53131cdb.jpg' }),
    new Car({ make: 'ford', model: 'taurus wagon', year: 1989, price: 1000, description: 'Great Family vehicle for long vacations', color: '#93776a', imgUrl: 'https://cdn.motor1.com/images/mgl/xWqly/s3/home-built-christmas-vacation-display-includes-movie-s-epic-vehicles.jpg' }),
    new Car({ make: 'Elven', model: 'Sleigh', year: 1700, price: 900000, description: 'It only works once a year, and has 8 horsepower', color: '#f44545', imgUrl: 'https://cdn.shopify.com/s/files/1/1319/9267/products/metal-sleigh_1_1024x1024.jpg' })
  ]
  /** @type {import('./Models/House').House[]} */
  houses = [
    new House({address: '1234 Harrington Way', price:20000 ,zip: '87465' , size: '2250 sq/ft', description: 'Previous owner was a MK IV spartan', color: '#a0b7bc', imgUrl: 'https://gamerliving.net/wp-content/uploads/2012/12/MasterChiefWhiteHouse.jpg'}),
    
    new House({address: '97866 DM Master Dr', price:30000 ,zip: '86354' , size: '3250 sq/ft', description: 'Smells like D&D', color: '#ff9b37', imgUrl: 'http://scrollmaster.net/wp-content/uploads/2020/02/IMG_0605.jpg'}),
    
    new House({address: '10110 Binary Court', year:'2001',price:40000 ,zip: '27364' , size: '1010 sq/ft', description: '1010101010 101010 101010', color: '#3c4055', imgUrl: 'https://thumbs.dreamstime.com/b/smart-house-background-abstract-glowing-binary-code-house-background-smart-house-concept-d-rendering-113932035.jpg'})
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
