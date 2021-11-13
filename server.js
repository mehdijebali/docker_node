const app = require( 'express' )()

app.get( '/', ( req, res ) => {
  res.send( 'docker is easy !' )
} )
const port = process.env.PORT || 5000;
app.listen( port, () => console.log( 'server is running !!' ) )