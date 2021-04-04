const { Client, MessageAttachment, WebhookClient } = require("discord.js");
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

    switch(command.trim()) {
      case "brv":
        fetchVideo
    }
    switch (command.trim()) {
        case "brv":
            switch (value.toLowerCase()) {
                case "swagmonkey":
                  client.api
                    .interactions(interaction.id, interaction.token)
                    .callback.post({
                      data: {
                        type: 4,
                        data: {
                          content:
                          options.length > 1 ? options[1].value : ":sunglasses:",
                        },
                      },
                    });
                    new WebhookClient(client.user.id, interaction.token).send({
                        files: [
                          "https://cdn.discordapp.com/attachments/826832995024502865/827089916902244402/video0.mp4",
                        ],
                      });
                  break;
                case "saleblanc":
                  client.api
                    .interactions(interaction.id, interaction.token)
                    .callback.post({
                      data: {
                        type: 4,
                        data: {
                          content:
                          options.length > 1 ? options[1].value : "wallah",
                        },
                      },
                    });
                    new WebhookClient(client.user.id, interaction.token).send({
                        files: [
                          "https://cdn.discordapp.com/attachments/806092829993730058/827538858702667776/Jean_Messiha_-_Wallah_quils_viennent_ces_clebs_de_babt.mp4",
                        ],
                      });
                  break;
                case "inadmissible":
                  client.api
                    .interactions(interaction.id, interaction.token)
                    .callback.post({
                      data: {
                        type: 4,
                        data: {
                          content:
                          options.length > 1 ? options[1].value : "C'EST INADMISSIBLE",
                        },
                      },
                    });
                    new WebhookClient(client.user.id, interaction.token).send({
                        files: [
                          "https://cdn.discordapp.com/attachments/806092829993730058/827484658655559700/Naulleau_-_Cest_inadmissible_il_y_a_des_choses_qui_ne_se_font_pas.mp4",
                        ],
                      });
                  break;
                case "interattali":
                  client.api
                    .interactions(interaction.id, interaction.token)
                    .callback.post({
                      data: {
                        type: 4,
                        data: {
                          content:
                          options.length > 1 ? options[1].value : "😍",
                        },
                      },
                    });
                    new WebhookClient(client.user.id, interaction.token).send({
                        files: [
                          "https://cdn.discordapp.com/attachments/806092829993730058/827486451146162186/94874864_555814345334106_2992954633805133747_n_1.mp4",
                        ],
                      });
                  break;
                case "cheh":
                  client.api
                    .interactions(interaction.id, interaction.token)
                    .callback.post({
                      data: {
                        type: 4,
                        data: {
                          content:
                          options.length > 1 ? options[1].value : "cheh",
                        },
                      },
                    });
                    new WebhookClient(client.user.id, interaction.token).send({
                        files: [
                          "https://cdn.discordapp.com/attachments/781620682236100683/827470700209766470/IMG_1204.mp4",
                        ],
                      });
                  break;
                case "rirejaune":
                  client.api
                    .interactions(interaction.id, interaction.token)
                    .callback.post({
                      data: {
                        type: 4,
                        data: {
                          content:
                          options.length > 1 ? options[1].value : "1,2,3...",
                        },
                      },
                    });
                    new WebhookClient(client.user.id, interaction.token).send({
                        files: [
                          "https://cdn.discordapp.com/attachments/781620682236100683/827471477430419516/RPReplay_Final1584998687.mov",
                        ],
                      });
                  break;
                case "blc":
                  client.api
                    .interactions(interaction.id, interaction.token)
                    .callback.post({
                      data: {
                        type: 4,
                        data: {
                          content:
                          options.length > 1 ? options[1].value : "pleure",
                        },
                      },
                    });
                    new WebhookClient(client.user.id, interaction.token).send({
                        files: [
                          "https://cdn.discordapp.com/attachments/753579308148064259/826539100952985610/menblc.mp4",
                        ],
                      });
                  break;
                case "tgfelix":
                  client.api
                    .interactions(interaction.id, interaction.token)
                    .callback.post({
                      data: {
                        type: 4,
                        data: {
                          content:
                          options.length > 1 ? options[1].value : "ta gueule",
                        },
                      },
                    });
                    new WebhookClient(client.user.id, interaction.token).send({
                        files: [
                          "https://cdn.discordapp.com/attachments/789639541761900544/789644588301811752/tg_felix.mp4",
                        ],
                      });
                  break;
                case "menfou":
                  client.api
                    .interactions(interaction.id, interaction.token)
                    .callback.post({
                      data: {
                        type: 4,
                        data: {
                          content:
                          options.length > 1 ? options[1].value : "aboie",
                        },
                      },
                    });
                    new WebhookClient(client.user.id, interaction.token).send({
                        files: [
                          "https://cdn.discordapp.com/attachments/753579308148064259/826540748589629513/ah-bon-menfou.mp4",
                        ],
                      });
                  break;
              }
        case "brcp":
            switch (value.toLowerCase()) {
                case "puceau":
                  client.api
                    .interactions(interaction.id, interaction.token)
                    .callback.post({
                      data: {
                        type: 4,
                        data: {
                          content:
                            "Puceau moi ? Sérieusement ^^ haha on me l avait pas sortie celle la depuis loooongtemps 🙂 demande a mes potes si je suis puceau tu vas voir les réponses que tu vas te prendre XD rien que la semaine passee j ai niquer dont chuuuuut ferme la puceau de merde car toi tu m as tout tout l air d un bon puceau de merde car souvent vous etes frustrer de ne pas BAISER 🙂 ses agreable de se faire un missionnaire ou un amazone avec une meuf hein ? tu peux pas répondre car tu ne sais pas ce que c ou alors tu le sais mais tu as du taper dans ta barre de recherche « missionnaire sexe » ou « amazone sexe » pour comprendre ce que c etait mdddrrr !! cest grave quoiquil en soit....pour revenir a moi, je pense que je suis le mec le moins puceau de ma bande de 11 meilleurs amis pas psk j ai eu le plus de rapport intime mais psk j ai eu les plus jolie femme que mes amis 😀 ses pas moi qui le dit, ses eux qui commente sous mes photos insta « trop belle la fille que tu as coucher avec hier en boite notamment! » donc après si tu veux",
                        },
                      },
                    });
                  break;
                case "attali":
                  client.api
                    .interactions(interaction.id, interaction.token)
                    .callback.post({
                      data: {
                        type: 4,
                        data: {
                          content:
                            "Bah écoutez. J'ai écouté l’homélie du père Attali et je suis encore un peu ébloui. Y'a les méchants et les gentils. Y'a les vilains qui veulent la pureté, la purification, l'horreur, quasiment le nazisme. Et puis y'a les gentils, qui sont bienveillants, qui sont altruistes. Oh c'est beau ! C'est beau ! Sauf que ça n'existe pas monsieur Attali. Surtout, ça fait fi de ce qu'on est, non pas de ce qu'on devient, mais de ce qu'on est. Auguste Comte disait : \"Les morts gouvernent les vivants\", monsieur Attali, et Raymond Aron ajoutait : \"L'histoire est tragique\", et ça vous l'oubliez. Vous parlez pour un homme hors-sol, vous parlez pour un homme qui passe sa vie dans les aéroports. Mais ça il n'existe pas à part vous, monsieur Attali. Y'a des gens qui sont là, qui sont là depuis 1000 ans et qui ont envie d'être là encore 1000 ans, et qui n'ont pas envie d'être métissés, monsieur Attali, excusez-les ! Excusez-les, ils ont pas envie. Ils ont pas envie d'être submergés. Ils ont pas envie d'être remplacés. C'est con hein, j'reconnais, c'est bas. C'est bas et c'est pas tellement altruiste, mais c'est leurs vies, vous comprenez. Et ils ont pas envie que monsieur Attali, le père Attali, vienne leur dire \"Vous êtes des nuls, vous êtes des médiocres, vous êtes des racistes, vous êtes des xénophobes, vous n'êtes pas des bienveillants\". Eh ben non ! Eh ben non, ils sont pas bienveillants, parce que les autres non plus ne sont pas bienveillants.",
                        },
                      },
                    });
                  break;

                case "situation":
                  client.api
                    .interactions(interaction.id, interaction.token)
                    .callback.post({
                      data: {
                        type: 4,
                        data: {
                          content:
                            "Vous savez, moi je ne crois pas qu'il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd'hui avec vous, je dirais que c'est d'abord des rencontres. Des gens qui m'ont tendu la main, peut-être à un moment où je ne pouvais pas, où j'étais seul chez moi. Et c'est assez curieux de se dire que les hasards, les rencontres forgent une destinée... Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l'interlocuteur en face je dirais, le miroir qui vous aide à avancer. Alors ça n'est pas mon cas, comme je disais là, puisque moi au contraire, j'ai pu : et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie... je ne suis qu'amour ! Et finalement, quand beaucoup de gens aujourd'hui me disent « Mais comment fais-tu pour avoir cette humanité ? », et bien je leur réponds très simplement, je leur dis que c'est ce goût de l'amour ce goût donc qui m'a poussé aujourd'hui à entreprendre une construction mécanique, mais demain qui sait ? Peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi...",
                        },
                      },
                    });
                  break;
              }
      case "bri":
        switch (value.toLowerCase()) {
          case "sasuthink":
            client.api
              .interactions(interaction.id, interaction.token)
              .callback.post({
                data: {
                  type: 4,
                  data: {
                    content:
                      "https://i.pinimg.com/originals/58/81/b6/5881b6caced6aa6469934f135f8833e3.jpg",
                  },
                },
              });
            break;
          case "letsgo":
            client.api
              .interactions(interaction.id, interaction.token)
              .callback.post({
                data: {
                  type: 4,
                  data: {
                    content:
                      "https://media.tenor.com/images/244de339893a7371329671c9640237b7/tenor.gif",
                  },
                },
              });
            break;
          case "bontoutou":
            client.api
              .interactions(interaction.id, interaction.token)
              .callback.post({
                data: {
                  type: 4,
                  data: {
                    content:
                      "https://risibank.fr/cache/stickers/d1709/170907-full.png",
                  },
                },
              });
            break;
          case "sceptique":
            client.api
              .interactions(interaction.id, interaction.token)
              .callback.post({
                data: {
                  type: 4,
                  data: {
                    content:
                      "https://image.noelshack.com/fichiers/2017/39/3/1506528340-pasdinofake.png",
                  },
                },
              });
            break;
          case "doubt":
            client.api
              .interactions(interaction.id, interaction.token)
              .callback.post({
                data: {
                  type: 4,
                  data: {
                    content:
                      "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/05/press-x-to-doubt-la-noire.jpg",
                  },
                },
              });
            break;
          case "menacefacho":
            client.api
              .interactions(interaction.id, interaction.token)
              .callback.post({
                data: {
                  type: 4,
                  data: {
                    content:
                      "https://image.noelshack.com/fichiers/2020/50/3/1607546450-1607543910-okbillie-zemmour-messiha-guns-removebg-previewa-cropped-removebg-preview.png",
                  },
                },
              });
            break;
          case "bikehead":
            client.api
              .interactions(interaction.id, interaction.token)
              .callback.post({
                data: {
                  type: 4,
                  data: {
                    content:
                      "https://i.kym-cdn.com/photos/images/facebook/001/454/831/9cc.jpg",
                  },
                },
              });
            break;
        }
        break;
      case "bra":
        switch (value.toLowerCase()) {
          case "cvp":
            
            client.api
              .interactions(interaction.id, interaction.token)
              .callback.post({
                data: {
                  type: 4,
                  data: {
                    content: (options.length > 1 ? options[1].value : 'ça va pas ???')
                  },
                },
              });
            new WebhookClient(client.user.id, interaction.token).send({
              files: [
                "https://www.myinstants.com/media/sounds/mais-enfin-ca-va-pas.mp3",
              ],
            });
            break;
          case "ctsur":
            
            
            client.api
              .interactions(interaction.id, interaction.token)
              .callback.post({
                data: {
                  type: 4,
                  data: {
                    content: (options.length > 1 ? options[1].value : 'MAIS C\'ÉTAIT SÛR EN FAIT')
                  },
                },
              });
            new WebhookClient(client.user.id, interaction.token).send({
              files: [
                "https://www.myinstants.com/media/sounds/sardoche-mais-voila-mais-cetait-sur-en-fait_s9qhFsx.mp3",
              ],
            });
            break;
          case "kouizine":
            
            
            client.api
              .interactions(interaction.id, interaction.token)
              .callback.post({
                data: {
                  type: 4,
                  data: {
                    content: (options.length > 1 ? options[1].value : 'KOUIZINE !')
                  },
                },
              });
            new WebhookClient(client.user.id, interaction.token).send({
              files: [
                "https://www.myinstants.com/media/sounds/la-place-de-la-femme-cest-a-la-cuisine.mp3",
              ],
            });
            break;
          case "ah":
            
            
            client.api
              .interactions(interaction.id, interaction.token)
              .callback.post({
                data: {
                  type: 4,
                  data: {
                    content: (options.length > 1 ? options[1].value : 'AH!')
                  },
                },
              });
            new WebhookClient(client.user.id, interaction.token).send({
              files: [
                "https://www.myinstants.com/media/sounds/denis-brogniart-ah-original.mp3",
              ],
            });
            break;
          case "bruh":
            
            
            client.api
              .interactions(interaction.id, interaction.token)
              .callback.post({
                data: {
                  type: 4,
                  data: {
                    content: (options.length > 1 ? options[1].value : 'bruh moment')
                  },
                },
              });
            new WebhookClient(client.user.id, interaction.token).send({
              files: [
                "https://www.myinstants.com/media/sounds/movie_1.mp3",
              ],
            });
            break;
          case "letsgo":
            
            
            client.api
              .interactions(interaction.id, interaction.token)
              .callback.post({
                data: {
                  type: 4,
                  data: {
                    content: (options.length > 1 ? options[1].value : "LET'S GO")
                  },
                },
              });
            new WebhookClient(client.user.id, interaction.token).send({
              files: [
                "https://www.myinstants.com/media/sounds/fullsizerender_r8BCkch.mp3",
              ],
            });
            break;
          case "fortnite":
            
            
            client.api
              .interactions(interaction.id, interaction.token)
              .callback.post({
                data: {
                  type: 4,
                  data: {
                    content: (options.length > 1 ? options[1].value : 'epic')
                  },
                },
              });
            new WebhookClient(client.user.id, interaction.token).send({
              files: [
                "https://www.myinstants.com/media/sounds/fortnite-funky-dance-earrape.mp3",
              ],
            });
            break;
          case "sarko":
            
            
            client.api
              .interactions(interaction.id, interaction.token)
              .callback.post({
                data: {
                  type: 4,
                  data: {
                    content: (options.length > 1 ? options[1].value : 'epic')
                  },
                },
              });
            new WebhookClient(client.user.id, interaction.token).send({
              files: [
                "https://www.myinstants.com/media/sounds/sarkozy-_-quelle-indignite.mp3",
              ],
            });
            break;
          case "tsah":
            
            
            client.api
              .interactions(interaction.id, interaction.token)
              .callback.post({
                data: {
                  type: 4,
                  data: {
                    content: (options.length > 1 ? options[1].value : 'T\'es sah mon reuf ?')
                  },
                },
              });
            new WebhookClient(client.user.id, interaction.token).send({
              files: [
                "https://www.myinstants.com/media/sounds/tk78-mais-quesque-tu-baraguine-sale-fdp-tes-sah-dans-ce-que-tu-dit.mp3",
              ],
            });
            break;
          case "nerd":
            
            
            client.api
              .interactions(interaction.id, interaction.token)
              .callback.post({
                data: {
                  type: 4,
                  data: {
                    content: (options.length > 1 ? options[1].value : 'miam')
                  },
                },
              });
            new WebhookClient(client.user.id, interaction.token).send({
              files: [
                "https://www.myinstants.com/media/sounds/tous-se-que-jaime-cest-manger-des-carte-graphique-kameto-2-1.mp3",
              ],
            });
            break;
        }
    }
  });
});

client.login(process.env.TOKEN);
