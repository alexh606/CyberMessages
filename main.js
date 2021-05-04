// A small script to randomly pair messages together to offer CyberSecurity wisdom. 

//Object containing three arrays of statements
var collatedArr = {
    problemState: ["Humans make mistakes", "Data is valuable", "You can't trust the internet", "People will steal your data", "Ransomware is on the rise", "The world is full of very smart hackers and tools for those who aren't"],
    connectState: ["so", "and that's why you should", "which means it's important to", "and therefore we must"],
    solutionState: ["MFA everything.", "educate, educate, educate.", "have zero trust.", "consider a layered defence", "backup. Secure backups. Test backups."]
};

var wordIOne = Math.floor(Math.random() * collatedArr.problemState.length);
var wordITwo = Math.floor(Math.random() * collatedArr.connectState.length);
var wordIThree = Math.floor(Math.random() * collatedArr.solutionState.length);

var wordOne = collatedArr.problemState[wordIOne];
var wordTwo = collatedArr.connectState[wordITwo];
var wordThree = collatedArr.solutionState[wordIThree];

const header = String.raw`

______     __  __     ______     ______     ______        ______     _____     __   __   __     ______     ______    
/\  ___\   /\ \_\ \   /\  == \   /\  ___\   /\  == \      /\  __ \   /\  __-.  /\ \ / /  /\ \   /\  ___\   /\  ___\   
\ \ \____  \ \____ \  \ \  __<   \ \  __\   \ \  __<      \ \  __ \  \ \ \/\ \ \ \ \'/   \ \ \  \ \ \____  \ \  __\   
 \ \_____\  \/\_____\  \ \_____\  \ \_____\  \ \_\ \_\     \ \_\ \_\  \ \____-  \ \__|    \ \_\  \ \_____\  \ \_____\ 
  \/_____/   \/_____/   \/_____/   \/_____/   \/_/ /_/      \/_/\/_/   \/____/   \/_/      \/_/   \/_____/   \/_____/

  `;

console.log(header);
  
console.log(wordOne + " " + wordTwo + " " + wordThree + '\n' + '\n' + '\n');