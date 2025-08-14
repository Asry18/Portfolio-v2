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
		let transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "your-email@gmail.com",
				pass: "your-app-password",
			},
		});

		await transporter.sendMail({
			from: email,
			to: "your-email@gmail.com",
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
