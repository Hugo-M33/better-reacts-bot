const { Client, MessageAttachment, WebhookClient } = require("discord.js");
const fetch = require("node-fetch");
require("dotenv").config();

const client = new Client();
const guildID = "781620682236100678";
//const guildID = "783820690868535297";

const getApp = (guildID) => {
  const app = client.api.applications(client.user.id);
  if (false) {
    app.guilds(guildID);
  }
  return app;
};

const getType = c => {
  switch (c) {
    case "bri":
      return "Image"
    case "brv":
      return "Video"
    case "bra":
      return "Audio"
    case "brcp":
      return "Copypasta"
  }
}

client.on("ready", async () => {
  console.log("bot ready !");

  const commands = await getApp(guildID).commands.get();

  await getApp(guildID).commands.post({
    data: {
      name: "bra",
      description: "🔊 React with an audio file !",
      options: [
        {
          name: "key",
          description: "the audio file's key",
          required: true,
          type: 3,
        },
        {
          name: "message",
          description: "message added to your reaction",
          required: false,
          type: 3,
        },
      ],
    },
  });

  await getApp(guildID).commands.post({
    data: {
      name: "brv",
      description: "🎥 React with a video !",
      options: [
        {
          name: "key",
          description: "the video file's key",
          required: true,
          type: 3,
        },
        {
          name: "message",
          description: "message added to your reaction",
          required: false,
          type: 3,
        },
      ],
    },
  });

  await getApp(guildID).commands.post({
    data: {
      name: "brcp",
      description: "📝 React with a copypasta",
      options: [
        {
          name: "key",
          description: "the copypasta's key",
          required: true,
          type: 3,
        },
        
      ],
    },
  });

  await getApp(guildID).commands.post({
    data: {
      name: "bri",
      description: "🖼️ React with an image !",
      options: [
        {
          name: "key",
          description: "the image's key",
          required: true,
          type: 3,
        },
      ],
    },
  });
  console.log(commands);

  client.ws.on("INTERACTION_CREATE", async (interaction) => {
    const { options, name } = interaction.data;
    const command = name.toLowerCase();
    const { value } = options[0];
    console.log(options);

    const type = getType(command)
    const query = {type: type, key: value}
    fetch("https://better-reacts.netlify.app/.netlify/functions/getSingle", {
      method: "POST",
      body: JSON.stringify(query)
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.type === "Image" || data.type === "Copypasta") {
          client.api
          .interactions(interaction.id, interaction.token)
          .callback.post({
            data: {
              type: 4,
              data: {
                content:
                  data.link,
              },
            },
          });
        } else {
          client.api
                    .interactions(interaction.id, interaction.token)
                    .callback.post({
                      data: {
                        type: 4,
                        data: {
                          content:
                          options.length > 1 ? options[1].value : data.defaultMessage,
                        },
                      },
                    });
                    new WebhookClient(client.user.id, interaction.token).send({
                        files: [
                          data.link,
                        ],
                      });
        }
      })

    
  });
});

client.login(process.env.TOKEN);
