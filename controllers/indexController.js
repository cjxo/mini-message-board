const createMessageEntry = (text, user) => {
  return {
    text: text,
    user: user,
    added: new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  }
}

const messages = [
  createMessageEntry("Hi there!", "Amando"),
  createMessageEntry("Hello World!", "Charles"),
];

const getIndex = (request, response) => {
  response.render("index", { messages: messages });
};

const postNewMessage = (request, response) => {
  messages.push(
    createMessageEntry(request.body.text, request.body.user),
  );

  response.redirect("/");
}

module.exports = {
  getIndex,
  postNewMessage
};