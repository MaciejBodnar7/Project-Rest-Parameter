function getLabelsHtml(texts, senders, ...rest) {
  const nameOfConst = rest
    .map((restItem) => {
      const { text, sender, name } = restItem;

      return `
            <div class="label-card">
               <p>${name}</p>
               <p class="main-text">${texts}</p>
               <p>Best wishes,</p>
               <p>${senders}</p>
            </div>
    `;
    })
    .join("");
  return nameOfConst;
}

const text = "Thank you for all your hard work throughout the year! 🙏🎁";
const sender = "Tom";

document.getElementById("labels-container").innerHTML = getLabelsHtml(text, sender, { name: "Sally" }, { name: "Mike" }, { name: "Rob" }, { name: "Harriet" });
