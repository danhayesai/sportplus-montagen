/**
 * Individual reference projects, shown as cards on the references page.
 *
 * Each card is just a photo and its sector - no location or year (Daniel
 * doesn't want that level of detail tracked here).
 *
 * The sports-hall entries are chosen for variety rather than volume: the
 * library holds 47 photographs, but many are the same hall re-shot from a
 * different corner, which reads as padding. These twelve are twelve different
 * buildings, spanning yellow and timber wall systems, blue and grey floors,
 * timber-truss and steel roofs, and fittings from basketball hoops to handball
 * goals and wall bars.
 *
 * Nothing here repeats an image used elsewhere on the site: the hero uses
 * sports-halls-35 and the home page sector card uses sports-halls-16, so
 * neither appears in this gallery.
 */

export interface Project {
  id: string;
  /** Matches a sector id in src/i18n/*.ts references.sectors and site.activeSectors. */
  sectorId: 'sports-halls' | 'hotels' | 'timber-houses';
  /** Path under /public/images/, e.g. "/images/library/sports-halls/sports-halls-08.jpg". */
  image: string;
}

/** Keeps the long library paths readable below. */
const hall = (n: string) => `/images/library/sports-halls/sports-halls-${n}.jpg`;
const hotel = (n: string) => `/images/library/hotels/hotels-${n}.jpg`;

export const projects: Project[] = [
  { id: 'sh-1', sectorId: 'sports-halls', image: hall('08') },
  { id: 'sh-2', sectorId: 'sports-halls', image: hall('09') },
  { id: 'sh-3', sectorId: 'sports-halls', image: hall('11') },
  { id: 'sh-4', sectorId: 'sports-halls', image: hall('13') },
  { id: 'sh-5', sectorId: 'sports-halls', image: hall('17') },
  { id: 'sh-6', sectorId: 'sports-halls', image: hall('18') },
  { id: 'sh-7', sectorId: 'sports-halls', image: hall('20') },
  { id: 'sh-8', sectorId: 'sports-halls', image: hall('24') },
  { id: 'sh-9', sectorId: 'sports-halls', image: hall('30') },
  { id: 'sh-10', sectorId: 'sports-halls', image: hall('39') },
  { id: 'sh-11', sectorId: 'sports-halls', image: hall('41') },
  { id: 'sh-12', sectorId: 'sports-halls', image: hall('46') },

  { id: 'ho-1', sectorId: 'hotels', image: hotel('01') },
  { id: 'ho-2', sectorId: 'hotels', image: hotel('04') },
];

export function getProjectsForSector(sectorId: Project['sectorId']): Project[] {
  return projects.filter((project) => project.sectorId === sectorId);
}
