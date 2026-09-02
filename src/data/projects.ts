/**
 * Individual reference projects, shown as cards on the references page.
 *
 * Each card is just a photo and its sector - no location or year (Daniel
 * doesn't want that level of detail tracked here).
 *
 * SELECTION CRITERION: the wall system, and nothing else. Floors, roof
 * structures and fittings are irrelevant here, so wide hall views that happen
 * to look impressive are not used - every frame below has the protective wall
 * as its subject.
 *
 * The twelve cover the five systems in the library, plus the integrations that
 * are hardest to execute and therefore worth showing:
 *
 *   yellow horizontal slat ...... 09, 18, 26
 *   pale timber vertical ........ 13, 25
 *   pale timber horizontal ...... 05, 16, 17
 *   brown / tan panel ........... 43, 46, 47
 *   white smooth panel .......... 06
 *
 *   window reveals (Laibungen) .. 13, 25, 05
 *   integrated doors ............ 09
 *   integrated wall bars ........ 46
 *
 * Nothing here repeats an image used elsewhere: the hero uses sports-halls-28
 * and the home page sector card uses sports-halls-07.
 */

export interface Project {
  id: string;
  /** Matches a sector id in src/i18n/*.ts references.sectors and site.activeSectors. */
  sectorId: 'sports-halls' | 'hotels' | 'timber-houses';
  /** Path under /public/images/, e.g. "/images/library/sports-halls/sports-halls-13.jpg". */
  image: string;
}

/** Keeps the long library paths readable below. */
const hall = (n: string) => `/images/library/sports-halls/sports-halls-${n}.jpg`;
const hotel = (n: string) => `/images/library/hotels/hotels-${n}.jpg`;

export const projects: Project[] = [
  { id: 'sh-1', sectorId: 'sports-halls', image: hall('13') },
  { id: 'sh-2', sectorId: 'sports-halls', image: hall('25') },
  { id: 'sh-3', sectorId: 'sports-halls', image: hall('09') },
  { id: 'sh-4', sectorId: 'sports-halls', image: hall('18') },
  { id: 'sh-5', sectorId: 'sports-halls', image: hall('26') },
  { id: 'sh-6', sectorId: 'sports-halls', image: hall('16') },
  { id: 'sh-7', sectorId: 'sports-halls', image: hall('17') },
  { id: 'sh-8', sectorId: 'sports-halls', image: hall('05') },
  { id: 'sh-9', sectorId: 'sports-halls', image: hall('46') },
  { id: 'sh-10', sectorId: 'sports-halls', image: hall('43') },
  { id: 'sh-11', sectorId: 'sports-halls', image: hall('47') },
  { id: 'sh-12', sectorId: 'sports-halls', image: hall('06') },

  { id: 'ho-1', sectorId: 'hotels', image: hotel('01') },
  { id: 'ho-2', sectorId: 'hotels', image: hotel('04') },
];

export function getProjectsForSector(sectorId: Project['sectorId']): Project[] {
  return projects.filter((project) => project.sectorId === sectorId);
}
