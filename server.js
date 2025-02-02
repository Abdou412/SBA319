      const express = require('express');
        const app = express();
        require('dotenv').config();
        const PORT =  process.env.PORT
        app.listen(PORT, () => {
          console.log(`hey abdou do you know that the Server is running on port ${PORT}`);
        });