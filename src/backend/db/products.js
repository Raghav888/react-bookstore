import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "I Came Upon a Lighthouse",
    author: "Shantanu Naidu",
    discountprice: 400,
    orginalPrice: 500,
    productImage: "./assets/lighthouse.jpg",
    productDescription: `I Came Upon a Lighthouse is an honest, light-hearted telling of this uncommon bond between a millennial and an octogenarian that gives glimpses of a beloved Indian icon in a warm light.`,
    categoryName: "Autobiography",
    rating: 1,
    wishlistAdded: false,
    cartAdded: false,
  },
  {
    _id: uuid(),
    title: "Zero to One: Note on Startup",
    author: "Peter Thiel",
    discountprice: 300,
    orginalPrice: 400,
    productImage: "./assets/zero1.jpg",
    productDescription: `The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create. In Zero to One we can find singular ways to create those new things.`,
    categoryName: "Finance",
    rating: 2,
    wishlistAdded: false,
    cartAdded: false,
  },
  {
    _id: uuid(),
    title: "Ugly Love: A Love Novel",
    author: "Colleen Hoover",
    discountprice: 240,
    orginalPrice: 500,
    productImage: "./assets/love_ugly.jpg",
    productDescription: `From Colleen Hoover, the #1 New York Times bestselling author of It Ends with Us, a heart-wrenching love story that proves attraction at first sight can be messy.`,
    categoryName: "Love",
    rating: 3,
    wishlistAdded: false,
    cartAdded: false,
  },
  {
    _id: uuid(),
    title: "What I Love About You",
    author: "Sanjay D",
    discountprice: 259,
    orginalPrice: 800,
    productImage: "./assets/love_what_i.jpg",
    productDescription: `This gift will bring that thousand crores smile on your loved ones face. A gift that they will never forget for the rest of their life. This is a fill-in-the blank gift book which helps you to express your deep inner connection and the memories you share with your partner. It takes you down the memory lane in the most beautiful manner and express your hidden love towards your partner in the form of a book`,
    categoryName: "Love",
    rating: 4,
    wishlistAdded: false,
    cartAdded: false,
  },
  {
    _id: uuid(),
    title: "Love, Hope and Magic",
    author: "Ashish Bagrecha",
    discountprice: 1099,
    orginalPrice: 1400,
    productImage: "./assets/Love_hope.jpg",
    productDescription: `A survivor of life and death, a fighter of depression and a believer of universe, Ashish Bagrecha, the author of self-help book ‘Dear Stranger, I Know How You Feel’ and one of the most popular Instagram poets, brings you his very first collection of poetry because he thinks poetry has the magic to heal people`,
    categoryName: "Love",
    rating: 5,
    wishlistAdded: false,
    cartAdded: false,
  },
  {
    _id: uuid(),
    title: "An Incomplete Life: The Autobiography ",
    author: "Vijaypat Singhania",
    discountprice: 320,
    orginalPrice: 800,
    productImage: "./assets/auto_an_incomplete.jpg",
    productDescription: `In February 2015, an unforeseen setback cost Vijaypat Singhania, the erstwhile Chairman Emeritus of Raymond Group, the work of his life and his cherished family home. One of India’s most legendary industrialists, today he is fighting a battle to recover all that he has lost. In his first and only autobiography, he traces his extraordinary life from an anguished childhood to the many dynamic decades he spent at Raymond and the tumultuous years after.`,
    categoryName: "Autobiography",
    rating: 1,
    wishlistAdded: false,
    cartAdded: false,
  },
  {
    _id: uuid(),
    title: "A Biography of Rahul Dravid",
    author: "Devendra Prabhudesai",
    discountprice: 191,
    orginalPrice: 500,
    productImage: "./assets/auto_rahul_dravid.jpg",
    productDescription: `The first Indian to score five double centuries in Test Cricket, each of those scores higher than the previous one; the first Indian to score centuries in four consecutive Test innings; the first non-wicketkeeper in Test history to take 200 catches; the first batsman in Test history to score a century in every Test-playing nation of his time; one of the greatest match-winners of all time, and now, the coach of the Indian Under-19 team which won the World Cup!`,
    categoryName: "Autobiography",
    rating: 2,
    wishlistAdded: false,
    cartAdded: false,
  },
  {
    _id: uuid(),
    title: "ZERO EMI: Unlock Your Freedom",
    author: "Ra Ma. Palaniappan",
    discountprice: 143,
    orginalPrice: 400,
    productImage: "./assets/finance_zero_emi.jpg",
    productDescription: `Are you happy with the way you are handling your finances? Research says that 90% of the people work for EMI and not for anything else. People stick to their job because of the EMIs they must pay. Are you one among them and want to get rid of your EMIs? Are you looking for ways to achieve Financial Freedom? Do you want to be organized and manage your finances better?`,
    categoryName: "Finance",
    rating: 3,
    wishlistAdded: false,
    cartAdded: false,
  },
  {
    _id: uuid(),
    title: "Business Analysis A-Z",
    author: "J. S. Sandhu",
    discountprice: 350,
    orginalPrice: 400,
    productImage: "./assets/finance_business_analysis.jpg",
    productDescription: `Business Analysts (BAs) are not just about gathering & managing requirements or running workshops. They are lot more than that! Until now the focus has been on business analysis tools, techniques and project delivery methodologies, rather than focusing on other important ingredients like Accountability, Leadership and Attention to Detail.`,
    categoryName: "Finance",
    rating: 4,
    wishlistAdded: false,
    cartAdded: false,
  },

  {
    _id: uuid(),
    title: "Who Will Cry When You Die?",
    author: "Robin Sharma",
    discountprice: 148,
    orginalPrice: 400,
    productImage: "./assets/novel_robin.jpg",
    productDescription: `Life Lessons From The Monk Who Sold His Ferrari Do You Feel that life is slipping by so fast that you might never get the chance to live with the meaning, happiness and joy you know you deserve? If so, then this book will be the guiding light that leads you to a brilliant new way of living.`,
    categoryName: "Novel",
    rating: 5,
    wishlistAdded: false,
    cartAdded: false,
  },

  {
    _id: uuid(),
    title: "One Arranged Murder",
    author: "Chetan Bhagat",
    discountprice: 155,
    orginalPrice: 400,
    productImage: "./assets/novel_chetan.jpg",
    productDescription: `Ever since you found Prerna, I lost my best friend? is what I told Saurabh. Hi, this is Keshav, and Saurabh, my best friend, flatmate, colleague and business partner, won?t talk to me. Because I made fun of him and his fiancée.`,
    categoryName: "Novel",
    rating: 1,
    wishlistAdded: false,
    cartAdded: false,
  },

  {
    _id: uuid(),
    title: "Something I Never Told You",
    author: "Shravya Bhinder",
    discountprice: 600,
    orginalPrice: 800,
    productImage: "./assets/novel_something.jpg",
    productDescription: `Ronnie knew that his first crush was way out of his league, and yet he pursued and wooed Adira. Shyly and from a distance in the beginning, and more persuasively later. He couldn't believe it when the beautiful Adira actually began to reciprocate, falling in love with him for his simplicity and honesty.`,
    categoryName: "Novel",
    rating: 2,
    wishlistAdded: false,
    cartAdded: false,
  },
  {
    _id: uuid(),
    title: "Stand-Up Comedy: The Book",
    author: "Judy Carter",
    discountprice: 809,
    orginalPrice: 1600,
    productImage: "./assets/comedy_standup.jpg",
    productDescription: `All the world loves a clown and whether you want to clown around at parties or make a living as a standup comic, comedian Judy Carter can show you how to "do" comedy.`,
    categoryName: "Comedy",
    rating: 3,
    wishlistAdded: false,
    cartAdded: false,
  },
  {
    _id: uuid(),
    title: "The Roommate Situation: Comedy",
    author: "Katie Bailey",
    discountprice: 1122,
    orginalPrice: 1500,
    productImage: "./assets/comedy_roomate.jpg",
    productDescription: `Only, it turns out that my brother is away on a business trip. And, he failed to tell me that a full-on, godlike hottie—who happens to be a premier house flipper—has taken up residence in the spare bedroom while his enormous new house is being renovated.`,
    categoryName: "Comedy",
    rating: 4,
    wishlistAdded: false,
    cartAdded: false,
  },
  {
    _id: uuid(),
    title: "The Woman Who Met Her Match",
    author: "Fiona Gibson",
    discountprice: 107,
    orginalPrice: 600,
    productImage: "./assets/comedy_woman.jpg",
    productDescription: `A funny romantic comedy that will make you laugh out loud!‘The voice of modern woman.’ MARIE CLAIRE‘More than funny, it’s true.’ ELLEThe laugh-out-loud Sunday Times bestseller is back - and funnier than ever!Perfect for fans of Outnumbered and Carole Matthews, Fiona writes about life as it really is.After yet another disaster, Lorrie is calling time on online dating. She might be single in her forties, but she’s got a good job, wonderful children and she’s happy`,
    categoryName: "Comedy",
    rating: 5,
    wishlistAdded: false,
    cartAdded: false,
  },
];
