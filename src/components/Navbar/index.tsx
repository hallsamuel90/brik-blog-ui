import { AppBar, Box, Toolbar, Typography, Link } from "@mui/material"
import { useTheme } from "@emotion/react"
import { BrikTheme } from "../../shared/theme"

export interface NavbarProps {
  toolbarColor?: string
}

export const Navbar = ({}: NavbarProps) => {
  const theme = useTheme() as BrikTheme

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: theme.palette.primary.main }}>
          <Link
            href="https://allidoiscode.com/"
            underline="hover"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Brik
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
