import { useState, useEffect } from "react";
import { loadFromLocalStorage, writeToLocalStorage } from "./util/localstorage";
import styled from "styled-components";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import TrendingPalettesPage from "./pages/TrendingPalettesPage.js";
import LoginPage from "./pages/LoginPage.js";
import Navigation from "./components/Navigation.js";
import Button from "./components/Button.js";
import { login } from "./services/users";
import { savePalette, getPalette } from "./services/palettes";

const initialPalette = {
  name: "New Palette",
  colors: [],
};

function App() {
  const [currentUser, setCurrentUser] = useState(
    loadFromLocalStorage("currentUser") ?? null
  );
  const navigate = useNavigate();
  const [palette, setPalette] = useState(initialPalette);

  useEffect(() => {
    const loadPalette = async () => {
      try {
        const data = await getPalette(currentUser._id);
        const newPalette = data[0] || initialPalette;
        setPalette(newPalette);
      } catch (error) {
        console.log(error);
      }
    };
    if (currentUser) {
      writeToLocalStorage("currentUser", currentUser);
      loadPalette();
    } else {
      setPalette(initialPalette);
    }
  }, [currentUser]);

  const handlePaletteChange = async (changedPalette) => {
    setPalette(changedPalette);
    savePalette(
      {
        ...changedPalette,
        colors: changedPalette.colors.map((color) => ({ code: color.code })),
      },
      currentUser._id
    );
  };

  const handleLogin = async (name) => {
    try {
      const user = await login(name);
      setCurrentUser(user);
    } catch (err) {
      setCurrentUser(null);
      alert("Login failed");
    }
  };

  return (
    <Layout>
      <Header>
        <h1>Color Saver</h1>
        <Wrapper>
          {currentUser && (
            <>
              <Navigation />
              <UserInfoWrapper>
                <UserName>
                  {currentUser.firstName} {currentUser.lastName}
                </UserName>
                <Button
                  onClick={() => {
                    setCurrentUser(null);
                    navigate("/");
                  }}
                >
                  Logout
                </Button>
              </UserInfoWrapper>
            </>
          )}
        </Wrapper>
      </Header>
      <Main>
        {currentUser ? (
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  currentUserName={`${currentUser?.firstName} ${currentUser.lastName}`}
                  palette={palette}
                  onChange={handlePaletteChange}
                />
              }
            />
            <Route
              path="/trending-palettes"
              element={<TrendingPalettesPage />}
            />
          </Routes>
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </Main>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  max-width: 860px;
  margin: 0 auto;
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const UserName = styled.p`
  color: var(--color-highlight);
`;

const Header = styled.header`
  width: 100%;
`;

const Main = styled.main`
  width: 100%;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
