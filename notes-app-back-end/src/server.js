import express from 'express';
import cors from 'cors'
import routes from './routes.js';
import process from 'process';

const app = express();
const port = process.env.PORT || 5001;
const host = process.env.NODE_ENV !== 'production'? 'localhost' : '0.0.0.0';

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on port http://${host}:${port}`);
});