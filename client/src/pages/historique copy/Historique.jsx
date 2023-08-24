import Header from "./header/Header";
import { Link } from "react-router-dom";
import './historique.scss'
import { useState, useEffect } from "react";
import axios from "axios";


const Historique = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      const apiUrl = "http://localhost:3002/historique";
  
      axios
        .get(apiUrl)
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des produits :', error);
        });
    }, []);
  
    return (
        <div>
            <Header/>
            
            <center>
            <div className="header1">
                <nav className="navbar1">
                    <Link to={'/historique'} className="linkp">EnCoursDeValidation</Link>
                    <Link className="link" to={'/historique'}>Validées</Link>
                    <Link className="link" to={'/historique'}>Livrées</Link>
                </nav>
            </div>
            </center>

            <div className="tablediv">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <div>
                  <div className="table-wrapper">
                    <table>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Nom</th>
                          <th>Description</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map(item => (
                          <tr key={item.id_order}>
                            <td>{item.order_d}</td>
                            <td>{item.total_order}</td>
                            <td>{item.order_number}</td>
                            <td><Link to = {"/enCours"}><button className="btn2">Voir plus</button></Link></td>
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

export default Historique;


