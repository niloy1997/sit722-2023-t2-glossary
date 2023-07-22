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
  // Add the other 7 glossary terms here...
  {
    id: 8,
    Term: 'Climate Change',
    Description:
      "Climate change refers to the long-term alteration of Earth's climate patterns, including global warming caused by human activities such as burning fossil fuels and deforestation.",
    reference:
      'IPCC. (2014). Climate Change 2014: Synthesis Report. Contribution of Working Groups I, II, and III to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change. Geneva, Switzerland: IPCC.',
  },
  {
    id: 9,
    Term: 'Blockchain',
    Description:
      'Blockchain is a decentralized and distributed digital ledger technology that records transactions across multiple computers in a way that ensures security, transparency, and immutability.',
    reference: 'Swan, M. (2015). Blockchain: Blueprint for a New Economy. O\'Reilly Media.',
  },
  {
    id: 10,
    Term: 'Artificial Intelligence',
    Description:
      'AI refers to the simulation of human intelligence in machines that are programmed to perform tasks requiring human-like cognitive abilities, such as learning, problem-solving, and decision-making.',
    reference: 'Russell, S. J., & Norvig, P. (2016). Artificial Intelligence: A Modern Approach (3rd ed.). Pearson.',
  },{
    id: 1,
    Term: 'Quantum Computing',
    Description:
      'Quantum computing utilizes principles of quantum mechanics to process information, offering the potential for exponential speedup in solving complex problems.',
    reference: 'Preskill, J. (2018). Quantum Computing in the NISQ era and beyond. Quantum, 2, 79.',
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Word meaning', glossary: list });
});

module.exports = router;
