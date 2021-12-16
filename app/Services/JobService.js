import { ProxyState } from "../AppState";



class JobService{
removeJob(id){
  ProxyState.jobs = ProxyState.jobs.filter(j =>j.id !== id)
}

createJob(jobData){
  const Job = new Job(jobData)
  ProxyState.jobs = [...ProxyState.jobs, jobs]
}

}