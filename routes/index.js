var express = require('express');
var router = express.Router();

const list = [
  {
    id: 1,
    Term: 'Quantum Computing',
    Description:
      'Quantum computing utilizes principles of quantum mechanics to process information, offering the potential for exponential speedup in solving complex problems.',
    reference: 'Preskill, J. (2018). Quantum Computing in the NISQ era and beyond. Quantum, 2, 79.',
  },
  {
    id: 2,
    Term: 'Augmented Reality',
    Description:
      'Augmented Reality (AR) overlays digital content onto the physical world, enhancing real-world experiences with computer-generated information.',
    reference: 'Azuma, R. T. (1997). A Survey of Augmented Reality. Presence: Teleoperators and Virtual Environments, 6(4), 355-385.',
  },
  {
    id: 3,
    Term: 'Biotechnology',
    Description:
      'Biotechnology involves using living organisms and biological systems to develop products and technologies that benefit various industries, including medicine and agriculture.',
    reference: 'Campbell, P. K. (2015). Biotechnology: An Introduction (4th ed.). Cengage Learning.',
  },
  {
    id: 4,
    Term: 'Climate Change',
    Description:
      "Climate change refers to the long-term alteration of Earth's climate patterns, including global warming caused by human activities such as burning fossil fuels and deforestation.",
    reference:
      'IPCC. (2014). Climate Change 2014: Synthesis Report. Contribution of Working Groups I, II, and III to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change. Geneva, Switzerland: IPCC.',
  },
  {
    id: 5,
    Term: 'Blockchain',
    Description:
      'Blockchain is a decentralized and distributed digital ledger technology that records transactions across multiple computers in a way that ensures security, transparency, and immutability.',
    reference: 'Swan, M. (2015). Blockchain: Blueprint for a New Economy. O\'Reilly Media.',
  },
  {
    id: 6,
    Term: 'Artificial Intelligence',
    Description:
      'AI refers to the simulation of human intelligence in machines that are programmed to perform tasks requiring human-like cognitive abilities, such as learning, problem-solving, and decision-making.',
    reference: 'Russell, S. J., & Norvig, P. (2016). Artificial Intelligence: A Modern Approach (3rd ed.). Pearson.',
  },
  {
    id: 7,
    Term: 'Space Exploration',
    Description:
      'Space exploration is the investigation and study of outer space through the use of spacecraft and other technologies.',
    reference: 'Levin, G. V. (2004). Spaceflight and Life Sciences: Space Biology and Medicine. NASA Ames Research Center.',
  },
  {
    id: 8,
    Term: 'Renewable Energy',
    Description:
      'Renewable energy is energy that is collected from renewable resources, such as sunlight, wind, rain, tides, and geothermal heat, which are naturally replenished.',
    reference: 'Boyle, G., Everett, B., & Ramage, J. (2012). Energy Systems and Sustainability: Power for a Sustainable Future (2nd ed.). Oxford University Press.',
  },
  {
    id: 9,
    Term: 'Virtual Reality',
    Description:
      'Virtual Reality (VR) is a computer-generated simulation of a three-dimensional environment that users can interact with in a seemingly real or physical way.',
    reference: 'Burdea, G. C., & Coiffet, P. (2003). Virtual Reality Technology (2nd ed.). Wiley-IEEE Press.',
  },
  {
    id: 10,
    Term: 'Nanotechnology',
    Description:
      'Nanotechnology involves manipulating matter at the nanoscale to create new materials, devices, and systems with unique properties and applications.',
    reference: 'Ratner, M. A., & Ratner, D. (2003). Nanotechnology: A Gentle Introduction to the Next Big Idea. Prentice Hall.',
  },
  {
    id: 11,
    Term: 'Genetic Engineering',
    Description:
      'Genetic engineering is the direct manipulation of an organism\'s genes using biotechnology techniques to create new traits or modify existing ones.',
    reference: 'Watson, J. D., & Tooze, J. (2014). Recombinant DNA: Genes and Genomes: A Short Course. W. H. Freeman.',
  },
  {
    id: 12,
    Term: 'Cybersecurity',
    Description:
      'Cybersecurity involves protecting computer systems, networks, and data from digital attacks and unauthorized access.',
    reference: 'Schneier, B. (2015). Data and Goliath: The Hidden Battles to Collect Your Data and Control Your World. W. W. Norton & Company.',
  },
  {
    id: 13,
    Term: 'Neuroscience',
    Description:
      'Neuroscience is the study of the nervous system, including the brain, spinal cord, and networks of neurons, to understand their structure and function.',
    reference: 'Kandel, E. R., Schwartz, J. H., & Jessell, T. M. (2013). Principles of Neural Science (5th ed.). McGraw-Hill Education.',
  },
  {
    id: 14,
    Term: 'Robotics',
    Description:
      'Robotics involves designing, building, and operating robots that can perform tasks autonomously or with human assistance.',
    reference: 'Siciliano, B., & Khatib, O. (Eds.). (2016). Springer Handbook of Robotics. Springer.',
  },
  {
    id: 15,
    Term: 'Quantum Physics',
    Description:
      'Quantum physics is a branch of physics that explores the behavior of matter and energy at the smallest scales, often defying classical understanding.',
    reference: 'Gasiorowicz, S. (2003). Quantum Physics (3rd ed.). John Wiley & Sons.',
  },
  {
    id: 16,
    Term: 'Machine Learning',
    Description:
      'Machine learning involves developing algorithms that enable computers to learn patterns from data and make predictions or decisions without explicit programming.',
    reference: 'Mitchell, T. M. (1997). Machine Learning. McGraw-Hill.',
  },
  {
    id: 17,
    Term: 'Cognitive Psychology',
    Description:
      'Cognitive psychology studies mental processes such as perception, memory, reasoning, and problem-solving to understand how humans think and learn.',
    reference: 'Sternberg, R. J., & Sternberg, K. (2017). Cognitive Psychology (7th ed.). Cengage Learning.',
  },
  {
    id: 18,
    Term: 'Sustainable Agriculture',
    Description:
      'Sustainable agriculture focuses on environmentally friendly and efficient farming practices that promote long-term soil health, biodiversity, and food security.',
    reference: 'Gliessman, S. R. (2014). Agroecology: The Ecology of Sustainable Food Systems (3rd ed.). CRC Press.',
  },
  {
    id: 19,
    Term: 'Human-Computer Interaction',
    Description:
      'Human-Computer Interaction (HCI) explores the design and interaction between humans and computer systems, aiming to create intuitive and user-friendly interfaces.',
    reference: 'Dix, A., Finlay, J., Abowd, G. D., & Beale, R. (2004). Human-Computer Interaction (3rd ed.). Pearson.',
  },
  {
    id: 20,
    Term: 'Quantum Machine Learning',
    Description:
      'Quantum machine learning is the integration of quantum computing principles with machine learning algorithms to potentially solve complex problems more efficiently than classical computers.',
    reference: 'Biamonte, J., & Wittek, P. (2017). Quantum Machine Learning. Nature, 549(7671), 195-202.',
  },
  {
    id: 21,
    Term: '3D Printing',
    Description:
      '3D printing, also known as additive manufacturing, is a process of creating three-dimensional objects from a digital file by layering materials.',
    reference: 'Gibson, I., Rosen, D. W., & Stucker, B. (2010). Additive Manufacturing Technologies: 3D Printing, Rapid Prototyping, and Direct Digital Manufacturing. Springer.',
  },
  {
    id: 22,
    Term: 'Dark Matter',
    Description:
      'Dark matter is a hypothetical form of matter that does not emit, absorb, or reflect light, and is believed to make up a significant portion of the universe.',
    reference: 'Freese, K., Balšić, H., \u0026 Jenkins, A. (2021).  Dark Matter: A Primer. arXiv preprint arXiv:2101.11044.',
  },
  {
    id: 23,
    Term: 'Synthetic Biology',
    Description:
      'Synthetic biology involves designing and constructing new biological parts, devices, and systems, often by combining elements from different organisms.',
    reference: 'Endy, D. (2005). Foundations for engineering biology. Nature, 438(7067), 449-453.',
  },
  {
    id: 24,
    Term: 'Neuromorphic Engineering',
    Description:
      'Neuromorphic engineering aims to design hardware and software inspired by the structure and functioning of the brain, often using analog circuits.',
    reference: 'Indiveri, G., Linares-Barranco, B., \u0026 Legenstein, R. (2011). Integration of nanoscale memristor synapses in neuromorphic computing architectures. Nanotechnology, 22(49), 492001.',
  },
  {
    id: 25,
    Term: 'Cryptography',
    Description:
      'Cryptography involves techniques for secure communication, ensuring that information can be transmitted privately and securely in the presence of adversaries.',
    reference: 'Paar, C., \u0026 Pelzl, J. (2009). Understanding Cryptography: A Textbook for Students and Practitioners. Springer.',
  },
  {
    id: 26,
    Term: 'Astrophysics',
    Description:
      'Astrophysics is a branch of astronomy that focuses on the physical properties and behavior of celestial bodies and the universe as a whole.',
    reference: 'Carroll, B. W., \u0026 Ostlie, D. A. (2017). An Introduction to Modern Astrophysics (2nd ed.). Cambridge University Press.',
  },
  {
    id: 27,
    Term: 'Green Chemistry',
    Description:
      'Green chemistry aims to design chemical products and processes that minimize the use of hazardous substances and reduce environmental impact.',
    reference: 'Anastas, P. T., \u0026 Warner, J. C. (1998). Green chemistry: theory and practice. Oxford University Press.',
  },
  {
    id: 28,
    Term: 'Social Networks',
    Description:
      'Social networks study the structure and dynamics of connections between individuals or entities, often using graph theory and computational analysis.',
    reference: 'Easley, D., \u0026 Kleinberg, J. (2010). Networks, Crowds, and Markets: Reasoning About a Highly Connected World. Cambridge University Press.',
  },
  {
    id: 29,
    Term: 'Renewable Fuels',
    Description:
      'Renewable fuels are energy sources derived from renewable resources, such as biofuels and hydrogen, with the goal of reducing reliance on fossil fuels.',
    reference: 'Knothe, G. (2010). Biodiesel and renewable diesel: A comparison. Progress in Energy and Combustion Science, 36(3), 364-373.',
  },
  {
    id: 30,
    Term: 'Particle Physics',
    Description:
      'Particle physics explores the fundamental constituents of matter and the forces that govern their interactions, often using particle accelerators.',
    reference: 'Griffiths, D. J. (2008). Introduction to Elementary Particles (2nd ed.). Wiley-VCH.',
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Word meaning', glossary: list });
});

module.exports = router;
