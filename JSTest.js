/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/


// I have created comments to explain this Code
// Variable is created named NFTs
const NFTs = [];


// Function named mintNFT is created
// This function will take in some values as parameters
function mintNFT (name, eyeColor, shirtType, adornment) {
// Object named NFT is created with its metadata
  const NFT = {
    "name" : name,
    "eyeColor" : eyeColor,
    "shirtType" : shirtType,
    "adornment" : adornment,
  }
// Here we are pushing object and its metadata to variable
  NFTs.push(NFT);
  console.log("Minted NFT: " + name);
}


// Function named listNFTs is created
// It has for loop that goes through all NFTs
function listNFTs () {
  for(i=0;i<NFTs.length;i++){
    console.log("\nId: \t\t" + (i + 1));
    console.log("Name: \t\t" + NFTs[i].name);
    console.log("EyeColor: \t" + NFTs[i].eyeColor);
    console.log("shirtType: \t" + NFTs[i].shirtType);
    console.log("Adornment: \t" + NFTs[i].adornment);
  }
}


// Function named getTotalSupply is created
// It prints the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\nTotal number of NFTs created: " + NFTs.length);
}


// Calling all functions created above
mintNFT("Mwebits", "Green", "Polo", "EarRings");
mintNFT("Mutanty", "Blue", "Sweatshirt", "Watch");
mintNFT("Drakee", "Red", "Hoodie", "GoldChain");
mintNFT("Vakase", "Green", "Henley", "Hat");
mintNFT("Bueble", "Blue", "Military", "Tattoo");
listNFTs();
getTotalSupply();

// ThankYou
