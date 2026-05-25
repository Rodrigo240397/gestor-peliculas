import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));
// Servir los archivos de Bootstrap como estáticos
app.use('/css/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, (error) => {
  if (error) {
    console.error('Error starting server:', error.message)
    return
  }
  console.log('Server is running on http://localhost:3000')
})