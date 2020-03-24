/*
 * Marketplace specific configuration.
 */

export const CatSp = [
  { key: 'health', label: 'Health' },
  { key: 'education', label: 'Education' },
  { key: 'business & law', label: 'Business & Law' },
  { key: 'Technical', label: 'Technical' },
  { key: 'Other', label: 'Other' },
];

export const certificate = [
  { key: 'none', label: 'None', hideFromFilters: true, hideFromListingInfo: true },
  { key: 'engineer', label: 'engineer' },
  { key: 'journalist', label: 'journalist' },
  { key: 'lawyer', label: 'lawyer' },
  { key: 'medical-doctor', label: 'medical-doctor' },
  { key: 'mechanic', label: 'mechanic' },
  { key: 'nurse', label: 'nurse' },
  { key: 'odontologist', label: 'odontologist' },
  { key: 'pharmacist', label: 'pharmacist' },
  { key: 'psychologist', label: 'psychologist' },
  { key: 'police', label: 'police' },
  { key: 'scientist', label: 'scientist' },
  { key: 'teacher', label: 'teacher' },
  { key: 'technician', label: 'technician' },
  { key: 'trainer-fitness', label: 'trainer-fitness' },
  { key: 'veterinarian', label: 'veterinarian' },
  { key: 'other', label: 'other' },
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};

// Activate keyword filter on search page

// NOTE: If you are ordering search results by distance the keyword search can't be used at the same time.
// You can turn off ordering by distance in config.js file
export const keywordFilterConfig = {
  active: true,
};
