/**
 * Individual reference projects, shown as cards on the references page.
 *
 * Each card is just a photo and its sector - no location or year (Daniel
 * doesn't want that level of detail tracked here).
 */

export interface Project {
  id: string;
  /** Matches a sector id in src/i18n/*.ts references.sectors and site.activeSectors. */
  sectorId: 'sports-halls' | 'hotels' | 'timber-houses';
  /** Path under /public/images/, e.g. "/images/library/sports-halls/sports-halls-08.jpg". */
  image: string;
}

export const projects: Project[] = [
  { id: 'sh-1', sectorId: 'sports-halls', image: '/images/library/sports-halls/sports-halls-08.jpg' },
  { id: 'sh-2', sectorId: 'sports-halls', image: '/images/library/sports-halls/sports-halls-13.jpg' },
  { id: 'sh-3', sectorId: 'sports-halls', image: '/images/library/sports-halls/sports-halls-16.jpg' },
  { id: 'sh-4', sectorId: 'sports-halls', image: '/images/library/sports-halls/sports-halls-21.jpg' },
  { id: 'sh-5', sectorId: 'sports-halls', image: '/images/library/sports-halls/sports-halls-30.jpg' },
  { id: 'sh-6', sectorId: 'sports-halls', image: '/images/library/sports-halls/sports-halls-35.jpg' },
  { id: 'ho-1', sectorId: 'hotels', image: '/images/library/hotels/hotels-01.jpg' },
  { id: 'ho-2', sectorId: 'hotels', image: '/images/library/hotels/hotels-04.jpg' },
];

export function getProjectsForSector(sectorId: Project['sectorId']): Project[] {
  return projects.filter((project) => project.sectorId === sectorId);
}
