import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/auth-provider/Index";
import HomePage from "./views/home/Index";
import ExplorerPage from "./views/explorer/Index";
import DashboardPage from "./views/dashboard/Index";
import AssetSearchPage from "./views/asset-search/asset-search/Index";
import MarketSearchPage from "./views/asset-search/market-search/Index";
import { UnifiedWalletProvider } from "@jup-ag/wallet-adapter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <div className="!font-rogan bg-black-6 px-[3%] py-3 md:px-[2.5%] md:py-6 min-h-screen">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explorer" element={<ExplorerPage />} />
              <Route path="/explorer/:id" element={<MarketSearchPage />} />
              <Route
                path="/explorer/asset/:assetId"
                element={<AssetSearchPage />}
              />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
          </AuthProvider>
          <Toaster
            position="top-right"
            gutter={12}
            containerStyle={{ margin: "24px", zIndex: 10000000000 }}
            toastOptions={{
              success: {
                duration: 6000,
                style: {
                  border: "1.5px solid #27AE60",
                },
              },
              error: {
                duration: 7000,
                style: {
                  border: "1.5px solid #EB5757",
                },
              },
              style: {
                fontFamily: "'Lato', sans-serif",
                fontWeight: "400",
                fontSize: "13.5px",
                maxWidth: "460px",
                padding: "12px 16px",
                backgroundColor: "#FcF7FB",
                color: "#4D4D4D",
              },
            }}
          />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
