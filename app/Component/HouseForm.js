export function getHouseform() {
  return `
  <form onsubmit="app.houseController.createHouse()">
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="address" class="form-label">Address</label>
      <input type="text" class="form-control" name="address" id="address" aria-describedby="address"
        placeholder="address..." required>
    </div>
    <div>
      <label for="zip" class="form-label">Zip</label>
      <input type="text" class="form-control" name="zip" id="zip" aria-describedby="zip"
        placeholder="zip..." required>
    </div>
  </div>
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="size" class="form-label">Size</label>
      <input type="number" class="form-control" name="size" id="size" aria-describedby="size"
        placeholder="size..."  required>
    </div>
    <div>
      <label for="color" class="form-label">Color</label>
      <input type="color" class="form-control" name="color" id="color" aria-describedby="color" required>
    </div>
    <div>
      <label for="price" class="form-label">Price</label>
      <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
        placeholder="Price..." min='1' required>
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
</form>`
}