exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('stories').del()
  await knex('stories').insert([
    {
      id: 1000,
      auth0_id: 'auth0|631e77a7f9e34bb0c8b7c01a',
      author: 'Whenua O Korero',
      title: 'Taumatawhakatangihangakoauauotamateapokaiwhenuakitanatahu',
      synopsis:
        'The summit where Tamatea, the man with the big knees, the slider, climber of mountains, the land-swallower who travelled about, played his koauau to his loved one"',
      story_text:
        'The summit where Tamatea, the man with the big knees, the slider, climber of mountains, the land-swallower who travelled about, played his koauau to his loved one - "The summit where Tamatea, the man with the big knees, the slider, climber of mountains, the land-swallower who travelled about, played his koauau to his loved one.',
      photo_url: '/images/img01.png',
      longitude: 176.5498497962975,
      latitude: -40.3493780343085,
    },
    {
      id: 1001,
      auth0_id: 'auth0|632cf8dd563ea914bb89ec3a',
      author: 'Whenua O Korero',
      title: 'Tāne Mahuta',
      synopsis:
        'Tāne Mahuta, Lord of the Forest, is an important figure in Māori history. The oldest of six siblings, Tāne Mahuta, grew tired of living in darkness, closed in between his sky father (Ranginui) and earth mother (Papa-tū-ā-nuku). He decided to push them apart and, in doing so, created the world of light (Te Ao Mārama) we live in today.',
      story_text:
        'Tāne Mahuta, Lord of the Forest, is an important figure in Māori history. The oldest of six siblings, Tāne Mahuta, grew tired of living in darkness, closed in between his sky father (Ranginui) and earth mother (Papa-tū-ā-nuku). He decided to push them apart and, in doing so, created the world of light (Te Ao Mārama) we live in today. - Tāne Mahuta, Lord of the Forest, is an important figure in Māori history. The oldest of six siblings, Tāne Mahuta, grew tired of living in darkness, closed in between his sky father (Ranginui) and earth mother (Papa-tū-ā-nuku). He decided to push them apart and, in doing so, created the world of light (Te Ao Mārama) we live in today.',
      photo_url: '/images/img02.jpeg',
      longitude: 173.52741271904605,
      latitude: -35.600178814634624,
    },
    {
      id: 1002,
      auth0_id: 'auth0|632d259b6aa7af87dfa37429',
      author: 'Whenua O Korero',
      title: 'Hinemoa and Tutanekai',
      synopsis:
        'Hinemoa and Tutanekai were New Zealand’s very own Romeo and Juliet – two star-crossed lovers whose liaison was both passionate and forbidden. This tale has a happy ending though, as they proved the strength of their love through a dramatic and dangerous act, thus gaining the acceptance of their families.',
      story_text:
        'Hinemoa and Tutanekai were New Zealand’s very own Romeo and Juliet – two star-crossed lovers whose liaison was both passionate and forbidden. This tale has a happy ending though, as they proved the strength of their love through a dramatic and dangerous act, thus gaining the acceptance of their families.Hinemoa and Tutanekai were New Zealand’s very own Romeo and Juliet – two star-crossed lovers whose liaison was both passionate and forbidden. This tale has a happy ending though, as they proved the strength of their love through a dramatic and dangerous act, thus gaining the acceptance of their families.',
      photo_url: '/images/img03.jpeg',
      longitude: 176.25148577790202,
      latitude: -38.137655667084815,
    },
    {
      id: 1003,
      auth0_id: 'auth0|632d259b6aa7af87dfa37429',
      author: 'Whenua O Korero',
      title: 'Kupe',
      synopsis:
        'The first explorer to discover Aotearoa, New Zealand, was the intrepid ancestor, Kupe. Using the stars and ocean currents as his navigational guides, he ventured across the Pacific on his waka hourua (voyaging canoe) from his ancestral Polynesian homeland of Hawaiki. Kupe`s waka first landed on the shores of the Hokianga Harbour in Northland around 1000 years ago.',
      story_text:
        'The first explorer to discover Aotearoa, New Zealand, was the intrepid ancestor, Kupe. Using the stars and ocean currents as his navigational guides, he ventured across the Pacific on his waka hourua (voyaging canoe) from his ancestral Polynesian homeland of Hawaiki. Kupe`s waka first landed on the shores of the Hokianga Harbour in Northland around 1000 years ago.The first explorer to discover Aotearoa, New Zealand, was the intrepid ancestor, Kupe. Using the stars and ocean currents as his navigational guides, he ventured across the Pacific on his waka hourua (voyaging canoe) from his ancestral Polynesian homeland of Hawaiki. Kupe`s waka first landed on the shores of the Hokianga Harbour in Northland around 1000 years ago.',
      photo_url: '/images/img04.jpeg',
      longitude: 173.39324189846081,
      latitude: -35.505450113296575,
    },
    // {
    //   id: 1004,
    //   auth0_id: 'auth0|632d259b6aa7af87dfa37429',
    //   author: 'Whenua O Korero',
    //   title: 'The story of Paikea',
    //   synopsis:
    //     'Māori legend tells the story of the ancestor Paikea who journeyed to a new life in Aotearoa, New Zealand, on the back of the Tohorā whale. The story represents the spiritual bond between humans and the natural world and the potential revealed when nature is respected rather than exploited.',
    //   story_text:
    //     'Māori legend tells the story of the ancestor Paikea who journeyed to a new life in Aotearoa, New Zealand, on the back of the Tohorā whale. The story represents the spiritual bond between humans and the natural world and the potential revealed when nature is respected rather than exploited.Māori legend tells the story of the ancestor Paikea who journeyed to a new life in Aotearoa, New Zealand, on the back of the Tohorā whale. The story represents the spiritual bond between humans and the natural world and the potential revealed when nature is respected rather than exploited.',
    //   photo_url: '/images/img05.jpeg',
    //   longitude: 174.7740,
    //   latitude: -41.2969
    // },
    {
      id: 1005,
      auth0_id: 'auth0|632d259b6aa7af87dfa37429',
      author: 'Whenua O Korero',
      title: 'Aoraki',
      synopsis:
        'The Ngāi Tahu creation story explains the southern landscape. Te Waka o Aoraki is the South Island. Aoraki is Mount Cook, Rakirua Mount Teichelmann, Rakiroa Mount Dampier and Rarakiroa is Mount Tasman. Together they reside on Ngā Tiritiri o te Moana – or the whitecaps of the ocean, more commonly known as the Southern Alps.',
      story_text:
        'Māori legend tells the story of the ancestor Paikea who journeyed to a new life in Aotearoa, New Zealand, on the back of the Tohorā whale. The story represents the spiritual bond between humans and the natural world and the potential revealed when nature is respected rather than exploited.Māori legend tells the story of the ancestor Paikea who journeyed to a new life in Aotearoa, New Zealand, on the back of the Tohorā whale. The story represents the spiritual bond between humans and the natural world and the potential revealed when nature is respected rather than exploited.',
      photo_url: '/images/img06.jpg',
      longitude: 170.14202433438962,
      latitude: -43.59432165218203,
    },
    {
      id: 1007,
      auth0_id: 'auth0|632d259b6aa7af87dfa37429',
      author: 'Whenua O Korero',
      title: 'Battle Of The Maunga',
      synopsis:
      'An origin story that shapes the North Island as we know it today.  A great battle took place long ago between seven males for the heart of the maiden mountain Pihanga',
      story_text:
        "In a time long ago, seven personified mountains were born from the landscape. There lived six males — Tongariro, Taranaki, Ruapehu, Ngauruhoe, Tauhara and Putauaki — and one female, Pihanga. As millenia passed, the boy mountains grew into powerful male warriors while Pihanga blossomed into a comely fern-covered mist maiden, who each of them desired for a wife.'Choose!' cried Tongariro. 'You must choose!'. 'I cannot,' replied Pihanga. 'I love you all equally.'.  'Then we will battle, and the victor will be your husband,' declared Tongariro.One by one, the mountains came up against Tongariro and one by one they were defeated. Finally, only Taranaki was left to face the powerful Tongariro. Their battle was spectacularly violent as each mountain was evenly matched.The battle raged on for months until a burning Pihanga cried out “Stop!” as she lay close to death in her scorched and blackened cloak of fern. Rather than lose her, Taranaki conceded defeat — and so Pihanga became Tongariro’s wife.As countless millenia passed, the landscape healed and the vanquished mountains moved away: Tauhara and Putauki to the north and Ruapehu and Ngauruhoe to the south.  Many children were born to Tongariro and Pihanga including one, Panitahi, who looked very different to the others. Gossip and innuendo flowed across the landscape until Tongariro, suspicious of his friend Taranaki, decided to lay a trap.  Pretending to be asleep, he caught his friend and his wife in a tender embrace. Tongariro erupted in a gigantic rage that was heard around the world. Huge explosions tore the landscape apart. The crater formed from the largest explosion would eventually fill with water, becoming the lake we know today as Lake Taupo.  Remembering what happened to Pihanga during the previous battles, Taranaki chose not to engage with Tongariro, but retreated instead. Gathering up Panitahi, he fled heartbroken to the west, guided by the stone Te Toka Rauhoto Tapairu.  As he fled, he carved out a deep scar in the landscape. On reaching the sea, Pouakai — one of five west coast mountains — spread out her arms to comfort Taranaki until the setting sun transfixed him to the spot. He has remained there to this day, with Panitahi at his side, and the guide stone who now resides at Puniho Pa, south of New Plymouth.  In time, Tongariro settled down and began to weep for his lost friend, his tears filling the scar in the landscape that today we know as the Whanganui River.  It is thought that one day the guide stone will release Taranaki to return to his true love, Pihanga.  True love really can move mountains. But for the moment, the mountains sleep.",
      photo_url: '/images/img08.jpg',
      location: '',
    },
    {
      id: 1008,
      auth0_id: 'auth0|632d259b6aa7af87dfa37429',
      author: 'Whenua O Korero',
      title: 'Kupawai and Kaiamio',
      synopsis:
        "Kaiamio is part of a wandering party who are ambushed by the Moriori Giant, Kupawai.  Kaiamio is captured and taken to his cave, where she eventually escapes, and recruits the rest of her tribe to lay waste to giant and his horde of two-headed dogs",
      story_text:
        "Long ago, the Rapuwai settled along the mouth of the Clutha River.  They would hunt and gather food and lived a merry life.  One day a group of wanderers went out to hunt and never returned.  Fearing for their safety, another group went out in search of the missing group.  This party was never seen again.  A lady, Kaiamio eventually returned and recounted the story of Kopuwai, a beastly Moriori Giant with a pack of two headed dogs at his side.  She recounted how he took her to her cave and binded her to him with a flax strap, whenver Kaiamio was out of sight, Kupawai would tug on the strap to make sure she was still there.  One night, Kaiamio broke free of her restraints and fled in the dark back to her village by a flax raft she made to cross the river.  Kupawai awoke, furious and followed Kaiamio's trail to the river and swallowed the river dry, luckily, Kaiamio was already safe on the otherside.  The tribe considered him too dangerous and knew they had to finish him while it was night.  They quietly approached his cave where he lay and make a pile of twigs, flax and branch which they set alight, igniting the cave and waking Kupawai,  Desperate for air, Kupawai tried to escape through the roof of the cave.  Caught by suspecting tribesmen, Kupawai was clubbed to death then and there.  He is still visible to this day depicted as Old Man Rock in the Kupawai Conversation Area",
      photo_url: '/images/img09.jpg',
      location: '',
    },
    // {
    //   id: 1006,
    //   auth0_id: 'auth0|632d259b6aa7af87dfa37429',
    //   author: 'Whenua O Korero',
    //   title: 'Te Ika-a-Māui',
    //   synopsis:
    //     'To begin – there was nothing. Papatūānuku (earth mother) and Ranginui (sky father) arose from this nothing. When Ranginui fell in love with Papatūānuku, she already belonged to Tangaroa.',
    //   story_text:
    //     'To begin – there was nothing. Papatūānuku (earth mother) and Ranginui (sky father) arose from this nothing. When Ranginui fell in love with Papatūānuku, she already belonged to Tangaroa.To begin – there was nothing. Papatūānuku (earth mother) and Ranginui (sky father) arose from this nothing. When Ranginui fell in love with Papatūānuku, she already belonged to Tangaroa.',
    //   photo_url: '/images/img07.jpeg',
    //   longitude: 174.7740,
    //   latitude: -41.2969
    // },
  ])
}