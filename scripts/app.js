let studentFullName = 'Albert Paul';
let studentNumber = 1190851;
const result= studentFullName + ' - ' + studentNumber;
console.log(result);
const headerContent=document.querySelector("h1");
console.log(headerContent.textContent);
headerContent.textContent=result;
headerContent.classList.add("headingPrimary");
