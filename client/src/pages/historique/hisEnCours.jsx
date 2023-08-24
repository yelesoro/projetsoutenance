
import Header from "./header/Header";
import { Link } from "react-router-dom";
import "./historique.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import {useShop} from '../../contexts/shopContext'
import format from "date-fns/format";

const HisEnCours = () => {

  const { shopInfo,setShopInfo } = useShop(); // Obtenez la pfonction setProductInfo depuis le contexte

  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:3002/enCoursValidation";

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des produits :", error);
      });
  }, []);
  console.log(data)

  return (
    <div>
      <Header />

      <center>
        <div className="header1">
          <nav className="navbar1">
            <Link to={"/historique"} className="linkp22">
              EnCoursDeValidation
            </Link>
            <Link className="link" to={"/historique"}>
              Validées
            </Link>
            <Link className="link" to={"/historique"}>
              Livrées
            </Link>
          </nav>
        </div>
      </center>

      <div className="tablediv">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__body">
                <div>
                  <div className="table-wrapper" style={{ maxHeight: "500px", overflowY: "scroll" }}>
                    <table>
                      <thead>
                        <tr>
                          <th>Numéro de commande</th>
                          <th>Produit</th>
                          <th>Adresse</th>
                          <th>Date de commande</th>
                          <th>quantité commandée</th>
                          <th>Prix</th>
                          <th>Statut</th>

                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item) => (
                          <tr key={item.id_order}>
                            <td>{item.order_number}</td>
                            <td>{item.name} <br /><br /><img src={item.product_image} alt="" className="imgd" /></td>
                            <td>{item.shopping_adress}</td>
                            <td>Commandé le {format(new Date(item.order_date), 'dd/MM/yyyy')}   à {item.time}</td>
                            <td>{item.total_order} kg</td>
                            <td>{item.price} frs cfa</td>
                            {item.status ? (
                              item.status === "debut" ? (
                                <td >
                                  <div className="status1">Attente de validation</div>
                                  
                                </td>
                              ) : item.status === "comvalide" ? (
                                <td > <div className="status2">Commande validée</div></td>
                              ) : item.status === "encprepa" ? (
                                <td><div className="status3">En préparation</div></td>
                              ) : item.status === "pretalivrer" ? (
                                <td ><div className="status4">Prêt à être livré</div></td>
                              ) : item.status === "livrée" ? (
                                <td ><div className="status5">Commande livrée</div></td>
                              ) : null
                            ) : null}

                            <td>
                              <Link to={`/commandes/${item.id_order}`} >
                                <button className="btn2">Voir plus</button>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HisEnCours;
