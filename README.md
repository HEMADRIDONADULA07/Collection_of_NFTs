NFT Minting and Listing
This repository contains a JavaScript program for minting and listing NFTs (Non-Fungible Tokens). The program allows you to create NFT objects with metadata and store them in an array. It also provides a function to list the NFTs along with their metadata.

Getting Started
To run the NFT minting and listing program, you can follow these steps:

Clone the repository to your local machine:
bash
Copy code
git clone https://github.com/your-username/nft-minting-and-listing.git
cd nft-minting-and-listing
Open the index.js file in your preferred code editor.

Make sure you have Node.js installed on your machine. If not, you can download it from the official Node.js website: https://nodejs.org/

Run the program using Node.js:

bash
Copy code
node index.js
Usage
The index.js file contains the following functions:

mintNFT(_name, _description, _image, _traits, _rarity, _attributes)
This function allows you to mint an NFT by providing various parameters for its metadata. The NFT object is then stored in the nfts array.

Parameters:

_name (string): Name of the NFT.
_description (string): Description of the NFT.
_image (string): Path to the image file representing the NFT.
_traits (object): An object containing traits of the NFT.
_rarity (object): An object defining the rarity of the NFT.
_attributes (object): An object specifying additional attributes of the NFT.
listNFTs()
This function lists all the minted NFTs along with their metadata. It retrieves the NFTs from the nfts array and displays their details using console.log().

getTotalSupply()
This function prints the total number of minted NFTs in the nfts array.

Minting NFTs
You can mint NFTs by calling the mintNFT function with appropriate parameters for each NFT you want to create. An example of minting three NFTs is provided in the index.js file. You can customize the parameters to create NFTs with different metadata.

Listing NFTs
To see the list of minted NFTs and their metadata, you can call the listNFTs function.

Total Supply
The getTotalSupply function will display the total number of minted NFTs.
