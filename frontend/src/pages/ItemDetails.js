import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function ItemDetails() {
  const [itemData, setItemData] = useState();
  const [itemPriceData, setItemPriceData] = useState();
  const rootUrl = 'http://localhost:8080'
  let setNumber = useParams();

  const fetchItemDetails = async () => {
    await fetch(`${rootUrl}/set/${setNumber.id}`)
    .then((response) => response.json())
    .then((data) => setItemData(data))
  }

  const fetchItemPriceDetails = async () => {
    await fetch(`${rootUrl}/set/${setNumber.id}/price`)
    .then((response) => response.json())
    .then((data) => setItemPriceData(data))
  }
  useEffect(() => {
    fetchItemDetails();
    fetchItemPriceDetails();
  }, [setNumber.id])

  if (itemData && itemPriceData) {
    return (
      <>
        <h1>that item tho</h1>
        <div>
          <h2>{itemData.name}</h2>
          <img src={itemData.image_url} alt={`${itemData.name} image`}></img>
          <p>Average Listing Price: ${itemPriceData.avg_price}</p>
        </div>
        <span>{itemData.length}</span>
      </>
    )
  }
}

export default ItemDetails;
