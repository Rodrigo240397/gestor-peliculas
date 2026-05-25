import Router from 'express'
import pool from '../db/conection.js'
const router = Router()

router.use(Router.urlencoded({ extended: true }))

// Ruta para mostrar la lista de películas
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM peliculas')
    res.render('peliculas', { title: 'Lista de Películas', peliculas: rows })
  } catch (error) {
    console.error('Error al obtener las películas:', error)
    res.status(500).send('Error al obtener las películas')
  }
})

export default router