const users = [
  {
    _id: "1000",
    name: "Charlie",
    avatar:
      "http://res.cloudinary.com/dnbqibbaq/image/upload/c_scale,w_400/v1638652780/profile-picture7_vwkg6v.jpg",
    lat: "45.540940",
    long: "-73.593790",
    bio: "Self proclaimed cat and dog aficionado.",
    forte: ["House Sitting", "Dog Walking", "Drop-in Visits"],
    rating: ["star", "star", "star", "star", "star"],
    openToTrading: true,
    ads: [
      {
        timestamp: "March 20, 2021",
        body: "Looking for a pet sitter for a few days from May 20-25. You'd need to feed my cat and dog twice per week, as well as take Molly (my dog) on a walk at least once per day. I'm open to trading my time when I'm back, or we can work out a deal for $$! If you'd like to house sit, you're welcome to, or droppping in is also fine!",
      },
      {
        timestamp: "May 8, 2021",
        body: "ISO someone to take my cat to the vet on March 25! I'm away for work and can't change my appointment! Come thru!",
      },
    ],
    reviews: [
      {
        _id: "1",
        from: "Bob",
        timestamp: "November 2, 2021",
        rating: ["star", "star", "star", "star", "star"],
        body: "SO HAPPY WITH THE SERVICE! Thank you so much for taking great care of my little guy. We’ll definitely be back!",
      },
      {
        _id: "2",
        from: "Lisa",
        timestamp: "November 18, 2021",
        rating: ["star", "star", "star", "star", "star"],
        body: "Thanks for taking care of my dog! The communication was excellent and my dog seemed very very comfortable with you. I would use your services anytime.",
      },
    ],
    myPets: [
      {
        name: "Luna",
        imageSrc: "https://thatcopy.github.io/catAPI/imgs/jpg/71d87f4.jpg",
      },
      {
        name: "Molly",
        imageSrc:
          "https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_1824.jpg",
      },
    ],
  },
  {
    _id: "1001",
    name: "Leila",
    avatar:
      "http://res.cloudinary.com/dnbqibbaq/image/upload/c_scale,w_400/v1638652779/profile-picture9_hdlm5u.jpg",
    lat: "45.493005",
    long: "-73.595504",
    bio: "Your dog's new BFF. Ready with a car for easy transportation to the city's best dog park.",
    forte: ["Dog Walking", "Drop-in Visits", "Emergency Vet Transportation"],
    rating: ["star", "star", "star", "star", "star"],
    openToTrading: false,
    ads: [
      {
        timestamp: "October 20, 2020",
        body: "ISO someone to watch my dog, Sadie, overnight on November 3! I can't offer to trade my time, but I'll be happy to work out a fair price for you! ",
      },
    ],
    reviews: [
      {
        _id: "3",
        from: "Erica",
        timestamp: "August 15, 2021",
        rating: ["star", "star", "star", "star", "star"],
        body: "Leila was amazing help when I needed someone close and very last minute. My little dog came back home happy.",
      },
      {
        _id: "4",
        from: "Gillian",
        timestamp: "October 12, 2021",
        rating: ["star", "star", "star", "star", "star"],
        body: "Trustworthy and caring with my dog. Could rest easy knowing he was in great hands!",
      },
    ],
    myPets: [
      {
        name: "Sadie",
        imageSrc:
          "https://images.dog.ceo/breeds/mastiff-bull/n02108422_200.jpg",
      },
    ],
  },
  {
    _id: "1002",
    name: "Marco",
    avatar:
      "http://res.cloudinary.com/dnbqibbaq/image/upload/c_scale,w_400/v1638652766/profile-picture6_tc3k2t.jpg",
    lat: "45.559724",
    long: "-73.663739",
    bio: "Pet lover who works from home!",
    forte: ["House Sitting", "Dog Walking", "Daycare", "Overnight Boarding"],
    rating: ["star", "star", "star", "star", "star"],
    openToTrading: true,
    ads: [],
    reviews: [
      {
        _id: "5",
        from: "Paul",
        timestamp: "May 31, 2020",
        rating: ["star", "star", "star", "star", "star"],
        body: "Mon chien aime vraiment aller chez Marco.",
      },
      {
        _id: "6",
        from: "Hannah",
        timestamp: "December 30, 2020",
        rating: ["star", "star", "star", "star", "star"],
        body: "Marco has looked after my cat on several occasions. I know that when I go away on vacation that I do not need to worry about how my cat is being cared for.",
      },
    ],
    myPets: [
      {
        name: "Buster",
        imageSrc: "https://thatcopy.github.io/catAPI/imgs/jpg/5fc67d7.jpg",
      },
      {
        name: "Lola",
        imageSrc:
          "https://images.dog.ceo/breeds/pointer-german/n02100236_5141.jpg",
      },
    ],
  },
  {
    _id: "1003",
    name: "Robyn",
    avatar:
      "http://res.cloudinary.com/dnbqibbaq/image/upload/c_scale,w_400/v1638652776/profile-picture11_sdfjce.jpg",
    lat: "45.536473",
    long: "-73.590568",
    bio: "Caring for pets since 1990!",
    forte: [
      "Emergency Vet Transportation",
      "Overnight Boarding",
      "Drop-in Visits",
    ],
    rating: ["star", "star", "star", "star", "star"],
    openToTrading: false,
    ads: [],
    reviews: [
      {
        _id: "7",
        from: "Maude",
        timestamp: "September 9, 2021",
        rating: ["star", "star", "star", "star", "star"],
        body: "Robyn was great! She walked through the rain to walk Kai! Would definitely book her again!!",
      },
      {
        _id: "8",
        from: "Jennifer",
        timestamp: "September 12, 2021",
        rating: ["star", "star", "star", "star", "star"],
        body: "Spot had a great time with Robyn! Thanks for a job well done.",
      },
    ],
    myPets: [
      {
        name: "Marlon",
        imageSrc: "https://thatcopy.github.io/catAPI/imgs/jpg/aea9421.jpg",
      },
    ],
  },
  {
    _id: "1004",
    name: "Tim",
    avatar:
      "http://res.cloudinary.com/dnbqibbaq/image/upload/c_scale,w_400/v1638652764/profile-picture4_cs2z8s.jpg",
    lat: "45.498318",
    long: "-73.688480",
    bio: "Pet deprived Montrealer looking to lend a hand :-)",
    forte: ["House Sitting", "Dog Walking", "Drop-in Visits"],
    rating: ["star", "star", "star", "star", "star"],
    openToTrading: true,
    ads: [
      {
        timestamp: "October 10, 2021",
        body: "Need someone to look after your dog or cat for a weekend? Let me be your guy. :-) My schedule is flexible! Reach out!",
      },
    ],
    reviews: [
      {
        _id: "9",
        from: "Francine",
        timestamp: "March 30, 2020",
        rating: ["star", "star", "star", "star", "star"],
        body: "Gigi had a great time with Tim! We got plenty of pics of their adventures too.",
      },
      {
        _id: "10",
        from: "Max",
        timestamp: "October 27, 2020",
        rating: ["star", "star", "star", "star", "star"],
        body: "Tim is amazing!",
      },
    ],
  },
  {
    _id: "1005",
    name: "Louise",
    avatar:
      "http://res.cloudinary.com/dnbqibbaq/image/upload/c_scale,w_400/v1638652775/profile-picture12_uvyqb1.jpg",
    lat: "45.518623",
    long: "-73.635437",
    bio: "Ur friendly neighbourhood dog walker!",
    forte: ["Dog Walking", "Drop-in Visits"],
    rating: ["star", "star", "star", "star", "star"],
    openToTrading: true,
    ads: [],
    reviews: [
      {
        _id: "11",
        from: "Gina",
        timestamp: "January 30, 2020",
        rating: ["star", "star", "star", "star", "star"],
        body: "Fantastic!",
      },
      {
        _id: "12",
        from: "Pierre",
        timestamp: "March 1, 2020",
        rating: ["star", "star", "star", "star", "star"],
        body: "Louise is very attentive and a great sitter. Would reccomend!",
      },
    ],
  },
  {
    _id: "1006",
    name: "Eva",
    avatar:
      "http://res.cloudinary.com/dnbqibbaq/image/upload/c_scale,w_400/v1638652772/profile-picture10_hchhkh.jpg",
    lat: "45.549951",
    long: "-73.616554",
    bio: "Caring and responsible sitter for your furry friends.",
    forte: ["House Sitting", "Drop-in Visits", "Overnight Boarding", "Daycare"],
    rating: ["star", "star", "star", "star", "star"],
    openToTrading: true,
    ads: [],
    reviews: [
      {
        _id: "13",
        from: "Priscilla",
        timestamp: "October 14, 2020",
        rating: ["star", "star", "star", "star", "star"],
        body: "Good job! We are very satisfied.",
      },
      {
        _id: "14",
        from: "Kristen",
        timestamp: "May 12, 2021",
        rating: ["star", "star", "star", "star", "star"],
        body: "Eva is a very loving and responsible person. I would trust my pets with her any time.",
      },
    ],
  },
  {
    _id: "1007",
    name: "Drew",
    avatar:
      "http://res.cloudinary.com/dnbqibbaq/image/upload/c_scale,w_400/v1638652763/profile-picture1_aesu1e.jpg",
    lat: "45.510602",
    long: "-73.571407",
    bio: "Dog dad and pet lover extraordinaire",
    forte: ["Dog Walking"],
    rating: ["star", "star", "star", "star", "star"],
    openToTrading: true,
    ads: [
      {
        timestamp: "January 12, 2021",
        body: "In need of someone to take care of my little guy, Oscar for two days in February. I'm open to trades and would love to have you stay at my place. Drop-in is fine too as long as you walk Oscar once a day!",
      },
    ],
    reviews: [
      {
        _id: "15",
        from: "Bobby",
        timestamp: "February 12, 2021",
        rating: ["star", "star", "star", "star", "star"],
        body: "Bandit was very happy with her stay with Drew, she was safe and received alot of love!",
      },
      {
        _id: "16",
        from: "Celeste",
        timestamp: "February 21, 2021",
        rating: ["star", "star", "star", "star", "star"],
        body: "Great work!",
      },
    ],
    myPets: [
      {
        name: "Oscar",
        imageSrc: "https://images.dog.ceo/breeds/redbone/n02090379_2335.jpg",
      },
    ],
  },
  {
    _id: "1008",
    name: "Ben",
    avatar:
      "http://res.cloudinary.com/dnbqibbaq/image/upload/c_scale,w_400/v1638652763/profile-picture2_z7wnyb.jpg",
    lat: "45.488497",
    long: "-73.567459",
    bio: "Full-time student, eager to sit or walk your pets!",
    forte: ["Dog Walking", "Drop-in Visits", "House Sitting", "Daycare"],
    rating: ["star", "star", "star", "star", "star"],
    openToTrading: true,
    ads: [],
    reviews: [
      {
        _id: "17",
        from: "Andrea",
        timestamp: "September 3, 2021",
        rating: ["star", "star", "star", "star", "star"],
        body: "We love Ben for all our pet daycare needs.",
      },
      {
        _id: "18",
        from: "Janice",
        timestamp: "October 1, 2021",
        rating: ["star", "star", "star", "star", "star"],
        body: "Ben a toujours été la fan numéro 1 des animaux. Il est un person de confiance, responsable et qui sait comment bien s'occuper de nos compagnon.",
      },
    ],
  },
  {
    _id: "1009",
    name: "Isabelle",
    avatar:
      "http://res.cloudinary.com/dnbqibbaq/image/upload/c_scale,w_400/v1638652770/profile-picture8_ftcqff.jpg",
    lat: "45.514639",
    long: "-73.624708",
    bio: "Dog loving pawsitive gal ;-)",
    forte: ["Dog Walking", "Drop-in Visits"],
    rating: ["star", "star", "star", "star", "star"],
    openToTrading: true,
    ads: [
      {
        timestamp: "April 30, 2021",
        body: "ISO someone with a car to help me take my dog to the vet on Friday, May 7! Shouldn't be a long ride.",
      },
      {
        timestamp: "November 20, 2021",
        body: "Preemptively posting to see if anyone can take care of my dog from Dec 21 - 26. I'm flying home and I'm trying to avoid taking him on a plane if possible! Winston is friendly, outgoing and snuggly. Contact me here!",
      },
    ],
    reviews: [
      {
        _id: "19",
        from: "Cassie",
        timestamp: "September 8, 2021",
        rating: ["star", "star", "star", "star", "star"],
        body: "Isabelle walked BonBon for a week and I really appreciated it.",
      },
      {
        _id: "20",
        from: "Ariel",
        timestamp: "November 7, 2021",
        rating: ["star", "star", "star", "star", "star"],
        body: "Isabelle was excellent. She is kind and asks good questions. Hiro seemed very happy in her presence and that speaks volumes. Thank you Isabelle for taking great care of our guy!",
      },
    ],
    myPets: [
      {
        name: "Winston",
        imageSrc: "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
      },
    ],
  },
  {
    _id: "1010",
    name: "Andy",
    avatar:
      "http://res.cloudinary.com/dnbqibbaq/image/upload/c_scale,w_500/v1638652764/profile-picture5_ttgs6a.jpg",
    lat: "45.566716",
    long: "-73.574096",
    bio: "Kind and attentive friend to all pets",
    forte: ["House Sitting", "Dog Walking", "Daycare"],
    rating: ["star", "star", "star", "star", "star"],
    openToTrading: true,
    ads: [],
    reviews: [
      {
        _id: "21",
        from: "Cecile",
        timestamp: "August 3, 2021",
        rating: ["star", "star", "star", "star", "star"],
        body: "Juste wow! Si je pouvais, je donnerais plus d'étoiles!",
      },
      {
        _id: "22",
        from: "Leah",
        timestamp: "August 8, 2021",
        rating: ["star", "star", "star", "star", "star"],
        body: "Andy was a dream cat sitter for our little guy Bisou",
      },
    ],
    myPets: [
      {
        name: "Harley",
        imageSrc: "https://thatcopy.github.io/catAPI/imgs/jpg/695c074.jpg",
      },
    ],
  },
  {
    _id: "1011",
    name: "Ezra",
    avatar:
      "http://res.cloudinary.com/dnbqibbaq/image/upload/c_scale,w_400/v1638652767/profile-picture3_xkhmfk.jpg",
    lat: "45.543611",
    long: "-73.653275",
    bio: "Dependable animal lover through and through :-)!",
    forte: ["Emergency Vet Transportation", "Dog Walking", "Drop-in Visits"],
    rating: ["star", "star", "star", "star", "star"],
    openToTrading: true,
    ads: [
      {
        timestamp: "November 30, 2021",
        body: "Anyone on here know of a good doggy training school in the Montreal area? Looking for recs!",
      },
    ],
    reviews: [
      {
        _id: "23",
        from: "Greg",
        timestamp: "February 14, 2021",
        rating: ["star", "star", "star", "star", "star"],
        body: "Very respectful towards the owner and the animal, listens carefully to the instructions and sends regular updates throughout the days.",
      },
      {
        _id: "24",
        from: "Nancy",
        timestamp: "July 10, 2021",
        rating: ["star", "star", "star", "star", "star"],
        body: "Ezra has taken care of our pup more times than I can recall. He's patient, gentle, reliable, and so considerate of the five million instructions he's often left with.",
      },
    ],
    myPets: [
      {
        name: "Clyde",
        imageSrc:
          "https://images.dog.ceo/breeds/bulldog-french/n02108915_8696.jpg",
      },
      {
        name: "Rosie",
        imageSrc: "https://images.dog.ceo/breeds/puggle/IMG_124524.jpg",
      },
    ],
  },
];

module.exports = { users };
