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
      id: 1005,
      auth0_id: 'auth0|632d259b6aa7af87dfa37429',
      author: 'Korero O Te Whenua',
      title: 'Paikea, the Whale Rider',
      synopsis:
        'Māori legend tells the story of the ancestor Paikea who journeyed to a new life in Aotearoa, New Zealand, on the back of the Tohorā whale. The story represents the spiritual bond between humans and the natural world and the potential revealed when nature is respected rather than exploited. The story of Paikea inspired Witi Ihimaera’s book Whale Rider, which in turn inspired an award-winning film of the same name.',
      story_text:
        'The story of Paikea begins in Hawaiki, where Paikea was known by another name, Kahutiaterangi, the sole survivor of a vengeful plot devised by his half-brother Ruatapu to drown all the first born sons of Hawaiki out at sea under the guise of a fishing expedition. Ruatapu flooded the canoe they were in and the battle at sea called ‘Te Huripureiata’ commenced. Ruatapu drowned the first born sons, then he confronted his brother Kahutiaterangi. As Ruatapu swam towards him Kahutiaterangi called to his kaitiaki to help him. When he had completed his calls there was a sudden stirring in the water and a pod of whales surged up. There is an expression that suggests that the sea was a smokey haze of whales, “kauria ana te moana.” Kahutiaterangi then climbed onto the whale and survived. This marked the beginning of his legendary and celebrated journey from Hawaiki to Aotearoa, New Zealand.  A significant, spiritual, mythical, and symbolic journey of transformation where Kahutiaterangi the man became Paikea the whale, he was the man riding the whale, he was the spirit of the whale, he was the whale.  From then onwards he became known as Paikea, the whale rider.',
      photo_url: '/images/img06.jpg',
      longitude: 170.14202433438962,
      latitude: -43.59432165218203,
    },
    {
      id: 1007,
      auth0_id: 'auth0|632d259b6aa7af87dfa37429',
      author: 'Korero O Te Whenua',
      title: 'Battle Of The Maunga',
      synopsis:
      'An origin story that shapes the North Island as we know it today.  A great battle took place long ago between seven males for the heart of the maiden mountain Pihanga',
      story_text:
        "In a time long ago, seven personified mountains were born from the landscape. There lived six males — Tongariro, Taranaki, Ruapehu, Ngauruhoe, Tauhara and Putauaki — and one female, Pihanga. As millenia passed, the boy mountains grew into powerful male warriors while Pihanga blossomed into a comely fern-covered mist maiden, who each of them desired for a wife.'Choose!' cried Tongariro. 'You must choose!'. 'I cannot,' replied Pihanga. 'I love you all equally.'.  'Then we will battle, and the victor will be your husband,' declared Tongariro.One by one, the mountains came up against Tongariro and one by one they were defeated. Finally, only Taranaki was left to face the powerful Tongariro. Their battle was spectacularly violent as each mountain was evenly matched.The battle raged on for months until a burning Pihanga cried out “Stop!” as she lay close to death in her scorched and blackened cloak of fern. Rather than lose her, Taranaki conceded defeat — and so Pihanga became Tongariro’s wife.As countless millenia passed, the landscape healed and the vanquished mountains moved away: Tauhara and Putauki to the north and Ruapehu and Ngauruhoe to the south.  Many children were born to Tongariro and Pihanga including one, Panitahi, who looked very different to the others. Gossip and innuendo flowed across the landscape until Tongariro, suspicious of his friend Taranaki, decided to lay a trap.  Pretending to be asleep, he caught his friend and his wife in a tender embrace. Tongariro erupted in a gigantic rage that was heard around the world. Huge explosions tore the landscape apart. The crater formed from the largest explosion would eventually fill with water, becoming the lake we know today as Lake Taupo.  Remembering what happened to Pihanga during the previous battles, Taranaki chose not to engage with Tongariro, but retreated instead. Gathering up Panitahi, he fled heartbroken to the west, guided by the stone Te Toka Rauhoto Tapairu.  As he fled, he carved out a deep scar in the landscape. On reaching the sea, Pouakai — one of five west coast mountains — spread out her arms to comfort Taranaki until the setting sun transfixed him to the spot. He has remained there to this day, with Panitahi at his side, and the guide stone who now resides at Puniho Pa, south of New Plymouth.  In time, Tongariro settled down and began to weep for his lost friend, his tears filling the scar in the landscape that today we know as the Whanganui River.  It is thought that one day the guide stone will release Taranaki to return to his true love, Pihanga.  True love really can move mountains. But for the moment, the mountains sleep.",
      photo_url: '/images/img08.jpg',
      longitude: 170.14202433438962,
      latitude: -43.59432165218203,
    },
    {
      id: 1008,
      auth0_id: 'auth0|632d259b6aa7af87dfa37429',
      author: 'Korero O Te Whenua',
      title: 'Kupawai and Kaiamio',
      synopsis:
        "Kaiamio is part of a wandering party who are ambushed by the Moriori Giant, Kupawai.  Kaiamio is captured and taken to his cave, where she eventually escapes, and recruits the rest of her tribe to lay waste to giant and his horde of two-headed dogs",
      story_text:
        "Long ago, the Rapuwai settled along the mouth of the Clutha River.  They would hunt and gather food and lived a merry life.  One day a group of wanderers went out to hunt and never returned.  Fearing for their safety, another group went out in search of the missing group.  This party was never seen again.  A lady, Kaiamio eventually returned and recounted the story of Kopuwai, a beastly Moriori Giant with a pack of two headed dogs at his side.  She recounted how he took her to her cave and binded her to him with a flax strap, whenver Kaiamio was out of sight, Kupawai would tug on the strap to make sure she was still there.  One night, Kaiamio broke free of her restraints and fled in the dark back to her village by a flax raft she made to cross the river.  Kupawai awoke, furious and followed Kaiamio's trail to the river and swallowed the river dry, luckily, Kaiamio was already safe on the otherside.  The tribe considered him too dangerous and knew they had to finish him while it was night.  They quietly approached his cave where he lay and make a pile of twigs, flax and branch which they set alight, igniting the cave and waking Kupawai,  Desperate for air, Kupawai tried to escape through the roof of the cave.  Caught by suspecting tribesmen, Kupawai was clubbed to death then and there.  He is still visible to this day depicted as Old Man Rock in the Kupawai Conversation Area",
      photo_url: '/images/img09.jpg',
      longitude: 170.14202433438962,
      latitude: -43.59432165218203,
    },
    {
      id: 1009,
      auth0_id: 'auth0|632d259b6aa7af87dfa37429',
      author: 'Korero O Te Whenua',
      title: 'Rangitoto',
      synopsis:
        'An origin story of the birth of Rangitoto',
      story_text:
        'Although we know the island formed through awe-inspiring volcanic processes, the Maori have a much more interesting (even more interesting than lava) idea of how Rangitoto formed. According to Maori legends, a giant couple once lived on a tall mountain. The pair were ‘tupua’ (meaning demon, but not demonic per se), and children of the Fire Gods.  The couple started bickering, and in the ensuing argument did not notice that their fire had burned down and gone out. Enraged at their loss of flame, they cursed Mahuika, the fire goddess. Mahuika was greatly displeased at the unfair cursing and asked Mataoho, the god of earthquakes and volcanic eruptions, to teach the couple a lesson. In response, Mataoho caused a mighty eruption that destroyed the couple’s home, with such force that a hole was ripped out  of the land and Lake Pupuke was formed. The couple were left stranded, imprisoned on a mountain peak out to sea, unable to return to the mainland. This peak was Rangitoto and legend has it that the mist that often surrounds the island is the tears of the couple, mourning for their lost home. The name (which means Bloody Sky) has nothing to do with the islands hot heated nature, but is actually a shortened version of the name Ngā Rangi-i-totongia-a Tama-te-kapua which means ‘The day of the bleeding of Tama-te kapua’. Tama-te Kapua was a Maori captain who was viciously wounded on the island, and the bleeding skies refers to his blood, not the volcanoes lava bombs',
        photo_url: '/images/img09.jpg',
      longitude: 174.86421187668955,
      latitude: -36.78393574639015
    },

{
  id: 1010,
  auth0_id: 'auth0|632d259b6aa7af87dfa37429',
  author: 'Korero O Te Whenua',
  title: 'The Story Of Te Kanawa',
  synopsis:
    'TE KANAWA, a chief of Waikato, was the man who fell in with a troop of fairies upon the top of Puke-more, a high hill in the Waikato district. ',
  story_text:
    "Te Kanawa happened one day to go out to catch kiwi with his dogs, and when night came on he found himself right at the top of Puke-more. So his party made a fire to give them light, for it was very dark. They had chosen a tree to sleep under--a very large tree, the only one fit for their purpose that they could find; in fact, it was a very convenient sleeping-place, for the tree had immense roots, sticking up high above the ground: they slept between these roots, and made the fire beyond them.  As soon as it was dark they heard loud voices, like the voices of people coming that way; there were the voices of men, of women, and of children, as if a very large party of people were coming along. They looked for a long time, but could see nothing; till at last Te Kanawa knew that noise must proceed from fairies. His people were all dreadfully frightened, and would have run away if they could; but where could they run to? They were in the midst of a forest, on the top of a lonely mountain, and it was dark night.  For long time the voices grew louder and more distinct as the fairies drew nearer and nearer, until they came quite close to the fire; Te Kanawa and his party were half dead with fright. At last the fairies approached to look at Te Kanawa, whowas a very handsome fellow. To do this, they kept peeping slily over the large roots of the tree under which the hunters were lying, and kept constantly looking at Te Kanawa, whilst his companions were quite insensible from fear. Whenever the fire blazed up brightly, off went the fairies and hid themselves, peeping out from behind stumps and trees; and when it burnt low, back they came close to it, merrily singing as they moved:',A sudden thought struck Te Kanawa that he might induce them to go away if he gave them all the jewels he had about him; so he took off a beautiful little figure, carved in green jasper, which he wore as a neck ornament, and a precious carved jasper ear-drop from his ear. Ah, Te Kanawa was only trying to amuse and please them to save his life, but all the time he was nearly frightened to death. However, the fairies did not rush on the men to attack them, but only came quite close to look at them. As soon as Te Kanawa had taken off his neck ornament, and pulled out his jasper pendant, and his other ornament, made of a tooth of the tiger-shark, he spread them out before the fairies, and offered them to the multitude who were sitting all round about the place; and thinking it better the fairies should not touch him, he took a stick, and fixing it into the ground, hung his neck ornament and ear-rings upon it. As soon as the fairies had ended their song, they took the shadows of the pendants, and handed them about from one to the other, until they had passed through the whole party, which then suddenly disappeared, and nothing more was seen of them.  The fairies carried off with them the shadows of all the jewels of Te Kanawa, but they left behind them his jasper neck ornament and his pendants, so that he took them back again, the hearts of the fairies being quite contented at getting the shadows alone; they saw, also, that Te Kanawa was an honest, well-dispositioned fellow. However, the next morning, as soon as it was light, he got down the mountain as fast as he could without stopping to hunt longer for kiwis.",
    photo_url: '/images/img09.jpg',
  longitude: 175.4120829823632,
  latitude: -37.559921769546165
},
])
}