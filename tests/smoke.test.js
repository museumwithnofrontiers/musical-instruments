import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'musicalInstruments',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Musical instruments',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: 'ce544eac-b951-5657-9a7f-51c32a2f26c6',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: 'a0b0c8e0-a3e5-55bb-9e5b-4ddf40ae3944',
    dynasty: {
      item: 'ce544eac-b951-5657-9a7f-51c32a2f26c6',
      name: 'Artuqids',
    },
    timeline: {
      code: 'at',
      id: 'aut',
      country: 'Austria',
    },
    partner: {
      id: 'bb94125a-04ef-5227-b3bb-8ebc7dfdafbe',
      name: 'Jordan Museum for Costumes and Jewellery',
      city: 'Amman',
      country: 'Jordan',
      objects: 1,
    },
  },
})
