import { ProxyState } from "../AppState.js";
import { getHouseform } from "../Component/HouseForm.js";
import { housesService } from "../Services/HousesService.js";

function _drawHouses() {
  const houses = ProxyState.houses
  let template = ''
  houses.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
}
export class HousesController {

    constructor(){
      ProxyState.on('houses', _drawHouses)
    }

    drawHouses() {
      _drawHouses()
      document.getElementById('modal-body-slot').innerHTML = getHouseform()
    }

    createHouse(){
      window.event.preventDefault()
      console.log("submitted")
    /** @type {HTMLFormElement} */
    // @ts-ignore
    const form = window.event.target
    const houseData = {
      address: form.address.value,
      zip: form.zip.value,
      size: form.size.value,
      price: form.price.value,
      description: form.description.value,
      color: form.color.value,
      imgUrl: form.imgUrl.value,
    }
    housesService.createHouse(houseData)
    form.reset
    bootstrap.Modal.getOrCreateInstance(documnet.getElementById('new-listing')).hide()
    }

    removeHouse(id){
      console.log('deleting', id)
      housesService.removeHouse(id)
    }
}