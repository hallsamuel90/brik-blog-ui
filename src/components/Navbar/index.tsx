import { AppBar, Box, Toolbar, Typography } from "@mui/material"

export const Navbar = ({ toolbarColor = "#264653" }: NavbarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: toolbarColor }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            All I Do is Code
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

interface NavbarProps {
  toolbarColor?: string
}
