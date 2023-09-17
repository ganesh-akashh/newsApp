// {Name: Basic_example_for_AI_assistant}
// {Description: Learn how to create a dialog script with voice/text commands and text corpus for question answering}

// Use this sample to create your own voice/text commands


intent(
  "What does this app do?",
  "What can I do here?",
   "What is this website about",
    "What can you do",
    "What can this webapp do",
    "Tell me more about this app.",
    "Explain the purpose of this website.",
    "What functionalities does this app have?",
    "How can I use this website?",
    "What can this website do",
  reply(
      "Welcome to NEWSHUB! This platform allows you to access the latest news by exploring categories, specific terms, and various news sources. For instance, you can simply say, 'Show me the latest news on technology,' to get started."
  )
);

const NEWS_API_KEY="877b5f159e7349fd9d9e544644b98f3b";

let savedArticles=[];


intent(
  `(read|show|get|bring me|give me|what's up) (the|) (news|articles|) (with|on) $(term* (.+))`,
  (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/everything?apiKey=${NEWS_API_KEY}`;
    if (p.term.value) {
      NEWS_API_URL = `${NEWS_API_URL}&q=${p.term.value}`;
    }

    async function fetchdata() {
      const articleResponse = await api.axios({
        url: NEWS_API_URL,
        method: "GET",
      });
      const { articles } = articleResponse.data;
      if (!articles.length) {
        p.play("Sorry, please try searching for something else.");
        return;
      }

      savedArticles = articles;

      // Send the term to the React application
      p.play({ command: "newHeadlines", term: p.term.value,articles });

      p.play(`Here are the (latest|recent) articles on ${p.term.value}.`);

      p.play("Would you like me to read all the headlines?");
       p.then(confirmation);
    }

    fetchdata();
  }
);



const confirmation = context(() => {
  intent(["sure", "okay","yes please", "alright", "absolutely"], (p) => {
    for (let i = 0; i < savedArticles.length; i++) {
      p.play({ command: "highlight", article: savedArticles[i] });
      p.play(`${savedArticles[i].title}`);
    }
  });
   savedArticles=[];
  intent("no", (p) => {
    p.play("Sure, sounds good to me.");
  });
});

intent(`(Go|Move|Navigate) to home page!`, (p) => {
  p.play("Sure, going back...");
  p.play({ command: "HomePage", articles: [] });
});