import "./OrderDetails.scss";
import { useParams, useNavigate } from "react-router-dom";
import { ordersData } from "../../../../datas/data";
import Products from "../../Products/Products/Products";
import mansky from "../../../assets/mansky.jpg";
import magLogo from "../../../assets/logos/mag-logo.png";

export default function OrderDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const order = ordersData.find((order) => order.id === parseInt(id));

  const goBack = () => {
    navigate("/api/orders");
  };

  const handleEdit = () => {
    navigate(`/api/orders/${order.id}/edit`);
  };

  const handlePrint = () => {
    console.log("Print");
  };

  return (
    <div className="OrderDetails-page">
      <div className="order-container">
        {/* HEAD */}
        <div className="head">
          <div className="row1 flex flex-row">
            <div className="left">
              <div className="magazin-info rounded">
                <p className="magazin-name font-bold text-xl">MOTO ISLAND</p>
                <p className="adress">
                  1 RUE DU DOCTEUR JEAN FIOLLE 13006 MARSEILLE
                </p>
                <div className="line">
                  <p>Siret :</p>
                  <p>89193829200010</p>
                </div>
                <div className="line">
                  <p>N°Tva :</p>
                  <p>FR48891938292</p>
                </div>
                <div className="line">
                  <p>Capital :</p>
                  <p>1€- MARSEILLE</p>
                </div>
                <div className="line">
                  <p>Téléphone :</p>
                  <p>0491524486</p>
                </div>
                <div className="line">
                  <p>@Mail :</p>
                  <p>contact@motor-island.com</p>
                </div>
                <div className="line">
                  <p>Site web :</p>
                  <p>www.motor-island.fr</p>
                </div>
              </div>

              <div className="facture-number rounded mt-2 bg-gray">
                Facture Numero: 123456
              </div>
            </div>

            <div className="right ml-4">
              <div className="row1 flex justify-between">
                <div className="logo">
                  <img src={magLogo} alt="mag-logo" />
                </div>
                <div className="date rounded">
                  <p>Date de la facture : 01/01/2024</p>
                  <p>Date de la vente : 01/01/2024</p>
                </div>
              </div>

              <div className="client-container flex justify-center mt-4">
                <div className="rounded w-1/2">
                  <div className="client flex font-bold">
                    <p className="genre">Madame</p>
                    <p className="name ml-1">PATANIA EMMANUELLE</p>
                  </div>
                  <p className="adress">
                    09 RUE BRETEUIL 13006 MARSEILLE 6EME ARRONDISSE{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row2 mt-2">
            <div className="moto-info rounded">
              <div className="line">
                <p> Numero Serie</p>
                <p>www</p>
              </div>
              <div className="line">
                <p>Immatriculation</p>
                <p>CT-362-A</p>
              </div>
              <div className="line">
                <p>Kilometrage</p>
                <p>15000</p>
              </div>
              <div className="line">
                <p>Marque</p>
                <p>PIAGGIO</p>
              </div>
              <div className="line">
                <p>Modele</p>
                <p>Modele</p>
              </div>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="body flex flex-col">
          <div className="body-content flex-1 border">
            <table className="table-auto w-full">
              <tr className="title bg-gray">
                <th>Code</th>
                <th>Désignation</th>
                <th>Quantité</th>
                <th>Tarif Ht</th>
                <th>R</th>
                <th>Tarif Net</th>
                <th>Total HT</th>
                <th>Tva</th>
              </tr>

              <tr className="">
                <td>NETCARB</td>
                <td>NETTOYAGE AU BAC ULTRA SON</td>
                <td className="text-end">1,00</td>
                <td className="text-end">62,50</td>
                <td className="text-end"></td>
                <td className="text-end">62,50</td>
                <td className="text-end">62,50</td>
                <td className="text-end">20,00</td>
              </tr>

              <tr className="">
                <td>Code</td>
                <td>NETTOYAGE SYSTEME DE CARBURATION</td>
                <td className="text-end">1,00</td>
                <td className="text-end">62,50</td>
                <td className="text-end"></td>
                <td className="text-end">62,50</td>
                <td className="text-end">62,50</td>
                <td className="text-end">20,00</td>
              </tr>
            </table>
          </div>

          <div className="body-sub flex">
            <div className="left border bg-gray">
              <p className="sub">Ventilation TVA</p>
            </div>
            <div className="total flex flex-col flex-1 border">
              <div className="row flex border">
                <div className="col bg-gray">Total HT</div>
                <div className="col">250 €</div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
              </div>
              <div className="row flex border">
                <div className="col bg-gray">Taux</div>
                <div className="col">20,00 %</div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
              </div>
              <div className="row flex border">
                <div className="col bg-gray">Montant</div>
                <div className="col">250 €</div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
              </div>
            </div>
            <div className="date ml-4 mt-4">
              <p className="rounded bg-gray">Date de Paiement : 01/01/2024</p>
            </div>
          </div>
        </div>

        <p className="mt-2">Liste des règlements</p>

        {/* FOOT */}
        <div className="foot flex flex-col mt-4">
          <div className="row1 w-full flex">
            <div className="left border bg-gray p-1 flex-1">
              Le 25/03/2024 : 364,16 € en Carte Bancaire
            </div>

            <div className="middle rounded flex flex-col justify-center items-center bg-gray ml-2">
              <div className="row flex">
                <p className="font-bold">Total Pièces HT</p>
                <p className="">188,88</p>
              </div>
              <div className="row flex">
                <p className="font-bold">Total MO HT</p>
                <p className="">188,88</p>
              </div>
            </div>

            <div className="right rounded text-center flex flex-col justify-center ml-2">
              <div className="row flex justify-between">
                <p className="font-bold text-center">Total HT</p>
                <p className="text-right">303,47 €</p>
              </div>
              <div className="row flex justify-between">
                <p className="font-bold text-center">Total TVA</p>
                <p className="text-right">60,69 €</p>
              </div>
              <div className="row flex justify-between">
                <p className="font-bold text-center">Total TTC à Payer</p>
                <p className="font-bold text-right">364,16 €</p>
              </div>
            </div>
          </div>

          <div className="row2 text-center mt-2 sub">
            <p>
              Version GAD Garage : 10.56 --- DD : 5255594659 --- SEP :
              ACYJztm13QV8cYBu18JH --- 1791
            </p>
            <p>
              Pour les professionnels : indemnité forfaitaire pour frais de
              recouvrement de 40€,conformément aux articles L441-3 et L441-6.Pas
              d'escompte pour paiement anticipé,passée la date{" "}
            </p>
            <p>
              d'échéance,tout paiement différé entraine l'application d'une
              pénalité de 3 fois de taux d'intérêt légal (Loi n°92-1442 du 31
              décembre 1992)
            </p>
            <p>
              Assurance professionnelle : responsabilité civile obligatoire,
              souscrite auprès de …… , valable en France
            </p>
          </div>
        </div>
      </div>

      {/* <div className="print btn btn-success mt-4" onClick={handlePrint}>
        Print
      </div>
      <div className="goBack btn btn-secondary mt-2" onClick={goBack}>
        Go Back
      </div> */}
    </div>
  );
}
