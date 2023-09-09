//---------------------------------------------------------
// الاساسيات في البروجكت
//---------------------------------------------------------
const express = require('express');
const app = express();

app.listen(() => console.log('Hi.'));

app.use('/ping', (req, res) => {
    res.send(new Date());
});

const Discord = require('discord.js');
const client = new Discord.Client();
//
client.on('ready', () => {
    console.log(`Iam Here...`);
});
var prefix = `!`; // البريفكس الي تبيه
var owners = '1111545474260946986';  // حط ايديك
//
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
    client.user.setStatus('online'); 
});
client.on('ready', () => {
    client.user.setActivity(`${prefix}help`, {
        
        type: 'PLAYING'// الحاله الي تبيها
    }); 
});
client.login(`MTEzMjk4NjMwOTc2MjM1OTM3OA.GfQ8wr.K9hnG-a7UZ5vp7h0Y9u2jkjs5EHlXtJmAt8DrI`);// التوكن حقك 
// نهايه الاساسيات
//---------------------------------------------------------
// كود الهيلب 
client.on("message", itsx => {
    if (itsx.content === prefix + "help") {
        let embed = new Discord.MessageEmbed()

        .setColor("#f3cfcf")
            .setTitle("Help Panel :")
            .setDescription(`**
          
            ** ✨PUBLIC COMMAND ✨  **

            ${prefix}vote       | ${prefix}server
            ${prefix}uptime     | ${prefix}ping
            ${prefix}info-chat  
            ${prefix}avatar     
            ${prefix}info-bot   

            ** ✨ADMIN COMMAND ✨ 
**
             ${prefix}add | ${prefix}mute
             ${prefix}all-bans | ${prefix}unmute
             ${prefix}clear | ${prefix}ban
             ${prefix}setname-room | ${prefix}unban
             ${prefix}show | ${prefix}poll
             ${prefix}hide | ${prefix}lock
             ${prefix}kick | ${prefix}unlock 
             **

             ** ✨GAMES COMMAND ✨

             ${prefix}cut
             ${prefix}kill   | ${prefix}meme
             ${prefix}love   | ${prefix}nokta
             ${prefix}hug
             ${prefix}sara7a | ${prefix}za7f


**
             ** ✨TICKET COMMAND ✨

             ${prefix}new | لأنشاء التكت
             ${prefix}de  | لحذف التكت
             ${prefix}cl  | لغلق التذكرة

             ** 💌 في حال تبي مساعدة افتح تكت 💌 ****

             Solt Team On Top

            `)

        itsx.channel.send(embed);
    }
});
// نهايه الهيلب 
//---------------------------------------------------------
// بدايه معلومات البوت 
client.on('message', msg =>{
if(msg.content === prefix +"info-bot"){
const embed = new Discord.MessageEmbed()
.setColor("#f3cfcf")
.setTitle(` ${client.user.username} `)
.addField('``My Name``' , ` ${client.user.tag}` , true)
.addField('``servers``', ` ${client.guilds.cache.size} `, true)
.addField('``channels``', ` ${client.channels.cache.size} `, true)
.addField('``Users``', ` ${client.users.cache.size} `, true)
.addField('``My ID``' , ` ${client.user.id} ` , true)
.setFooter(`Coded By Solt Team`)
msg.channel.send(embed);
}
});
// نهايه معلومات البوت 
//---------------------------------------------------------
// كود لمعرفه كم اشتغل البوت في السيرفر
client.on('message', msg => {
  if (msg.content === prefix + "uptime") {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    const up = new Discord.MessageEmbed()
      .setColor("#f3cfcf")
      .setThumbnail(client.user.avatarURL())
      .setTitle("**__Uptime :__**")
      .setAuthor(client.user.username, client.user.avatarURL())
      .addField('**-**', `**${seconds}**` + ' **seconds**')
      .addField('**-**', `**${minutes}**` + ' **minutes**')
      .addField('**-**', `**${hours}**` + ' **hours**')
      .addField('**-**', `**${days}**` + ' **days**')
    msg.channel.send(up)

  }
});
// نهايه كود لمعرفه كم اشتغل البوت في السيرفر
//---------------------------------------------------------
//كود اضافه ايموجي ل سيرفرك 
const { parse } = require('twemoji-parser');
client.on('message', niro =>{
  if (niro.content.startsWith(prefix + 'add')) {
     const args = niro.content.split(' ').slice(1)
    if (!niro.member.hasPermission('MANAGE_EMOJIS')) {
        return niro.channel.send("**`You dont have permission to add emojis 😐`**");
    }
 
    if (!niro.guild.me.hasPermission('MANAGE_EMOJIS')) {
        return niro.channel.send("**`I need permission to add emojis 😐`**");
    }
 
    const emoji = args.join("");
    if (!emoji) return niro.channel.send('**`Please type the emoji to add 😃`**');
 
    let the_typed_emoji = Discord.Util.parseEmoji(emoji);
 
    if (the_typed_emoji.id) {
        const link = `https://cdn.discordapp.com/emojis/${the_typed_emoji.id}.${
            the_typed_emoji.animated ? 'gif' : 'png'
        }`;
        const name = args.slice(1).join(' ');
 
        niro.guild.emojis.create(`${link}`, `${name || `${the_typed_emoji.name}`}`);
        const done = new Discord.MessageEmbed()
            .setTitle("emoji has been added")
            .setColor('#f3cfcf')
            .setFooter(`SOLAY COMMUNITY`)
            .setDescription(
                `add emojie ${name || `${the_typed_emoji.name}`} preview emojie (${link})`
            );
        return niro.channel.send(done);
    } else {
        let CheckEmoji = parse(emoji, { assetType: 'png' });
        if (!CheckEmoji[0])
            return niro.channel.send('invalied emojiev');
        niro.channel.send("unknown 🤷");
}
}
})
//نهايه كود اضافه ايموجي ل سيرفرك
//---------------------------------------------------------
//كود الرياكشنات التلقائيه 
client.on("message", message => {
 if(message.channel.id === "1133024514079473686") return message.react("👀") 
});

client.on("message", message => {
 if(message.channel.id === "1133024271883583601") return message.react("👀") 
});
// نهايه الرياكشنات التلقائيه 
//---------------------------------------------------------
// كود تصويت 
client.on('message', message =>{
if(message.content.startsWith(prefix + 'vote')) {
const args = message.content.split(" ").slice(1).join(" ");
const embed = new Discord.MessageEmbed()
.setTitle("Vote")
.setColor("#f3cfcf")
.setDescription(`
****the vote****
${args}
by ${message.author.tag}

`)
message.channel.send(embed).then(msg => {
msg.react("✅")
msg.react("❌")
});

}
});
// نهايه كود التصويت
//---------------------------------------------------------
//كود معلومات الشات
client.on('message', message => {
 if(message.content.startsWith(prefix + "info-chat")) {
const chme = message.mentions.channels.first() || message.channel
const embed = new Discord.MessageEmbed()
.setColor("#f3cfcf")
.setTitle("**CHANNEL INFO**")
.setDescription(`
Id Channel 
 
${chme.id}
 
Name Channel
 
${chme.name}
 
Mention Channel 
 
<#${chme.id}>
`)
message.channel.send(embed);
}
});
// نهايه كود معلومات الشات
//-------------------------------------------------------------
// كود يظهر الافتار 
client.on("message", message => {
  if (message.content.startsWith(prefix + "avatar")) {
  if(!message.channel.guild) return message.reply(`** <a: emoji_67:834728402773999618 > This Command For Servers Only ** `); 
    let args = message.content.split(" ")
    let user = message.mentions.users.first() || client.users.cache.find(u => u.id === args[1]) || message.author
    var embed = new Discord.MessageEmbed()
      .setAuthor(user.tag, user.avatarURL({ dynamic: true }))
      .setColor("#f3cfcf")
      .setFooter(`${ message.author.tag } `, message.author.avatarURL({ dynamic: true }))
      .setImage(user.avatarURL({ dynamic: true, size: 1024 }))
    message.channel.send(embed);
  }
})
// كود الافتار ..................
//-------------------------------------------------------------
// كود معرفه عدد المتبندين من السيرفر
client.on('message', message => {
  if (message.content.startsWith(prefix + "all-bans")) {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
    message.guild.fetchBans()
      .then(bans => message.channel.send(`🔸 **Server Ban:** ${bans.size} `))
      .catch(console.error);
  }
});
// نهايه كود معرفه عدد المتبندين من السيرفر
//-------------------------------------------------------------
// كود حذف السب
client.on("message", message => {
    if (message.content.includes("كلب") || message.content.includes("غبي"))
        message.delete();
}); 

client.on("message", message => {
    if (message.content.includes("كل زق") || message.content.includes("غبي"))
        message.delete();
}); 

client.on("message", message => {
    if (message.content.includes("غبي") || message.content.includes("غبي"))
        message.delete();
}); 

client.on("message", message => {
    if (message.content.includes("قي") || message.content.includes("غبي"))
        message.delete();
}); 
client.on("message", message => {
    if (message.content.includes("شذوذ") || message.content.includes("غبي"))
        message.delete();
}); 
client.on("message", message => {
    if (message.content.includes("كس") || message.content.includes("غبي"))
        message.delete();
}); 
client.on("message", message => {
    if (message.content.includes("fack") || message.content.includes("غبي"))
        message.delete();
}); 
client.on("message", message => {
    if (message.content.includes("sfhl") || message.content.includes("غبي"))
        message.delete();
}); 
client.on("message", message => {
  if (message.content.includes("نيك") || message.content.includes("غبي"))
      message.delete();
}); 
client.on("message", message => {
  if (message.content.includes("انيكك") || message.content.includes("غبي"))
      message.delete();
}); 
client.on("message", message => {
  if (message.content.includes("انيك") || message.content.includes("غبي"))
      message.delete();
}); 
client.on("message", message => {
  if (message.content.includes("شرموط") || message.content.includes("غبي"))
      message.delete();
}); 
client.on("message", message => {
  if (message.content.includes("طيز") || message.content.includes("غبي"))
      message.delete();
}); 
client.on("message", message => {
  if (message.content.includes("العن") || message.content.includes("غبي"))
      message.delete();
}); 
client.on("message", message => {
  if (message.content.includes("دين") || message.content.includes("غبي"))
      message.delete();
}); 
client.on("message", message => {
  if (message.content.includes("زبي") || message.content.includes("غبي"))
      message.delete();
}); 
client.on("message", message => {
  if (message.content.includes("زب") || message.content.includes("غبي"))
      message.delete();
}); 
client.on("message", message => {
  if (message.content.includes("اختك") || message.content.includes("غبي"))
      message.delete();
}); 
client.on("message", message => {
  if (message.content.includes("ابوك") || message.content.includes("غبي"))
      message.delete();
}); 
client.on("message", message => {
  if (message.content.includes("يا براري") || message.content.includes("غبي"))
      message.delete();
}); 
// نهايه حذف السب 
//------------------------------------------------------------------
// كود معلومات السيرفر 
client.on("message", russi => {
  if (russi.content === prefix + "server") {


    let embed = new Discord.MessageEmbed()
    .setTitle(`${russi.guild.name}`)
    .setThumbnail(client.user.avatarURL())
    .setColor('#f3cfcf')
    .setFooter(`Requested معلومات السيرفر  }`, russi.author.avatarURL())
    .addField('> :star: ID Server :', `${russi.guild.id}`)
    .addField('> :crown: Owner Server :', `${russi.guild.owner}`)
    .addField('> :calendar: Created : ', `${russi.guild.createdAt.toLocaleString()}`)
    .addField('> :busts_in_silhouette: Members : ', `${russi.guild.memberCount}`)
    .addField('> :speech_balloon: Channels : ', `${russi.guild.channels.cache.size}`)
    .addField('> :earth_americas: Region : ', `${russi.guild.region}`)
    .setTimestamp()
    russi.channel.send(embed);
  }
});
// نهايه معلومات السيرفر
//--------------------------------------------------------------
// كود افتار السيرفر 
client.on("message", itsx => {
    if ( itsx.content === prefix + "server-avatar") {
        let embed = new Discord.MessageEmbed()
        .setColor("#f3cfcf")
        .setAuthor(itsx.author.username, itsx.author.avatarURL())
        .setImage(itsx.guild.iconURL())
        .setFooter(client.user.username, client.user.avatarURL())

        itsx.channel.send(embed);
    }
});
// نهايه كود افتار سيرفر 
//--------------------------------------------------------------
// كود يوزر 
client.on("message",message => {
    if(message.content.startsWith(prefix + "user")){
  let embed = new Discord.MessageEmbed()
  .setColor("#f3cfcf")
  .setAuthor(message.author.username,message.author.avatarURL())
  .setThumbnail(message.author.avatarURL())
  .setTitle("Info User")
  .addField('``Name``', ` ${message.author.tag} `, true)
  .addField('``ID``', ` ${message.author.id} `, true)  
  .setTimestamp(); 
  message.channel.send(embed)
  }
  });
  // كود يوزر 
//--------------------------------------------------------------
// code ping 
client.on('message', message =>{
  if(message.content === prefix + 'ping'){
message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Ping : ${client.ws.ping} ms\`\`\``);
  }); // كود ping الرجاء عدم تخريب شي 
  }
});
// code ping 
//------------------------------------------------------------------
// games Command

// 1
client.on('message', russi => {
  if(russi.content.startsWith(prefix + "hug")){
let member = russi.mentions.users.first();
if(!member) return russi.reply("**Please Mention Member**")
    let hugs = [
      'https://cdn.discordapp.com/attachments/1132987057053106216/1132999773784391700/tkthao219-bubududu.gif',
      

      ];
let hug1 = hugs[Math.floor(Math.random() * hugs.length)];

var embed = new Discord.MessageEmbed()
.setTitle("HUG")
.setColor("#f3cfcf")
.setImage(`${hug1}`)
.setFooter(`you hug by ${russi.author.username}`)
russi.channel.send(embed)
 
  }
}); 

// end game 
//--------------------------------------------------------------------
// warn Command
client.on('message', message => {
 
     if(message.content.startsWith(prefix + "warn")) {
      if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`>>> \`\`\`You Don't have the permission `);
 let args = message.content.split(" ").slice(1);
 
    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.MessageEmbed()
        .setColor('#f3cfcf')
        .setTimestamp();
 
    if (!user) {
        embed.addField("**منشن الشخص** ", ` ${message.author.tag}?`)
            .setTimestamp();
        return message.channel.send(embed);
    } if (!reason) {
        embed.addField("**لماذا تريد اعطاء الشخص أنذار** ? ", ` ${user.tag}?`)
        return message.channel.send(embed);
    }
    embed.addField("**تم ارسال الانذار** ", ` ${user.tag}!`)
        .setTimestamp();
    message.channel.send(embed);
    const embed1 = new Discord.MessageEmbed()
        .setColor('#f3cfcf')
        .setTimestamp()
        .addField("لقد اخذت انذار", `
 
          السبب : **${reason}**`)
        .setFooter(`
        انذار بواسطة ${message.author.tag}.`);
    user.send(embed1);
    message.delete();
}
});
// end warn 
//---------------------------------------------------
// clear command
client.on("message", async message => {
    let command = message.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "clear" || command == "مسح") {
        message.delete({ timeout: 0 })
        if (!message.channel.guild) return message.reply(`** This Command For Servers Only**`);
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** You don't have perms :x:**`);
        if (!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** I don't have perms :x:**`);
        let args = message.content.split(" ").slice(1)
        let messagecount = parseInt(args);
        if (args > 100000) return message.channel.send(
            new Discord.MessageEmbed()
            .setDescription(`\`\`\`js
i cant delete more than 100000 messages 
\`\`\``)
        ).then(messages => messages.delete({ timeout: 5000 }))
        if (!messagecount) messagecount = '100';
        message.channel.messages.fetch({ limit: 100 }).then(messages => message.channel.bulkDelete(messagecount)).then(msgs => {
            message.channel.send(
                new Discord.MessageEmbed()
                .setDescription(`\`\`\`js
${msgs.size} messages cleared
\`\`\``)
            ).then(messages =>
                messages.delete({ timeout: 5000 }));
        })
    }
});
// clear command
//-----------------------------------------------------------------------------------
// انمي 
client.on("message", message => {
  if (message.content.startsWith(prefix + "naruto")) {
 const yassen = new Discord.MessageEmbed()
.setTitle("Naruto Shippuden")
.setColor("#f3cfcf")
.setDescription(`**Naruto Shippuden Anime**

وهو الجزء 
الثاني الذي يتحدث عن رحلة ذلك الفتى المزعج اللعوب «ناروتو» ليصبح هوكاجي قرية كونوها للنينجا. من أشهر الأنميات المعروفة والتي تسلقت معنا
 سنوات العمر حتى صرنا شبابًا بالغين ولازلنا
 نتابعه بشغف. الأنمي به العديد من الأفكار التي تلخص مُعاناة ذوي القدرات الغير مكتشفة في الحياة. فجميعنا لدينا مواهب، لكن 
 لم نكتشفها بعد، أو لم
تأت اللحظة التي ينجلي فيها الحزن عن أنياط القلوب لتسفر عمّا بداخلها. قتالات صغيرة، معارك كبيرة، وحروب عُظمى، كل هذا
 مدموج في جرعة مكثفة من المشاعر الصادقة من جميع الشخصيات إلى نفسها، وإلى بعضها البعض. إذا لم تشاهده، فاعلم أن الكثير في انتظارك بكل تأكيد.

`)
.setImage('https://cdn.discordapp.com/attachments/1133000511872827432/1133000721588043818/NARUTOSHIPPUDENY2007S01E001JA-474x677-PST.png')
 message.channel.send(yassen)
}
}) 

client.on("message", message => {
  if (message.content.startsWith(prefix + "bleach")) {
 const yassen = new Discord.MessageEmbed()
.setTitle("Bleach")
.setColor("#f3cfcf")
.setDescription(`**Bleach Anime**

حاملًا سيفه الرشيق بجانبه، يدافع «إتشيغو» الشاب عن مدينته ضد الأرواح الهائمة بكل الأرجاء. فعندما تنتهي حياة الفرد تنتقل روحه إلى «مجتمع الأرواح» لتعيش بسلام، أو تعلق الروح بالأرض وتسعى لأكل المزيد من الأرواح وتدمير العالم، وتُسمى «الهولو». ومهمة صائد الأرواح هي تخليص العالم من الهولو بأي طريقة ممكنة. لم يعلم إتشيغو أنه سيكون صائد أرواح بارع لهذه الدرجة لولا كون حياة عائلته اقترنت بذلك منذ البداية. مغامرة شبابية مليئة بالشخصيات الجذابة والفلسفات الحياتية المتناقضة. فماذا يا تُرى سيخوض صديقنا في رحلته المحفوفة بالمخاطر والأرواح الشريرة الهائمة والبالغة القوة؟ هذا ما ستعلمه إذا تابعت الأنمي الشهير بليتش.

`)
.setImage('https://cdn.discordapp.com/attachments/1133000511872827432/1133000882888396850/download.png')
 message.channel.send(yassen)
}
}) 

client.on("message", message => {
  if (message.content.startsWith(prefix + "konan")) {
 const yassen = new Discord.MessageEmbed()
.setTitle("Detective Conan")
.setColor("#f3cfcf")
.setDescription(`**Detective Conan Anime**

«سينشي كودو» فتى بالسابعة عشرة وعقله ذريّ يستطيع حل أعقد الجرائم المُتحدية لأعتى العقول المُحللة. يومًا ما يكون بالملاهي مع صديقته ويرى شخصين مشبوهين، فيقرر تتبعهما. وعندما اكتشفا ذلك، أفقداه وعيه وأعطياه جرعة من عقار معيّن صنعته عصابتهم حديثًا، وتركاه ليموت. في النهاية استيقظ مندهشًا من كونه حيًّا. جسده تقلص بالحجم وصار بعمر 7 سنوات، لكن ذكاءه الحاد ظل كما هو. فتقمص شخصية جديدة كنصيحة من صديق العائلة البروفيسور «آجاسا»، تحت مسمى «كونان». وبذلك عاش مع صديقة طفولته «ران» ووالدها المحقق «توغوموري». يحقق كونان الصغير بمئات الجرائم ويغوص بعقول أشد مجرمي الزمان، حالًا كل شيء ببراعة غير معهودة. حلمه أن يجد العصابة التي جعلته ما هو عليه وينتقم منها. الجدير بالذكر أن الأنمي تخطى الـ800 حلقة ومازال يصدر أسبوعيًّا.

`)
.setImage('https://cdn.discordapp.com/attachments/1133000511872827432/1133001082776334486/9ad4bc5145ce8909043f299eb6a17ece.png')
 message.channel.send(yassen)
}
}) 

client.on("message", message => {
  if (message.content.startsWith(prefix + "monster")) {
 const yassen = new Discord.MessageEmbed()
.setTitle("Monster")
.setColor("#f3cfcf")
.setDescription(`**Monster Anime**


طبيب أعصاب ينقذ حياة طفل من الموت بسبب رصاصة اخترقت رأسه بينما كان هناك سطو إجرامي على منزل عائلته. يخرج الطبيب «تينما» من غرفة العمليات يتصبب عرقًا وهو سعيد جدًا بعمله الإنساني هذا. لكن لم يعلم أن ذلك العمل لَشارة بدء نبيلة لأعمال خبيثة بالمستقبل من قبل الشخص الذي أنقذه ذاته. فيعقد العزم على الوصول لذلك الفتى والنيل منه قبل أن يريق المزيد من الدماء ويزهق المزيد من الحيَوات. ملحمة بوليسية-نفسية تناقش مبادئ الشر وكيف لها أن تتبلور لتكون جزءً متأصلًا من الطبيعية الإنسانية المتطورة. حبكة تستحق وقفة بين فترة والأخرى لتقييم مبادئ الذات وكيف لها أن تتأثير بهذا الشكل البالغ والسريع. حقًا يستحق المشاهدة.



`)
.setImage('https://cdn.discordapp.com/attachments/1133000511872827432/1133001218105548800/monster.png')
 message.channel.send(yassen)
}
}) 

client.on("message", message => {
  if (message.content.startsWith(prefix + "hunter")) {
 const yassen = new Discord.MessageEmbed()
.setTitle("Hunter x Hunter")
.setColor("#f3cfcf")
.setDescription(`**Hunter x Hunter Anime**

يسعى «جون» للوصول إلى أبيه الذي تركه يتربى وحيدًا على جزيرته الأم، ثم مخر عباب السماء بحثًا عن المدلول النفيس لكلمة (صياد). وأثناء رحلة جون تلك تعرّف على ثلاثة أصبحوا رفقاء دربه أينما ذهب، لكن واحد فقط من صار مثل أخيه، وهو «كيلوا». يجد الثنائي نفسه يدخل في مغامرات جديدة أكبر من حجمه، لكن الرغبة في الارتقاء تجعله يدخلها بروح متحدية. هانتر عمل فني متكامل الأركان يناقش فيه الكاتب عدة قضايا بشكل سلس ومتزن. قضايا أخلاقية، قضايا نفسية، بل وقضايا فلسفية. والمميز في كل ذلك أن كل تلك النقاشات لمنغمسة في قلب الأحداث بشكل يجعل تدارك العظة عند ذروة الأحداث لأمرًا عظيمًا جدًا. أنمي يجمع بين المتعة، الخيال، والفلسفات الواقعية المؤلمة. توجاشي حقق بالفعل شيئًا جعله في مصاف العباقرة، وسيظل في مكانته طالما ظل هانتر آسرًا لقلوب الأجيال المتوالية.

`)
.setImage('https://cdn.discordapp.com/attachments/1133000511872827432/1133001340382101566/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI._V1_FMjpg_UX1000_.jpg')
 message.channel.send(yassen)
}
}) 

client.on('message', message =>{
if(message.content === prefix + "girl"){
  const ins = [
'https://media.discordapp.net/attachments/808082012715614329/808088423893041212/images_9.jpeg?width=180&height=180',
'https://media.discordapp.net/attachments/808082012715614329/808088424057536582/images_8.jpeg?width=145&height=222',
'https://media.discordapp.net/attachments/808082012715614329/808088424249819166/images_7.jpeg?width=122&height=265',
'https://media.discordapp.net/attachments/808082012715614329/808088424689958912/3.jpeg?width=138&height=234',
'https://media.discordapp.net/attachments/808082012715614329/808088424963506186/2.jpeg?width=227&height=142',
'https://media.discordapp.net/attachments/808082012715614329/808088654722629632/images_13.jpeg?width=146&height=220',
'https://media.discordapp.net/attachments/808082012715614329/808088654899314698/images_11.jpeg?width=169&height=190',
'https://media.discordapp.net/attachments/808082012715614329/808088655163818000/images_12.jpeg?width=139&height=232',
'https://media.discordapp.net/attachments/808082012715614329/808088655469477888/images_10.jpeg?width=227&height=142',
'https://media.discordapp.net/attachments/808082012715614329/808088864328515624/5.jpeg?width=178&height=182',
'https://media.discordapp.net/attachments/808082012715614329/808088864152748042/6.jpeg?width=151&height=214',
'https://media.discordapp.net/attachments/808082012715614329/808088863964659752/7.jpeg?width=151&height=214',
'https://media.discordapp.net/attachments/808082012715614329/808088863779192872/8.jpeg?width=142&height=228',
'https://media.discordapp.net/attachments/808082012715614329/808088863556763709/images_14.jpeg?width=138&height=233',
'https://media.discordapp.net/attachments/808082012715614329/808088863222136842/images_15.jpeg?width=147&height=219',
'https://media.discordapp.net/attachments/808082012715614329/808089026317123654/images_17.jpeg?width=134&height=240',
'https://media.discordapp.net/attachments/808082012715614329/808089026133360640/images_18.jpeg?width=180&height=180',
'https://media.discordapp.net/attachments/808082012715614329/808089025780908062/images_19.jpeg?width=164&height=197',
'https://media.discordapp.net/attachments/808082012715614329/808089026493546516/images_16.jpeg?width=151&height=214',
'https://media.discordapp.net/attachments/808082012715614329/808089228453740554/images_23.jpeg?width=155&height=207',
'https://media.discordapp.net/attachments/808082012715614329/808089228717457418/images_22.jpeg?width=190&height=170'
];
const embed = new Discord.MessageEmbed()
.setColor("#f3cfcf")
.setAuthor("Anime Girl","")
.setImage(`${ins[Math.floor(Math.random() * ins.length)]}`)
.setFooter('Anime Girl')
message.channel.send(embed)
}
});

client.on('message', message =>{
if(message.content === prefix + "boy"){
  const ins = [
'https://media.discordapp.net/attachments/808082012715614329/808085094991527976/1dd338ba14e99636efd2fa117ccb3dd7.png?width=189&height=239',
'https://media.discordapp.net/attachments/808082012715614329/808085292803162119/490c1f512afad52a5e3d3b8c79b2e9e8.png?width=188&height=270',
'https://media.discordapp.net/attachments/808082012715614329/808085411549020213/39cd573da843b6b8bd356884f1b4c561.png?width=189&height=189',
'https://media.discordapp.net/attachments/808082012715614329/808085419941298226/a2056a23b5b1e6630dee943751780b65.png?width=189&height=189',
'https://media.discordapp.net/attachments/808082012715614329/808085421178880030/d83f4f2a8478eea36983655d1d58a1df.png?width=189&height=305',
'https://media.discordapp.net/attachments/808082012715614329/808085432431804456/6f079ef477ca8772e23161da35d8c7ab.png?width=189&height=189',
'https://media.discordapp.net/attachments/808082012715614329/808086462062788618/2e853c09b2f0df38360537d666a46fae.png?width=189&height=251',
'https://media.discordapp.net/attachments/808082012715614329/808086488713003079/f3c94b5727ba613d519cc0acfeeb5933.png?width=188&height=303',
'https://media.discordapp.net/attachments/808082012715614329/808086514310709278/11eeb06f172db6f2947ea36657fe7a08.png?width=189&height=209',
'https://media.discordapp.net/attachments/808082012715614329/808086740655931452/740fb924650aa6603bddec73cf9e1f81.png?width=189&height=283',
'https://media.discordapp.net/attachments/808082012715614329/808086799591276564/5a7aa0c6d05cc5e774eee96fd322f3a2.png?width=188&height=245',
'https://media.discordapp.net/attachments/808082012715614329/808086799591276564/5a7aa0c6d05cc5e774eee96fd322f3a2.png?width=188&height=245',
'https://media.discordapp.net/attachments/808082012715614329/808087060753285120/00040514cf30aeb20531e5b1ce8d5b5d.png?width=189&height=242',
'https://media.discordapp.net/attachments/808082012715614329/808087087638904852/0e062a71afd075036ccd86cb22bc57a2.png?width=189&height=267',
'https://media.discordapp.net/attachments/808082012715614329/808087087638904852/0e062a71afd075036ccd86cb22bc57a2.png?width=189&height=267',
'https://media.discordapp.net/attachments/808082012715614329/808087267347398676/1.jpeg?width=106&height=106',
'https://media.discordapp.net/attachments/808082012715614329/808087638929440798/69fe5876d13f5861d2fb94f90a923be2.png?width=189&height=189',
'https://media.discordapp.net/attachments/808082012715614329/808087721670869022/images.jpeg?width=155&height=207'
];
const embed = new Discord.MessageEmbed()
.setColor("#f3cfcf")
.setAuthor("Anime Boy","")
.setImage(`${ins[Math.floor(Math.random() * ins.length)]}`)
.setFooter('Anime Boy')
message.channel.send(embed)
}
});

// نهايه انمي
//----------------------------------------------------------------------------------------------------
// gams 2 
const cuttweet = [
  "كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟",
  "كت تويت | أكثر شيء يُسكِت الطفل برأيك؟",
  "كت تويت | الحرية لـ ... ؟",
  "كت تويت | قناة الكرتون المفضلة في طفولتك؟",
  "كت تويت ‏| كلمة للصُداع؟",
  "كت تويت ‏| ما الشيء الذي يُفارقك؟",
  "كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟",
  "كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟",
  "كت تويت | بعد ١٠ سنين ايش بتكون ؟",
  "كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟",
  "‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟",
  "كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟",
  "‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟",
  "‏كت تويت | وش يفسد الصداقة؟",
  "‏كت تويت | شخص لاترفض له طلبا ؟",
  "‏كت تويت | كم مره خسرت شخص تحبه؟.",
  "‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟",
  "‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟",
  "‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!",
  "‏كت تويت |أقوى كذبة مشت عليك ؟",
  "‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟",
  "كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟",
  "‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟",
  "‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟",
  "‏كت تويت | وش محتاج عشان تكون مبسوط ؟",
  "‏كت تويت | مطلبك الوحيد الحين ؟",
  "‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟"
];

client.on("message", niro_games => {
  
  if (
    niro_games.content.startsWith(prefix + "cut") ||
    niro_games.content.startsWith(prefix + "كت")
  ) {
    if (!niro_games.channel.guild)
      return niro_games.reply("** This command only for servers**");
    var embed = new Discord.MessageEmbed()
      .setThumbnail(niro_games.author.avatarURL())
      .addField(
        "لعبه كت تويت",
        `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`
      );
    niro_games.reply(embed);

    console.log("[id] Send By: " + niro_games.author.username);
  }
});

client.on("message", niro_games => {
  
  if (
    niro_games.content == prefix + "flag" ||
    niro_games.content == prefix + "اعلام"
  ) {
    var x = [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/256px-Flag_of_Brazil.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/256px-Flag_of_Jordan.svg.png",
      "https://cdn.discordapp.com/attachments/1132987057053106216/1132994759535906836/Flag_of_Egypt.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1200px-Flag_of_Senegal.svg.png"
    ];
    var x2 = ["البرازيل", "الاردن", "مصر", "السنغال"];
    var x3 = Math.floor(Math.random() * x.length);
    var flag = new Discord.MessageEmbed()
      .setImage(`${x[x3]}`)
      .setTitle(`**اسرع شخص يرسل العلم خلال __10__ ثواني**`);
    niro_games.reply(flag).then(msg1 => {
      var r = niro_games.channel.awaitMessages(msg => msg.content == x2[x3], {
        max: 1,
        time: 10,
        errors: ["time"]
      });
      r.catch(() => {
        return niro_games.channel
          .send(
            new Discord.MessageEmbed()
              .setTitle(`${error}**لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الصحيحةة هيا** ***${x2[x3]}***`)
          );
      });

      r.then(collected => {
        
        niro_games.reply(
          new Discord.MessageEmbed()
            .setTitle(`**لقد قمت بالاجابه بشكل صحيح**`)
        );
      });
    });
  }
});

client.on("message", niro_games => {
  
  if (
    niro_games.content == prefix + "brand" ||
    niro_games.content == prefix + "شعار"
  ) {
    var x = [
      "https://cdn.discordapp.com/attachments/1133000511872827432/1133002236423852042/download_1.png",
      "https://cdn.discordapp.com/attachments/1133000511872827432/1133002357303676969/download_2.png",
      "https://cdn.discordapp.com/attachments/1133000511872827432/1133002462626857010/channels4_profile.jpg",
      "https://cdn.discordapp.com/attachments/1133000511872827432/1133002571389337752/Google_Chrome_icon_February_2022.svg.png"
    ];
    var x2 = ["جافا", "ريزر", "يوتيوب", "جوجل كروم"];
    var x3 = Math.floor(Math.random() * x.length);
    var brand = new Discord.MessageEmbed()
      .setImage(`${x[x3]}`)
      .setTitle(`**اسرع شخص يرسل الاشعار خلال __10__ ثواني**`);

    niro_games.reply(brand).then(msg1 => {
      var r = niro_games.channel.awaitMessages(msg => msg.content == x2[x3], {
        max: 1,
        time: 20000,
        errors: ["time"]
      });
      r.catch(() => {
        return niro_games.channel
          .send(
            new Discord.MessageEmbed()
              .setTitle(`${error}لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الصحيحةة هيا **${x2[x3]}**`)
          );
      });

      r.then(collected => {
        
        niro_games.reply(
          new Discord.MessageEmbed()
            .setTitle(`**لقد قمت ب أرسال الشعار في الوقت المناسب**`)
        );
      });
    });
  }
});

client.on("message", niro_games => {

  if (
    niro_games.content == prefix + "math" ||
    niro_games.content == prefix + "رياضيات"
  ) {
    var x = ["https://cdn.discordapp.com/attachments/1133000511872827432/1133004914545676371/Color_List_..._5.png", "https://cdn.discordapp.com/attachments/1133000511872827432/1133004331700977724/Color_List_..._4.png", "https://cdn.discordapp.com/attachments/1133000511872827432/1133004123348934806/Color_List_..._3.png", "https://cdn.discordapp.com/attachments/1133000511872827432/1133003879416594462/Color_List_..._2.png", "https://cdn.discordapp.com/attachments/1133000511872827432/1133003561601605642/Color_List_..._1.png"];
    var x2 = ["2000", "26", "14", "56", "12"]
    var x3 = Math.floor(Math.random() * x.length);
    var brand = new Discord.MessageEmbed()
      .setImage(`${x[x3]}`)
      .setTitle(`**اسرع شخص يرسل الحل خلال __10__ ثواني**`);

    niro_games.reply(brand).then(msg1 => {
      var r = niro_games.channel.awaitMessages(msg => msg.content == x2[x3], {
        max: 1,
        time: 20000,
        errors: ["time"]
      });
      r.catch(() => {
        return niro_games.channel
          .send(
            new Discord.MessageEmbed()
              .setTitle(`**${error}لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح الصحيحة هيا __${x2[x3]}__ **`)
          );
      });

      r.then(collected => {
        
        niro_games.reply(
          new Discord.MessageEmbed()
            .setTitle(`**لقد قمت بأرسال الحل في الوقت المناسب**`)
        );
      });
    });
  }
});

client.on("message", niro_games => {

  if (
    niro_games.content == prefix + "capitals" ||
    niro_games.content == prefix + "عواصم"
  ) {
    var x = ["https://cdn.discordapp.com/attachments/1133000511872827432/1133006671791259678/Flag_of_Egypt.svg.png", "https://cdn.discordapp.com/attachments/1133000511872827432/1133006932261732382/download_3.png", "https://cdn.discordapp.com/attachments/1133000511872827432/1133007259316801556/download.jpg", "https://cdn.discordapp.com/attachments/1133000511872827432/1133007423871909948/800px-Flag_of_Saudi_Arabia.svg.png", "https://cdn.discordapp.com/attachments/1133000511872827432/1133007527752257606/1200px-Flag_of_Syria.svg.png", "https://cdn.discordapp.com/attachments/1133000511872827432/1133007671356817508/1200px-Flag_of_Palestine.svg.png"];
    var x2 = ["القاهره", "برازيليا", "اوتاوا", "الرياض", "دمشق", "القدس"]
    var x3 = Math.floor(Math.random() * x.length);
    var brand = new Discord.MessageEmbed()
      .setImage(`${x[x3]}`)
      .setTitle(`**اسرع شخص يرسل العاصمه خلال __10__ ثواني**`);

    niro_games.reply(brand).then(msg1 => {
      var r = niro_games.channel.awaitMessages(msg => msg.content == x2[x3], {
        max: 1,
        time: 20000,
        errors: ["time"]
      });
      r.catch(() => {
        return niro_games.channel
          .send(
            new Discord.MessageEmbed()
              .setTitle(`**${error}لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح الصحيحة هيا __${x2[x3]}__ **`)
          );
      });

      r.then(collected => {
        
        niro_games.reply(
          new Discord.MessageEmbed()
            .setTitle(`**لقد قمت بأرسال العاصمة في الوقت المناسب**`)
        );
      });
    });
  }
});
// end game 2
//---------------------------------------------------------------------------------------------
// كود اخفاء شات و اظهاره

client.on('message', message =>{
if(message.content === prefix +"show"){
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
              VIEW_CHANNEL : true
            }).then(() => {
                                const embed = new Discord.MessageEmbed()
                .setColor("#f3cfcf")
               .setThumbnail(message.guild.iconURL())
                .setDescription(`> **Done show This Room ${message.channel}**`)
                .setFooter(`By ${message.author.username}`)
                message.channel.send(embed)
                })
}
});

client.on('message', message =>{
if(message.content === prefix +"hide"){
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
              VIEW_CHANNEL : false
            }).then(() => {
                                const embed = new Discord.MessageEmbed()
                .setColor("#f3cfcf")
               .setThumbnail(message.guild.iconURL())
                .setDescription(`> **Done Hide This Room ${message.channel}**`)
                .setFooter(`By ${message.author.username}`)
                message.channel.send(embed)
                })
}
});
// ----------------------------------------------------------------------------------------------

// code mute / unmute 

client.on('message', async message => {
if(message.content.startsWith(prefix + 'mute')) {
if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(``);
  var args = message.content.split(" ").slice(2).join(" ")
    
let mention = message.mentions.members.first();
  
let member = message.mentions.members.first()
  
let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
if(!role) {
    message.guild.roles.create({
        data: {
            name: 'Muted',
            permissions: [],
            color: 'GREY'
        }
    })
}
  
if(!mention) return message.channel.send(`**Usage: ${prefix}mute \`<@user>\` <Reason> **`);
  if (member.user.id === message.author.id) return message.channel.send(`**لا استطيع اعطائه ميوت **`);
if (member.user.id === client.user.id) return message.channel.send(`**لم اجد الشخص**`);
message.guild.channels.cache.forEach(c => {
c.updateOverwrite(role , {
SEND_MESSAGES: false, 
ADD_REACTIONS: false
});
});
  
mention.roles.add(role)
 
message.channel.send(`**✅ - تم بنجاح ${mention.user.tag} , ${args || "No reason provided."}**`)
let mens = new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL())//.setThumbnail(message.guild.iconURL({ dynamic: true, format: 'png' }))
.setTitle(`You Have Been Muted`)
.setDescription(`**
 In Server : ${message.guild.name}
 With Reson : ${args || "No reason provided."}
 By : ${message.author}
**`)
.setColor("#f3cfcf")
.setFooter('Id ' + message.author.id, message.author.avatarURL())
member.send(mens);
}
})


client.on('message', async message => {
if(message.content.startsWith(prefix + 'unmute')) {
if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(``);
let mention = message.mentions.members.first();
var args = message.content.split(" ").slice(2).join(" ")
let member = message.mentions.members.first()
let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
if(!mention) return message.channel.send(`**Usage: ${prefix}unmute \`<@user>\` **`);
if (member.user.id === client.user.id) return message.channel.send(`**لم اجد الشخص**`);
mention.roles.remove(role)
message.channel.send(`**✅ - تم بنجاح ${mention.user.tag} **`)
let mens = new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL())
.setTitle(`You Have Been UnMuted`)
.setDescription(`**
 In Server : ${message.guild.name}
 With Reson : ${args || "No reason provided."}
 By : ${message.author}
**`)
.setColor("#f3cfcf")
.setFooter('Id ' + message.author.id, message.author.avatarURL())
member.send(mens);
}
})
//----------------------------------------------------------------------------------------------------

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith( prefix + 'kick')) {
    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
          
        
            const embed = new Discord.MessageEmbed()
           .setColor("#f3cfcf")
          .setTitle(`Successfully kicked ${user.tag}`)
          message.channel.send(embed);
 
          })
          .catch(err => {
 
            message.reply('I was unable to kick the member');
            
            console.error(err);
          });
      } else {
       
        message.reply("That user isn't in this guild!");
      }
      
    } else {
 
const embed = new Discord.MessageEmbed()
.setColor("#f3cfcf")
.setTitle("``You didn't mention the user to kick!`` ❌")
message.channel.send(embed);
    }
  }
});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith( prefix + 'ban')) {
        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");      
 
    const user = message.mentions.users.first();
  
    if (user) {
      
      const member = message.guild.member(user);
      
      if (member) {
 
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            
                        const embed = new Discord.MessageEmbed()
           .setColor("#f3cfcf")
          .setTitle(`Successfully banned ${user.tag}`)
          message.channel.send(embed);
          })
          .catch(err => {
 
            message.reply('I was unable to ban the member');
           
            console.error(err);
          });
      } else {
       
        message.reply("That user isn't in this guild!");
      }
    } else {
      
      const embed = new Discord.MessageEmbed()
.setColor("#f3cfcf")
.setTitle("``You didn't mention the user to ban!`` ❌")
message.channel.send(embed);
    }
  }
});
// كود الاداره
//-------------------------------------------------------------------------------------------
// poll
client.on('message', naarCodes=> {
    if(naarCodes.content.startsWith(prefix + 'poll')) {
    if (!naarCodes.member.hasPermission('ADMINISTRATOR')) return naarCodes.channel.send('You Dont Have Permission')
      let args = naarCodes.content.split(' ').slice('1').join(" ")
        if (!args) return naarCodes.channel.send('Please type A Message To Poll On It');
        const naarembed = new Discord.MessageEmbed()
            .setDescription(`**New poll :** \n \`${args}\``)
            .setColor('#f3cfcf')
            .setThumbnail(naarCodes.guild.iconURL())
            .setFooter(`Poll By : ${naarCodes.author.tag}`);
        naarCodes.delete();
        naarCodes.channel.send(naarembed)
    }
})

// love

client.on('message', message => {
  if(message.content.startsWith(prefix + "love")) {
let user = message.mentions.users.first();
if(!user) return message.reply('**منشن شخص**')
      if (user.id == message.author.id) return message.reply("**طبعا انت بتحب نفسك **")

 message.channel.send({
          embed: new Discord.MessageEmbed()
          .setFooter(`Requsted by ${message.author.username}`)
          .setTitle(`${message.author.username}  يحب  ${user}` )
          .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
      })
  }
})

/////////////////////////////////////////////////////////////////////////////

// kil game 

client.on('message', message => {
    if (message.content.startsWith(prefix + 'kill')) {
        let user = message.mentions.users.first();
        if (!user) {
           message.reply(`You've to mention user you want to kill.`)
        }
        let kill = [                   'https://cdn.discordapp.com/attachments/1142464239731220530/1142809536915312660/kill-me.gif','حط الصورة الي تبغاها',            ``        ];
        message.channel.send({
            embed: new Discord.MessageEmbed()
               .setDescription(`${message.author} killed **${user}**`)
            .setImage(
                kill[Math.floor(Math.random() * kill.length)]
            )
        });
    }
});


client.on('message',badboy => {
  if(badboy.content.startsWith(prefix + "meme")){
    let reply =[
      'https://pm1.narvii.com/7630/ca050d19dc9832424a888f017e6f1c28762d8f17r1-863-540v2_hq.jpg',
      'https://i.pinimg.com/originals/9a/b7/b7/9ab7b7e225f2cc5ee190e8a67c126c66.jpg',
      'https://pbs.twimg.com/media/Ecq6FxYWkAIQ8pE.jpg',
      'https://i.ytimg.com/vi/sm6z50Qoxqg/maxresdefault.jpg',
      'https://64.media.tumblr.com/tumblr_m7mw1u9vb81rr8kmyo1_1280.jpg',
      'https://i.ytimg.com/vi/7lTvO9wxqPw/hqdefault.jpg',
      'https://pm1.narvii.com/7723/6ed7ca7c14b84d2f36a9383ba01751a600e537f8r1-799-624v2_uhq.jpg',
      'https://i.pinimg.com/564x/04/80/c8/0480c863e93e5f83f3eb087c0579961a.jpg',
      'https://i.ytimg.com/vi/rlOT3GCBVjE/hqdefault.jpg',
      'https://i.ytimg.com/vi/C7-hq9Ffcj8/maxresdefault.jpg',
      'https://pbs.twimg.com/media/ESnM7BbXQAAb0w2.jpg',
      'https://i.ytimg.com/vi/0Hp2a-lrm_o/hqdefault.jpg',
      'https://i.ytimg.com/vi/SRrIcSkwYGQ/mqdefault.jpg',
      'https://stepcdn.com/assets/2019-04/18/11/43vc5/55944951_2568294106575830_8991684621687062528_n-700x.jpg',
      'https://i.pinimg.com/originals/cb/bf/da/cbbfdaf0da7743a491e832cb86e95ea3.jpg',
      'https://i.pinimg.com/736x/09/01/e3/0901e327b98ca708b81e64917a02d2a0.jpg',
      'https://i.pinimg.com/originals/df/91/4e/df914ee1f44c13ad4e7a1a472bf582c3.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8p_FAfFjnwjtMTPBLPINsIurByWcBYziQIQ&usqp=CAU',
      'https://64.media.tumblr.com/48616c5f37aa9b702b0838a8cfff058f/9663137ce20047ec-52/s1280x1920/77f01452f0473b4edf142cfd8649a8bb2b8a2f40.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPFTRZcVlYXkAQYa0dEYuUHgYoFHbCAE7Zw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BkWoPcUKvxRJY1mQk87ST2d-zPxc89Epiw&usqp=CAU',
     
      ];
let an = reply[Math.floor(Math.random() * reply.length)];
badboy.channel.send(`${an}`)
  }
});

client.on('message',badboy => {
  if(badboy.content.startsWith(prefix + "nokta")){
    let reply =[
      'https://i.pinimg.com/originals/90/4a/e9/904ae9fdd07d8d7afbd3b89c0067a24e.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlE0X6Q3y_CXhdJThWUnVvwKQQZOS_PBu_MQ&usqp=CAU',
      'https://i.pinimg.com/564x/4f/c3/d0/4fc3d08016a6398836d7c64c7d64d7ba.jpg',
      'https://www.aljawab24.com/wp-content/uploads/2020/10/%D9%86%D9%83%D8%AA-1-1-1-6-845x475.jpg',
      'https://i.pinimg.com/564x/ed/14/bf/ed14bfbcbfaeef8afdcf399f9c81681b.jpg',
      'https://m7et.com/wp-content/uploads/2020/04/dd78334190a889394039a9a72ea07c40.jpg',
      'https://i.pinimg.com/474x/90/92/d2/9092d2e5586919b5c4892a1f99a95ace.jpg',
      'https://www.i7lm.com/wp-content/uploads/2019/04/%D9%86%D9%83%D8%AA-%D9%85%D8%B6%D8%AD%D9%83%D8%A9.png',
      'https://www.eqrae.com/wp-content/uploads/2020/09/%D9%83-3.jpg',
      'https://media.gemini.media/img/large/2017/3/23/2017_3_23_16_51_15_362.jpg',
      'https://www.meshwarmedia.com/wp-content/uploads/2017/10/%D9%86%D9%83%D8%AA%D8%A9-12.jpg',
      'https://womenss.net/wp-content/uploads/2020/02/1713.jpg',
      'https://www.nsowo.com/wp-content/uploads/2019/02/%D9%86%D9%83%D8%AA-%D9%85%D8%B6%D8%AD%D9%83%D8%A9-%D9%85%D8%B9-%D9%86%D9%83%D8%AA%D9%87-%D8%B4%D8%B1%D8%B7%D9%8A-300x224.jpg',
      'https://www.i7lm.com/wp-content/uploads/2020/03/3333-5.jpg',
      'https://pbs.twimg.com/profile_images/378800000670246023/33e11a886fb45f462552bfdde1a5c40b_400x400.jpeg',
      
      ];
let an = reply[Math.floor(Math.random() * reply.length)];
badboy.channel.send(`${an}`)
  }
});

client.on('message', message => { // هاذا للبرودكسات
        // هنا تقدر تغير البرفكس
	var command = message.content.split(" ")[0];
	if(command == prefix + 'ebc') { // الكوماند ebc
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don`t have **MANAGE_MESSAGES** permission!");
		var args = message.content.split(' ').slice(1).join(' ');
		if(message.author.bot) return;
		if(!args) return message.channel.send(`**➥ Useage:** ${prefix}bc كلامك`);
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don`t have **MANAGE_MESSAGES** permission!");
		
		let bcSure = new Discord.MessageEmbed()
		.setTitle(`:mailbox_with_mail: **هل انت متأكد انك تريد ارسال رسالتك الى** ${message.guild.memberCount} **عضو**`)
		.setThumbnail(client.user.avatarURL())
		.setColor('#f3cfcf')
		.setDescription(`**\n:envelope: ➥ رسالتك**\n\n${args}`)
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL())
		
		message.channel.send(bcSure).then(msg => {
			msg.react('✅').then(() => msg.react('❎'));
			message.delete();
			
			
			let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
			let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
			
			let sendBC = msg.createReactionCollector(yesEmoji);
			let dontSendBC = msg.createReactionCollector(noEmoji);
			
			sendBC.on('collect', r => {
				        message.guild.members.cache.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.MessageEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#f3cfcf')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
				message.channel.send(`:timer: **يتم الان الارسال الى** \`\`${message.guild.memberCount}\`\` **عضو**`).then(msg => msg.delete(5000));
				msg.delete();
			})
			dontSendBC.on('collect', r => {
				msg.delete();
				message.reply(':white_check_mark: **تم الغاء ارسال رسالتك بنجاح**').then(msg => msg.delete(5000));
			});
		})
	}
});



client.on('message',async message => {
  if(message.channel.type === 'dm') return;
  if(message.author.bot) return;
  let args = message.content.split(' ');
  if(args[0] === `${prefix}obc`) {
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
  if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');
 
  let msgCount = 0;
  let errorCount = 0;
  let successCount = 0;
    let status;
    if(msgCount === message.guild.memberCount) {
        status = 'Sent';
    } else if(msgCount !== message.guild.memberCount) {
        status = 'Sending';
    }
  message.channel.send(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسلة**`).then(msg => {
    message.guild.members.cache.forEach(g => {
      g.send(args.slice(1).join(' ')).then(() => {
        successCount++;
        msgCount++;
                if(!msg) return;
        msg.edit(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسل**`);
      }).catch(e => {
        errorCount++;
        msgCount++;
                if(!msg) return;
        msg.edit(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسل**`);
      });
    });
  });
}
});

client.on('message', prof=>{
 
    if(prof.content.startsWith(prefix + 'lock'))
    {
       if(!prof.guild.me.hasPermission('MANAGE_CHANNELS'))return prof.reply('**i dont hava premission `MANAGE_CHANNELS`:pleading_face: **')
  if(!prof.member.hasPermission('MANAGE_CHANNELS'))return prof.reply('**you dont hava`MANAGE_CHANNELS`Permission.!**')
  
  prof.channel.overwritePermissions([{
      id:prof.guild.id,
      deny:['SEND_MESSAGES'],
    }]).then(p=>{
        var professor = new Discord.MessageEmbed()
        .setColor('#f3cfcf')
        .setThumbnail(client.user.avatarURL())
        .setTitle(`Locked ${prof.channel.name} `)
        .setDescription(`This Channel is <#${prof.channel.id}> Locked `)
        prof.channel.send(professor);
    })
}
    if(prof.content.startsWith(prefix + 'unlock'))
    {
       if(!prof.guild.me.hasPermission('MANAGE_CHANNELS'))return prof.reply('**i dont hava premission `MANAGE_CHANNELS`:pleading_face: **')
  if(!prof.member.hasPermission('MANAGE_CHANNELS'))return prof.reply('**you dont hava`MANAGE_CHANNELS`Permission.!**')
  
  prof.channel.overwritePermissions([{
      id:prof.guild.id,
      allow:['SEND_MESSAGES'],
    }]).then(p=>{
        var professor = new Discord.MessageEmbed()
        .setColor('#f3cfcf')
        .setThumbnail(client.user.avatarURL())
        .setTitle(`open ${prof.channel.name}  `)
        .setDescription(`This Channel is <#${prof.channel.id}> open `)
        prof.channel.send(professor);
    })
  
    }
  
  
});

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.cache.forEach(NoNo => {
          message.guild.members.unban(NoNo);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
    .members.unban(args)
      .then(m => {
        message.channel.send(`**✅ Unbanned ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**🙄 - I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.MessageEmbed()
.setColor("#f3cfcf")
.setThumbnail(message.author.avatarURL())
.setAuthor(`محـتوى الرسالة : ${args}`)
.setDescription(`**أضــغط على ✅ لارسال البرودكاست**`)
if (!args) return message.reply(':x: **يجب عليك كتابة رسالة لارسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('✅')
.then(() =>msg.react('✅'))
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
EmbedBc.on("collect", r => {
message.channel.send(`✅**تـــم الارسال**`).then(m => m.delete(5000));
message.guild.members.cache.forEach(m => {
var bc = new
Discord.MessageEmbed()
.setColor('#f3cfcf')
.setAuthor(`
 Server : ${message.guild.name}`)
.setDescription(`✉️ **Message :** 
**${args}**
―
:hammer_pick:  **By :**
**${message.author.username}**
`)
.setFooter(client.user.tag,client.user.avatarURL())
.setThumbnail(client.user.avatarURL())
m.send({ embed: bc })
msg.delete();
})
})
})
}
});

//ticket


client.on('message', message =>{
if(message.content === prefix +"create-log"){
message.guild.channels.create(`ticket-log`, { type: "text" })
message.channel.send('Done Create log channel , ☑️')
}
});


client.on('message', message =>{
if(message.content.startsWith(prefix + "new")){
  let args = message.content.split(" ").slice(1).join(" ");
message.react("✅")
message.react("❎")

  // Filters
  const yesFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id
  const noFilter = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id

  const yes = message.createReactionCollector(yesFilter, {timer: 6000})
  const no = message.createReactionCollector(noFilter, {timer: 6000})
   yes.on('collect', (r, u) => {
      message.delete();
      message.reply("Done Create Your Ticket , ☑️")
      message.guild.channels.create(`ticket-${message.author.id}`, { type: "text" }).then(async channel => {
      channel.createOverwrite(message.guild.id, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false
      });
            channel.createOverwrite(message.author.id, {
        VIEW_CHANNEL: true,
        SEND_MESSAGES: true
      });
            channel.send(`<@${message.author.id}>`, new Discord.MessageEmbed()
            .setTitle(" مرحبا بك في التكت أخبرنا في مشكلتك او سبب فتح تكت وسوف نرد بأقرب وقت   :hammer_pick: ")
            .setColor("#f3cfcf")
            
            
            )
})       
          const log = client.channels.cache.find(channel => channel.name === 'ticket-log');
      const embed = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setColor("#f3cfcf")
      .setTitle("Created Ticket 🎟️")
      .addField("Created By :" , `${message.author.username}`)
      .setFooter(message.author.id,message.author.avatarURL())
      log.send(embed)
  })

     no.on('collect', (r, u) => {
      message.delete();
  })

}
});

/*
- [ ] -
*/


client.on('message', message =>{
if(message.content === prefix +"cl"){                          if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don`t have **MANAGE_MESSAGES** permission!"); 
             if(!message.channel.name.includes("ticket-")) return message.channel.send("**❌ | This is Not Ticket Channel**");
message.channel.createOverwrite(message.guild.id, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false
});

message.channel.createOverwrite(message.author.id, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false
});
       const log = client.channels.cache.find(channel => channel.name === 'ticket-log');
      const embed = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setColor("#f3cfcf")
      .setTitle("Closed Ticket 🔒")
      .addField("Closed By :" , `${message.author.username}`)
      .setFooter(message.author.id,message.author.avatarURL())
      log.send(embed);
             if(!log) message.author.send("**لا يوجد روم لوق من فضلك قم بأنشاء روم اللوق**");

}
});

/*
- [ Copyright youssefgames ] -
*/

client.on('message', message =>{
if(message.content === prefix +"de"){
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don`t have **MANAGE_MESSAGES** permission!");
         if(!message.channel.name.includes("ticket-")) return message.channel.send("**❌ | This is Not Ticket Channel**")
  message.react("✅")
message.react("❎")
  // Filters
  const yesFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id
  const noFilter = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id

  const yes = message.createReactionCollector(yesFilter, {timer: 1000})
  const no = message.createReactionCollector(noFilter, {timer: 1000})
     yes.on('collect', (r, u) => {
message.channel.delete();
       const log = client.channels.cache.find(channel => channel.name === 'ticket-log');
      const embed = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setColor("#f3cfcf")
      .setTitle("Deleted Ticket 🗑️")
      .addField("Deleted By :" , `${message.author.username}`)
      .setFooter(message.author.id,message.author.avatarURL())
      log.send(embed)
  })
       no.on('collect', (r, u) => {
      message.delete();
  })

}
});




const Sra7a = [
  'صراحه  |  صوتك حلوة؟',
  'صراحه  |  التقيت الناس مع وجوهين؟',
  'صراحه  |  شيء وكنت تحقق اللسان؟',
  'صراحه  |  أنا شخص ضعيف عندما؟',
  'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
  'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
  'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
  'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
  'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
  'صراحه  |  أشجع شيء حلو في حياتك؟',
  'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
  'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
  'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
  'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
  'صراحه  |  نظرة و يفسد الصداقة؟',
  'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
  'صراحه  |  شخص معك بالحلوه والمُره؟',
  'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
  'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
  'صراحه  |  وش تتمنى الناس تعرف عليك؟',
  'صراحه  |  ابيع المجرة عشان؟',
  'صراحه  |  أحيانا احس ان الناس ، كمل؟',
  'صراحه  |  مع مين ودك تنام اليوم؟',
  'صراحه  |  صدفة العمر الحلوة هي اني؟',
  'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
  'صراحه  |  صفة تحبها في نفسك؟',
  'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
  'صراحه  |  تصلي صلواتك الخمس كلها؟',
  'صراحه  |  ‏تجامل أحد على راحتك؟',
  'صراحه  |  اشجع شيء سويتة بحياتك؟',
  'صراحه  |  وش ناوي تسوي اليوم؟',
  'صراحه  |  وش شعورك لما تشوف المطر؟',
  'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
  'صراحه  |  ما اكثر شي ندمن عليه؟',
  'صراحه  |  اي الدول تتمنى ان تزورها؟',
  'صراحه  |  متى اخر مره بكيت؟',
  'صراحه  |  تقيم حظك ؟ من عشره؟',
  'صراحه  |  هل تعتقد ان حظك سيئ؟',
  'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
  'صراحه  |  كلمة تود سماعها كل يوم؟',
  'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
  'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
  'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
  'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
  '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
  'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
  '‏صراحه | هل تحب عائلتك ام تكرههم؟',
  '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
  '‏صراحه  |  هل خجلت من نفسك من قبل؟',
  '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
  '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
  '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
 '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
  '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
  '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
  'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
  '‏صراحه  |  ما هو عمرك الحقيقي؟',
  '‏صراحه  |  ما اكثر شي ندمن عليه؟',
'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
client.on('message', message => {
if (message.content.startsWith(prefix + "sara7a")) {
  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.MessageEmbed()
.setTitle("لعبة صراحة ..")
.setColor('#f3cfcf')
.setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
.setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
               .setTimestamp()

message.channel.send(client);
message.react("❓")
}
});

const Za7f = [
 "**صورة وجهك او رجلك او خشمك او يدك**.",
 "**اصدر اي صوت يطلبه منك الاعبين**.",
 "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
 "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
 "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
 "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
 "**ذي المرة لك لا تعيدها**.",
 "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
 "**صور اي شيء يطلبه منك الاعبين**.",
 "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
 "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
 "**سو مشهد تمثيلي عن مصرية بتولد**.",
 "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
 "**ذي المرة لك لا تعيدها**.",
 "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
 "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
 "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
 "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
 "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
 "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
 "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
 "**اتصل على امك و قول لها انك تحبها :heart:**.",
 "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
 "**قل لواحد ماتعرفه عطني كف**.",
 "**منشن الجميع وقل انا اكرهكم**.",
 "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
 "**روح المطبخ و اكسر صحن او كوب**.",
 "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
 "**قول لاي بنت موجود في الروم كلمة حلوه**.",
 "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
 "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
 "**قول قصيدة **.",
 "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
 "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
 "**اول واحد تشوفه عطه كف**.",
 "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
 "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
 "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
 "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
 "**تاخذ عقابين**.",
 "**قول اسم امك افتخر بأسم امك**.",
 "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
 "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
 "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
 "**تتصل على الوالده  و تقول لها خطفت شخص**.",
 "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
 "**����تصل على الوالده  و تقول لها  احب وحده**.",
   "**تتصل على شرطي تقول له عندكم مطافي**.",
   "**خلاص سامحتك**.",
   "** تصيح في الشارع انا  مجنوون**.",
   "** تروح عند شخص تقول له احبك**.",

]
client.on('message', message => {
if (message.content.startsWith(prefix + "za7f")) {
  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.MessageEmbed()
.setTitle("لعبة زحف ..")
.setColor('#f3cfcf')
.setDescription(`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
               .setTimestamp()

message.channel.send(client);
message.react("❗")
}
});

