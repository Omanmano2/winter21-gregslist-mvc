import { generateId } from "../Utils/generateId.js";

export class House { 

  constructor(data) {
    this.id = generateId()
    this.id = data.price
    this.address = data.address
    this.zip = data.zip
    this.size = data.size
    this.description = data.description
    this.color = data.color
    this.imgUrl = data.imgUrl
   }
    get Template() {
      return `
      <div class="col-md-4 p-4">
      <img class="w-100 rounded-top" src="${this.imgUrl}" alt="image">
      <div class="p-3">
        <p class="text-center"><b>SIZE - ADDRESS - ZIP</b></p>
        <p class="m-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi.</p>
      </div>
      <div class="p-3 d-flex justify-content-between align-items-center">
        <p class="m-0">$${this.price}</p>
        <div class="d-flex align-items-center">
          <p class="m-0">Color:</p>
          <div class="color-box border border-dark" style="background-color: ${this.color};"></div>
          <div>
            <i class="mdi mdi-delete selectable" onclick="app.houseController.removeHouse('${this.id}')"></i>
          </div>
        </div>
      </div>
    </div>`
    }
  }