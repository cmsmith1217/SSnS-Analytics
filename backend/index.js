const express = require('express')
const app = express();
const cors = require('cors');
const OAuth = require('oauth');

app.use(express.json());
app.use(cors());

const port = 8080;

const CK = '832F821F42A647B4BA117032F10E0294';
const CS = 'E890C351E4084E27A65545F474A08A88';
const TV = '82E9FF6EF73F495B93CF831F59A31C72';
const TS = 'DEC4004EC3F6478AA54D3F906688C83C';

const oauth = new OAuth.OAuth('', '', CK, CS, '1.0', null, 'HMAC-SHA1');

const preSeedInventoryItems = [
  {
    "inventory_id": 408912967,
    "item": {
      "no": "75325-1",
      "name": "The Mandalorian&#39;s N-1 Starfighter",
      "type": "SET",
      "category_id": 65
    },
    "color_id": 0,
    "color_name": "(Not Applicable)",
    "quantity": 2,
    "new_or_used": "N",
    "completeness": "S",
    "unit_price": "99.9900",
    "bind_id": 0,
    "description": "Mint NISB 10/10; Factory sealed in Excellent Condition. Owned by adult collector in smoke and pet free household. Little to no shelf wear. Can send pictures of box upon request.",
    "remarks": "",
    "bulk": 1,
    "is_retain": false,
    "is_stock_room": true,
    "stock_room_id": "A",
    "date_created": "2024-05-06T04:00:00.000Z",
    "my_cost": "0.0000",
    "sale_rate": 0,
    "tier_quantity1": 0,
    "tier_price1": "0.0000",
    "tier_quantity2": 0,
    "tier_price2": "0.0000",
    "tier_quantity3": 0,
    "tier_price3": "0.0000",
    "my_weight": "0.0000"
  },
  {
    "inventory_id": 408913055,
    "item": {
      "no": "75333-1",
      "name": "Obi-Wan Kenobi&#39;s Jedi Starfighter",
      "type": "SET",
      "category_id": 65
    },
    "color_id": 0,
    "color_name": "(Not Applicable)",
    "quantity": 1,
    "new_or_used": "N",
    "completeness": "S",
    "unit_price": "59.9900",
    "bind_id": 0,
    "description": "Mint NISB 10/10; Factory sealed in Excellent Condition. Owned by adult collector in smoke and pet free household. Little to no shelf wear. Can send pictures of box upon request.",
    "remarks": "",
    "bulk": 1,
    "is_retain": false,
    "is_stock_room": true,
    "stock_room_id": "A",
    "date_created": "2024-05-06T04:00:00.000Z",
    "my_cost": "0.0000",
    "sale_rate": 0,
    "tier_quantity1": 0,
    "tier_price1": "0.0000",
    "tier_quantity2": 0,
    "tier_price2": "0.0000",
    "tier_quantity3": 0,
    "tier_price3": "0.0000",
    "my_weight": "0.0000"
  },
  {
    "inventory_id": 409013571,
    "item": {
      "no": "75354-1",
      "name": "Coruscant Guard Gunship",
      "type": "SET",
      "category_id": 65
    },
    "color_id": 0,
    "color_name": "(Not Applicable)",
    "quantity": 1,
    "new_or_used": "N",
    "completeness": "S",
    "unit_price": "299.9900",
    "bind_id": 0,
    "description": "Mint NISB 10/10; Factory sealed in Excellent Condition. Owned by adult collector in smoke and pet free household. Little to no shelf wear. Can send pictures of box upon request.",
    "remarks": "",
    "bulk": 1,
    "is_retain": false,
    "is_stock_room": true,
    "stock_room_id": "A",
    "date_created": "2024-05-07T04:00:00.000Z",
    "my_cost": "0.0000",
    "sale_rate": 0,
    "tier_quantity1": 0,
    "tier_price1": "0.0000",
    "tier_quantity2": 0,
    "tier_price2": "0.0000",
    "tier_quantity3": 0,
    "tier_price3": "0.0000",
    "my_weight": "0.0000"
  },
  {
    "inventory_id": 408858118,
    "item": {
      "no": "75357-1",
      "name": "Ghost & Phantom II",
      "type": "SET",
      "category_id": 65
    },
    "color_id": 0,
    "color_name": "(Not Applicable)",
    "quantity": 1,
    "new_or_used": "N",
    "completeness": "S",
    "unit_price": "349.9900",
    "bind_id": 0,
    "description": "Mint NISB 10/10; Factory sealed in Excellent Condition. Owned by adult collector in smoke and pet free household. Little to no shelf wear. Can send pictures of box upon request.",
    "remarks": "",
    "bulk": 1,
    "is_retain": false,
    "is_stock_room": true,
    "stock_room_id": "A",
    "date_created": "2024-05-06T04:00:00.000Z",
    "my_cost": "0.0000",
    "sale_rate": 0,
    "tier_quantity1": 0,
    "tier_price1": "0.0000",
    "tier_quantity2": 0,
    "tier_price2": "0.0000",
    "tier_quantity3": 0,
    "tier_price3": "0.0000",
    "my_weight": "0.0000"
  },
  {
    "inventory_id": 409013708,
    "item": {
      "no": "75364-1",
      "name": "New Republic E-Wing vs. Shin Hati's Starfighter",
      "type": "SET",
      "category_id": 65
    },
    "color_id": 0,
    "color_name": "(Not Applicable)",
    "quantity": 1,
    "new_or_used": "N",
    "completeness": "S",
    "unit_price": "219.9900",
    "bind_id": 0,
    "description": "Mint NISB 10/10; Factory sealed in Excellent Condition. Owned by adult collector in smoke and pet free household. Little to no shelf wear. Can send pictures of box upon request.",
    "remarks": "",
    "bulk": 1,
    "is_retain": false,
    "is_stock_room": true,
    "stock_room_id": "A",
    "date_created": "2024-05-07T04:00:00.000Z",
    "my_cost": "0.0000",
    "sale_rate": 0,
    "tier_quantity1": 0,
    "tier_price1": "0.0000",
    "tier_quantity2": 0,
    "tier_price2": "0.0000",
    "tier_quantity3": 0,
    "tier_price3": "0.0000",
    "my_weight": "0.0000"
  },
  {
    "inventory_id": 408912846,
    "item": {
      "no": "30680-1",
      "name": "AAT - Mini polybag",
      "type": "SET",
      "category_id": 65
    },
    "color_id": 0,
    "color_name": "(Not Applicable)",
    "quantity": 5,
    "new_or_used": "N",
    "completeness": "S",
    "unit_price": "9.9900",
    "bind_id": 0,
    "description": "Mint NISB 10/10; Factory sealed in Excellent Condition. Owned by adult collector in smoke and pet free household.",
    "remarks": "",
    "bulk": 1,
    "is_retain": false,
    "is_stock_room": true,
    "stock_room_id": "A",
    "date_created": "2024-05-06T04:00:00.000Z",
    "my_cost": "0.0000",
    "sale_rate": 0,
    "tier_quantity1": 0,
    "tier_price1": "0.0000",
    "tier_quantity2": 0,
    "tier_price2": "0.0000",
    "tier_quantity3": 0,
    "tier_price3": "0.0000",
    "my_weight": "0.0000"
  },
  {
    "inventory_id": 409013744,
    "item": {
      "no": "75387-1",
      "name": "Boarding the Tantive IV",
      "type": "SET",
      "category_id": 65
    },
    "color_id": 0,
    "color_name": "(Not Applicable)",
    "quantity": 1,
    "new_or_used": "N",
    "completeness": "S",
    "unit_price": "119.9900",
    "bind_id": 0,
    "description": "Mint NISB 10/10; Factory sealed in Excellent Condition. Owned by adult collector in smoke and pet free household. Little to no shelf wear. Can send pictures of box upon request.",
    "remarks": "",
    "bulk": 1,
    "is_retain": false,
    "is_stock_room": true,
    "stock_room_id": "A",
    "date_created": "2024-05-07T04:00:00.000Z",
    "my_cost": "0.0000",
    "sale_rate": 0,
    "tier_quantity1": 0,
    "tier_price1": "0.0000",
    "tier_quantity2": 0,
    "tier_price2": "0.0000",
    "tier_quantity3": 0,
    "tier_price3": "0.0000",
    "my_weight": "0.0000"
  },
  {
    "inventory_id": 409013779,
    "item": {
      "no": "75378-1",
      "name": "BARC Speeder Escape",
      "type": "SET",
      "category_id": 65
    },
    "color_id": 0,
    "color_name": "(Not Applicable)",
    "quantity": 1,
    "new_or_used": "N",
    "completeness": "S",
    "unit_price": "59.9900",
    "bind_id": 0,
    "description": "Mint NISB 10/10; Factory sealed in Excellent Condition. Owned by adult collector in smoke and pet free household. Little to no shelf wear. Can send pictures of box upon request.",
    "remarks": "",
    "bulk": 1,
    "is_retain": false,
    "is_stock_room": true,
    "stock_room_id": "A",
    "date_created": "2024-05-07T04:00:00.000Z",
    "my_cost": "0.0000",
    "sale_rate": 0,
    "tier_quantity1": 0,
    "tier_price1": "0.0000",
    "tier_quantity2": 0,
    "tier_price2": "0.0000",
    "tier_quantity3": 0,
    "tier_price3": "0.0000",
    "my_weight": "0.0000"
  },
  {
    "inventory_id": 408857435,
    "item": {
      "no": "40686-1",
      "name": "Trade Federation Troop Carrier",
      "type": "SET",
      "category_id": 65
    },
    "color_id": 0,
    "color_name": "(Not Applicable)",
    "quantity": 5,
    "new_or_used": "N",
    "completeness": "S",
    "unit_price": "99.9900",
    "bind_id": 0,
    "description": "Mint NISB 10/10; Factory sealed in Excellent Condition. Owned by adult collector in smoke and pet free household. Little to no shelf wear. Can send pictures of box upon request.",
    "remarks": "",
    "bulk": 1,
    "is_retain": false,
    "is_stock_room": true,
    "stock_room_id": "A",
    "date_created": "2024-05-06T04:00:00.000Z",
    "my_cost": "0.0000",
    "sale_rate": 0,
    "tier_quantity1": 0,
    "tier_price1": "0.0000",
    "tier_quantity2": 0,
    "tier_price2": "0.0000",
    "tier_quantity3": 0,
    "tier_price3": "0.0000",
    "my_weight": "0.0000"
  },
  {
    "inventory_id": 408913150,
    "item": {
      "no": "5008818",
      "name": "Coin, LEGO Star Wars Battle of Yavin Collectable Coin",
      "type": "GEAR",
      "category_id": 1147
    },
    "color_id": 0,
    "color_name": "(Not Applicable)",
    "quantity": 5,
    "new_or_used": "N",
    "unit_price": "24.9900",
    "bind_id": 0,
    "description": "10/10 MINT NISB. Excellent Condition. Owned by adult collector in a smoke and pet free household.",
    "remarks": "",
    "bulk": 1,
    "is_retain": false,
    "is_stock_room": true,
    "stock_room_id": "A",
    "date_created": "2024-05-06T04:00:00.000Z",
    "my_cost": "0.0000",
    "sale_rate": 0,
    "tier_quantity1": 0,
    "tier_price1": "0.0000",
    "tier_quantity2": 0,
    "tier_price2": "0.0000",
    "tier_quantity3": 0,
    "tier_price3": "0.0000",
    "my_weight": "0.0000"
  }
]
var inventoryItems = [];
var catalogItems = [];
var newItemSalesUSAData = [];
var newItemListingsUSAData = [];

const setList = [
  30680,
  30685,
  40686,
  75372,
  75375,
  75376,
  75377,
  75378,
  75379,
  75380,
  75381,
  75382,
  75383,
  75384,
  75387,
  75395,
  30654,
  40591,
  40658,
  66775,
  66778,
  75344,
  75345,
  75346,
  75347,
  75348,
  75349,
  75350,
  75351,
  75352,
  75353,
  75354,
  75355,
  75356,
  75357,
  75358,
  75359,
  75360,
  75361,
  75362,
  75363,
  75364,
  75365,
  75366,
  75367,
  75368,
  75369,
  75370,
  75371,
  30495,
  40531,
  40557,
  40558,
  66708,
  75320,
  75321,
  75322,
  75323,
  75324,
  75325,
  75326,
  75327,
  75328,
  75329,
  75330,
  75331,
  75332,
  75333,
  75335,
  75336,
  75337,
  75338,
  75339,
  75340,
  75341,
  75342,
  75343,
  30388,
  40451,
  40483,
  66674,
  75295,
  75296,
  75297,
  75298,
  75299,
  75300,
  75301,
  75302,
  75304,
  75305,
  75306,
  75307,
  75308,
  75309,
  75310,
  75311,
  75312,
  75313,
  75314,
  75315,
  75316,
  75319,
  30386,
  40407,
  75263,
  75264,
  75265,
  75266,
  75267,
  75268,
  75269,
  75270,
  75271,
  75272,
  75273,
  75274,
  75275,
  75276,
  75277,
  75278,
  75279,
  75280,
  75281,
  75283,
  75284,
  75286,
  75288,
  75290,
  75291,
  75292,
  75293,
  75294,
  77904,
  40333,
  40362,
  75224,
  75225,
  75226,
  75227,
  75228,
  75229,
  75233,
  75234,
  75242,
  75243,
  75244,
  75248,
  75256,
  75257
]
const testSetList = [
  40686,
  75357,
]

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})

app.get('/', (req, res) => {
  const pathList = ['/inventorySeed', '/newItemSalesUSAData', '/newItemListingsUSAData', '/inventory', '/inventorySummary', '/inventory/:id']
  res.status(200).json(pathList);
})

app.get('/inventorySeed', (req, res)=> {
  if (inventoryItems.length === 0) {
    oauth.get('https://api.bricklink.com/api/store/v1/inventories', TV, TS, (error, data, response) => {
      if (error) console.error(error);
      let parsedData = JSON.parse(data);
      console.log(parsedData)
      if (parsedData.meta.description.indexOf('blocked consumer_key') === -1 ) {
        inventoryItems = parsedData.data
        console.log('Inventory Seeded')
        res.status(200).json(inventoryItems);
      } else {
        console.log('fuckin carl')
        res.status(400).json('fuckin carl')
      }
    })
  } else {
    console.log('Inventory Already Seeded')
  }
})

app.get('/catalogSeed', (req,res) => {
  if (catalogItems.length === 0) {
    for (const setNum of testSetList) {
      oauth.get(`https://api.bricklink.com/api/store/v1/items/set/${setNum}`, TV, TS, (error, data, response) => {
        if (error) console.error(error);
        var catSetDetails = JSON.parse(data);
        res.status(200).json(catSetDetails.data);
      })
    }
    console.log('Catalog Seeded')
  } else {
    console.log('Catalog Already Seeded')
  }
})

app.get('/newItemSalesUSADataSeed', (req, res) => {
  for (const setNum of testSetList) {
    oauth.get(`https://api.bricklink.com/api/store/v1/items/set/${setNum}/price?guide_type=sold&country_code=US`, TV, TS, (error, data, response) => {
      if (error) console.error(error);
      let parsedData = JSON.parse(data);
      console.log(parsedData)
        newItemSalesUSAData.push(parsedData.data);
    })
  }
  console.log('NewItemSalesUSAData Seeded')
  res.status(200).json(newItemSalesUSAData);
})

app.get('/newItemListingsUSADataSeed', (req, res) => {
  for (const setNum of testSetList) {
    oauth.get(`https://api.bricklink.com/api/store/v1/items/set/${setNum}/price?country_code=US`, TV, TS, (error, data, response) => {
      if (error) console.error(error);
      let parsedData = JSON.parse(data);
      newItemListingsUSAData.push(parsedData.data);
    })
  }
  console.log('NewItemListingsUSAData Seeded')
  res.status(200).json(newItemListingsUSAData);
})

app.get('/inventory', (req, res) => {
  if (inventoryItems.length > 0) {
    console.log(inventoryItems)
    res.status(200).json(inventoryItems);
  } else {
    res.status(400).json('No Items in Inventory (Whole Inventory)')
  }
})

app.get('/inventorySummary', (req, res) => {
  if (inventoryItems.length > 0) {
    var condensedInventory = [];
    for (const element of inventoryItems) {
      let inventoryItemToPush = {
        name: element.item.name,
        inventory_id: element.inventory_id,
        set_number: element.item.no,
        set_details_url: `set/${element.item.no}`
      }
      condensedInventory.push(inventoryItemToPush);
    }
    console.log('Inventory Quicklook Returned')
    res.status(200).json(condensedInventory);
  } else {
    res.status(400).json('No Items in Inventory (Inventory Summary)')
  }
})

app.get('/inventory/:id', (req, res) => {
  const inventoryId = req.params.id;
  if (inventoryItems.length > 0) {
    for (const element of inventoryItems) {
      if (element.inventory_id.toString() === inventoryId) {
        console.log('Inventory Id Match Found')
        res.status(200).json(element);
      }
    }
  } else {
    res.status(400).json('No Items in Inventory (Inventory ID)')
  }
})

// app.get('/set-lookup/:setNum', async (req,res) => {
//   const setNumber = req.params.setNum;

//   await oauth.get(`https://api.bricklink.com/api/store/v1/items/set/${setNumber}`, TV, TS, (error, data, response) => {
//     if (error) console.error(error);
//     var catSetDetails = JSON.parse(data);
//     res.status(200).json(catSetDetails.data);
//   })
// })

// app.get('/set-lookup/:setNum/price', async (req,res) => {
//   const setNumber = req.params.setNum;
//   const searchQuery = req.query;

//   if (Object.keys(searchQuery).length > 0) {
//     let queryString = '';
//     for (key in searchQuery) {
//       queryString += (`${key}=${searchQuery[key]}&`)
//     }
//     let finalQueryString = queryString.slice(0, queryString.length-1)
//     oauth.get(`https://api.bricklink.com/api/store/v1/items/set/${setNumber}/price?${finalQueryString}`, TV, TS, (error, data, response) => {

//       if (error) {
//         console.error(error)
//       }
//       var catSetDetails = JSON.parse(data);
//       res.status(200).json(catSetDetails.data);
//     })

//   } else {
//     oauth.get(`https://api.bricklink.com/api/store/v1/items/set/${setNumber}/price`, TV, TS, (error, data, response) => {
//       console.log('actually wtf')
//       if (error) console.error(error);
//       var catSetDetails = JSON.parse(data);
//       console.log(catSetDetails.data);
//       res.status(200).json(catSetDetails.data);
//     })
//   }
// })