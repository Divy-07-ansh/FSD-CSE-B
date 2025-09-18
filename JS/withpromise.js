function waitForTwoSeconds() {
  return new Promise(resolve => {
    setTimeout(resolve, 2000); 
  });
}

async function register() {
  await waitForTwoSeconds();
  console.log("register end");
}

async function sendEmail() {
  await waitForTwoSeconds();
  console.log("email end");
}

async function login() {
  await waitForTwoSeconds();
  console.log("login end");
}

async function getData() {
  await waitForTwoSeconds();
  console.log("data end");
}

async function displayData() {
  await waitForTwoSeconds();
  console.log("Display end");
}

async function main() {
  await register();
  await sendEmail();
  await login();
  await getData();
  await displayData();
  console.log("other Application");
}

main();