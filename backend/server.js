const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const corsOptions = {
    origin: true, // Allow only requests from your React application
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 8005;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
