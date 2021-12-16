import { generateId } from "../Utils/generateId.js";
export class Job{

  constructor(data){
    this.id = generateId()
    this.name = data.name
    this.title = data.title
    this.pay = data.pay
    this.description = data.description
    this.age = data.age
    this.experience = data.experience
    this.imgUrl = data.imgUrl
  }
  get Template () {
    return `
    <div class="col-md-4 p-4">
    <img class="w-100 rounded-top" src="${this.imgUrl}" alt="image">
    <div class="bg-white shadow rounded">
        <div class="p-3">
          <p class="text-center uppercase"><b>${this.name} - ${this.title} - $${this.pay}'/hr'</b></p>
          <p class="m-0">${this.description}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
          <p class="m-0">${this.age}'+'</p>
          <div class="d-flex align-items-center">
            <p class="m-0">experience: ${this.experience}</p>
          </div>
          <i class="mdi mdi-delete selectable" onclick="app.jobsController.removeJob('${this.id}')"></i>
        </div>
      </div>
    </div>`
  }
}



