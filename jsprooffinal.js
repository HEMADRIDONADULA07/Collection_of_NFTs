// Create a variable to hold the number of NFTs
const nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(_name, _description, _image, _traits, _rarity, _attributes) {
  // Create an NFT object with metadata
  const nft = {
    name: _name,
    description: _description,
    image: _image,
    traits: _traits,
    rarity: _rarity,
    attribute: _attributes,
  };
  nfts.push(nft);
  console.log("Minted: " + _name);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
  for (let counter = 0; counter < nfts.length; counter++) {
    console.log("\nID: " + (counter + 1));
    console.log("Name: " + nfts[counter].name);
    console.log("Description: " + nfts[counter].description);
    console.log("Image: " + nfts[counter].image);
    console.log("Traits:");
    console.log("  - Fur Color: " + nfts[counter].traits.furColor);
    console.log("  - Background: " + nfts[counter].traits.background);
    console.log(
      "  - Accessories: " + nfts[counter].traits.accessories.join(", ")
    );
    console.log("Rarity:");
    console.log("  - Total Supply: " + nfts[counter].rarity.totalSupply);
    console.log("  - Edition: " + nfts[counter].rarity.edition);
    console.log("  - Traits Scarcity:");
    console.log(
      "    - Fur Color: " + nfts[counter].rarity.traitsScarcity.furColor
    );
    console.log(
      "    - Background: " + nfts[counter].rarity.traitsScarcity.background
    );
    console.log(
      "    - Accessories: " + nfts[counter].rarity.traitsScarcity.accessories
    );
    console.log("Attributes:");
    console.log("  - Creator: " + nfts[counter].attribute.creator);
    console.log("  - Collection: " + nfts[counter].attribute.collection);
    console.log("  - Year Created: " + nfts[counter].attribute.yearCreated);
    console.log("-----------------------");
  }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total NFTs: " + nfts.length);
}

// Call your functions below this line

// Mint some NFTs and store them in the variable and array
mintNFT(
  "NFT 1",
  "This is the first NFT",
  "image1.png",
  {
    furColor: "brown",
    background: "Light Golden Yellow",
    accessories: ["sunglasses", "cap"],
  },
  {
    totalSupply: 1,
    edition: "Limited Edition",
    traitsScarcity: {
      furColor: "rare",
      background: "common",
      accessories: "uncommon",
    },
  },
  {
    creator: "Hemadri",
    collection: "MVSO Club",
    yearCreated: 2023,
  }
);
mintNFT(
  "NFT 2",
  "This is the Second NFT",
  "image2.png",
  {
    furColor: "black",
    background: "Light Green",
    accessories: ["Skeleton_Locket", "cap"],
  },
  {
    totalSupply: 1,
    edition: "Limited Edition",
    traitsScarcity: {
      furColor: "rare",
      background: "common",
      accessories: "uncommon",
    },
  },
  {
    creator: "Hemadri",
    collection: "MVSO Club",
    yearCreated: 2023,
  }
);
mintNFT(
  "NFT 3",
  "This is the Third NFT",
  "image3.png",
  {
    furColor: "white",
    background: "Blue",
    accessories: ["Bowtie", "Glasses"],
  },
  {
    totalSupply: 1,
    edition: "Limited Edition",
    traitsScarcity: {
      furColor: "common",
      background: "rare",
      accessories: "uncommon",
    },
  },
  {
    creator: "Hemadri",
    collection: "MVSO Club",
    yearCreated: 2023,
  }
);
// List the NFTs
listNFTs();

// Get the total supply
getTotalSupply();
