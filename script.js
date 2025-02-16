const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/compare", async (req, res) => {
    const { pickup, drop } = req.query;

    // Example API requests for different cab services
    try {
        const uberResponse = await axios.get("https://api.uber.com/v1/estimates/price", {
            params: { start_lat: pickup.lat, start_lng: pickup.lng, end_lat: drop.lat, end_lng: drop.lng },
            headers: { Authorization: `Bearer YOUR_UBER_API_KEY` }
        });

        const olaResponse = await axios.get("https://api.olacabs.com/v1/bookings/prices", {
            params: { pickup, drop },
            headers: { Authorization: `Bearer YOUR_OLA_API_KEY` }
        });

        res.json({
            uber: uberResponse.data,
            ola: olaResponse.data,
        });
    } catch (error) {
        res.status(500).send("Error fetching data");
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
