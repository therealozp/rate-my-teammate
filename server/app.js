// importing express and next
const express = require('express');
const next = require('next');
const mysql = require('mysql');

// const connection = mysql.createConnection({
// 	host: 'localhost',
// 	database: '',
// });

// connection.connect();

const port = process.env.port || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.get('/', (req, res, next) => {
		res.person = JSON.stringify({
			name: 'Khang',
			class: '12CA3',
		});
		return app.render(req, res, '/');
	});

	server.get('/invites', (req, res) => {
		res.inviteList = [
			{
				sender: 'hanthang',
				name: 'Dacct',
				members: [
					'hanthang',
					'cuongchuck',
					'ozymandio',
					'Catou',
					'newboy12',
					'completeboy12',
				],
				sent: JSON.parse(JSON.stringify(new Date())),
				teamPhotoURL: '/yoimiya profile.jpeg',
			},
			{
				sender: 'hanthang',
				name: 'Dacct',
				members: [
					'hanthang',
					'cuongchuck',
					'ozymandio',
					'Catou',
					'newboy12',
					'completeboy12',
				],
				sent: JSON.parse(JSON.stringify(new Date())),
				teamPhotoURL: '/yoimiya profile.jpeg',
			},
			{
				sender: 'hanthang',
				name: 'Dacct',
				members: [
					'hanthang',
					'cuongchuck',
					'ozymandio',
					'Catou',
					'newboy12',
					'completeboy12',
				],
				sent: JSON.parse(JSON.stringify(new Date())),
				teamPhotoURL: '/yoimiya profile.jpeg',
			},
		];
		return app.render(req, res, '/invites');
	});

	server.all('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`Listening on port ${port}`);
	});
});
