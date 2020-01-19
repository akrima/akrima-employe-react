import React from 'react'
import { Button, Modal,Card } from 'react-bootstrap'
import ImageConverter from '../../shared/components/ImageConverter'

const ModalBox = (props) => {
  const getFullName = () => {
    if (props.currentemploye !== undefined) {
      return props.currentemploye.prenom.toUpperCase() + " " + props.currentemploye.nom.toUpperCase();
    }
  }

  const formatDate = (date) => {
    date = new Date(date)
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {getFullName()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ width: '100%' }}>
              <ImageConverter data={props.currentemploye ? props.currentemploye.photo.data : null} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <ul>
                  <li><span><b>Hiring date:</b>{props.currentemploye ? formatDate(props.currentemploye.dateEmbauche) : ""}</span></li>
                  <li><span><b>BirthDay:</b>:{props.currentemploye ? formatDate(props.currentemploye.dateNaissance) : ""}</span></li>
                  <li><span><b>Phone number:</b>:{props.currentemploye ? props.currentemploye.phoneNumber : ""}</span></li>
                  <li><span><b>Office:</b>{props.currentemploye ? props.currentemploye.office : ""}</span></li>
                  <li><span><b>Salary:</b>{props.currentemploye ? props.currentemploye.salary : ""}</span></li>
                  <li><span><b>Position:</b>{props.currentemploye ? props.currentemploye.position : ""}</span></li>
                </ul>
          </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalBox