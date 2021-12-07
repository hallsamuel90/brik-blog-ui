import { Box, Typography } from "@mui/material"

const App = () => {
  return (
    <Box
      sx={{
        height: "90v",
        width: "auto",
        justifyContent: "center",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <header className="App-header">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </header>
        <Typography variant="h1">All I Do Is Code</Typography>
        <Typography variant="h2">a blog by Sam Hall</Typography>
        <Typography>coming soon...</Typography>
      </Box>
    </Box>
  )
}

export default App
