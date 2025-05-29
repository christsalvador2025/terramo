import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { AppBar, Button, Container, Stack, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeaderLogo from "./header-logo";
import NavLink from "./header-nav-link";


// logging out
import { useLogoutMutation } from '../../api/authApi';
import { useAppDispatch } from '../../app/hooks';
import { clearCredentials } from '../../features/auth/authSlice';
import { toast } from 'react-hot-toast';



const Header = ({
  currentPath,
  isAuthenticated,
}: {
  currentPath: string;
  isAuthenticated: boolean;
  setIsAuthenticated?: (value: boolean) => void;
}) => {
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    // setIsAuthenticated(false);
    // navigate("/login");
    try {
      await logout().unwrap(); // Call backend logout endpoint
    } catch (error) {
      console.error('Logout error:', error); // Optional: handle error if needed
    }

    dispatch(clearCredentials()); // Clear Redux + LocalStorage
    toast.success("You have been logged out.");
    navigate('/login'); // Or homepage
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack
            direction="row"
            spacing={2}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
          >
            <Stack direction="row" spacing={2}>
              <HeaderLogo />
              <NavLink
                href="/customers"
                label="Kunden"
                currentPath={currentPath}
              />
              <NavLink
                href="/stakeholders"
                label="Stakeholders"
                currentPath={currentPath}
              />
              <NavLink
                href="/persons"
                label="Persons"
                currentPath={currentPath}
              />
              <NavLink
                href="/sample-form"
                label="Upload"
                currentPath={currentPath}
              />
            </Stack>
            <Button
              variant="contained"
              color="primary"
              startIcon={isAuthenticated ? <LogoutIcon /> : <LoginIcon />}
              onClick={isAuthenticated ? handleLogout : handleLogin}
            >
              {isAuthenticated ? "Logout" : "Login"}
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
