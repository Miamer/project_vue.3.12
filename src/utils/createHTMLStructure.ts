import { DATAREF } from '@/shared/constante.ts';

/**
 * Fonction pour générer une structure HTML à partir d'une donnée JSON.
 * @param data - Les données JSON à transformer en structure HTML.
 * @param parent - L'élément parent dans lequel le contenu HTML sera inséré.
 * @param path - Le chemin actuel dans la hiérarchie JSON (utilisé pour créer des références uniques).
 */
export function createHTMLStructure(
  data: unknown,
  parent: HTMLElement,
  path: string[] = [],
): void {
  if (typeof data === 'object' && data !== null && !Array.isArray(data)) {

    Object.entries(data).forEach(([key, value]) => {
      const refPath = [...path, key].join('_');
      const div = document.createElement('div');
      div.className = key;
      div.setAttribute(DATAREF, refPath);
      div.textContent = `${key}:`;
      parent.appendChild(div);
      createHTMLStructure(value, div, [...path, key]);
    });
  } else if (Array.isArray(data)) {

    const ul = document.createElement('ul');
    parent.appendChild(ul);
    data.forEach((item, index) => {
      const refPath = [...path, index.toString()].join('_');
      const li = document.createElement('li');
      li.setAttribute(DATAREF, refPath);
      ul.appendChild(li);
      createHTMLStructure(item, li, [...path, index.toString()]);
    });
  } else {

    const refPath = path.join('_');
    const span = document.createElement('span');
    span.textContent = ` ${String(data)}`;
    span.setAttribute(DATAREF, refPath);
    parent.appendChild(span);
  }
}
