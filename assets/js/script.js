document.querySelectorAll(".heart").forEach((heart) => {
    heart.addEventListener("click", () => {
      if (heart.dataset.liked === "true") {
        heart.src = "assets/img/icon-heart.svg"; // volta para vazado
        heart.dataset.liked = "false";
      } else {
        heart.src = "assets/img/icon-heart-active.svg"; // troca para preenchido
        heart.dataset.liked = "true";
      }
    });
  });