import phoneSvg from '@client/assets/images/icons/phone.svg'
import emailSvg from '@client/assets/images/icons/message.svg'
import menu from '@client/assets/images/icons/menu.png'
import closeMenu from '@client/assets/images/icons/close-menu.png'

import resetFilter from '@client/assets/images/icons/reset-filter.svg'
import search from '@client/assets/images/icons/search.png'
import globe from '@client/assets/images/icons/globe.svg'
import chevronDown from '@client/assets/images/icons/chevron-down.svg'

import generalBackground from '@client/assets/images/general/background.png'
import waveSection from '@client/assets/images/general/wave.svg'
import backgroundProduct from '@client/assets/images/products/background-marketplace.webp'
import assasin from '@client/assets/images/products/characters/assasin.png'
import neonGuy from '@client/assets/images/products/characters/neon-guy.png'
import mafiaEngland from '@client/assets/images/products/characters/mafia-england.png'
import basketballGirl from '@client/assets/images/products/characters/basketball-girl.png'
import theDjText from '@client/assets/images/products/characters/the-dj-text.svg'
import theDj from '@client/assets/images/products/characters/the-dj.png'
import newArrival from '@client/assets/images/products/new_arrival.webp'

export const IMAGES_CONST = {
  generalBackground,
  waveSection,
  products: {
    background: backgroundProduct,
    newArrival,
    characters: {
      assasin,
      neonGuy,
      mafiaEngland,
      basketballGirl,
      theDjText,
      theDj,
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
  },
}
