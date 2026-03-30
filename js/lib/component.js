/**
 * Fungsi ini berfungsi memanggil file html menggunakan fetch lalu diparser terus di clone elemen elemennya dan memasukkannya ke dalam div dari parameter yg disediakan, orang orang menyebutnya komponen mwehehe.
 * @param {string} nameComponent
 * @param {Element} div
 * @param {(el: Element) => void} callback
 */
export async function callComponent(nameComponent, div, callback) {
  const res = await fetch(`/components/${nameComponent}.html`);
  const htmlRes = await res.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlRes, "text/html");
  const template = doc.querySelector("template");
  if (template) {
    if (!div) {
      throw new Error(`Div ga ada`);
    }
    const clone = template.content.cloneNode(true);
    const scripts = doc.querySelectorAll("script");
    scripts.forEach((el) => {
      if (el.textContent.includes("<!CDATA[")) return;
      const myNewScript = document.createElement("script");
      myNewScript.textContent = el.textContent;
      document.body.appendChild(myNewScript);
      el.remove();
    });
    div.appendChild(clone);
    console.log(`${nameComponent} mounted`);
    if (callback && typeof callback === "function") {
      callback(div);
    }
  }
}

/**
 *
 * @param {string} path
 */
export async function fetchHtml(path) {
  try {
    const res = await fetch(`/components/${path}.html`);
    const htmlRes = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlRes, "text/html");
    return doc;
  } catch (e) {
    console.error(e);
    return null;
  }
}
