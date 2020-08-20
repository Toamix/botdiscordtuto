module.exports = async(client, data) => {
    client.user.setActivity(`Bot pour tutoriel toamix`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/toamix"
      });
}