document.getElementsByTagName("h1")[0].style.fontSize = "2vw";

//get the visitor count from the api call[calling DB internally]
//document.getElementById("visitor-count").value
const apiUrl =
  "https://i2aug9vc10.execute-api.eu-north-1.amazonaws.com/default/count";
async function count(url = "", data = {}) {
  const res = await fetch(apiUrl, {
    method: "POST"
    //referrerPolicy: "origin"
    //cache: "no-cache"
    //body: JSON.stringify(data)
  });
  return res.json();
}
count(apiUrl, {}).then((data) => {
  //console.log("hello");
  document.getElementById("visitor-count").value = data["count"];
});
