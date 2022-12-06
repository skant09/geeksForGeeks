import fetch from "node-fetch";

let url = "https://image.slidesharecdn.com/facelift-140621153157-phpapp01/95/facelift-surgery-";
for (let i = 1; i < 100; i++) {
  setTimeout(() => {
    fetch(`${url}${i}-1024.jpg`)
      .then((resp) => resp.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        // the filename you want
        a.download = `slide-mian-${i}.jpg`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => {
        console.error(err);
        console.log(`${url}${i}-1024.jpg`);
      });
  }, i * 1000);
}
