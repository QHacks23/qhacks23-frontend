import { NFTStorage } from "nft.storage";

const NFT_STORAGE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEJDNmE2RTYyNzMzYzcyMWJDYTY5ODkxYjFDNzllYjk3QmQ1QUI5YTAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3NDkzMjM0MjE5NSwibmFtZSI6InFoYWNrczIzIn0.P4jqIiT4qmVirWg0yokdJA4jomyejnrA5OUgw78EAbk";

async function storeNFT(asset) {
  const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY });
  return nftstorage.store(asset);
}

export default storeNFT;
