let btn = document.getElementsByTagName("button")[0];

btn.onclick = () => {
  let date = new Date();
  console.log(
    `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}  ${date}`
  );
};
