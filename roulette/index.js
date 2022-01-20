console.log("My first NodeJS application");
const web3 = require("@solana/web3.js");
const connection=new web3.Connection(web3.clusterApiUrl("devnet"),"confirmed");
console.log(connection);

//generation
const userWallet= web3.Keypair.generate();
console.log(userWallet);