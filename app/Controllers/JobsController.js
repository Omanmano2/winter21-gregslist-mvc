import { ProxyState } from "../AppState.js";
import { getJobForm} from "../Component/Job-Form.js";
import { jobsServices } from "../Services/JobService.js";


function _drawJobs() {
  const jobs = ProxyState.jobs
  let template = ''
  jobs.forEach(j => template += j.Template )
  document.getElementById('listings').innerHTML = template

}
export class JobsController{

    constructor(){
      ProxyState.on('jobs', _drawJobs)
    }

    drawJobs() {
      _drawJobs()
      document.getElementById('modal-body-slot').innerHTML = getJobForm()
    }

    createJob(){
      window.event.preventDefault()
      console.log("submitted")
    /** @type {HTMLFormElement} */
    // @ts-ignore
    const form = window.event.target
    const jobData = {
    name : form.data.name,
    title : form.data.title,
    pay : form.data.pay,
    description : form.data.description,
    age : form.data.age,
    experience : form.data.experience,
    imgUrl : form.data.imgUrl,
    }
    jobsServices.createJob(jobData)
    form.reset
    bootstrap.Modal.getOrCreateInstance(documnet.getElementById('new-listing')).hide()
    }
    removeJob(id){
      console.log('deleting', id)
      jobsServices.removeJob(id)
    }
}
