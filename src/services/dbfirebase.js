import { initializeApp} from "firebase/app";
import { getFirestore, collection , getDocs, doc, getDoc, query, where, addDoc} from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyD245Tipy-o9BZHZ9VWWXFB86F4orisYS4",
  authDomain: "myproyectgz.firebaseapp.com",
  projectId: "myproyectgz",
  storageBucket: "myproyectgz.appspot.com",
  messagingSenderId: "755975423333",
  appId: "1:755975423333:web:a72a514e1e90f588e94d8c"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
/*--------------- Funcion Refrencia Porductos -----------------*/
  export async function getItems_() {
    const productosRef = collection (db, "productos"); 
    const productosSnap = await getDocs(productosRef);
    const documents = productosSnap.docs;
    return  documents.map((doc) => {
      return { 
        id: doc.id, ...doc.data() };
      });
}
/* ------------ Funcion VerDatalle de un solo Item -------- */
  export async function VerDetalle(idURL) {
    const docRef = doc(db, "productos", idURL);
    const docSnap = await getDoc(docRef);
    return { id: docSnap.id, ...docSnap.data() };
}
/* ------------ Funcion Ver Items Por Categorias (Nav) -------- */
  export async function getItemsPorCategoria(categoriaid){
    const productosRef = collection (db, "productos");
    const q = query (productosRef, where("categoria", "==", categoriaid));
    const productosSnap = await getDocs(q);
    const documents = productosSnap.docs;
    const docsData = documents.map((doc) => {
  return { id: doc.id, ...doc.data() };
  })
return docsData ;
}  
export async function createOrden(orden) {
  const collectionOrdenRef = collection (db, "ordenes");
  const response = await addDoc(collectionOrdenRef, orden);
  return response.id
}