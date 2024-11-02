import phoneSvg from '@client/assets/images/icons/phone.svg'
import emailSvg from '@client/assets/images/icons/message.svg'
import menu from '@client/assets/images/icons/menu.png'
import closeMenu from '@client/assets/images/icons/close-menu.png'

import resetFilter from '@client/assets/images/icons/reset-filter.svg'
import search from '@client/assets/images/icons/search.png'
import globe from '@client/assets/images/icons/globe.svg'
import etherium from '@client/assets/images/icons/etherium.svg'
import favourite from '@client/assets/images/icons/favourite.svg'
import unFavourite from '@client/assets/images/icons/un_favourite.svg'

import chevronDown from '@client/assets/images/icons/chevron-down.svg'

import waveSection from '@client/assets/images/general/wave.svg'
import backgroundProduct from '@client/assets/images/products/background-marketplace.webp'
import backgroundProductMobile from '@client/assets/images/general/background_mobile.webp'
import assasin from '@client/assets/images/products/characters/assasin.webp'
import neonGuy from '@client/assets/images/products/characters/neon-guy.webp'
import mafiaEngland from '@client/assets/images/products/characters/mafia-england.webp'
import basketballGirl from '@client/assets/images/products/characters/basketball-girl.webp'
import theDjText from '@client/assets/images/products/characters/the-dj-text.svg'
import theDj from '@client/assets/images/products/characters/the-dj.webp'
import newArrival from '@client/assets/images/products/new_arrival.webp'

import character1 from '@client/assets/images/products/_mock/character_1.webp'
import character2 from '@client/assets/images/products/_mock/character_2.webp'
import character3 from '@client/assets/images/products/_mock/character_3.webp'
import character4 from '@client/assets/images/products/_mock/character_4.webp'
import character5 from '@client/assets/images/products/_mock/character_5.webp'

export const IMAGES_CONST = {
  waveSection,
  products: {
    background: backgroundProduct,
    backgroundMobile: backgroundProductMobile,
    newArrival,
    characters: {
      assasin,
      neonGuy,
      mafiaEngland,
      basketballGirl,
      theDjText,
      theDj,
    },
    mockCharacter: {
      character1,
      character2,
      character3,
      character4,
      character5,
    },
  },
  icons: {
    search,
    phone: phoneSvg,
    email: emailSvg,
    menu,
    closeMenu,
    globe,
    chevronDown,
    resetFilter,
    etherium,
    favourite,
    unFavourite,
  },
}
