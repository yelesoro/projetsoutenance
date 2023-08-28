import Stepper from "../../Components/Stepper/stepper";
import Header from "../historique/header/Header";
import "./enCours.scss";
import { Surface, Shape, Group } from "react-art";
import { useState, useEffect } from "react";
import axios from "axios";
import Stepper2 from "../../Components/Stepper/stepper2";
import Stepper3 from "../../Components/Stepper/stepper3";
import Stepper4 from "../../Components/Stepper/stepper4";
import Stepper5 from "../../Components/Stepper/stepper5";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import format from "date-fns/format";


const TriangleEquilateral = () => {
  const triangleSize = 30; // Modifier la taille du triangle si nécessaire

  const path = `
      M ${triangleSize / 2} 0
      L ${triangleSize} ${(triangleSize * Math.sqrt(3)) / 2}
      L 0 ${(triangleSize * Math.sqrt(3)) / 2}
      Z
    `;

  return (
    <Surface width={triangleSize} height={(triangleSize * Math.sqrt(3)) / 2}>
      <Group>
        <Shape
          d={path}
          fill="#87cd51" // Modifier la couleur du triangle si nécessaire
        />
      </Group>
    </Surface>
  );
};

const EnCours = () => {



  const { shopId } = useParams();
  const [commandeDetails, setCommandeDetails] = useState([]); // Initialize with null



  
  useEffect(() => {
    const apiUrl = `http://localhost:3002/commandes/${shopId}`;

    axios.get(apiUrl)
      .then(response => {
        setCommandeDetails(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données des vendeurs :', error);
      });
  }, [shopId]);
  console.log(commandeDetails)




  
  return (
    <div>
      <Header />
      {commandeDetails.map(detail=>(
        <div key={detail.id_order}>
                {detail.id_status == 1 ? (
        <>
          <div className="stepper">
            <Stepper />
          </div>
          <div className="stepper1">
          <div className="pointer">
            <TriangleEquilateral />
          </div>
          <div className="square">
            <div>
              <center>
                <h1>
                  <span>Début </span> de la commande
                </h1>
              </center>
            </div>
            <div className="infos">
              <p>
                Numéro de commande :<span> {detail.order_number} </span>
              </p>
              <br /><br />
              <p>
                quantité demandée :<span> {detail.total_order} kg</span>
              </p>
              <br /><br />
              <p>
                Prix :<span> {detail.total_price} frcs cfa </span>
              </p>
              <br /><br />
              <p>
                Jour de commande :<span> {format(new Date(detail.order_date), 'dd/MM/yyyy')}   à {detail.time} </span>
              </p><br /><br />
              <center>
              <p><Link to={`/ordersdetails/${detail.id_order}`}><button className="btnn1">Voir plus</button></Link></p>
              </center>
                          
            </div>
          </div>
          </div>
        </>
      ) : detail.id_status == 2 ? (
        <>
          <div className="stepper">
            <Stepper2 />
          </div>
          <div className="stepper2">
          <div className="pointer">
            <TriangleEquilateral />
          </div>
          <div className="square">
            <div>
              <center>
                <h1>
                 Commande <span>Validée </span>
                </h1>{" "}
              </center>
            </div>
            <div className="infos">
              <p>
                Numéro de commande :<span> {detail.order_number} </span>
              </p>
              <br /><br />
              <p>
                quantité demandée :<span> {detail.total_order} kg</span>
              </p>
              <br /><br />
              <p>
                Prix :<span> {detail.total_price} frcs cfa </span>
              </p>
              <br /><br />
              <p>
                Jour de commande :<span> {format(new Date(detail.order_date), 'dd/MM/yyyy')}   à {detail.time} </span>
              </p>
              <div className="div12">
              <center>
              <p><Link to={`/ordersdetails/${detail.id_order}`}><button className="btnn1">Voir plus</button></Link></p>
              </center>
              <center>
              <p><button className="btnn1">Procéder au paiement </button></p>
              </center>
              </div>
            </div>
          </div>
          </div>
        </>
      ) : detail.id_status == 3 ? (
        <>
        <div className="stepper">
            <Stepper3 />
          </div>
          <div className="stepper3">
          <div className="pointer">
            <TriangleEquilateral />
          </div>
          <div className="square">
            <div>
              <center>
                <h1>
                 Commande <span>en cours de préparation </span>
                </h1>{" "}
              </center>
            </div>
            <div className="infos">
              <p>
                Numéro de commande :<span> {detail.order_number} </span>
              </p>
              <br /><br />
              <p>
                quantité demandée :<span> {detail.total_order} kg</span>
              </p>
              <br /><br />
              <p>
                Prix :<span> {detail.total_price} frcs cfa </span>
              </p>
              <br /><br />
              <p>
                Jour de commande :<span> {format(new Date(detail.order_date), 'dd/MM/yyyy')}   à {detail.time} </span>
              </p><br /><br />
              <center>
              <p><Link to={`/ordersdetails/${detail.id_order}`}><button className="btnn1">Voir plus</button></Link></p>
              </center>
            </div>
          </div>
          </div>
        </>
      ): detail.id_status == 4 ?(
        <>
        <div className="stepper">
            <Stepper4 />
          </div>
          <div className="stepper4">
          <div className="pointer">
            <TriangleEquilateral />
          </div>
          <div className="square">
            <div>
              <center>
                <h1>
                 Commande <span>prête à être livrée </span>
                </h1>{" "}
              </center>
            </div>
            <div className="infos">
              <p>
                Numéro de commande :<span> {detail.order_number} </span>
              </p>
              <br /><br />
              <p>
                quantité demandée :<span> {detail.total_order} kg</span>
              </p>
              <br /><br />
              <p>
                Prix :<span> {detail.total_price} frcs cfa </span>
              </p>
              <br /><br />
              <p>
                Jour de commande :<span> {format(new Date(detail.order_date), 'dd/MM/yyyy')}   à {detail.time} </span>
              </p><br /><br />
              <center>
              <p><Link to={`/ordersdetails/${detail.id_order}`}><button className="btnn1">Voir plus</button></Link></p>
              </center>
            </div>
          </div>
          </div>
        </>

      ): 
      <>
        <div className="stepper">
            <Stepper5 />
          </div>
          <div className="stepper5">
          <div className="pointer">
            <TriangleEquilateral />
          </div>
          <div className="square">
            <div>
              <center>
                <h1>
                 Commande <span>livrée </span>
                </h1>{" "}
              </center>
            </div>
            <div className="infos">
              <p>
                Numéro de commande :<span> {detail.order_number} </span>
              </p>
              <br /><br />
              <p>
                quantité demandée :<span> {detail.total_order} kg</span>
              </p>
              <br /><br />
              <p>
                Prix :<span> {detail.total_price} frcs cfa </span>
              </p>
              <br /><br />
              <p>
                Jour de commande :<span> {format(new Date(detail.order_date), 'dd/MM/yyyy')}   à {detail.time} </span>
              </p>
              <div className="div12">
              <center>
              <p><Link to={`/ordersdetails/${detail.id_order}`}><button className="btnn1">Voir plus</button></Link></p>
              </center>
              <center>
              <p><button className="btnn1">Procéder au paiement </button></p>
              </center>
              </div>
              

            </div>
            
          </div>

          </div>
        </>
      }
        </div>
      ))}

    </div>
  );
};

export default EnCours;
