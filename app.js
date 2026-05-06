async function generate() {
  const title = document.getElementById("title").value;

  const res = await fetch("https://dummyimage.com/600x400/000/fff&text=" + title);

  document.getElementById("output").src = res.url;
}