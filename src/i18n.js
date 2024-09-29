import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    lng: "es",
    resources: {
      en: {
        translation: {
          Greeting: "Good Afternoon",
          BudgetTitle: "September Summary",
          ManageBudget: "Manage Budget",
          Submit: "Submit",
          AddExpense: "Add Expense",
          Category: "Category",
          PieTitle: "How's your spending?",
          PieVal1: "Groceries",
          PieVal2: "Bills & Utilities",
          PieVal3: "Subscriptions",
          PieVal4: "Gas",
          PieVal5: "Other",
          PieVal6: "Savings",
          PieFooter: "Spending Breakdown",
          investmentCorner: "investmentCorner",
          interactiveBrokersTitle: "Interactive Brokers",
          interactiveBrokersDescription:
            "Availability: Available to residents in Mexico, Brazil, and India.\nKey Features: Low fees, global market access, and sophisticated trading tools.\nMarkets: Access to U.S. and international exchanges, including stocks, options, futures, forex, and bonds.\nRegulations: IBKR adheres to local regulations in these countries.",
          charlesSchwabTitle: "Charles Schwab International",
          charlesSchwabDescription:
            "Availability: Available to residents in Mexico and Brazil, but not available to residents of India.\nKey Features: No commission on U.S. stock trades, comprehensive customer support, and educational resources.\nMarkets: Primarily U.S. market access, but with limited international exchange options.",
          saxoBankTitle: "Saxo Bank",
          saxoBankDescription:
            "Availability: Available to residents of Mexico, Brazil, and India.\nKey Features: A full-service brokerage with global access to equities, forex, and bonds.\nMarkets: Access to over 40,000 financial instruments across global markets, including stocks, options, and CFDs.",
          eToroTitle: "eToro",
          eToroDescription:
            "Availability: Available to residents in Mexico and Brazil, but not for residents of India.\nKey Features: Social trading, commission-free trading on stocks, and access to cryptocurrencies.\nMarkets: Primarily U.S. and European markets, along with crypto and commodities.",
          exanteTitle: "Exante",
          exanteDescription:
            "Availability: Available to residents of Mexico, Brazil, and India.\nKey Features: Access to multiple global exchanges, with a focus on low-cost, multi-asset trading.\nMarkets: Over 50 global exchanges, including stocks, bonds, options, and futures.",
          previous: "previous",
          learnMore: "Learn More",
          next: "Next",
          LearningCenter: "Learning Center",
          cardTitle: {
            1: "Understanding Budgeting",
            2: "Banking & Savings",
            3: "Credit Management",
            4: "Debt Management",
            5: "Financial Assistance",
            6: "Small Business",
            7: "Financial Rights & Advocacy",
            8: "Community",
          },
          cardDescription: {
            1: "Learn how to create and maintain a budget that fits your financial needs and goals. This guide will help you understand how to allocate your income effectively to balance expenses and savings.",
            2: "Discover the best strategies for managing your bank accounts and building your savings. Learn how to make your money work harder for you while minimizing unnecessary fees.",
            3: "Gain essential insights into maintaining a healthy credit score and using credit wisely. This guide covers the basics of credit cards, loans, and responsible credit usage.",
            4: "Find practical tips for handling and reducing debt while creating a sustainable financial plan. Learn about the best practices to pay down loans, credit cards, and other debts.",
            5: "Explore the various forms of financial assistance available for individuals facing economic challenges. Learn how to access government support, grants, and other financial aid options.",
            6: "Learn how to navigate the financial challenges of starting and running a small business. This resource covers the basics of funding, budgeting, and scaling your business.",
            7: "Understand your financial rights and how to advocate for them effectively. This guide helps you recognize and use the resources available to protect your financial well-being.",
            8: "Connect with local resources to enhance your financial literacy and stability. This guide provides ways to engage with community support systems and improve your financial health through shared knowledge.",
          },
        },
      },
      es: {
        translation: {
          Greeting: "Buenas Tardes",
          BudgetTitle: "Resumen de septiembre",
          ManageBudget: "Administrar presupuesto",
          Submit: "Entregar",
          AddExpense: "Agregar Gastos",
          Category: "Categoría",
          PieTitle: "¿Cómo están tus gastos?",
          PieVal1: "Comestibles",
          PieVal2: "Facturas",
          PieVal3: "Suscripción",
          PieVal4: "Gas",
          PieVal5: "Otro",
          PieVal6: "Ahorros",
          PieFooter: "Desglose del gasto",
          investmentCorner: "Rincón de inversión",
          interactiveBrokersTitle: "Interactive Brokers",
          interactiveBrokersDescription:
            "Disponibilidad: disponible para residentes en México, Brasil e India.\nCaracterísticas clave: tarifas bajas, acceso al mercado global y herramientas comerciales sofisticadas.\nMercados: acceso a bolsas estadounidenses e internacionales, incluidas acciones, opciones, futuros, divisas y bonos .\nRegulaciones: IBKR cumple con las regulaciones locales de estos países.",
          charlesSchwabTitle: "Charles Schwab International",
          charlesSchwabDescription:
            "Disponibilidad: disponible para residentes en México y Brasil, pero no disponible para residentes de India.\nCaracterísticas clave: sin comisiones en transacciones de acciones de EE. UU., atención integral al cliente y recursos educativos.\nMercados: principalmente acceso al mercado de EE. UU., pero con intercambio internacional limitado opciones",
          saxoBankTitle: "Saxo Bank",
          saxoBankDescription:
            "Disponibilidad: Disponible para residentes de México, Brasil e India.\nCaracterísticas principales: Corretaje de servicio completo con acceso global a acciones, divisas y bonos.\nMercados: Acceso a más de 40 000 instrumentos financieros en mercados globales, incluidas acciones y opciones y CFD.",
          eToroTitle: "eToro",
          eToroDescription:
            "Disponibilidad: disponible para residentes de México y Brasil, pero no para residentes de India.\nCaracterísticas clave: comercio social, comercio de acciones sin comisiones y acceso a criptomonedas.\nMercados: principalmente mercados de EE. UU. y Europa, junto con criptomonedas y materias primas .",
          exanteTitle: "Exante",
          exanteDescription:
            "Disponibilidad: disponible para residentes de México, Brasil e India.\nCaracterísticas clave: acceso a múltiples bolsas globales, con un enfoque en el comercio de activos múltiples y de bajo costo.\nMercados: más de 50 bolsas globales, incluidas acciones, bonos y opciones y futuros.",
          previous: "Previo",
          learnMore: "Más información",
          next: "Siguiente",
          LearningCenter: "Centro de aprendizaje",
          cardTitle: {
            1: "Entendiendo el presupuesto",
            2: "Banca y Ahorros",
            3: "Gestión de crédito",
            4: "Gestión de deuda",
            5: "Asistencia financiera",
            6: "Pequeñas empresas",
            7: "Derechos financieros y defensa",
            8: "Comunidad",
          },
          cardDescription: {
            1: "Aprende a crear y mantener un presupuesto que se ajuste a tus necesidades y objetivos financieros. Esta guía te ayudará a entender cómo asignar tus ingresos de manera efectiva para equilibrar gastos y ahorros.",
            2: "Descubre las mejores estrategias para gestionar tus cuentas bancarias y aumentar tus ahorros. Aprende cómo hacer que tu dinero trabaje más para ti mientras minimizas tarifas innecesarias.",
            3: "Obtén información esencial para mantener una buena calificación crediticia y usar el crédito de manera responsable. Esta guía cubre los conceptos básicos de tarjetas de crédito, préstamos y el uso responsable del crédito.",
            4: "Encuentra consejos prácticos para manejar y reducir deudas mientras creas un plan financiero sostenible. Aprende las mejores prácticas para pagar préstamos, tarjetas de crédito y otras deudas.",
            5: "Explora las diversas formas de asistencia financiera disponibles para personas con dificultades económicas. Aprende a acceder a apoyos gubernamentales, subvenciones y otras opciones de ayuda financiera.",
            6: "Aprende a enfrentar los desafíos financieros de iniciar y administrar un pequeño negocio. Este recurso cubre los conceptos básicos de financiamiento, presupuesto y crecimiento empresarial.",
            7: "Comprende tus derechos financieros y cómo abogar por ellos de manera efectiva. Esta guía te ayudará a reconocer y utilizar los recursos disponibles para proteger tu bienestar financiero.",
            8: "Conéctate con recursos locales para mejorar tu estabilidad y educación financiera. Esta guía ofrece maneras de involucrarse con sistemas de apoyo comunitario para mejorar tu salud financiera mediante el conocimiento compartido."
          },
        },
      },
      pt: {
        translation: {
          Greeting: "Boa Tarde",
          BudgetTitle: "Resumo de setembro",
          ManageBudget: "Gerenciar orçamento",
          Submit: "Enviar",
          AddExpense: "Adicionar Despesa",
          Category: "Categoria",
          PieTitle: "Como estão seus gastos?",
          PieVal1: "Alimentos",
          PieVal2: "Contas",
          PieVal3: "Assinatura",
          PieVal4: "Combustível",
          PieVal5: "Outros",
          PieVal6: "Poupança",
          PieFooter: "Despesas detalhadas",
          investmentCorner: "Canto de Investimento",
          interactiveBrokersTitle: "Interactive Brokers",
          interactiveBrokersDescription:
            "Disponibilidade: disponível para residentes no México, Brasil e Índia.\nPrincipais Características: baixas taxas, acesso ao mercado global e ferramentas de negociação sofisticadas.\nMercados: acesso a bolsas dos EUA e internacionais, incluindo ações, opções, futuros, câmbio e títulos.\nRegulamentação: IBKR segue regulamentações locais nesses países.",
          charlesSchwabTitle: "Charles Schwab International",
          charlesSchwabDescription:
            "Disponibilidade: disponível para residentes no México e Brasil, mas não disponível para residentes na Índia.\nPrincipais Características: sem comissão em transações de ações nos EUA, suporte abrangente ao cliente e recursos educacionais.\nMercados: acesso principalmente ao mercado dos EUA, com opções limitadas de bolsas internacionais.",
          saxoBankTitle: "Saxo Bank",
          saxoBankDescription:
            "Disponibilidade: disponível para residentes do México, Brasil e Índia.\nPrincipais Características: corretora completa com acesso global a ações, câmbio e títulos.\nMercados: acesso a mais de 40.000 instrumentos financeiros em mercados globais, incluindo ações, opções e CFDs.",
          eToroTitle: "eToro",
          eToroDescription:
            "Disponibilidade: disponível para residentes no México e Brasil, mas não para residentes da Índia.\nPrincipais Características: negociação social, negociação de ações sem comissão e acesso a criptomoedas.\nMercados: principalmente mercados dos EUA e Europa, junto com criptomoedas e commodities.",
          exanteTitle: "Exante",
          exanteDescription:
            "Disponibilidade: disponível para residentes no México, Brasil e Índia.\nPrincipais Características: acesso a várias bolsas globais, com foco em negociação multiativos e de baixo custo.\nMercados: mais de 50 bolsas globais, incluindo ações, títulos, opções e futuros.",
          previous: "Anterior",
          learnMore: "Saiba mais",
          next: "Próximo",
          LearningCenter: "Centro de Aprendizado",
          cardTitle: {
            1: "Entendendo o Orçamento",
            2: "Bancos e Poupança",
            3: "Gestão de Crédito",
            4: "Gestão de Dívidas",
            5: "Assistência Financeira",
            6: "Pequenas Empresas",
            7: "Direitos e Defesa Financeira",
            8: "Comunidade",
          },
          cardDescription: {
            1: "Aprenda a criar e manter um orçamento que se adapte às suas necessidades e objetivos financeiros. Este guia ajudará você a entender como alocar sua renda de forma eficaz para equilibrar despesas e poupança.",
            2: "Descubra as melhores estratégias para gerenciar suas contas bancárias e aumentar suas economias. Aprenda a fazer seu dinheiro trabalhar mais para você, minimizando taxas desnecessárias.",
            3: "Obtenha insights essenciais sobre como manter uma boa pontuação de crédito e usar o crédito de forma responsável. Este guia cobre os fundamentos dos cartões de crédito, empréstimos e uso responsável do crédito.",
            4: "Encontre dicas práticas para lidar com dívidas e reduzi-las enquanto cria um plano financeiro sustentável. Aprenda as melhores práticas para pagar empréstimos, cartões de crédito e outras dívidas.",
            5: "Explore as diversas formas de assistência financeira disponíveis para indivíduos enfrentando dificuldades econômicas. Aprenda como acessar suporte governamental, subsídios e outras opções de ajuda financeira.",
            6: "Aprenda a enfrentar os desafios financeiros de iniciar e administrar um pequeno negócio. Este recurso cobre o básico de financiamento, orçamento e crescimento do seu negócio.",
            7: "Compreenda seus direitos financeiros e como defendê-los de maneira eficaz. Este guia ajuda você a reconhecer e usar os recursos disponíveis para proteger seu bem-estar financeiro.",
            8: "Conecte-se com recursos locais para melhorar sua estabilidade financeira e aprendizado. Este guia oferece formas de se envolver com sistemas de apoio comunitário e melhorar sua saúde financeira por meio do conhecimento compartilhado."
          },
        },
      },
      hi: {
        translation: {
          Greeting: "नमस्कार",
          BudgetTitle: "सितंबर का सारांश",
          ManageBudget: "बजट प्रबंधित करें",
          Submit: "जमा करें",
          AddExpense: "व्यय जोड़ें",
          Category: "श्रेणी",
          PieTitle: "आपके खर्चे कैसे हैं?",
          PieVal1: "किराना",
          PieVal2: "बिल",
          PieVal3: "सदस्यता",
          PieVal4: "ईंधन",
          PieVal5: "अन्य",
          PieVal6: "बचत",
          PieFooter: "खर्चों का विवरण",
          investmentCorner: "निवेश का कोना",
          interactiveBrokersTitle: "इंटरएक्टिव ब्रोकर्स",
          interactiveBrokersDescription:
            "उपलब्धता: मेक्सिको, ब्राज़ील और भारत के निवासियों के लिए उपलब्ध।\nमुख्य विशेषताएं: कम शुल्क, वैश्विक बाजार तक पहुंच और उन्नत व्यापारिक उपकरण।\nबाजार: अमेरिकी और अंतरराष्ट्रीय एक्सचेंजों तक पहुंच, जिसमें स्टॉक्स, विकल्प, वायदा, विदेशी मुद्रा और बांड शामिल हैं।\nविनियम: IBKR इन देशों में स्थानीय नियमों का पालन करता है।",
          charlesSchwabTitle: "चार्ल्स श्वाब इंटरनेशनल",
          charlesSchwabDescription:
            "उपलब्धता: मेक्सिको और ब्राज़ील के निवासियों के लिए उपलब्ध, लेकिन भारत के निवासियों के लिए उपलब्ध नहीं।\nमुख्य विशेषताएं: अमेरिकी स्टॉक ट्रेडों पर कोई कमीशन नहीं, व्यापक ग्राहक समर्थन और शैक्षिक संसाधन।\nबाजार: मुख्य रूप से अमेरिकी बाजार तक पहुंच, लेकिन सीमित अंतरराष्ट्रीय एक्सचेंज विकल्प।",
          saxoBankTitle: "सैक्सो बैंक",
          saxoBankDescription:
            "उपलब्धता: मेक्सिको, ब्राज़ील और भारत के निवासियों के लिए उपलब्ध।\nमुख्य विशेषताएं: वैश्विक पहुंच के साथ एक पूर्ण-सेवा ब्रोकरेज, जिसमें इक्विटी, विदेशी मुद्रा और बांड शामिल हैं।\nबाजार: वैश्विक बाजारों में 40,000 से अधिक वित्तीय साधनों तक पहुंच, जिसमें स्टॉक्स, विकल्प और CFDs शामिल हैं।",
          eToroTitle: "eToro",
          eToroDescription:
            "उपलब्धता: मेक्सिको और ब्राज़ील के निवासियों के लिए उपलब्ध, लेकिन भारत के निवासियों के लिए नहीं।\nमुख्य विशेषताएं: सोशल ट्रेडिंग, स्टॉक्स पर बिना कमीशन के ट्रेडिंग और क्रिप्टोकरेंसी तक पहुंच।\nबाजार: मुख्य रूप से अमेरिकी और यूरोपीय बाजार, साथ ही क्रिप्टो और कमोडिटीज।",
          exanteTitle: "एक्सांटे",
          exanteDescription:
            "उपलब्धता: मेक्सिको, ब्राज़ील और भारत के निवासियों के लिए उपलब्ध।\nमुख्य विशेषताएं: कई वैश्विक एक्सचेंजों तक पहुंच, बहु-एसेट ट्रेडिंग पर कम लागत पर ध्यान केंद्रित।\nबाजार: 50 से अधिक वैश्विक एक्सचेंजों तक पहुंच, जिसमें स्टॉक्स, बांड, विकल्प और वायदा शामिल हैं।",
          previous: "पिछला",
          learnMore: "अधिक जानें",
          next: "अगला",
          LearningCenter: "सीखने का केंद्र",
          cardTitle: {
            1: "बजट को समझना",
            2: "बैंकिंग और बचत",
            3: "क्रेडिट प्रबंधन",
            4: "ऋण प्रबंधन",
            5: "वित्तीय सहायता",
            6: "छोटे व्यवसाय",
            7: "वित्तीय अधिकार और वकालत",
            8: "समुदाय",
          },
          cardDescription: {
            1: "अपने वित्तीय आवश्यकताओं और लक्ष्यों के अनुसार एक बजट बनाने और उसे बनाए रखने का तरीका जानें। यह गाइड आपको अपनी आय को प्रभावी ढंग से खर्च और बचत के बीच संतुलित करने में मदद करेगा।",
            2: "अपनी बैंक खाताओं को प्रबंधित करने और बचत बढ़ाने के सर्वोत्तम तरीकों की खोज करें। अनावश्यक शुल्कों को कम करते हुए अपने पैसे को अधिक कुशलता से कैसे काम करें, यह जानें।",
            3: "एक स्वस्थ क्रेडिट स्कोर बनाए रखने और क्रेडिट का समझदारी से उपयोग करने के लिए आवश्यक जानकारी प्राप्त करें। यह गाइड क्रेडिट कार्ड, ऋण और जिम्मेदार क्रेडिट उपयोग के मूल सिद्धांतों को कवर करता है।",
            4: "ऋण का प्रबंधन और उसे कम करने के लिए व्यावहारिक सुझाव प्राप्त करें और एक टिकाऊ वित्तीय योजना बनाएं। ऋण, क्रेडिट कार्ड और अन्य कर्ज चुकाने के सर्वोत्तम तरीकों के बारे में जानें।",
            5: "आर्थिक चुनौतियों का सामना कर रहे व्यक्तियों के लिए उपलब्ध विभिन्न वित्तीय सहायता के रूपों का अन्वेषण करें। सरकारी सहायता, अनुदान और अन्य वित्तीय सहायता विकल्पों तक कैसे पहुंचें, यह जानें।",
            6: "छोटा व्यवसाय शुरू करने और चलाने की वित्तीय चुनौतियों का सामना करने का तरीका जानें। यह संसाधन वित्तपोषण, बजट और आपके व्यवसाय के विस्तार के मूल सिद्धांतों को कवर करता है।",
            7: "अपने वित्तीय अधिकारों को समझें और उनका प्रभावी ढंग से समर्थन कैसे करें। यह गाइड आपको अपने वित्तीय कल्याण की रक्षा के लिए उपलब्ध संसाधनों को पहचानने और उपयोग करने में मदद करता है।",
            8: "स्थानीय संसाधनों से जुड़ें ताकि अपनी वित्तीय साक्षरता और स्थिरता में सुधार कर सकें। यह गाइड आपको सामुदायिक सहायता प्रणालियों से जुड़ने और साझा ज्ञान के माध्यम से अपने वित्तीय स्वास्थ्य में सुधार करने के तरीके प्रदान करता है।"
          },
        },
      },
    },
    lng: "en", // default language
    fallbackLng: "en", // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
