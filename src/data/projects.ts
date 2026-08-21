/**
 * Individual reference projects, shown as cards on the references page.
 *
 * Location and year are proper nouns / dates, so they live here rather than in
 * the translation files and are not translated between languages.
 *
 * PLACEHOLDER DATA: location and year are unset for every entry below. The
 * photos are real (pulled from the previous site), but which building they
 * show, where it is, and when the work was done needs to come from Daniel -
 * inventing those details would be the same mistake as the "Holzhäuser"
 * sector claim earlier in this project. Fill in `location` and `year` (and
 * swap `image` if a different library photo represents the project better)
 * once confirmed.
 */

export interface Project {
  id: string;
  /** Matches a sector id in src/i18n/*.ts references.sectors and site.activeSectors. */
  sectorId: 'sports-halls' | 'hotels' | 'timber-houses';
  /** e.g. "Rosenheim". Empty string renders as "Ort ergänzen" / "Add location". */
  location: string;
  /** Year the work was completed. null renders as "Jahr ergänzen" / "Add year". */
  year: number | null;
  /** Path under /public/images/, e.g. "/images/library/sports-halls/sports-halls-08.jpg". */
  image: string;
}

export const projects: Project[] = [
  {
    id: 'sh-1',
    sectorId: 'sports-halls',
    location: '',
    year: null,
    image: '/images/library/sports-halls/sports-halls-08.jpg',
  },
  {
    id: 'sh-2',
    sectorId: 'sports-halls',
    location: '',
    year: null,
    image: '/images/library/sports-halls/sports-halls-13.jpg',
  },
  {
    id: 'sh-3',
    sectorId: 'sports-halls',
    location: '',
    year: null,
    image: '/images/library/sports-halls/sports-halls-16.jpg',
  },
  {
    id: 'sh-4',
    sectorId: 'sports-halls',
    location: '',
    year: null,
    image: '/images/library/sports-halls/sports-halls-21.jpg',
  },
  {
    id: 'sh-5',
    sectorId: 'sports-halls',
    location: '',
    year: null,
    image: '/images/library/sports-halls/sports-halls-30.jpg',
  },
  {
    id: 'sh-6',
    sectorId: 'sports-halls',
    location: '',
    year: null,
    image: '/images/library/sports-halls/sports-halls-35.jpg',
  },
  {
    id: 'ho-1',
    sectorId: 'hotels',
    location: '',
    year: null,
    image: '/images/library/hotels/hotels-01.jpg',
  },
  {
    id: 'ho-2',
    sectorId: 'hotels',
    location: '',
    year: null,
    image: '/images/library/hotels/hotels-04.jpg',
  },
];

export function getProjectsForSector(sectorId: Project['sectorId']): Project[] {
  return projects.filter((project) => project.sectorId === sectorId);
}
