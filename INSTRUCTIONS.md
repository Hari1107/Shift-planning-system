1. Create the React App:
```
npx create-react-app shift-planning-system
cd shift-planning-system

```

2. Install Frontend dependencies:
```
npm install axios react-router-dom moment-timezone

```

3. Install backend dependencies:

``` 
npm install express mongoose moment-timezone concurrently

```
4. Update JSON to run back-end and front-end concurrently like this:
{
  "name": "shift-planning-system",
  "version": "1.0.0",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "node backend/server.js",
    "dev": "concurrently \"npm run server\" \"npm start\""
  },
  // ... rest of your package.json
  
}


5. Run the application:

``` 
npm run dev

```


