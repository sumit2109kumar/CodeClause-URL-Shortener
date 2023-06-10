let copyButton = document.getElementById("copy");
let newURL = document.getElementById("shorturl");

copyButton.onclick = ()=>{
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
}