
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('regions').del()
  await knex('regions').insert(
    [
      { 
        id: 2000, 
        eng_name: 'New Zealand',
        maori_name: 'Aotearoa',        
        },
      { 
        id: 2001, 
        eng_name: 'North Island',
        maori_name: 'Te Ika-a-Māui',
      },
       { 
        id: 2002, 
        eng_name: 'South Island',
        maori_name: 'Te Waipounamu',
      },
      { 
        id: 2003, 
        eng_name: 'Northland',
        maori_name: 'Te Tai Tokerau',   
        },
      { 
        id: 2004, 
        eng_name: 'Auckland',
        maori_name: 'Tāmaki-makau-rau',
      },
       { 
        id: 2005, 
        eng_name: 'Waikato',
        maori_name: 'Waikato',
      },
      { 
        id: 2006,
        eng_name: 'Bay of Plenty',
        maori_name: 'Te Moana-a-Toi',     
        },
      { 
        id: 2007, 
        eng_name: 'Gisborne',
        maori_name: 'Te Tai Rāwhiti',
      },
       { 
        id: 2008, 
        eng_name: "Hawke's Bay",
        maori_name: 'Te Matau-a-Māui'
      },
      { 
        id: 2009, 
        eng_name: "Taranaki",
        maori_name: "Taranaki",
      },
      { 
        id: 2010,
        eng_name: 	"Manawatū-Whanganui",
        maori_name: "Manawatū-Whanganui" ,      
        },
      { 
        id: 2011,
        eng_name: "Wellington",
        maori_name: "Te Whanga-nui-a-Tara",
      },
       { 
        id: 2012, 
        eng_name: "Tasman",
        maori_name: "Te Tai-o-Aorere",
      },
      { 
        id: 2013,
        eng_name: "Nelson",
        maori_name: "Whakatū",
      },
      { 
        id: 2014,
        eng_name: 'Marlborough',
        maori_name: "Te Tauihu-o-te-waka" ,    
        },
      { 
        id: 2015,
        eng_name:'West Coast',
        maori_name: 'Te Tai Poutini',
      },
       { 
        id: 2016,
        eng_name: 'Canterbury',
        maori_name: 'Waitaha',
      },
      { 
        id: 2017,
        eng_name: 'Otago',
        maori_name: 'Ōtākou' ,
        },
      { 
        id: 2018,
        eng_name: 'Southland',
        maori_name: 'Murihiku',
      },
      
    ])
}
