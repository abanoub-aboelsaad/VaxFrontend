import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useAuthContext } from '../Auth/hooks/useAuthContext';
import DatePicker from "react-datepicker"; // Import the date picker component
import "react-datepicker/dist/react-datepicker.css"; // Import the styles for the date picker

function PatientVaccineDetails() {
  const { id } = useParams(); // Extracting vaccine ID from URL par
  const { decodeToken, token } = useAuthContext(); 
  const decodedToken = decodeToken(token); 
  const UserId = decodedToken ? decodedToken.nameid : null; 
  const [vaccineDetails, setVaccineDetails] = useState(null);
  const [reservationDate, setReservationDate] = useState(new Date()); // State to hold reservation date

  useEffect(() => {
    const fetchVaccineDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/vaccines/${id}`);
        setVaccineDetails(response.data);
      } catch (error) {
        console.error('Error fetching vaccine details:', error);
      }
    };

    fetchVaccineDetails();
  }, [id]); // Trigger useEffect whenever the ID parameter changes

  const handleReservation = async (doseNumber) => {
    try {
      // Make a POST request to reserve the dose
      const response = await axios.post(`http://localhost:8080/api/Reservation`, {
        doseNumber: doseNumber,
        reservationDate: reservationDate.toISOString(), // Use the selected reservation date
        appUserId: UserId,
        vaccineId: id,
        vaccinationCenterId: vaccineDetails.vaccinationCenterId,
        // Assuming appUserId is obtained from authentication
      });
      console.log(response.data); // Log the reservation response
     
    } catch (error) {
      console.error('Error reserving dose:', error);
    }
  };

  return (
    <div>
      <Navbar />
      {/* <link rel="stylesheet" href="/asset/PatientVaccineDetails/PatientVaccineDetails.css"></link> */}
      <link rel="stylesheet" href="/assets/PatientVaccineDetails/PatientVaccineDetails.css"></link>
      <h1>Vaccine Details</h1>
      {vaccineDetails && (
        <div className="container">
          <div className="product-card">
            <div className="image">
              <img src="/photo.png" alt="" />
            </div>
            <div className="card-content">
              <h3>Name: {vaccineDetails.name}</h3>
              <h3>Precautions: {vaccineDetails.precautions}</h3>
              <h3>Time Needed Between doses: {vaccineDetails.timeGapFirstSecondDoseInDays}</h3>
              
              {/* Date picker */}
            <h3>choose date to Get the dose : <DatePicker selected={reservationDate} onChange={date => setReservationDate(date)} /></h3>  
              
              <div className="store-purchase">
                <div className="buy">
                  {/* Pass reservationDate to handleReservation */}
                  <button className="dose" onClick={() => handleReservation('FirstDose')}>Reserve first dose</button>
                  <button className="dose" onClick={() => handleReservation('SecondDose')}>Reserve second dose</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PatientVaccineDetails;
