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
    {
      id: 1004,
      auth0_id: 'auth0|632d259b6aa7af87dfa37429',
      author: 'Whenua O Korero',
      title: 'The story of Paikea',
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
  ])
}