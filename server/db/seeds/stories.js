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
        'The summit where Tamatea, the man with the big knees, the slider, climber of mountains, the land-swallower who travelled about, played his koauau to his loved one',
      story_text:
        'The summit where Tamatea, the man with the big knees, the slider, climber of mountains, the land-swallower who travelled about, played his koauau to his loved one',
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
        'Tāne Mahuta, Lord of the Forest, is an important figure in Māori history. The oldest of six siblings, Tāne Mahuta, grew tired of living in darkness, closed in between his sky father (Ranginui) and earth mother (Papa-tū-ā-nuku). He decided to push them apart and, in doing so, created the world of light (Te Ao Mārama) we live in today. - Tāne Mahuta, Lord of the Forest, is an important figure in Māori history. The oldest of six siblings, Tāne Mahuta, grew tired of living in darkness, closed in between his sky father (Ranginui) and earth mother (Papa-tū-ā-nuku). He decided to push them apart and, in doing so, created the world of light (Te Ao Mārama) we live in today.  In his frustration amidst living in the darkness, he led his siblings to push their parents apart. Eventually, they escaped the darkness and let the light into the world.  As the trees stretch from the grounds to the clouds, we believe that the trees in the forest hold the earth and sky apart just like how Tāne held Papa and Rangi apart. Consequently, this makes the forest (ngahere) the realm of Tāne..',
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
      title: 'Battle Of The Maunga',
      synopsis:
        'Māori legend tells the story of the ancestor Paikea who journeyed to a new life in Aotearoa, New Zealand, on the back of the Tohorā whale. The story represents the spiritual bond between humans and the natural world and the potential revealed when nature is respected rather than exploited.',
      story_text:
        'Māori legend tells the story of the ancestor Paikea who journeyed to a new life in Aotearoa, New Zealand, on the back of the Tohorā whale. The story represents the spiritual bond between humans and the natural world and the potential revealed when nature is respected rather than exploited.Māori legend tells the story of the ancestor Paikea who journeyed to a new life in Aotearoa, New Zealand, on the back of the Tohorā whale. The story represents the spiritual bond between humans and the natural world and the potential revealed when nature is respected rather than exploited.',
      photo_url: '/images/img05.jpeg',
      longitude: 174.774,
      latitude: -41.2969,
    },
    {
      id: 1005,
      auth0_id: 'auth0|632d259b6aa7af87dfa37429',
      author: 'Korero O Te Whenua',
      title: 'Kupawai and Kaiamio',
      synopsis:
        'The Ngāi Tahu creation story explains the southern landscape. Te Waka o Aoraki is the South Island. Aoraki is Mount Cook, Rakirua Mount Teichelmann, Rakiroa Mount Dampier and Rarakiroa is Mount Tasman. Together they reside on Ngā Tiritiri o te Moana – or the whitecaps of the ocean, more commonly known as the Southern Alps.',
      story_text:
        'Māori legend tells the story of the ancestor Paikea who journeyed to a new life in Aotearoa, New Zealand, on the back of the Tohorā whale. The story represents the spiritual bond between humans and the natural world and the potential revealed when nature is respected rather than exploited.Māori legend tells the story of the ancestor Paikea who journeyed to a new life in Aotearoa, New Zealand, on the back of the Tohorā whale. The story represents the spiritual bond between humans and the natural world and the potential revealed when nature is respected rather than exploited.',
      photo_url: '/images/img06.jpg',
      longitude: 170.14202433438962,
      latitude: -43.59432165218203,
    },
  ])
}
