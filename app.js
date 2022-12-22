var express = require('express'); //llamamos a Express
var app = express();

var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.get('/', function(req, res) {
  res.json({
  	img1: 'https://i.ibb.co/tQBw1x9/dall-e-38.png',
  	img2: 'https://i.ibb.co/5YYdXt5/dall-e-37.png',
  	img3: 'https://i.ibb.co/DzQyh0V/dall-e-36.png',
  	img4: 'https://i.ibb.co/QpgddKR/dall-e-35.png',
  	img5: 'https://i.ibb.co/Z1f4gHt/dall-e-34.png',
  	img6: 'https://i.ibb.co/8jFqbbW/dall-e-33.png',
  	img7: 'https://i.ibb.co/3kBWkc3/dall-e-32.png',
  	img8: 'https://i.ibb.co/qBBYxYt/dall-e-31.png',
  	img9: 'https://i.ibb.co/bJZ68ps/dall-e-30.png',
  	img10: 'https://i.ibb.co/ZJ6v685/dall-e-29.png',
  	img11: 'https://i.ibb.co/5GDMCKH/dall-e-28.png',
  	img12: 'https://i.ibb.co/QkYcqj6/dall-e-27.png',
  	img13: 'https://i.ibb.co/vjr6V6C/dall-e-26.png',
  	img14: 'https://i.ibb.co/KjTmFb1/dall-e-25.png',
  	img15: 'https://i.ibb.co/zbRtQzL/dall-e-24.png',
  	img16: 'https://i.ibb.co/xssyBbx/dall-e-23.png',
  	img17: 'https://i.ibb.co/BT0ds0p/dall-e-22.png',
  	img18: 'https://i.ibb.co/YbjCzy3/dall-e-21.png',
  	img19: 'https://i.ibb.co/cyd5j39/dall-e-20.png',
  	img20: 'https://i.ibb.co/3cHXMYV/dall-e-19.png',
  	img21: 'https://i.ibb.co/CtkzN3Y/dall-e-18.png',
  })   
})

app.get('/', (req, res) => {
	res.send("La paágina de inicio")
})

app.listen(port)
console.log('API escuchando en el puerto ' + port)