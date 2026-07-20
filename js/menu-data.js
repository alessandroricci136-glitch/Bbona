// menu-data.js - legge/scrive su Firestore, fallback su dati default

import { db } from "./firebase-config.js";
import {
  collection, doc, getDoc, setDoc, getDocs, writeBatch
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { BBONA_DEFAULT_MENU } from "./default-menu.js";

export { BBONA_DEFAULT_MENU };

// ─── Leggi menu da Firestore ───
export async function woodGetMenu() {
  try {
    const snap = await getDoc(doc(db, "config", "menu_order"));
    if (!snap.exists()) return BBONA_DEFAULT_MENU;

    const order = snap.data().order || [];
    const menu = [];

    for (const catId of order) {
      const catSnap = await getDoc(doc(db, "menu", catId));
      if (catSnap.exists()) {
        menu.push({ id: catId, ...catSnap.data() });
      }
    }
    return menu.length > 0 ? menu : BBONA_DEFAULT_MENU;
  } catch (e) {
    console.warn("Firestore non raggiungibile, uso dati default:", e);
    return BBONA_DEFAULT_MENU;
  }
}

// ─── Salva menu su Firestore ───
export async function bbonaSaveMenu(menuData) {
  const batch = writeBatch(db);

  // Salva ogni categoria come documento separato
  for (const cat of menuData) {
    const ref = doc(db, "menu", cat.id);
    batch.set(ref, { title: cat.title, title_en: cat.title_en || cat.title, items: cat.items });
  }

  // Salva l'ordine delle categorie
  const orderRef = doc(db, "config", "menu_order");
  batch.set(orderRef, { order: menuData.map(c => c.id) });

  await batch.commit();
}

// ─── Carica menu iniziale (usa solo una volta dall'admin) ───
export async function woodSetupInitialMenu() {
  await bbonaSaveMenu(BBONA_DEFAULT_MENU);
}
