import Navbar from "../../components/Navbar";
import { useState } from "react";
function ManageCertificate() {
  const [reservations] = useState([]);
  
  
  return (
    <div>
       <div>
      <Navbar />
      <div className='boddyyy'>
        <link rel="stylesheet" type="text/css" href="/assets/manageusers/ManageUsers.css" />
        <main className="table" id="customers_table">
          <section className="table__header">
            <h1>ALL the  patient that are ready to upload certificate </h1>
          </section>
          <section className="table__body">
            <table>
              <thead>
                <tr>
                  <th> </th>
                  <th> Patient Name </th>
                  <th> Vaccine </th>
               
                  <th> Upload Certificate </th>
                </tr>
              </thead>
              <tbody>
                {reservations.map(reservation => (
                  <tr key={reservation.id}>
                    <td>{reservation.id}</td>
                    <td><strong>{reservation.userName}</strong></td>
                    <td>{reservation.vaccineName}</td>
                   
                    <td>
                      {/* <button className="status delivered">
                      upload
                      </button> */}
                    </td>
                    <td>
                      <button className="status view">Upload</button> 
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
    </div>
  )
}

export default ManageCertificate
