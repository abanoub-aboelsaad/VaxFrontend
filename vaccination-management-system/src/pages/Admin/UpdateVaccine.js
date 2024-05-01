import Navbar from '../../components/Navbar'
import './UpdateVaccine.css'

function UpdateVaccine() {
  return (
   <div> <Navbar/>
    <div className="UpdateVaccine">

    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 
  <div className="containervv">
    <form action="#" method="post">
      <h2 className="form-titlevv">update vaccine</h2>
      <br />
      <div className="form-groupvv">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="vaccine name" placeholder="Enter Vaccine Name" required />
      </div>
      <div className="form-groupvv">
        <label htmlFor="type">Type</label>
        <input type="text" id="type" name="type" placeholder="Enter Vaccine Type" required />
      </div>
      <div className="form-groupvv">
        <label htmlFor="code">Code</label>
        <input type="text" id="code" name="code of vaccine" placeholder="Enter Vaccine Code" required />
      </div>
      <div>
        <button type="submit" className="btnvv">Update</button>
      </div>
    </form>
  </div>
</div>

    </div>
    </div>
  )
}

export default UpdateVaccine
