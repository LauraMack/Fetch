const users = [
  {
    _id: "1000",
    name: "Charlie",
    avatar:
      "http://res.cloudinary.com/dnbqibbaq/image/upload/c_scale,w_400/v1638652780/profile-picture7_vwkg6v.jpg",
    location: "h2t2j4",
    bio: "Self proclaimed cat and dog aficionado.",
    forte: ["House Sitting", "Dog Walking", "Drop-in Visits"],
    rating: "5",
    openToTrading: true,
    ads: [
      {
        timestamp: "May 8, 2021",
        body: "Looking for a pet sitter for a few days from May 20-25. You'd need to feed my cat and dog twice per week, as well as take Molly (my dog) on a walk at least once per day. I'm open to trading my time when I'm back, or we can work out a deal for $$! If you'd like to house sit, you're welcome to, or droppping in is also fine!",
      },
      {
        timestamp: "March 20, 2021",
        body: "ISO someone to take my cat to the vet on March 25! I'm away for work and can't change my appointment! Come thru!",
      },
    ],
    reviews: [""],
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
    location: "h2t2j4",
    bio: "Your dog's new BFF. Ready with a car for easy transportation to the city's best dog park.",
    forte: ["Dog Walking", "Drop-in Visits", "Emergency Vet Transportation"],
    rating: "5",
    openToTrading: false,
    ads: [
      {
        timestamp: "October 20, 2020",
        body: "ISO someone to watch my dog, Sadie, overnight on November 3! I can't offer to trade my time, but I'll be happy to work out a fair price for you! ",
      },
    ],
    reviews: [""],
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
    location: "h2t2j4",
    bio: "Pet lover who works from home!",
    forte: ["House Sitting", "Dog Walking", "Daycare", "Overnight Boarding"],
    rating: "4.8",
    openToTrading: true,
    ads: [],
    reviews: [""],
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
    location: "h2t2j4",
    bio: "Caring for pets since 1990!",
    forte: [
      "Emergency Vet Transportation",
      "Overnight Boarding",
      "Drop-in Visits",
    ],
    rating: "4.6",
    openToTrading: false,
    ads: [],
    reviews: [""],
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
    location: "h2t2j4",
    bio: "Pet deprived Montrealer looking to lend a hand :-)",
    forte: ["House Sitting", "Dog Walking", "Drop-in Visits"],
    rating: "5",
    openToTrading: true,
    ads: [
      "Need someone to look after your dog or cat for a weekend? Let me be your guy. :-) My schedule is flexible! Reach out!",
    ],
    reviews: [""],
  },
  {
    _id: "1005",
    name: "Louise",
    avatar:
      "http://res.cloudinary.com/dnbqibbaq/image/upload/c_scale,w_400/v1638652775/profile-picture12_uvyqb1.jpg",
    location: "h2t2j4",
    bio: "Ur friendly neighbourhood dog walker!",
    forte: ["Dog Walking", "Drop-in Visits"],
    rating: "5",
    openToTrading: true,
    ads: [],
    reviews: [""],
  },
  {
    _id: "1006",
    name: "Eva",
    avatar:
      "http://res.cloudinary.com/dnbqibbaq/image/upload/c_scale,w_400/v1638652772/profile-picture10_hchhkh.jpg",
    location: "h2t2j4",
    bio: "Caring and responsible sitter for your furry friends.",
    forte: ["House Sitting", "Drop-in Visits", "Overnight Boarding", "Daycare"],
    rating: "5",
    openToTrading: true,
    ads: [],
    reviews: [""],
  },
  {
    _id: "1007",
    name: "Drew",
    avatar:
      "http://res.cloudinary.com/dnbqibbaq/image/upload/c_scale,w_400/v1638652763/profile-picture1_aesu1e.jpg",
    location: "h2t2j4",
    bio: "Dog dad and pet lover extraordinaire",
    forte: ["Dog Walking"],
    rating: "5",
    openToTrading: true,
    ads: [
      {
        timestamp: "January 12, 2021",
        body: "In need of someone to take care of my little guy, Oscar for two days in February. I'm open to trades and would love to have you stay at my place. Drop-in is fine too as long as you walk Oscar once a day!",
      },
    ],
    reviews: [""],
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
    location: "h2t2j4",
    bio: "Full-time student, eager to sit or walk your pets!",
    forte: ["Dog Walking", "Drop-in Visits", "House Sitting", "Daycare"],
    rating: "4.7",
    openToTrading: true,
    ads: [],
    reviews: [""],
  },
  {
    _id: "1009",
    name: "Isabelle",
    avatar:
      "http://res.cloudinary.com/dnbqibbaq/image/upload/c_scale,w_400/v1638652770/profile-picture8_ftcqff.jpg",
    location: "h2t2j4",
    bio: "Dog loving pawsitive gal ;-)",
    forte: ["Dog Walking", "Drop-in Visits"],
    rating: "5",
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
    reviews: [""],
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
    location: "h2t2j4",
    bio: "Kind and attentive friend to all pets",
    forte: ["House Sitting", "Dog Walking", "Daycare"],
    rating: "5",
    openToTrading: true,
    ads: [],
    reviews: [""],
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
    location: "h2t2j4",
    bio: "Dependable animal lover through and through :-)!",
    forte: ["Emergency Vet Transportation", "Dog Walking", "Drop-in Visits"],
    rating: "5",
    openToTrading: true,
    ads: [
      {
        timestamp: "November 30, 2021",
        body: "Anyone on here know of a good doggy training school in the Montreal area? Looking for recs!",
      },
    ],
    reviews: [""],
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
