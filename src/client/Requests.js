import AxiosClient from "./AxiosClient";

// Get all assets
export const getAssets = async () => {
  try {
    const response = await AxiosClient.get("/assets");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Get asset by id
export const getAssetById = (id) => {
  return AxiosClient.get(`/asset/${id}`);
};

// Create asset
export const createAsset = (credit, mnemonic, cost, userId) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return AxiosClient.post(
    "/credit/create",
    { userId, credit, mnemonic, cost },
    config
  );
};

// List asset by user
export const listAssetByUser = (id) => {
  return AxiosClient.get(`/asset/user/${id}`);
};

// Update asset price
export const updateAssetPrice = (id, price) => {
  return AxiosClient.put(`/asset/${id}`, price);
};

// Buy asset
export const buyAsset = async (id, asset) => {
  return AxiosClient.put(`/asset/buy/${id}`, asset);
};

//Login User
export const loginUser = (user) => {
  const config = {
    withCredentials: false,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  return AxiosClient.post("/login", user, config);
};

// Register User
export const registerUser = (user) => {
  return AxiosClient.post("/register", user);
};
