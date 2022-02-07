// importing express and next
const express = require('express');
const next = require('next');

const app = express();

const mysql = require('mysql2');
const db_connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	database: 'db',
	password: '!B1c2d3e4cuong',
});

const userarr = [];
const userchoice = [];

const sql = `SELECT name, birth, school, subject, username, email, rating FROM user`;
db_connection.query(sql, (error, results, fields) => {
	if (error) {
		return console.error(error.message);
	}
	userarr.push(results);
});

app.get('/user/find', (req, res) => {
	for (let i = 0; i < 8; i++) {
		userchoice.push(userarr[i]);
	}
	res.send(userchoice);
});

app.get('/user/find/findagain', (req, res) => {
	userchoice = [];
	for (let i = 0; i < userarr.length - 8; i++) {
		for (let j = 8; j < userarr.length; j++) {
			userarr[i] = userarr[j];
			for (let k = 0; k < 8; k++) {
				userchoice.push(userarr[k]);
			}
		}
	}
	res.send(userchoice);
});

function inviteUser(req, res) {
	db_connection.query('SELECT id FROM user', function (err, rows) {
		if (!err) {
			// ADD Group id to the user access the id with id
			res.json(rows);
		}
	});
}

function acceptInvitation(req, res) {
	db_connection.query('select teamId from team', function (err, rows) {
		if (!err) {
			// ADD user id to the group access the id with req.body.userId
			res.json(rows);
		}
	});
}

app.get('/user/invite', function (req, res) {
	inviteUser(req, res);
});

app.get('/user/accept', function (req, res) {
	acceptInvitation(req, res);
});

// const connection = mysql.createConnection({
// 	host: 'localhost',
// 	database: '',
// });

// connection.connect();

// const port = process.env.port || 3000;
// const dev = process.env.NODE_ENV !== 'production';

// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
// 	const server = express();

// 	server.get('/', (req, res) => {
// 		res.person = JSON.stringify({
// 			name: 'Khang',
// 			class: '12CA3',
// 		});
// 		return app.render(req, res, '/');
// 	});

// 	server.get('/profile/:username', (req, res) => {
// 		console.log(req.params.username);
// 		res.user = {
// 			name: 'Yoimiya',
// 			bio: 'A pyromaniac who loves studying explosions and fireworks!',
// 			school: 'RMIT University',
// 			DOB: '09/10/2004',
// 			displaySubjects: ['Computer Sciences', 'Physics'],
// 			drawerSubjects: [
// 				'Computer Science',
// 				'Physics',
// 				'Discrete Maths',
// 				'Literature',
// 			],
// 			email: 'yoimbestgirl@gmail.com',
// 			imageURL: '/yoimiya profile.jpeg',
// 		};
// 		return app.render(req, res, '/profile/:username');
// 	});

// 	server.get('/invites', (req, res) => {
// 		res.inviteList = [
// 			{
// 				sender: 'hanthang',
// 				name: 'Dacct',
// 				members: [
// 					'hanthang',
// 					'cuongchuck',
// 					'ozymandio',
// 					'Catou',
// 					'newboy12',
// 					'completeboy12',
// 				],
// 				sent: JSON.parse(JSON.stringify(new Date())),
// 				teamPhotoURL: '/yoimiya profile.jpeg',
// 			},
// 			{
// 				sender: 'hanthang',
// 				name: 'Dacct',
// 				members: [
// 					'hanthang',
// 					'cuongchuck',
// 					'ozymandio',
// 					'Catou',
// 					'newboy12',
// 					'completeboy12',
// 				],
// 				sent: JSON.parse(JSON.stringify(new Date())),
// 				teamPhotoURL: '/yoimiya profile.jpeg',
// 			},
// 			{
// 				sender: 'hanthang',
// 				name: 'Dacct',
// 				members: [
// 					'hanthang',
// 					'cuongchuck',
// 					'ozymandio',
// 					'Catou',
// 					'newboy12',
// 					'completeboy12',
// 				],
// 				sent: JSON.parse(JSON.stringify(new Date())),
// 				teamPhotoURL: '/yoimiya profile.jpeg',
// 			},
// 		];
// 		return app.render(req, res, '/invites');
// 	});

// 	server.all('*', (req, res) => {
// 		return handle(req, res);
// 	});

// 	server.listen(port, (err) => {
// 		if (err) throw err;
// 		console.log(`Listening on port ${port}`);
// 	});
// });
