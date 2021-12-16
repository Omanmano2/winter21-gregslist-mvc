import { generateId } from "../Utils/generateId.js";

export class House { 

  constructor(data) {
    this.id = generateId()
    this.address = data.address
    this.zip = data.zip
    this.size = data.size
    this.description = data.description
    this.color = data.color
    this.imgUrl = data.imgUrl
    this.price = data.price
   }
   get Template() {
    return `
    <div class="col-md-4 p-4">
    <img class="w-100 rounded-top" src="${this.imgUrl}" alt="${this.model}-image">
    <div class="bg-white shadow rounded">
        <div class="p-3">
          <p class="text-center uppercase"><b>${this.address} - ${this.zip} - ${this.size}'sq/ft'</b></p>
          <p class="m-0">${this.description}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
          <p class="m-0">$${this.price}</p>
          <div class="d-flex align-items-center">
            <p class="m-0">Color:</p>
            <div class="color-box border border-dark" style="background-color: ${this.color};"></div>
          </div>
          <i class="mdi mdi-delete selectable" onclick="app.housesController.removeHouse('${this.id}')"></i>
        </div>
      </div>
    </div>`
  }
}