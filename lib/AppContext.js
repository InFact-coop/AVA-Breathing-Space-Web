import { createContext } from 'react'

export default createContext({
  modal: undefined,
  setModal: undefined,
  region: undefined,
  setRegion: undefined,
  quickExitPage: undefined,
  whichApp: undefined,
  setWhichApp: undefined,
  setQuickExitPage: undefined,
  pageID: undefined,
  setPageID: undefined,
  likedPageIDs: [],
  setLikedPageIDs: () => ({}),
  themeColour: undefined,
  setThemeColour: () => ({}),
  titleBgIllustration: undefined,
  setTitleBgIllustration: undefined,
  titleIllustration: undefined,
  setTitleIllustration: undefined,
})
