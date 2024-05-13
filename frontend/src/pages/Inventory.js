import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackgroundImage from '../assets/SpaceBacksplash.png';
import { Grid, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Inventory() {
  const [inventoryData, setInventoryData] = useState([]);
  const [inventoryDataWithSalesAnalytics, setInventoryDataWithSalesAnalytics] = useState([]);
  const rootUrl = 'http://localhost:8080';
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInventory = async () => {
      const response = await fetch(`${rootUrl}/inventory`);
      const data = await response.json();
      setInventoryData(data);
    };
    fetchInventory();
  }, []);

  useEffect(() => {
    const fetchSalesAnalytics = async () => {
      const tempInventoryWithSalesShit = [];
      for (const inventoryItem of inventoryData) {
        if (inventoryItem.item.type === 'SET') {
          const salesInfoShidder = await fetch(`${rootUrl}/set/${inventoryItem.item.no}/price?guide_type=sold&country_code=US`).then((response) => response.json());
          inventoryItem.sales_anal = salesInfoShidder;
          const listInfoShidder = await fetch(`${rootUrl}/set/${inventoryItem.item.no}/price?country_code=US`).then((response) => response.json());
          inventoryItem.list_anal = listInfoShidder;
          if (inventoryItem.item.name.indexOf('&#39;') > -1) {
            let fixedName = inventoryItem.item.name.replace("&#39;", "'")
            inventoryItem.item.name = fixedName;
          }
          tempInventoryWithSalesShit.push(inventoryItem);
        }
      }
      setInventoryDataWithSalesAnalytics(tempInventoryWithSalesShit);
    };

    if (inventoryData.length > 0) {
      fetchSalesAnalytics();
    }
  }, [inventoryData]);

  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})`, minHeight: window.innerHeight - 50 }}>
      <h1 style={{ backgroundColor: '#960000', margin: 0 }}>Inventory</h1>
      <Grid container sx={{ padding: '30px', justifyContent: 'center' }}>
        {inventoryDataWithSalesAnalytics.map((element) => (
          <Card key={`${element.item.name}-${element.item.no}`} sx={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'red', margin: '30px', maxWidth: '3750px', width: '375px', backgroundColor: '#2b2b2b', padding: '5px' }}>
            <h3 style={{ margin: '0', borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: 'red' }}>
              <Link to={`http://localhost:3000/set/${element.item.no}`} style={{ color: '#ffffff', cursor: 'pointer', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#960000'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>
                {element.item.name.length > 33 ? (element.item.name.substring(0, 33) + '...') : element.item.name}
              </Link>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ minHeight: '100%', marginTop: '5px', paddingRight: '5px', maxWidth: '100px', width: '80px', borderRightWidth: '1px', borderRightStyle: 'solid', borderRightColor: 'red' }}>
                <img src={`//img.bricklink.com/S/${element.item.no}.jpg`} alt='shit broke tho' style={{ cursor: 'pointer', minWidth: '80px', minHeight: '60px' }} onClick={() => navigate(`/set/${element.item.no}`)} />
                <div style={{ color: '#ffffff' }}># {element.item.no.substring(0, element.item.no.length - 2)}</div>
                <div style={{ color: '#ffffff' }}>Quantity: <b style={{ color: '#00ffff' }}>{element.quantity}</b></div>
              </div>
              <Grid container sx={{ padding: '5px' }}>
                <Grid item>
                  <div>
                    <span style={{ color: '#ffffff' }}>6 Mo Avg Sales: ${element.sales_anal.avg_price} - [{element.sales_anal.total_quantity} | {element.sales_anal.unit_quantity}]</span>
                  </div>
                  <div>
                    <span style={{ color: '#ffffff' }}>Min/Max Price: ${element.sales_anal.min_price} / ${element.sales_anal.max_price}</span>
                  </div>
                </Grid>
                <Grid item>
                  <div>
                    <span style={{ color: '#ffffff' }}>Avg Listings: ${element.list_anal.avg_price} - [{element.list_anal.total_quantity} | {element.list_anal.unit_quantity}]</span>
                  </div>
                  <div>
                    <span style={{ color: '#ffffff' }}>Min/Max Price: ${element.list_anal.min_price} / ${element.list_anal.max_price}</span>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Card>
        ))}
      </Grid>
      <span>{inventoryData.length}</span>
    </div>
  );
}

export default Inventory;
