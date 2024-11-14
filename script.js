const questions = {
  abbreviation: {
    100: { question: "LAN", answer: "Local Area Network" },
    200: { question: "VPN", answer: "Virtual Private Network" },
    300: { question: "NLP", answer: "Natural Language Processing" },
    400: { question: "ASCII", answer: "American Standard Code for Information Interchange" },
    500: { question: "OMR", answer: "Optical Mark Recognition" }
  },
  companies: {
    100: { 
      question: '<img src="https://imgs.search.brave.com/B-5KPnUPag6hK8cZfQDx0il4_CkiDUDn-HGm1evBsrg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZXNp/Z25icm8uY29tL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzL2lt/YWdlNC0xMC5wbmc" style="max-width: 60px;">', 
      answer: "Starbucks"
    },
    200: { 
      question: '<img src="https://cdn.dribbble.com/users/1578582/screenshots/16712119/media/76365a3db12ea6cc4826615351829429.png" style="max-width: 100px;">', 
      answer: "Rolex"
    },
    300: { 
      question: '<img src="https://imgs.search.brave.com/K43Qd4wq0IaUIKT2zdQPEDgp-61CdI11nweRezLIeN0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbmxv/dmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDExLzEyL3Vu/aWxldmVyLWxvZ28u/anBn" style="max-width: 100px;">', 
      answer: "Unilever"
    },
    400: { 
      question: '<img src="https://www.motortrend.com/uploads/2021/10/2010_Ford_Mustang.jpg" style="max-width: 60px;">', 
      answer: "Ford Mustang"
    },
    500: { 
      question: '<img src="https://swimburger.net/media/0zcpmk1b/azure.jpg" style="max-width: 100px;">', 
      answer: "Azure"
    }
  },
  personalities: {
    100: { question: "Who is the CEO of Reliance?", answer: "Mukesh Ambani" },
    200: { question: "Who Is The Chairman Of Amazon?", answer: "Jeff Bezos" },
    300: { question: "Who is the CEO and Co-founder of Zerodha?", answer: "Nithin Kamath" },
    400: { question: "Who is the CEO of Nvidia?", answer: "Jensen Huang" },
    500: { question: "Who is the CEO of Twitter(now X)", answer: "Linda Yaccarino" }
  },
  letters: {
    100: { 
      question: `name = "Alice"<br>age = 25<br>     greeting = "Hello, " + name + ". You are " + str(age) + " years old."<br>print(greeting)`,
      answer: "Hello, Alice. You are 25 years old."
    },
    200: { 
      question: `def add_numbers(a, b):<br>    return a + b<br>print(add_numbers(5))`,
      answer: "Missing parameter for b"
    },
    300: { 
      question: `int x = 1;<br>switch (x) {<br>    case 1:<br>        printf("One");<br>    case 2:<br>        printf("Two");<br>}`,
      answer: "OneTwo"
    },
    400: { 
      question: `int age = 20;<br>if (age = 18) {<br>    printf("Age is 18") };<br> else {<br>    printf("Age is not 18")};<br>`,
      answer: "= is an assignment operator; == is a comparison operator"
    },
    500: { 
      question: `x = 1<br>y = 2<br>z = x if x > y else y<br>print(z)`,
      answer: "2"
    }
  },
  lines: {
    100: { question: "Which company developed the TensorFlow  library, a popular tool for machine learning and AI applications?", answer: "Google" },
    200: { question: "What programming language, named after a gem, is often used for web development and has frameworks like Rails?", answer: "Ruby" },
    300: { question: "What computational approach, involving qubits, represents a new form of computing far more powerful than classical computers?", answer: "Quantum Computing" },
    400: { question: "Which programming framework, created by Facebook, is commonly used for building mobile and web applications?", answer: "React and React Native" },
    500: { question: "Which social media platform, originally named Picaboo", answer: "Snapchat" }
  },
  social: {
    100: { question: "Finger Lickin' Good.", answer: "KFC" },
    200: { question: "Good Food, Good Life.", answer: "Nestlé" },
    300: { question: "The Taste of India", answer: "Amul" },
    400: { question: "Tyres with Muscle", answer: "MRF Tyres" },
    500: { question: "Happiest place on Earth", answer: "Disneyland" },
  }
};

const categories = ['abbreviation', 'companies', 'personalities', 'letters', 'lines', 'social'];

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('question-modal');
  const modalContent = document.querySelector('.modal-content');
  const closeBtn = document.querySelector('.close');
  const questionText = document.getElementById('question-text');
  const answerText = document.getElementById('answer-text');
  const showAnswerButton = document.getElementById('show-answer-button');

  const buttons = document.querySelectorAll('.box:not(.header)');
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (!button.classList.contains('clicked')) {
        const row = Math.floor(index / 6);
        const col = index % 6;
        const value = (row + 1) * 100;
        const category = categories[col];
        
        const questionData = questions[category][value];
        
        if (category === 'companies' || category === 'letters') {
          questionText.innerHTML = questionData.question;
        } else {
          questionText.textContent = questionData.question;
        }
        answerText.textContent = questionData.answer;
        answerText.style.display = 'none';
        
        modal.style.display = 'flex';
        button.classList.add('clicked');
      }
    });
  });


  showAnswerButton.addEventListener('click', () => {
    answerText.style.display = 'block';
  });

  
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});