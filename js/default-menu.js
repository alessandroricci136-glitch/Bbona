// Menu BBONA condiviso da sito e area riservata.
const cat = (id, title, title_en, items) => ({ id, title, title_en, items });
export const englishFallback = (text = "") => {
  const exact = {
    "Affettato misto": "Mixed cured meats", "Bufala e prosciutto": "Buffalo mozzarella and cured ham",
    "Rossa": "Tomato base", "Marinara": "Marinara", "Margherita": "Margherita", "Würstel": "Würstel",
    "Amatriciana": "Amatriciana", "Napoli": "Napoli", "Funghi": "Mushrooms", "Salsiccia": "Sausage",
    "Diavola": "Diavola", "Capricciosa": "Capricciosa", "Funghi & salsiccia": "Mushrooms & sausage",
    "Salsiccia & peperoni": "Sausage & peppers", "Quattro formaggi": "Four cheeses",
    "Fiori & alici": "Courgette flowers & anchovies", "Speck & gorgonzola": "Speck & gorgonzola",
    "Parmigiana": "Aubergine parmigiana", "Patate & salsiccia": "Potatoes & sausage",
    "Porcini": "Porcini mushrooms", "Tonno & cipolla": "Tuna & onion", "Bianca": "Plain focaccia",
    "Funghi & crudo": "Mushrooms & cured ham", "Contadina": "Country-style focaccia",
    "Mortadella & tartufo": "Mortadella & truffle", "Porcini & salsiccia": "Porcini & sausage",
    "Bevande e vini": "Drinks & wines", "Dessert & torte": "Desserts & cakes"
  };
  if (exact[text]) return exact[text];
  return text
    .replaceAll("Salumi misti", "Mixed cured meats").replaceAll("salumi misti", "mixed cured meats")
    .replaceAll("Mozzarella di bufala", "Buffalo mozzarella")
    .replaceAll("mozzarella di bufala", "buffalo mozzarella")
    .replaceAll("Fiordilatte", "Fior di latte")
    .replaceAll("fiordilatte", "fior di latte")
    .replaceAll("Pomodoro", "Tomato").replaceAll("pomodoro", "tomato")
    .replaceAll("Funghi champignon", "Champignon mushrooms").replaceAll("funghi champignon", "champignon mushrooms")
    .replaceAll("funghi porcini trifolati", "sautéed porcini mushrooms")
    .replaceAll("Prosciutto crudo", "Cured ham").replaceAll("prosciutto crudo", "cured ham")
    .replaceAll("Salsiccia", "Sausage").replaceAll("salsiccia", "sausage")
    .replaceAll("Peperoni", "Peppers").replaceAll("peperoni", "peppers")
    .replaceAll("Melanzane", "Aubergines").replaceAll("melanzane", "aubergines")
    .replaceAll("Zucchine", "Zucchini").replaceAll("zucchine", "zucchini")
    .replaceAll("Patate", "Potatoes").replaceAll("patate", "potatoes")
    .replaceAll("Alici", "Anchovies").replaceAll("alici", "anchovies")
    .replaceAll("Cipolla", "Onion").replaceAll("cipolla", "onion")
    .replaceAll("Basilico fresco", "Fresh basil").replaceAll("basilico fresco", "fresh basil")
    .replaceAll("Olio EVO", "EVO oil").replaceAll("olio EVO", "EVO oil")
    .replaceAll("Sale e pepe", "Salt and pepper").replaceAll("sale e pepe", "salt and pepper")
    .replaceAll("e sale", "and salt").replaceAll("servito con", "served with").replaceAll("servita con", "served with")
    .replaceAll("Verdure grigliate", "Grilled vegetables").replaceAll("verdure grigliate", "grilled vegetables")
    .replaceAll(" intera", " whole").replaceAll(" misti", " mixed").replaceAll(" miste", " mixed")
    .replaceAll("Carciofini", "artichokes").replaceAll("carciofini", "artichokes")
    .replaceAll("Olive", "olives").replaceAll("olive", "olives")
    .replaceAll(" con ", " with ").replaceAll(" e ", " and ")
    .replaceAll("pecorino", "pecorino cheese");
};
const item = (name, price, desc = "", name_en = name, desc_en = desc, tag = "") => ({
  name, price, desc,
  name_en: name_en === name ? englishFallback(name) : name_en,
  desc_en: desc_en === desc ? englishFallback(desc) : desc_en,
  tag
});

export const BBONA_DEFAULT_MENU = [
  cat("antipasti", "Antipasti", "Starters", [
    item("Affettato misto", "13 €", "Salumi misti, carciofini, olive e pecorino, servito con ½ focaccia."),
    item("Bufala e prosciutto", "16 €", "Mozzarella di bufala intera con prosciutto crudo, servita con ½ focaccia."),
    item("Verdure grigliate", "13 €", "Verdure grigliate miste, servite con ½ focaccia.", "Grilled vegetables", "Mixed grilled vegetables, served with ½ focaccia.", "Vegetariano"),
    item("Bufala e verdure grigliate", "16 €", "Mozzarella di bufala intera con verdure grigliate, servite con ½ focaccia.", "Buffalo mozzarella and grilled vegetables", "Whole buffalo mozzarella with grilled vegetables, served with ½ focaccia.", "Vegetariano")
  ]),
  cat("pizze", "Le nostre pizze", "Our Pizzas", [
    item("Rossa", "9 €", "Pomodoro, olio EVO e sale.", "Rossa", "Tomato, EVO oil and salt.", "Vegano"),
    item("Marinara", "9 €", "Pomodoro, aglio, origano, olio EVO, sale e pepe.", "Marinara", "Tomato, garlic, oregano, EVO oil, salt and pepper.", "Vegano"),
    item("Margherita", "9,50 €", "Pomodoro, fiordilatte, olio EVO e sale.", "Margherita", "Tomato, fior di latte, EVO oil and salt.", "Vegetariano"),
    item("Würstel", "10 €", "Pomodoro, fiordilatte, würstel, olio EVO e sale."),
    item("Amatriciana", "11 €", "Pomodoro, guanciale, pecorino, olio EVO, sale e pepe."),
    item("Napoli", "11 €", "Pomodoro, fiordilatte, alici, olio EVO e sale."),
    item("Funghi", "11 €", "Pomodoro, fiordilatte, funghi champignon, olio EVO, sale e pepe.", "Mushrooms", "Tomato, fior di latte, champignon mushrooms, EVO oil, salt and pepper.", "Vegetariano"),
    item("Salsiccia", "11 €", "Pomodoro, fiordilatte, salsiccia, olio EVO, sale e pepe."),
    item("Diavola", "12 €", "Pomodoro, fiordilatte, salame piccante, olio EVO e sale.", "Diavola", "Tomato, fior di latte, spicy salami, EVO oil and salt.", "Piccante"),
    item("Capricciosa", "12 €", "Pomodoro, fiordilatte, funghi, prosciutto crudo, carciofini, uovo sodo, olive, olio EVO, sale e pepe."),
    item("Funghi & salsiccia", "12 €", "Pomodoro, fiordilatte, funghi champignon, salsiccia, prezzemolo fresco, olio EVO, sale e pepe."),
    item("Zucchine, menta & limone", "12 €", "Fiordilatte, zucchine fresche, menta, zest di limone, olio EVO, sale e pepe.", "Zucchini, mint & lemon", "Fior di latte, fresh zucchini, mint, lemon zest, EVO oil, salt and pepper.", "Vegetariano"),
    item("Ortolana", "12 €", "Fiordilatte, zucchine, peperoni e melanzane grigliate, pomodoro fresco scottato, funghi, olio EVO, sale e pepe.", "Vegetable pizza", "Fior di latte, grilled vegetables, seared fresh tomato, mushrooms, EVO oil, salt and pepper.", "Vegetariano"),
    item("Salsiccia & peperoni", "12 €", "Pomodoro, fiordilatte, salsiccia, peperoni arrosto, olio EVO, sale e pepe."),
    item("Quattro formaggi", "12 €", "Fiordilatte, parmigiano, gorgonzola, pecorino, olio EVO, sale e pepe.", "Four cheeses", "Fior di latte, Parmigiano, gorgonzola, pecorino, EVO oil, salt and pepper.", "Vegetariano"),
    item("BBufaletta", "13 €", "Pomodoro, mozzarella di bufala, basilico fresco, olio EVO e sale.", "BBufaletta", "Tomato, buffalo mozzarella, fresh basil, EVO oil and salt.", "Signature"),
    item("Fiori & alici", "14 €", "Fiordilatte, fiori di zucca, alici, zucchine fresche, pecorino, sale e pepe (stagionale).", "Courgette flowers & anchovies", "Fior di latte, courgette flowers, anchovies, fresh zucchini, pecorino, salt and pepper.", "Stagionale"),
    item("Speck & gorgonzola", "13 €", "Fiordilatte, speck, gorgonzola, olio EVO, sale e pepe."),
    item("Parmigiana", "13 €", "Pomodoro, fiordilatte, basilico fresco, melanzane, parmigiano, olio EVO e sale."),
    item("Patate & salsiccia", "13 €", "Fiordilatte, patate, salsiccia, rosmarino, olio EVO, sale e pepe.", "Potatoes & sausage", "Fior di latte, potatoes, sausage, rosemary, EVO oil, salt and pepper.", "Consigliata"),
    item("Porcini", "13 €", "Fiordilatte, funghi porcini trifolati, olio EVO, sale e pepe."),
    item("Tonno & cipolla", "13 €", "Fiordilatte, tonno sott’olio, cipolla, olio EVO, sale e pepe."),
    item("Romanella", "13 €", "Fiordilatte, zucchine grigliate, patate al forno e pesto di basilico senza aglio.", "Romanella", "Fior di latte, grilled zucchini, baked potatoes and garlic-free basil pesto.", "Signature")
  ]),
  cat("focacce", "Le focacce", "Focaccias", [
    item("Bianca", "8 €", "Olio EVO, rosmarino e sale.", "Plain focaccia", "EVO oil, rosemary and salt.", "Vegano"),
    item("Patate & salsiccia", "13 €", "Fiordilatte, patate, salsiccia, rosmarino, olio EVO, sale e pepe."),
    item("Funghi & crudo", "13 €", "Fiordilatte, funghi champignon, prosciutto crudo, olio EVO, sale e pepe."),
    item("Contadina", "13 €", "Fiordilatte, zucchine, peperoni e melanzane grigliate, pomodoro fresco scottato, funghi champignon, olio EVO e sale."),
    item("BBufala & fior di pomodoro", "13 €", "Mozzarella di bufala a crudo, pomodoro fresco scottato, basilico fresco, olio EVO, sale e pepe.", "Buffalo mozzarella & tomato flower", "Raw buffalo mozzarella, seared fresh tomato, basil, EVO oil, salt and pepper.", "Signature"),
    item("BBurrata, alici & limone", "14 €", "Burrata, alici, zest di limone, olio EVO, sale e pepe."),
    item("Mortadella & tartufo", "15 €", "Fiordilatte, mortadella, salsa tartufata, olio EVO, sale e pepe."),
    item("Porcini & salsiccia", "15 €", "Fiordilatte, porcini trifolati, salsiccia, prezzemolo fresco, olio EVO, sale e pepe.")
  ]),
  cat("bevande", "Bevande e vini", "Drinks & Wines", [
    item("Coca-Cola / Fanta lattina 33 cl", "4 €"),
    item("Birra analcolica 33 cl", "5 €", "Moretti Zero."),
    item("Birra chiara bottiglia 66 cl", "6 €", "Birra 4,7% vol."),
    item("Montepulciano d’Abruzzo DOC Bio", "20 €", "Ca’Natura, bottiglia 75 cl."),
    item("Cerasuolo d’Abruzzo DOC Bio", "20 €", "Ca’Natura, bottiglia 75 cl."),
    item("Pecorino IGT Terre di Chieti", "20 €", "Ca’Natura, bottiglia 75 cl.")
  ]),
  cat("dessert", "Dessert & torte", "Desserts & Cakes", [
    item("Torta raggio di sole", "6 €", "Frolla al burro e farina integrale, salsa al mandarino tardivo di Ciaculli, crema pasticcera e mandorle tostate — Accademia Niko Romito.")
  ])
];
