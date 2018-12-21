const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = '!';

const ms = require("ms");

const fs = require("fs");

var Canvas = require('canvas');

var jimp = require('jimp');

const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();

client.on('ready', () => {

  console.log(`---------------------------------------`);

  console.log(`Logged in as ${client.user.tag}!`);

  console.log(`---------------------------------------`);

});

client.on('ready', () => {

   client.user.setGame(" !help | V1.0.0");

}); 

//الرد التلقائي

//--------------------------------------------

client.on('message', msg => {

  if (msg.content === '!help') {

    msg.reply('Check Your DM :envelope_with_arrow:');

  }

});

//--------------------------------------------

client.on('message', msg => {

  if (msg.content === '!help') {

    msg.reply('لقد تم إرسال الأوامر في الخاص :envelope_with_arrow: اذا لم تصلك رساله قم بإلغاء خظر الرسائل وجرب مره اخري');

  }

});

// -------------------------------------------

client.on('message', msg => {

  if (msg.content === '!adminhelp') {

    msg.author.send(`

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

👑『اوامر ادارية』👑

👑!ban 『لتعطي شخص باند』

👑!kick 『لتعطي شخص كيك』

👑!clear 『لمسح الشات برقم』

👑!ctext  مـلاحظه: الاسم انت تختاره『لي انشاء روم كتابي』

👑!cvoice  مـلاحظه: الاسم انت تختاره『لي انشاء روم صوتي』

👑!deletech  『كـود يحذف الـروم سواء صوتي او كتابي』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

    

    `);

  }

});

client.on('message', msg => {

  if (msg.content === '!help') {

    msg.author.send(`

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

                        

!server 『معلومات عن السيرفر』                      

!ping 『لمعرفه سرعه البوت』

!members 『معلومات عن الاعضاء』

!rooms 『 لاظهار الرومات 』

!roles『 لأاظهار الرولات 』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●  

    

    `);

  }

});

client.on('message', (message) => {

    if (message.content.startsWith('!ban ')) {

      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('هذا الخاصية للدارة فقط');

        var member= message.mentions.members.first();

        member.ban().then((member) => {

         message.channel.send(member.displayName + 'تم طرد هذا الشخص من السيرفر');

        }).catch(() => {

            message.channel.send('Error :_:');

        });

    }

});

  client.on('message', (message) => {

    if (message.content.startsWith('!kick')) {

    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('هذا الخاصية للدارة فقط');

        var member= message.mentions.members.first();

        member.kick().then((member) => {

            message.channel.send(member.displayName + ' تم طرد هذا الشخص من السيرفر');

        }).catch(() => {

            message.channel.send(":x:");

        });

    }

}); 

      

client.on('message', message => {

    if (message.content === "!server") {

        if (!message.channel.guild) return

        var verificationLevel = message.guild.verificationLevel;

        const verificationLevels = ['None','Low','Meduim','High','Extreme'];

        var Y1 = message.guild.createdAt.getFullYear() - 2000

        var M2 = message.guild.createdAt.getMonth()

        var D3 = message.guild.createdAt.getDate()

        const xNiTRoZ = new Discord.RichEmbed()

         .setAuthor(message.author.username , message.author.avatarURL)

         .setColor('RANDOM')

         .setTimestamp()

         .setTitle(message.guild.name,message.guild.iconURL)

         .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)

         .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)             

         .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             

         .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)

         .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)

         .addField(':earth_asia: الدوله',message.guild.region)

         .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)

         .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)

         .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','Type `.roles` To See The Server Roles!')

         message.channel.send({embed:xNiTRoZ});

     }

});

    client.on('message', message => {

              if (!message.channel.guild) return;

      if(message.content =='!members')

      var IzRo = new Discord.RichEmbed()

      .setThumbnail(message.author.avatarURL)

      .setFooter(message.author.username, message.author.avatarURL) 

      .setTitle(':tulip:| Members info')

      .addBlankField(true)

      .addField(':green_book:| الاونلاين ',

      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)

      .addField(':closed_book:| دي ان دي',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)

      .addField(':orange_book:| خامل',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)

      .addField(':notebook:| الاوف لاين ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)

      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)

      message.channel.send(IzRo);

    });

//--------------------------------------------

client.on('message', msg => {

  if (msg.content === 'سلام عليكم') {

    msg.reply('وعليكم السلام ورحمة الله وبركاته ');

  }

});

//--------------------------------------------

client.on('message', msg => {

  if (msg.content === 'السلام عليكم') {

    msg.reply('وعليكم السلام ورحمة الله وبركاته ');

  }

});

//--------------------------------------------

client.on('message', msg => {

  if (msg.content === 'باك') {

    msg.reply('ولكم ❤');

  }

});

//--------------------------------------------

client.on('message', msg => {

  if (msg.content === 'Back') {

    msg.reply('Welcome ❤');

  }

});

//--------------------------------------------

client.on('message', message => {

    if (message.content === "!roles") {

        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')

        const embed = new Discord.RichEmbed()

        .setColor('RANDOM')

        .addField('الرتب:',`**[${roles}]**`)

        message.channel.sendEmbed(embed);

    }

});

  client.on('message', message => {

    if (message.content === "!rooms") {

                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')

        const embed = new Discord.RichEmbed()

        .setColor('RANDOM')

        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)

        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)

        

.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)

        message.channel.sendEmbed(embed);

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

     'صراحه  |  إذا حا����ل شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',

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

     'صر��حه  |  هل تعتقد ان حظك سيئ؟',

     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',

     'صراحه  |  كلمة تود سماعها كل يوم؟',

     'صراحه  |  هل تُتقن عملك أم تشعر بالممل؟',

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

	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',

     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',

     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',

     '‏صراحه  |  ما هو عمرك الحقيقي؟',

     '‏صراحه  |  ما اكثر شي ندمن عليه؟',

	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',

]

   client.on('message', message => {

 if (message.content.startsWith('!sara7a')) {

     if(!message.channel.guild) return message.reply(' This command only for servers ');

  var client= new Discord.RichEmbed()

  .setTitle("لعبة صراحة ..")

  .setColor('RANDOM')

  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)

  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")

                  .setTimestamp()

   message.channel.sendEmbed(client);

   message.react("??")

 }

});

// Global Settings

var prefix = '!'; // This is the prefix, you can change it to whatever you want.

// Listener Event: Runs whenever a message is received.

client.on('message', message => {

    // Variables - Variables make it easy to call things, since it requires less typing.

    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.

    let sender = message.author; // This variable takes the message, and finds who the author is.

    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces

    let args = cont.slice(1); // This slices off the command in cont, only leaving the arguments.

    // Commands

    // Purge

    if (msg.startsWith(prefix + 'CLEAR')) { // This time we have to use startsWith, since we will be adding a number to the end of the command.

        // We have to wrap this in an async since awaits only work in them.

        async function clear() {

            message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.

            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.

            if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`انت لست ادمن`).catch(console.error);

            // We want to check if the argument is a number

            if (isNaN(args[0])) {

                // Sends a message to the channel.

                message.channel.send('يجب اختيار الرقم. \n Usage: ' + prefix + 'clear <الرقم>'); //\n means new line.

                // Cancels out of the script, so the rest doesn't run.

                return;

            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.

            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

            // Deleting the messages

            message.channel.bulkDelete(fetched)

                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

        }

        // We want to make sure we call the function whenever the purge command is run.

        clear(); // Make sure this is inside the if(msg.startsWith)

        

    }

});

client.on('message', function(message) {

    if (message.channel.type === "dm") {

        if (message.author.id === client.user.id) return;

        var embed = new Discord.RichEmbed()

        .setColor('RANDOM')

        .setTimestamp()

        .setTitle('``رسالة جديدة فى الخاص``')

        .setThumbnail(`${message.author.avatarURL}`)

        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)

        .setFooter(`From **${message.author.tag} (${message.author.id})**`)

    client.channels.get("517854681268224020").send({embed:embed});

    }

});

client.on('message', message => {

  if (message.content.startsWith(prefix+"avatar")) {

      var mentionned = message.mentions.users.first();

  var avatar;

    if(mentionned){

        var avatar = mentionned;

    } else {

        var avatar = message.author;

        

    }

      const embed = new Discord.RichEmbed()

      .setColor("RANDOM")

        .setAuthor(message.author.username, message.author.avatarURL)

      .setImage(`${avatar.avatarURL}`)

    message.channel.sendEmbed(embed);

  }

});

var prefix = '!';

client.on('message', msg => {

 if (msg.content.startsWith(prefix + 'send')) {

      let args = msg.content.split(' ').slice(1)

      let mentionned = msg.mentions.members.first()

      let mentionnedEmbed = new Discord.RichEmbed()

      .setTitle(`رسالة من شخص مجهول :3`)

      .setDescription(args.join(" "))

      client.users.get(`${mentionned.id}`).send(mentionnedEmbed).catch(console.error);

      msg.delete();

    }

});

client.on('guildMemberAdd', member => {

    let channel = member.guild.channels.find('name', 'welcome');

    let memberavatar = member.user.avatarURL

      if (!channel) return;

    let embed = new Discord.RichEmbed()

        .setColor('RANDOM')

        .setThumbnail(memberavatar)

        .addField('🎽 | name :  ',`${member}`)

        .addField('welcome To BLOODHOODS','ّ')

        .addField('Enjoy','ّ')

        .addField('THANKS For Joinin','ّ')

        .setFooter(`${member.guild.name}`)

        .setTimestamp()

      channel.sendEmbed(embed);

    });

    

    client.on('guildMemberRemove', member => {

        var embed = new Discord.RichEmbed()

        .setAuthor(member.user.username, member.user.avatarURL)

        .setThumbnail(member.user.avatarURL)

        .setDescription(``)

        .addField('لقد غادر',`**${member}**`)

        .setColor('RED')

    

    var channel =member.guild.channels.find('name', 'welcome')

    if (!channel) return;

    channel.send({embed : embed});

});

client.on('message', message => {

if (message.content.startsWith(prefix+"crole")) {

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('*** انت لست ادمن ***');

    message.react("✔️")

    var args = message.content.split(" ").slice(1);

    var argresult = args.join(' ');

                message.guild.createRole({name:`${argresult}`})

          

        }

});

client.on('message', message => {

if (message.content.startsWith(prefix+"cvoice")) {

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('*** انت لست ادمن ***');

    message.react("✔️")

    var args = message.content.split(" ").slice(1);

    var argresult = args.join(' ');

                message.guild.createChannel(`${argresult}`, 'voice')

          

        }

});

client.on('message', message => {

if (message.content.startsWith(prefix+"ctext")) {

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('*** انت لست ادمن ***');

    message.react(":x:")

    var args = message.content.split(" ").slice(1);

    var argresult = args.join(' ');

                message.guild.createChannel(`${argresult}`, 'text')

          

        }

});

client.on("message", (message) => {

    if (message.content.startsWith(prefix+'deletech')) {

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('*** انت لست ادمن ***');

        let args = message.content.split(' ').slice(1);

        let channel = message.client.channels.find('name', args.join(' '));

        if (!channel) return message.reply('**لا يوجد روم بهذا الاسم**').catch(console.error);

        channel.delete()

    }

});

client.on('message', message => {

  if (message.content === "!closech") {

                      if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('انت لست ادمن')

         message.channel.overwritePermissions(message.guild.id, {

       SEND_MESSAGES: false

         }).then(() => {

             message.reply("تم قفل الشات :white_check_mark: ")

         });

           }

           

if (message.content === "!opench") {

  if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('انت لست ادمن');

         message.channel.overwritePermissions(message.guild.id, {

       SEND_MESSAGES: true

         }).then(() => {

             message.reply("تم فتح الشات:white_check_mark:")

         });

           }

});

client.login(process.env.BOT_TOKEN);
