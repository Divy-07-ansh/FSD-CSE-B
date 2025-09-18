function waitForTwoSeconds(callback) {
  setTimeout(callback, 2000); 
}

function register(next) {
  waitForTwoSeconds(() => {
    console.log("register end");
    next();
  });
}

function sendEmail(next) {
  waitForTwoSeconds(() => {
    console.log("email end");
    next();
  });
}

function login(next) {
  waitForTwoSeconds(() => {
    console.log("login end");
    next();
  });
}

function getData(next) {
  waitForTwoSeconds(() => {
    console.log("data end");
    next();
  });
}

function displayData(next) {
  waitForTwoSeconds(() => {
    console.log("Display end");
    next();
  });
}

// Start the chain
register(() => {
  sendEmail(() => {
    login(() => {
      getData(() => {
        displayData(() => {
          console.log("other Application");
        });
      });
    });
  });
});