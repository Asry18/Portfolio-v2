// index.js
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
	const { name, email, message } = req.body;

	try {
		// read credentials from environment variables for safety
		const gmailUser = process.env.GMAIL_USER;
		const gmailPass = process.env.GMAIL_PASS;
		if (!gmailUser || !gmailPass) {
			console.warn('GMAIL_USER or GMAIL_PASS not set in environment. Email may fail.');
		}

		let transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: gmailUser || "",
				pass: gmailPass || "",
			},
		});

		await transporter.sendMail({
			from: email,
			to: "realmasu124@gmail.com",
			subject: `Message from ${name}`,
			text: message,
		});

		res.json({ success: true });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Failed to send email" });
	}
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
