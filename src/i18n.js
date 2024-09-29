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
            1: "Understanding budgeting in detail...",
            2: "Insights into banking and savings strategies...",
            3: "Learn more about managing your credit effectively...",
            4: "Tips and tricks to manage your debt efficiently...",
            5: "Information on how to get financial assistance...",
            6: "Resources for managing small business finances...",
            7: "Learn about your financial rights and advocacy...",
            8: "Connecting with the financial community...",
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
            1: "Entendiendo el presupuesto en detalle...",
            2: "Información sobre estrategias bancarias y de ahorro...",
            3: "Obtenga más información sobre cómo administrar su crédito de manera eficiente...",
            4: "Consejos y trucos para gestionar tu deuda de manera eficiente...",
            5: "Información sobre cómo obtener asistencia financiera...",
            6: "Recursos para gestionar las finanzas de las pequeñas empresas...",
            7: "Conozca más sobre sus derechos financieros y su defensa...",
            8: "Conectando con la comunidad financiera...",
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
            1: "Entendendo o orçamento em detalhes...",
            2: "Informações sobre estratégias de bancos e poupança...",
            3: "Saiba mais sobre como gerenciar seu crédito de maneira eficiente...",
            4: "Dicas e truques para gerenciar suas dívidas com eficiência...",
            5: "Informações sobre como obter assistência financeira...",
            6: "Recursos para gerenciar as finanças de pequenas empresas...",
            7: "Conheça seus direitos financeiros e como defendê-los...",
            8: "Conectando-se com a comunidade financeira...",
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
            1: "बजट को विस्तार से समझें...",
            2: "बैंकिंग और बचत रणनीतियों की जानकारी...",
            3: "अपने क्रेडिट को प्रभावी ढंग से प्रबंधित करने के बारे में और जानें...",
            4: "अपनी ऋण को प्रभावी ढंग से प्रबंधित करने के लिए टिप्स और ट्रिक्स...",
            5: "वित्तीय सहायता प्राप्त करने के बारे में जानकारी...",
            6: "छोटे व्यवसाय की वित्तीय प्रबंधन के लिए संसाधन...",
            7: "अपने वित्तीय अधिकारों और वकालत के बारे में जानें...",
            8: "वित्तीय समुदाय से जुड़ें...",
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
