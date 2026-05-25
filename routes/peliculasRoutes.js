import Router from 'express'
const router = Router()

// Ruta para mostrar la lista de películas
router.get('/', (req, res) => {
  // Aquí puedes obtener la lista de películas desde tu base de datos o cualquier otra fuente de datos
  res.send('Aquí se mostraría la lista de películas')
})

export default router