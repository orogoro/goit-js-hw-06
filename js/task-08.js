const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Проверьте еще раз, вы что-то пропустили");
    return;
  }

  const database = {
    email: email.value,
    password: password.value,
  };
  console.log(database);

  // const formData = new FormData(event.currentTarget);
  // formData.forEach((name, value) => {
  //   console.log(value);
  //   console.log(name);
  // });

  event.currentTarget.reset();
}
