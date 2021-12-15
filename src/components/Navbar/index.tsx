import { AppBar, Box, Toolbar, Typography, Link } from "@mui/material"

export interface NavbarProps {
  toolbarColor?: string
}

export const Navbar = ({ toolbarColor = "#264653" }: NavbarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: toolbarColor }}>
          <Link
            href="https://allidoiscode.com/"
            underline="hover"
            sx={{ color: "white" }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              All I Do is Code
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
