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

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})

app.get('/', (req, res) => {
  const pathList = ['/inventorySummary', '/inventory', '/inventory/:id', '/set/setNum']
  res.status(200).json(pathList);
})

app.get('/inventorySummary', (req, res) => {
  var condensedInventory = [];
  oauth.get('https://api.bricklink.com/api/store/v1/inventories', TV, TS, (error, data, response) => {
    if (error) console.error(error);
    var inventoryData = JSON.parse(data);
    
    for (const element of inventoryData.data) {
      console.log(element);
      inventoryItemToPush = {
        name: element.item.name,
        inventory_id: element.inventory_id,
        set_number: element.item.no,
        set_details_url: `set/${element.item.no}`
      }
      condensedInventory.push(inventoryItemToPush);
    }
    res.status(200).json(condensedInventory);
  })
})

app.get('/inventory', (req, res) => {
  oauth.get('https://api.bricklink.com/api/store/v1/inventories', TV, TS, (error, data, response) => {
    console.log('wtf')
    if (error) console.error(error);
    var inventoryData = JSON.parse(data);
      res.status(200).json(inventoryData.data);
  })
})

app.get('/inventory/:id', (req, res) => {
  const inventoryId = req.params.id;
  var result;

  for (const element of inventoryData.data) {
    if (element.inventory_id.toString() === inventoryId) {
      result = element;
      break;
    }
  }
  res.status(200).json(result);
})

app.get('/set/:setNum', async (req,res) => {
  const setNumber = req.params.setNum;

  await oauth.get(`https://api.bricklink.com/api/store/v1/items/set/${setNumber}`, TV, TS, (error, data, response) => {
    if (error) console.error(error);
    var catSetDetails = JSON.parse(data);
    res.status(200).json(catSetDetails.data);
  })
})

app.get('/set/:setNum/price', async (req,res) => {
  const setNumber = req.params.setNum;
  const searchQuery = req.query;

  if (Object.keys(searchQuery).length > 0) {
    let queryString = '';
    for (key in searchQuery) {
      queryString += (`${key}=${searchQuery[key]}&`)
    }
    let finalQueryString = queryString.slice(0, queryString.length-1)
    oauth.get(`https://api.bricklink.com/api/store/v1/items/set/${setNumber}/price?${finalQueryString}`, TV, TS, (error, data, response) => {
          console.log('yo wtf', setNumber)

      if (error) {
        console.log(`this shit....https://api.bricklink.com/api/store/v1/items/set/${setNumber}/price?${finalQueryString}`)
        console.error(error)
      }
      var catSetDetails = JSON.parse(data);
      res.status(200).json(catSetDetails.data);
    })

  } else {
    oauth.get(`https://api.bricklink.com/api/store/v1/items/set/${setNumber}/price`, TV, TS, (error, data, response) => {
      console.log('actually wtf')
      if (error) console.error(error);
      var catSetDetails = JSON.parse(data);
      console.log(catSetDetails.data);
      res.status(200).json(catSetDetails.data);
    })
  }
})