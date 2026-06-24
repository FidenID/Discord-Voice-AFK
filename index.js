const { Client } = require('discord.js-selfbot-v13');
const { joinVoiceChannel, VoiceConnectionStatus, entersState } = require('@discordjs/voice');
require('dotenv').config();

const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`[VC-AFK] Login sebagai ${client.user.tag}`);
  joinVC();
});

async function joinVC() {
  const channel = client.channels.cache.get(process.env.VC_ID);
  if (!channel) {
    console.log(`[VC-AFK] Channel ${process.env.VC_ID} tidak ditemukan`);
    return;
  }

  try {
    const connection = joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild.voiceAdapterCreator,
    });

    connection.on('error', () => {});
    connection.on(VoiceConnectionStatus.Disconnected, async () => {
      try {
        await Promise.race([
          entersState(connection, VoiceConnectionStatus.Signalling, 5_000),
          entersState(connection, VoiceConnectionStatus.Connecting, 5_000),
        ]);
      } catch {
        connection.destroy();
        setTimeout(joinVC, 5000);
      }
    });

    console.log(`[VC-AFK] Joined voice channel: ${channel.name}`);
  } catch (e) {
    console.log(`[VC-AFK] Gagal: ${e.message}`);
    setTimeout(joinVC, 10000);
  }
}

client.login(process.env.DISCORD_TOKEN);
