import https from 'https';
import fs from 'fs';
import { parse } from 'url';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
	key: fs.readFileSync('localhost+1-key.pem'),
	cert: fs.readFileSync('localhost+1.pem'),
};

app.prepare().then(() => {
	https
		.createServer(httpsOptions, (req, res) => {
			const parsedUrl = parse(req.url, true);
			handle(req, res, parsedUrl);
		})
		.listen(3000, err => {
			if (err) throw err;
			console.log('> Ready on https://localhost:3000');
		});
});
