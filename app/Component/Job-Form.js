export function getJobForm() {
  return`
  <form onsubmit="app.housesController.createHouse()">
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="name" class="form-label">name</label>
      <input type="text" class="form-control" name="name" id="name" aria-describedby="name"
        placeholder="name..." required>
    </div>
    <div>
      <label for="title" class="form-label">title</label>
      <input type="text" class="form-control" name="title" id="title" aria-describedby="title"
        placeholder="title..." required>
    </div>
  </div>
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="pay" class="form-label">pay</label>
      <input type="number" class="form-control" name="pay" id="pay" aria-describedby="pay"
        placeholder="pay..."  required>
    </div>
  </div>
  <div class="mb-3">
    <div>
      <label for="imgUrl" class="form-label">Image Url</label>
      <input type="url" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="imgUrl"
        placeholder="Image Url..." required>
    </div>
  </div>
  <div class="mb-3">
    <div>
      <label for="description" class="form-label">Description</label>
      <textarea type="text" class="form-control" name="description" id="description"
        aria-describedby="description" placeholder="Description..." min="5" max="250" required> </textarea>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary">Create</button>
  </div>
</form>
  `
}