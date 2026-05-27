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

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const [rows] = await pool.query('SELECT * FROM peliculas WHERE id = ?', [id])
    if (rows.length === 0) {
      return res.status(404).send('Película no encontrada')
    }
    let pelicula = rows[0]
    res.render('mostrar', { title: pelicula.titulo, pelicula})
  } catch (error) {
    console.error('Error al obtener la película:', error)
    res.status(500).send('Error al obtener la película')
  }
})

router.get('/agregar', async (req, res) => {
  // Obtener géneros para el dropdown
  try {
    const [generos] = await pool.query('SELECT DISTINCT genero FROM peliculas')
    console.log('Géneros obtenidos:', generos) // Verificar los géneros obtenidos
    res.render('insertar', { title: 'Agregar Película', generos })
  } catch (error) {
    console.error('Error al obtener los géneros:', error)
    res.status(500).send('Error al obtener los géneros')
  }
})

router.post('/agregar', async (req, res) => {
  try {
    const { titulo, director, anio, genero, duracion, nota, pais } = req.body
    await pool.query('INSERT INTO peliculas (titulo, director, anio, genero, duracion, nota, pais) VALUES (?, ?, ?, ?, ?, ?, ?)', [titulo, director, anio, genero, duracion, nota, pais])
    res.redirect('/peliculas')
  } catch (error) {
    console.error('Error al agregar la película:', error)
    res.status(500).send('Error al agregar la película')
  }
})

export default router