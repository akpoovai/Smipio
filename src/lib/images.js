/**
 * Single source for site images — files live under /img at the project root.
 * Imported via Vite so paths work in dev and production (no symlink required).
 */

import architectYourselfWisely from '@img/AI Generated/Smipio Website - Architect Yourself Wisely - Trans BG.gif'
import beDigitallyWise from '@img/AI Generated/Smipio Website - Be Digitally Wise - Trans BG.gif'
import productAware from '@img/AI Generated/Smipio Website - Product Aware - Trans BG.png'
import productTransform from '@img/AI Generated/Smipio Website - Product Transform - Trans BG.png'
import productGrow from '@img/AI Generated/Smipio Website - Product Grow - Trans BG.png'
import productAchieve from '@img/AI Generated/Smipio Website - Product Achieve - Trans BG.png'
import presentationBg from '@img/AI Generated/Smipio Presentation BG.png'
import whySmipioSection from '@img/AI Generated/second_section_image_cropped.png'
import iconAware from '@img/icons/smipio-aware-main-logo-lightbg.png'
import iconAwareNoName from '@img/icons/Icons without name/smipio-aware-main-logo-lightbg.png'
import iconIgnite from '@img/icons/smipio-ignite-main-logo-lightbg.png'
import iconIgniteNoName from '@img/icons/Icons without name/smipio-ignite-main-logo-lightbg.png'
import iconGrow from '@img/icons/smipio-grow-main-logo-lightbg.png'
import iconGrowNoName from '@img/icons/Icons without name/smipio-grow-main-logo-lightbg.png'
import iconAchieve from '@img/icons/smipio-achieve-main-logo-lightbg.png'
import iconAchieveNoName from '@img/icons/Icons without name/smipio-achieve-main-logo-lightbg.png'
import logoSmall from '@img/logo/smipio-logo-2026-small.png'
import logoWordmarkLarge from '@img/logo/smipio-logo-2026-big.png'
import logoTransform from '@img/logo/Colourful Butterfly Transform Logo.png'
import logoIconLight from '@img/logo/smipio-icon-transbg-lightbg.png'
import logoIconDark from '@img/logo/smipio-icon-transbg-darkbg.png'

export const images = {
  hero: {
    architectYourselfWisely,
    beDigitallyWise,
    whySmipioSection,
  },
  products: {
    aware: {
      illustration: productAware,
      icon: iconAware,
      nameIcon: iconAwareNoName,
    },
    transform: {
      illustration: productTransform,
      icon: logoIconLight,
      nameIcon: iconIgniteNoName,
    },
    grow: {
      illustration: productGrow,
      icon: iconGrow,
      nameIcon: iconGrowNoName,
    },
    achieve: {
      illustration: productAchieve,
      icon: iconAchieve,
      nameIcon: iconAchieveNoName,
    },
  },
  logo: {
    small: logoSmall,
    wordmark: logoSmall,
    wordmarkLarge: logoWordmarkLarge,
    iconLight: logoIconLight,
    iconDark: logoIconDark,
    transform: logoTransform,
  },
  presentation: {
    background: presentationBg,
  },
  pricing: {
    aware: iconAware,
    ignite: iconIgnite,
    grow: iconGrow,
    achieve: iconAchieve,
  },
}

/** @param {string} src */
export function imageAltFromPath(src) {
  const name = src.split('/').pop()?.split('?')[0] ?? ''
  return name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ')
}
