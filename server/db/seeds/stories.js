exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('stories').del()
  await knex('stories').insert([
    {
      id: 1000,
      auth0_id: 'auth0|631e77a7f9e34bb0c8b7c01a',
      author: 'Korero O Te Whenua',
      title: 'Taumatawhakatangihangakoauauotamateapokaiwhenuakitanatahu',
      synopsis:
        "The summit where Tamatea, the man with the big knees, the slider, climber of mountains, the land-swallower who travelled about, played his koauau to his loved one",
      story_text:
        "The summit where Tamatea, the man with the big knees, the slider, climber of mountains, the land-swallower who travelled about, played his koauau to his loved one",
      photo_url: '/images/img01.png',
      longitude: 176.5498497962975,
      latitude: -40.3493780343085,
    },
    {
      id: 1001,
      auth0_id: 'auth0|632cf8dd563ea914bb89ec3a',
      author: 'Korero O Te Whenua',
      title: 'Tāne Mahuta',
      synopsis:
        'A story of how Tane Mahuta led his siblings to seperate his parents to bring light to the world',
      story_text:
        "Tāne Mahuta, Lord of the Forest, is an important figure in Māori history. The oldest of six siblings, Tāne Mahuta, grew tired of living in darkness, closed in between his sky father (Ranginui) and earth mother (Papa-tū-ā-nuku). He decided to push them apart and, in doing so, created the world of light (Te Ao Mārama) we live in today. - Tāne Mahuta, Lord of the Forest, is an important figure in Māori history. The oldest of six siblings, Tāne Mahuta, grew tired of living in darkness, closed in between his sky father (Ranginui) and earth mother (Papa-tū-ā-nuku). He decided to push them apart and, in doing so, created the world of light (Te Ao Mārama) we live in today.  In his frustration amidst living in the darkness, he led his siblings to push their parents apart. Eventually, they escaped the darkness and let the light into the world.  As the trees stretch from the grounds to the clouds, we believe that the trees in the forest hold the earth and sky apart just like how Tāne held Papa and Rangi apart. Consequently, this makes the forest (ngahere) the realm of Tāne..",
      photo_url: '/images/img02.jpeg',
      longitude: 173.52741271904605,
      latitude: -35.600178814634624,
    },
    {
      id: 1002,
      auth0_id: 'auth0|632d259b6aa7af87dfa37429',
      author: 'Korero O Te Whenua',
      title: 'Hinemoa and Tutanekai',
      synopsis:
        'The song is based on the best early account of the story sourced from Sir George Grey’s ‘Polynesian Mythology’, first published in 1855.',
      story_text:
        "Hinemoa was the daughter of a great chief who lived at Owhata, along the shores of Lake Rotorua. She was very beautiful, and because of her beauty and high rank, many young men desired her as their wife. Tūtānekai was one of these would-be suitors, but he knew that though he was of good birth, his rank was not high enough for Hinemoa’s father to accept him as his daughter’s husband.  Because of this, Tūtānekai hid his love for Hinemoa for a long time. He saw Hinemoa only when there were great meetings of the tribe, for his home was far across the water on Mokoia Island in the middle of Lake Rotorua.  During these hui (meetings), Tūtānekai would content himself with gazing at Hinemoa from a distance, and yet it seemed to him that sometimes she would return his looks. But he thought to himself, “There are many other young men more worthy than I of winning Hinemoa’s heart. If I approach her to declare my love, perhaps she will be displeased.  Now Hinemoa did love Tūtānekai, but she too hid her love, thinking, “If I send a message to Tūtānekai, perhaps he will not care for me.  At last, after many meetings during which only their eyes had spoken, Tūtānekai sent a message to Hinemoa and she cried joyfully, “Have we each then loved alike?  When Tūtānekai asked Hinemoa to leave her home and come to him, she agreed. 'At night,' he said, 'when you hear the sound of a flute across the water, it is I; come in your canoe.  ” Every night Tūtānekai sat on a high hill and played his flute, the wind carrying his music across the lake to Hinemoa’s home. But Hinemoa did not come. Her people had suspected her intention, and they had pulled all the canoes high up on the shore.  Every night Hinemoa heard the sound of her lover’s flute and wept because she could not go to him. Eventually she wondered if it be possible to swim across to Tūtānekai.",
      photo_url: '/images/img03.jpeg',
      longitude: 176.25148577790202,
      latitude: -38.137655667084815,
    },
    {
      id: 1003,
      auth0_id: 'auth0|632d259b6aa7af87dfa37429',
      author: 'Korero O Te Whenua',
      title: 'Kupe',
      synopsis:
        'The first explorer to discover Aotearoa, New Zealand, was the intrepid ancestor, Kupe. Using the stars and ocean currents as his navigational guides, he ventured across the Pacific on his waka hourua (voyaging canoe) from his ancestral Polynesian homeland of Hawaiki. Kupe`s waka first landed on the shores of the Hokianga Harbour in Northland around 1000 years ago.',
      story_text:
        "The first explorer to discover Aotearoa, New Zealand, was the intrepid ancestor, Kupe. Using the stars and ocean currents as his navigational guides, he ventured across the Pacific on his waka hourua (voyaging canoe) from his ancestral Polynesian homeland of Hawaiki. Kupe's waka first landed on the shores of the Hokianga Harbour in Northland around 1000 years ago. It is said that Kupe's wife, Kuramārotini, gave Aotearoa its name. On arrival, as she watched the horizon, she saw a long white cloud. She yelled, 'He ao! He ao! He Aotearoa!' ('A cloud! A cloud! A long white cloud')  Walk in the footsteps of Kupe at Manea Footprints of Kupe. On the shores of the Hokianga Harbour, Manea shares the stories and traditions of the great ancestor through guided storytelling, art, tāonga (cultural treasures), film, performance, digital interaction.",
      photo_url: '/images/img04.jpeg',
      longitude: 173.39324189846081,
      latitude: -35.505450113296575,
    }, 
    {
      id: 1004,
      auth0_id: 'auth0|632d259b6aa7af87dfa37429',
      author: 'Korero O Te Whenua',
      title: 'Paikea, the Whale Rider',
      synopsis:
        'Māori legend tells the story of the ancestor Paikea who journeyed to a new life in Aotearoa, New Zealand, on the back of the Tohorā whale. The story represents the spiritual bond between humans and the natural world and the potential revealed when nature is respected rather than exploited. The story of Paikea inspired Witi Ihimaera’s book Whale Rider, which in turn inspired an award-winning film of the same name.',
      story_text:
        'The story of Paikea begins in Hawaiki, where Paikea was known by another name, Kahutiaterangi, the sole survivor of a vengeful plot devised by his half-brother Ruatapu to drown all the first born sons of Hawaiki out at sea under the guise of a fishing expedition. Ruatapu flooded the canoe they were in and the battle at sea called ‘Te Huripureiata’ commenced. Ruatapu drowned the first born sons, then he confronted his brother Kahutiaterangi. As Ruatapu swam towards him Kahutiaterangi called to his kaitiaki to help him. When he had completed his calls there was a sudden stirring in the water and a pod of whales surged up. There is an expression that suggests that the sea was a smokey haze of whales, “kauria ana te moana.” Kahutiaterangi then climbed onto the whale and survived. This marked the beginning of his legendary and celebrated journey from Hawaiki to Aotearoa, New Zealand.  A significant, spiritual, mythical, and symbolic journey of transformation where Kahutiaterangi the man became Paikea the whale, he was the man riding the whale, he was the spirit of the whale, he was the whale.  From then onwards he became known as Paikea, the whale rider.',
      photo_url: 'https://www.moatrek.com/sites/default/files/styles/crop_from_top_845_x_400/public/2016-10/Kaikoura-New-Zealand.webp?itok=zYxFT4xM',
      longitude: 173.63115302604407,
      latitude: -42.334170885962834,
    },
    {
      id: 1005,
      auth0_id: 'auth0|632d259b6aa7af87dfa37429',
      author: 'Korero O Te Whenua',
      title: 'Battle Of The Maunga',
      synopsis:
      'An origin story that shapes the North Island as we know it today.  A great battle took place long ago between seven males for the heart of the maiden mountain Pihanga',
      story_text:
        "In a time long ago, seven personified mountains were born from the landscape. There lived six males — Tongariro, Taranaki, Ruapehu, Ngauruhoe, Tauhara and Putauaki — and one female, Pihanga. As millenia passed, the boy mountains grew into powerful male warriors while Pihanga blossomed into a comely fern-covered mist maiden, who each of them desired for a wife.'Choose!' cried Tongariro. 'You must choose!'. 'I cannot,' replied Pihanga. 'I love you all equally.'.  'Then we will battle, and the victor will be your husband,' declared Tongariro.One by one, the mountains came up against Tongariro and one by one they were defeated. Finally, only Taranaki was left to face the powerful Tongariro. Their battle was spectacularly violent as each mountain was evenly matched.The battle raged on for months until a burning Pihanga cried out “Stop!” as she lay close to death in her scorched and blackened cloak of fern. Rather than lose her, Taranaki conceded defeat — and so Pihanga became Tongariro’s wife.As countless millenia passed, the landscape healed and the vanquished mountains moved away: Tauhara and Putauki to the north and Ruapehu and Ngauruhoe to the south.  Many children were born to Tongariro and Pihanga including one, Panitahi, who looked very different to the others. Gossip and innuendo flowed across the landscape until Tongariro, suspicious of his friend Taranaki, decided to lay a trap.  Pretending to be asleep, he caught his friend and his wife in a tender embrace. Tongariro erupted in a gigantic rage that was heard around the world. Huge explosions tore the landscape apart. The crater formed from the largest explosion would eventually fill with water, becoming the lake we know today as Lake Taupo.  Remembering what happened to Pihanga during the previous battles, Taranaki chose not to engage with Tongariro, but retreated instead. Gathering up Panitahi, he fled heartbroken to the west, guided by the stone Te Toka Rauhoto Tapairu.  As he fled, he carved out a deep scar in the landscape. On reaching the sea, Pouakai — one of five west coast mountains — spread out her arms to comfort Taranaki until the setting sun transfixed him to the spot. He has remained there to this day, with Panitahi at his side, and the guide stone who now resides at Puniho Pa, south of New Plymouth.  In time, Tongariro settled down and began to weep for his lost friend, his tears filling the scar in the landscape that today we know as the Whanganui River.  It is thought that one day the guide stone will release Taranaki to return to his true love, Pihanga.  True love really can move mountains. But for the moment, the mountains sleep.",
      photo_url: 'https://teara.govt.nz/files/large_images/a-25265-pc.jpg',
      longitude:  175.76820429599488,
      latitude: -39.041031371662946,
    },
    {
      id: 1006,
      auth0_id: 'auth0|632d259b6aa7af87dfa37429',
      author: 'Korero O Te Whenua',
      title: 'Kupawai and Kaiamio',
      synopsis:
        "Kaiamio is part of a wandering party who are ambushed by the Moriori Giant, Kupawai.  Kaiamio is captured and taken to his cave, where she eventually escapes, and recruits the rest of her tribe to lay waste to giant and his horde of two-headed dogs",
      story_text:
        "Long ago, the Rapuwai settled along the mouth of the Clutha River.  They would hunt and gather food and lived a merry life.  One day a group of wanderers went out to hunt and never returned.  Fearing for their safety, another group went out in search of the missing group.  This party was never seen again.  A lady, Kaiamio eventually returned and recounted the story of Kopuwai, a beastly Moriori Giant with a pack of two headed dogs at his side.  She recounted how he took her to her cave and binded her to him with a flax strap, whenver Kaiamio was out of sight, Kupawai would tug on the strap to make sure she was still there.  One night, Kaiamio broke free of her restraints and fled in the dark back to her village by a flax raft she made to cross the river.  Kupawai awoke, furious and followed Kaiamio's trail to the river and swallowed the river dry, luckily, Kaiamio was already safe on the otherside.  The tribe considered him too dangerous and knew they had to finish him while it was night.  They quietly approached his cave where he lay and make a pile of twigs, flax and branch which they set alight, igniting the cave and waking Kupawai,  Desperate for air, Kupawai tried to escape through the roof of the cave.  Caught by suspecting tribesmen, Kupawai was clubbed to death then and there.  He is still visible to this day depicted as Old Man Rock in the Kupawai Conversation Area",
      photo_url: 'https://seethesouthisland.com/wp-content/uploads/2021/04/obelisk-central-otago-nz.jpg.webp',
      longitude: 169.3050920271055,
      latitude: -45.40473398826104,
    },
    {
      id: 1007,
      auth0_id: 'auth0|632d259b6aa7af87dfa37429',
      author: 'Korero O Te Whenua',
      title: 'Rangitoto',
      synopsis:
        'An origin story of the birth of Rangitoto',
      story_text:
        'Although we know the island formed through awe-inspiring volcanic processes, the Maori have a much more interesting (even more interesting than lava) idea of how Rangitoto formed. According to Maori legends, a giant couple once lived on a tall mountain. The pair were ‘tupua’ (meaning demon, but not demonic per se), and children of the Fire Gods.  The couple started bickering, and in the ensuing argument did not notice that their fire had burned down and gone out. Enraged at their loss of flame, they cursed Mahuika, the fire goddess. Mahuika was greatly displeased at the unfair cursing and asked Mataoho, the god of earthquakes and volcanic eruptions, to teach the couple a lesson. In response, Mataoho caused a mighty eruption that destroyed the couple’s home, with such force that a hole was ripped out  of the land and Lake Pupuke was formed. The couple were left stranded, imprisoned on a mountain peak out to sea, unable to return to the mainland. This peak was Rangitoto and legend has it that the mist that often surrounds the island is the tears of the couple, mourning for their lost home. The name (which means Bloody Sky) has nothing to do with the islands hot heated nature, but is actually a shortened version of the name Ngā Rangi-i-totongia-a Tama-te-kapua which means ‘The day of the bleeding of Tama-te kapua’. Tama-te Kapua was a Maori captain who was viciously wounded on the island, and the bleeding skies refers to his blood, not the volcanoes lava bombs',
        photo_url: 'https://www.newzealand.com/assets/Tourism-NZ/Auckland/7aafb89126/img-1536918409-9081-10149-p-311C1385-C977-EFC5-F74D6C6685F26879-2544003__aWxvdmVrZWxseQo_CropResizeWzY1MCw0ODgsODAsInBuZyJd.png',
      longitude: 174.86421187668955,
      latitude: -36.78393574639015
    },
    {
      id: 1008,
      auth0_id: 'auth0|632d259b6aa7af87dfa37429',
      author: 'Whenua O Korero',
      title: 'Aoraki',
      synopsis:
        'The Ngāi Tahu creation story explains the southern landscape. Te Waka o Aoraki is the South Island. Aoraki is Mount Cook, Rakirua Mount Teichelmann, Rakiroa Mount Dampier and Rarakiroa is Mount Tasman. Together they reside on Ngā Tiritiri o te Moana – or the whitecaps of the ocean, more commonly known as the Southern Alps.',
      story_text:
        'Māori legend tells the story of the ancestor Paikea who journeyed to a new life in Aotearoa, New Zealand, on the back of the Tohorā whale. The story represents the spiritual bond between humans and the natural world and the potential revealed when nature is respected rather than exploited.Māori legend tells the story of the ancestor Paikea who journeyed to a new life in Aotearoa, New Zealand, on the back of the Tohorā whale. The story represents the spiritual bond between humans and the natural world and the potential revealed when nature is respected rather than exploited.',
      photo_url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/ef/e0/a9.jpg',
      longitude: 170.14202433438962,
      latitude: -43.59432165218203,
},

])
}